"use client";

import { MouseEvent, useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Achievements", href: "#achievements" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const smoothScrollTo = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const startPosition = window.scrollY;
    const headerHeight = 75;

    let targetPosition = 0;

    if (href !== "#") {
      const target = document.querySelector(href);

      if (!target) return;

      targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;
    }

    const distance = targetPosition - startPosition;
    const duration = 850;
    let startTime: number | null = null;

    const easeInOutCubic = (progress: number) => {
      return progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsMenuOpen(false);

    // Give the mobile menu a moment to close before scrolling.
    window.setTimeout(() => {
      smoothScrollTo(event, href);
    }, 50);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#"
          className="brand"
          aria-label="Bogdan Dovzhenko home"
          onClick={(event) => handleNavigation(event, "#")}
        >
          <span className="brand-name">BOGDAN</span>
          <span className="brand-surname">DOVZHENKO</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavigation(event, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href="#pricing"
            className="header-cta"
            onClick={(event) => handleNavigation(event, "#pricing")}
          >
            View pricing
          </a>

          <button
            type="button"
            className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="container mobile-menu-inner">
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavigation(event, link.href)}
              >
                <span className="mobile-nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="mobile-menu-bottom">
            <p>Personal Trainer & Online Coach</p>

            <a
              href="#contact"
              onClick={(event) => handleNavigation(event, "#contact")}
            >
              Start your journey
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
