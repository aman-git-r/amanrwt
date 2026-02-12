import aman_rwt from "../assets/aman_rwt.jpg";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import "./Nav.css";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#story", label: "Story" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const PROFILE_PLACEHOLDER = "/profile-placeholder.svg";

export function Nav() {
  const [avatarSrc, setAvatarSrc] = useState(aman_rwt);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const renderLinks = () => (
    <ul className="nav-links">
      {LINKS.map(({ href, label }) => (
        <li key={href}>
          <a href={href} className="nav-link" onClick={closeMobile}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="nav-wrapper">
      <nav
        className="nav-pill"
        role="navigation"
        aria-label="Main"
      >
        <a href="#hero" className="nav-avatar-link" aria-label="Home" onClick={closeMobile}>
          <img
            src={avatarSrc}
            alt="Profile"
            className="nav-avatar"
            onError={() => setAvatarSrc(PROFILE_PLACEHOLDER)}
          />
        </a>

        <div className="nav-desktop">{renderLinks()}</div>

        <div className="nav-actions">
          <button
            type="button"
            className="nav-theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? (
              <svg className="nav-theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg className="nav-theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="nav-hamburger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="nav-mobile-menu"
          >
            <span className="nav-hamburger-inner">
              <span className="nav-hamburger-line" />
              <span className="nav-hamburger-line" />
              <span className="nav-hamburger-line" />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="nav-mobile-menu"
        className={`nav-mobile-backdrop ${mobileOpen ? "nav-mobile-open" : ""}`}
        aria-hidden={!mobileOpen}
        onClick={closeMobile}
      >
        <div
          className="nav-mobile-panel"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="nav-mobile-links">{renderLinks()}</div>
        </div>
      </div>
    </header>
  );
}
