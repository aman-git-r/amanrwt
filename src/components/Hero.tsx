import { useState, useEffect } from "react";
import "./Hero.css";

const ROLES = ["Software Engineer", "Problem Solver", "Builder"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for the role
  useEffect(() => {
    const current = ROLES[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < current.length) {
            setDisplayText(current.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % ROLES.length);
          }
        }
      },
      isDeleting ? 60 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-layout">
        <div className="hero-content">
          <p className="hero-greeting">
            <span className="hero-prompt">$</span> hi, I'm
          </p>
          <h1 className="hero-name">Aman Rawat</h1>
          <p className="hero-role">
            <span className="cursor-blink">{displayText}</span>
          </p>
          <p className="hero-bio">
            I'm Aman — I build for the web with clean code, clear UX, and
            systems that scale. Here's what I've been working on.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-code-wrapper" aria-hidden="true">
          <div className="hero-code-window">
            <div className="hero-code-header">
              <span className="hero-code-dot hero-code-dot-red" />
              <span className="hero-code-dot hero-code-dot-yellow" />
              <span className="hero-code-dot hero-code-dot-green" />
              <span className="hero-code-title">portfolio.tsx</span>
            </div>
            <pre className="hero-code-body">
{`type Tech = "React" | "TypeScript" | "Node" | 
            "Design";

const aman: Engineer = {
  role: "Software Engineer",
  location: "India",
  stack: [
    "React", "TypeScript", "Node.js",
    "Python", "Golang", "Django"
  ],
  focus: ["DX", "performance", "scale" "clean UI"],
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
