import React, { useState, useEffect } from "react";
import { Link, useLocation, useMatch } from "react-router-dom";
import { socialLinks } from "../../config";

const DemoButton = ({ isMobile = false }) => {
  const location = useLocation();

  const handleClick = () => {
    // If clicking on the same page link, scroll to top
    if (location.pathname === "/demo") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Link
      to="/demo"
      onClick={handleClick}
      className={`${
        isMobile ? "w-full justify-center" : "ml-auto"
      } inline-flex items-center gap-2 rounded-full border border-white/20 px-4 sm:px-6 md:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/5`}
    >
      Start a Demo
    </Link>
  );
};

const CommunityButton = ({ isMobile = false }) => (
  <a
    href={socialLinks.find((link) => link.name === "Discord")?.href || "#"}
    className={`${
      isMobile ? "w-full justify-center" : "ml-auto"
    } inline-flex items-center gap-2 rounded-full border border-white/20 px-4 sm:px-6 md:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/5`}
  >
    Join Our Community
    <svg
      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  </a>
);

const NavLink = ({ label, href, isRoute, isMobile = false, onClick }) => {
  const location = useLocation();
  const isActive = isRoute && location.pathname === href;

  const className = `group relative text-sm sm:text-base font-medium transition ${
    isActive ? "text-white" : "text-white/70 hover:text-white"
  } ${isMobile ? "py-3 px-4 border-b border-white/5" : ""}`;

  const underline = !isMobile ? (
    <span
      className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-white transition-transform duration-300 ${
        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  ) : null;

  const handleClick = () => {
    // If clicking on the same page link, scroll to top
    if (isRoute && location.pathname === href) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
    if (onClick) onClick();
  };

  if (isRoute) {
    return (
      <Link to={href} className={className} onClick={handleClick}>
        {label}
        {underline}
      </Link>
    );
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {label}
      {underline}
    </a>
  );
};

const defaultLinks = [
  { label: "About", href: "/about", isRoute: true },
  { label: "Documentation", href: "/documentation", isRoute: true },
  { label: "Changelog", href: "/changelog", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

export default function Header({
  links = defaultLinks,
  showDemoButton = true,
  customButton = null,
}) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if at top of page
      setIsAtTop(currentScrollY < 50);

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on window resize to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-3 sm:py-4 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isAtTop
          ? "bg-transparent"
          : "bg-brand-background/80 backdrop-blur-lg border-b border-white/5"
      }`}
    >
      {/* Logo */}
      <Link
        to="/"
        onClick={() => {
          // If clicking on the same page link, scroll to top
          if (location.pathname === "/") {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }
        }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:opacity-80 transition-opacity flex-shrink-0"
      >
        KSLTS
      </Link>

      {/* Desktop Navigation */}
      <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 ">
        {links.map((link) => (
          <NavLink key={link.label} {...link} />
        ))}
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden lg:block flex-shrink-0">
        {customButton ? (
          customButton
        ) : showDemoButton ? (
          <DemoButton />
        ) : (
          <CommunityButton />
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden flex-shrink-0 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-background/95 backdrop-blur-lg border-b border-white/10 lg:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <NavLink
                key={link.label}
                {...link}
                isMobile={true}
                onClick={closeMobileMenu}
              />
            ))}
            <div className="p-4 border-t border-white/5">
              {customButton ? (
                typeof customButton === "function" ? (
                  customButton({ isMobile: true })
                ) : (
                  React.cloneElement(customButton, { isMobile: true })
                )
              ) : showDemoButton ? (
                <DemoButton isMobile={true} />
              ) : (
                <CommunityButton isMobile={true} />
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
