"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Find Job", href: "/jobs" },
  { label: "Employers", href: "/#hiring" },
  { label: "Candidates", href: "/#discover" },
  { label: "Pricing", href: "/subscription" },
  { label: "Blog", href: "/#blog" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}
      role="banner"
    >
      <nav
        className="navbar navbar-expand-lg"
        aria-label="Main navigation"
        id="main-navbar"
      >
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#" aria-label="JobNest Home">
            <div className="logo-mark">
              <span className="logo-icon">
                <i className="bi bi-briefcase-fill"></i>
              </span>
              <span className="logo-text">
                Job<span className="logo-accent">Nest</span>
              </span>
            </div>
          </a>

          {/* Hamburger */}
          <button
            className={`navbar-toggler custom-toggler ${
              menuOpen ? "open" : ""
            }`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="navbarContent"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            id="navbar-toggler"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Nav Items */}
          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-links">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.label}>
                  <a
                    className="nav-link"
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    id={`nav-${link.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="navbar-cta d-flex align-items-center gap-3">
              <a href="#" className="btn-login" id="nav-login-btn">
                Sign In
              </a>
              <a href="#" className="btn-register" id="nav-register-btn">
                <i className="bi bi-person-plus me-2"></i>
                Post a Job
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
