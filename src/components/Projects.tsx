import "./Projects.css";

const PROJECTS = [
  {
    title: "cy5.io",
    description:
      "A full-stack app for X — built with React, Node, and PostgreSQL. Handles auth, real-time updates, and deployment on Vercel.",
    tech: ["WordPress", "CSS", "HTML", "JavaScript"],
    href: "https://cy5.io",
    repo: "",
    image: "/projects/cy5.png",
  },
  {
    title: "oceanhugs.in",
    description:
      "CLI tool and dashboard for automating Y. TypeScript, REST API, and simple UI for non-technical users.",
    tech: ["TypeScript", "React", "Vite"],
    href: "https://oceanhugs.in",
    repo: "",
    image: "/projects/oceanhugs.png",
  },
  {
    title: "luxuryliving.in",
    description: "A website for a luxury living company",
    tech: ["React", "TypeScript", "Tailwind", "Vite", "REST API"],
    href: "https://www.luxuryliving.in",
    repo: "",
    image: "/projects/luxuryliving.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="projects section">
      <p className="section-title">/projects</p>
      <h2 className="section-heading">Things I've built</h2>
      <div className="projects-list">
        {PROJECTS.map((project, index) => (
          <article key={project.title} className="project-card">
            <div className="project-card-inner">
              {project.image && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-snapshot-link"
                  aria-hidden
                >
                  <div
                    className="project-snapshot"
                    style={{ "--tilt": index % 2 === 0 ? "-3deg" : "2deg" } as React.CSSProperties}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="project-snapshot-img"
                    />
                  </div>
                </a>
              )}
              <div className="project-card-body">
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
                {project.repo && (
                  <a href={project.repo} className="project-link" aria-label={`${project.title} repo`}>
                    Repo
                  </a>
                )}
              </div>
            </div>
          </div>
          </article>
        ))}
      </div>
    </section>
  );
}
