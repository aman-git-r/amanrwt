import { useState, useEffect } from "react";
import "./Nav.css";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
      <a href="#hero" className="nav-brand">
        &lt;/&gt;
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
    </nav>
  );
}
