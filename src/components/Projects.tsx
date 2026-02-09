import "./Projects.css";

const PROJECTS = [
  {
    title: "Project Alpha",
    description:
      "A full-stack app for X — built with React, Node, and PostgreSQL. Handles auth, real-time updates, and deployment on Vercel.",
    tech: ["React", "Node.js", "PostgreSQL", "Vercel"],
    href: "#",
    repo: "#",
  },
  {
    title: "Project Beta",
    description:
      "CLI tool and dashboard for automating Y. TypeScript, REST API, and simple UI for non-technical users.",
    tech: ["TypeScript", "REST", "React"],
    href: "#",
    repo: "#",
  },
  {
    title: "luxuryliving.in",
    description: "A website for a luxury living company",
    tech: ["TypeScript", "Jest", "Docs"],
    href: "https://www.luxuryliving.in",
    repo: "",
  },
];

export function Projects() {
  return (
    <section id="projects" className="projects section">
      <p className="section-title">/projects</p>
      <h2 className="section-heading">Things I've built</h2>
      <div className="projects-list">
        {PROJECTS.map((project) => (
          <article key={project.title} className="project-card">
            <h3 className="project-title">
              <a href={project.href} target="_blank" rel="noopener noreferrer">{project.title}</a>
            </h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="project-tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.href} className="project-link" aria-label={`View ${project.title}`}>
                Live →
              </a>
              <a href={project.repo} className="project-link" aria-label={`${project.title} repo`}>
                Repo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
