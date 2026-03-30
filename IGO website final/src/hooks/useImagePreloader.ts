import { useEffect, useRef } from 'react';

/**
 * Hook to prefetch images for carousel or anticipated navigation.
 * @param urls Array of image URLs to prefetch.
 * @param currentIndex The current active index in the carousel.
 * @param prefetchLimit Number of upcoming images to prefetch.
 */
export function useImagePreloader(urls: string[], currentIndex: number, prefetchLimit: number = 2) {
  const prefetchedUrls = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!urls || urls.length === 0) return;

    for (let i = 1; i <= prefetchLimit; i++) {
      const nextIndex = (currentIndex + i) % urls.length;
      const nextUrl = urls[nextIndex];

      if (nextUrl && !prefetchedUrls.current.has(nextUrl)) {
        const img = new Image();
        img.src = nextUrl;
        prefetchedUrls.current.add(nextUrl);
      }

      // Also prefetch WebP version if it follows the pattern
      const webpUrl = nextUrl.replace(/\.(png|jpg|jpeg|JPG)$/i, '.webp');
      if (webpUrl !== nextUrl && !prefetchedUrls.current.has(webpUrl)) {
        const webpImg = new Image();
        webpImg.src = webpUrl;
        prefetchedUrls.current.add(webpUrl);
      }
    }
  }, [urls, currentIndex, prefetchLimit]);
}
