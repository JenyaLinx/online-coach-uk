"use client";

import { useEffect, useState } from "react";

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#"
          className="brand"
          aria-label="Bogdan Dovzhenko home"
          onClick={closeMenu}
        >
          <span className="brand-name">BOGDAN</span>
          <span className="brand-surname">DOVZHENKO</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#contact" className="header-cta">
            Start training
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
              <a key={link.href} href={link.href} onClick={closeMenu}>
                <span className="mobile-nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="mobile-menu-bottom">
            <p>Personal Trainer & Online Coach</p>

            <a href="#contact" onClick={closeMenu}>
              Start your journey
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
