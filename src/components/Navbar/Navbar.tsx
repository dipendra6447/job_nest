"use client";
import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../hooks/useAuth";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, isLoading, isLoggedIn, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getUserInitial = () => {
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return "U";
  };

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
          <a className="navbar-brand" href="/" aria-label="JobNest Home">
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

            {/* CTA Buttons — Auth Aware */}
            <div className="navbar-cta d-flex align-items-center gap-3">
              {isLoading ? (
                <div className="nav-auth-skeleton" />
              ) : isLoggedIn ? (
                /* ── Logged In: Show Profile Dropdown ── */
                <div className="nav-profile-wrapper" ref={dropdownRef}>
                  <button
                    className="nav-profile-btn"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-label="User menu"
                    id="nav-user-menu-btn"
                    type="button"
                  >
                    {user?.avatarUrl ? (
                      <img
                        src={user.avatarUrl}
                        alt="Profile"
                        className="nav-profile-avatar"
                      />
                    ) : (
                      <div className="nav-profile-initial">{getUserInitial()}</div>
                    )}
                    <i className={`bi bi-chevron-${dropdownOpen ? 'up' : 'down'} nav-profile-chevron`} />
                  </button>

                  {dropdownOpen && (
                    <div className="nav-profile-dropdown">
                      <div className="nav-dropdown-header">
                        {user?.avatarUrl ? (
                          <img
                            src={user.avatarUrl}
                            alt="Profile"
                            className="nav-dropdown-avatar"
                          />
                        ) : (
                          <div className="nav-dropdown-initial">{getUserInitial()}</div>
                        )}
                        <div className="nav-dropdown-info">
                          <span className="nav-dropdown-email">{user?.email}</span>
                          <span className="nav-dropdown-role">Job Seeker</span>
                        </div>
                      </div>
                      <div className="nav-dropdown-divider" />
                      <a href="/jobs" className="nav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                        <i className="bi bi-search" /> Find Jobs
                      </a>
                      <a href="/subscription" className="nav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                        <i className="bi bi-star" /> Subscription
                      </a>
                      <div className="nav-dropdown-divider" />
                      <button
                        className="nav-dropdown-item nav-dropdown-logout"
                        onClick={logout}
                        type="button"
                      >
                        <i className="bi bi-box-arrow-right" /> Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* ── Logged Out: Show Sign In + Post a Job ── */
                <>
                  <a href="/login" className="btn-login" id="nav-login-btn">
                    Sign In
                  </a>
                  <a href="/login" className="btn-register" id="nav-register-btn">
                    <i className="bi bi-person-plus me-2"></i>
                    Post a Job
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
