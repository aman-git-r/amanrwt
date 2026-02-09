import aman_rwt from "../assets/aman_rwt.jpg"
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import "./Nav.css";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

/** Replace with your profile image: put `profile.jpg` in the `public` folder, or use another path. */
const PROFILE_IMAGE = "/profile.jpg";
const PROFILE_PLACEHOLDER = "/profile-placeholder.svg";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState(PROFILE_IMAGE);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`nav ${scrolled ? "nav-scrolled" : ""}`}
      role="navigation"
      aria-label="Main"
    >
      <a href="#hero" className="nav-avatar-link" aria-label="Home">
        <img
          src={aman_rwt}
          alt="Profile"
          className="nav-avatar"
          onError={() => setAvatarSrc(PROFILE_PLACEHOLDER)}
        />
      </a>
      <ul className="nav-links">
        {LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="nav-link">
              {label}
            </a>
          </li>
        ))}
      </ul>
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
    </nav>
  );
}
