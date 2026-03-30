import { useState, useRef, useEffect, ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "onLoad" | "onError"> {
  /** Mark as priority for above-the-fold images (disables lazy, adds fetchpriority high) */
  priority?: boolean;
  /** CSS aspect ratio for placeholder sizing (e.g. "16/9", "4/3", "1/1") */
  aspectRatio?: string;
  /** Background color for placeholder before image loads */
  placeholderColor?: string;
  /** Additional class for the wrapper div */
  wrapperClassName?: string;
  /** Fallback image if src fails to load */
  fallbackSrc?: string;
}

/**
 * OptimizedImage — a performant image component that:
 * - lazy-loads by default (eager when priority=true)
 * - shows a smooth fade-in on load
 * - uses decoding="async" for non-blocking decode
 * - handles errors with fallback
 * - supports WebP with format fallback via <picture>
 */
const OptimizedImage = ({
  src,
  alt = "",
  className = "",
  priority = false,
  aspectRatio,
  placeholderColor = "#F0F4F0",
  wrapperClassName = "",
  fallbackSrc = "/placeholder.svg",
  style,
  ...rest
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // If the image is already cached (e.g. back-nav), mark as loaded immediately
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  // Try to build a WebP source path from the original
  const webpSrc = src && !src.endsWith(".webp") && !src.endsWith(".svg") && !src.startsWith("http")
    ? src.replace(/\.(png|jpg|jpeg|JPG)$/i, ".webp")
    : null;

  const imgSrc = error ? fallbackSrc : src;

  const imgElement = (
    <img
      ref={imgRef}
      src={imgSrc}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      {...(priority ? { fetchPriority: "high" } as any : {})}
      onLoad={() => setLoaded(true)}
      onError={() => {
        if (!error) setError(true);
      }}
      className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
      style={style}
      {...rest}
    />
  );

  // If we have a WebP candidate, wrap in <picture> for format negotiation
  if (webpSrc && !error) {
    return (
      <picture className={wrapperClassName}>
        <source srcSet={webpSrc} type="image/webp" />
        {imgElement}
      </picture>
    );
  }

  return imgElement;
};

export default OptimizedImage;
