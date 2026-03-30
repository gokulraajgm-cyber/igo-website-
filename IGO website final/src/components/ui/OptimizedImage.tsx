import React, { useState, useEffect } from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  fallbackSrc, 
  className, 
  loading = "lazy", 
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Attempt to use WebP if the original starts with assets/ and is png/jpg/jpeg
  const webpSrc = src.replace(/\.(png|jpg|jpeg|JPG)$/i, ".webp");
  const hasWebP = webpSrc !== src;

  useEffect(() => {
    if (hasWebP) {
      const img = new Image();
      img.src = webpSrc;
      img.onload = () => {
        if (!error) setCurrentSrc(webpSrc);
      };
      img.onerror = () => {
        // WebP failed or doesn't exist, stick with original
        setCurrentSrc(src);
      };
    } else {
      setCurrentSrc(src);
    }
  }, [src, hasWebP]);

  return (
    <img
      src={currentSrc}
      className={`${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      loading={loading}
      onLoad={() => setIsLoaded(true)}
      onError={() => {
        if (!error && fallbackSrc) {
          setCurrentSrc(fallbackSrc);
          setError(true);
        }
      }}
      {...props}
    />
  );
};

export default OptimizedImage;
