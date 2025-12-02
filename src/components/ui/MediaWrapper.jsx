import { useState, useEffect, useRef } from "react";
import { Grid } from "ldrs/react";
import "ldrs/react/Grid.css";

/**
 * MediaWrapper Component
 *
 * A wrapper component for images that implements:
 * - Lazy loading with Intersection Observer
 * - Loading state with Grid loader
 * - Error handling
 *
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for the image
 * @param {string} className - Additional CSS classes
 * @param {object} style - Inline styles
 * @param {boolean} eager - If true, loads immediately (no lazy loading)
 * @param {string} loadingText - Custom loading text (optional)
 * @param {object} loaderProps - Custom props for the Grid loader
 * @param {function} onLoad - Callback when image loads
 * @param {function} onError - Callback when image fails to load
 * @param {string} placeholder - Placeholder image URL (optional)
 * @param {...any} rest - Other img attributes
 */
export default function MediaWrapper({
  src,
  alt = "",
  className = "",
  style = {},
  eager = false,
  loadingText = null,
  loaderProps = {
    size: "60",
    speed: "1.5",
    color: "white",
  },
  onLoad,
  onError,
  placeholder,
  ...rest
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (eager || shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before the image enters viewport
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [eager, shouldLoad]);

  // Handle image load
  const handleLoad = (e) => {
    setIsLoading(false);
    if (onLoad) onLoad(e);
  };

  // Handle image error
  const handleError = (e) => {
    setIsLoading(false);
    setHasError(true);
    if (onError) onError(e);
  };

  // Check if image is already loaded (cached)
  useEffect(() => {
    if (!shouldLoad || !imgRef.current) return;

    const img = new Image();
    img.src = src;

    if (img.complete) {
      // Image is already cached
      setIsLoading(false);
    }
  }, [shouldLoad, src]);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={style}>
      {/* Loading State */}
      {isLoading && shouldLoad && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg z-10">
          <Grid
            size={loaderProps.size}
            speed={loaderProps.speed}
            color={loaderProps.color}
          />
          {loadingText && (
            <p className="mt-4 text-white/60 font-sans text-sm">
              {loadingText}
            </p>
          )}
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-500/10 backdrop-blur-sm rounded-lg z-10">
          <svg
            className="w-12 h-12 text-red-400/60 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <p className="text-red-400/60 font-sans text-sm">
            Failed to load image
          </p>
        </div>
      )}

      {/* Image */}
      {shouldLoad && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`${className} ${
            isLoading ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
          style={style}
          loading={eager ? "eager" : "lazy"}
          onLoad={handleLoad}
          onError={handleError}
          {...rest}
        />
      )}

      {/* Placeholder (shown while waiting for intersection) */}
      {!shouldLoad && placeholder && (
        <img
          src={placeholder}
          alt=""
          className={`${className} opacity-50 blur-sm`}
          style={style}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
