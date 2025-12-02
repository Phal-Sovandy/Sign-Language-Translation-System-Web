import { useState, useRef, useEffect } from "react";

/**
 * Custom Tooltip Component
 *
 * Usage:
 * <Tooltip content="Tooltip text" position="top">
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * Props:
 * - content: string | ReactNode - The tooltip content
 * - position: "top" | "bottom" | "left" | "right" - Tooltip position (default: "top")
 * - delay: number - Delay before showing tooltip in ms (default: 200)
 * - className: string - Additional classes for the tooltip
 */

export default function Tooltip({
  children,
  content,
  position = "top",
  delay = 200,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      let top = 0;
      let left = 0;

      switch (position) {
        case "top":
          top = triggerRect.top - tooltipRect.height - 8;
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
          break;
        case "bottom":
          top = triggerRect.bottom + 8;
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
          break;
        case "left":
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.left - tooltipRect.width - 8;
          break;
        case "right":
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.right + 8;
          break;
        default:
          break;
      }

      // Keep tooltip within viewport
      const padding = 8;
      if (left < padding) left = padding;
      if (left + tooltipRect.width > window.innerWidth - padding) {
        left = window.innerWidth - tooltipRect.width - padding;
      }
      if (top < padding) top = padding;
      if (top + tooltipRect.height > window.innerHeight - padding) {
        top = window.innerHeight - tooltipRect.height - padding;
      }

      setCoords({ top, left });
    }
  }, [isVisible, position]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const arrowPosition = {
    top: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-white/20 border-x-transparent border-b-transparent",
    bottom:
      "top-0 left-1/2 -translate-x-1/2 -translate-y-full border-b-white/20 border-x-transparent border-t-transparent",
    left: "right-0 top-1/2 translate-x-full -translate-y-1/2 border-l-white/20 border-y-transparent border-r-transparent",
    right:
      "left-0 top-1/2 -translate-x-full -translate-y-1/2 border-r-white/20 border-y-transparent border-l-transparent",
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className="inline-flex"
      >
        {children}
      </div>

      {isVisible && (
        <div
          ref={tooltipRef}
          role="tooltip"
          style={{
            position: "fixed",
            top: coords.top,
            left: coords.left,
            zIndex: 9999,
          }}
          className={`
            px-3 py-2 
            bg-white/10 backdrop-blur-xl 
            border border-white/20 
            rounded-lg 
            text-white text-sm font-sans
            shadow-lg shadow-black/20
            animate-in fade-in-0 zoom-in-95 duration-150
            ${className}
          `}
        >
          {content}
          {/* Arrow */}
          <span
            className={`absolute w-0 h-0 border-[6px] ${arrowPosition[position]}`}
          />
        </div>
      )}
    </>
  );
}

/**
 * Simple Tooltip variant - wraps element and shows tooltip on hover
 * Uses CSS-only approach for simpler use cases
 */
export function SimpleTooltip({
  children,
  content,
  position = "top",
  className = "",
}) {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-white/10 border-x-transparent border-b-transparent",
    bottom:
      "bottom-full left-1/2 -translate-x-1/2 border-b-white/10 border-x-transparent border-t-transparent",
    left: "left-full top-1/2 -translate-y-1/2 border-l-white/10 border-y-transparent border-r-transparent",
    right:
      "right-full top-1/2 -translate-y-1/2 border-r-white/10 border-y-transparent border-l-transparent",
  };

  return (
    <div className="relative inline-flex group">
      {children}
      <div
        role="tooltip"
        className={`
          absolute ${positionClasses[position]}
          px-3 py-2
          bg-white/10 backdrop-blur-xl
          border border-white/20
          rounded-lg
          text-white text-sm font-sans whitespace-nowrap
          shadow-lg shadow-black/20
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-all duration-200
          pointer-events-none
          z-50
          ${className}
        `}
      >
        {content}
        <span
          className={`absolute w-0 h-0 border-[6px] ${arrowClasses[position]}`}
        />
      </div>
    </div>
  );
}
