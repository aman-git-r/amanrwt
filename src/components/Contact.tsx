import "./Contact.css";

const LINKS = [
  { label: "GitHub", href: "https://github.com", aria: "GitHub profile" },
  { label: "LinkedIn", href: "https://linkedin.com", aria: "LinkedIn profile" },
  { label: "Twitter / X", href: "https://twitter.com", aria: "Twitter profile" },
  { label: "Email", href: "mailto:you@example.com", aria: "Send email" },
];

export function Contact() {
  return (
    <section id="contact" className="contact section">
      <p className="section-title">/contact</p>
      <h2 className="section-heading">Get in touch</h2>
      <p className="contact-intro">
        I'm open to new opportunities and side projects. Say hi — I'll do my
        best to reply.
      </p>
      <div className="contact-links">
        {LINKS.map(({ label, href, aria }) => (
          <a
            key={label}
            href={href}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={aria}
          >
            {label}
          </a>
        ))}
      </div>
      <footer className="contact-footer">
        <span className="contact-footer-text">
          Built with React + Vite. &copy; {new Date().getFullYear()}
        </span>
      </footer>
    </section>
  );
}
