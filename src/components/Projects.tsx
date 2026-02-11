import { useState, type CSSProperties } from "react";
import "./Projects.css";

type ProjectType = "platform" | "web" | "tool" | "cli";

type ProjectCategory = "website" | "webapp" | "other";

type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  repo: string;
  image?: string;
  type: ProjectType;
  isFeatured?: boolean;
  highlights?: string[];
  category: ProjectCategory;
};

const PROJECTS: Project[] = [
  {
    title: "Cloud Security Platform",
    description:
      "An end-to-end cloud security platform with dashboards, alerts, and RBAC — built across React UI, FastAPI APIs, and Python services.",
    tech: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL"],
    href: "#",
    repo: "",
    image: "/projects/cloud-security.png",
    type: "platform",
    isFeatured: true,
    highlights: [
      "Multi-tenant dashboards for cloud security posture",
      "FastAPI REST backend with authenticated, role-based APIs",
      "Background jobs for alerts and scheduled checks",
    ],
    category: "webapp",
  },
  {
    title: "Hotel Management Platform",
    description:
      "Full-stack hotel management app handling bookings, rooms, and guests with an admin dashboard and REST APIs.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    href: "#",
    repo: "",
    image: "/projects/hotel-platform.png",
    type: "platform",
    category: "webapp",
  },
  {
    title: "Pinterest-style Gallery",
    description:
      "A Pinterest-like responsive gallery with masonry layout, search, and saved collections.",
    tech: ["React", "TypeScript", "Vite"],
    href: "#",
    repo: "",
    image: "/projects/pinterest-clone.png",
    type: "web",
    category: "webapp",
  },
  {
    title: "cy5.io",
    description:
      "Marketing website for cy5.io built with WordPress, custom CSS, and JavaScript.",
    tech: ["WordPress", "CSS", "HTML", "JavaScript", "Elementor"],
    href: "https://cy5.io",
    repo: "",
    image: "/projects/cy5.png",
    type: "web",
    category: "website",
  },
  {
    title: "oceanhugs.in",
    description:
      "Modern website for oceanhugs.in with React, SASS, and a REST-powered content layer.",
    tech: ["HTML", "CSS", "JavaScript", "React", "SASS", "Vite", "REST API"],
    href: "https://oceanhugs.in",
    repo: "",
    image: "/projects/oceanhugs.png",
    type: "web",
    category: "website",
  },
  {
    title: "luxuryliving.in",
    description:
      "Website for a luxury living company with React, SASS, and Vite, focused on high-end property showcases.",
    tech: ["HTML", "CSS", "JavaScript", "React", "SASS", "Vite", "REST API"],
    href: "https://www.luxuryliving.in",
    repo: "",
    image: "/projects/luxuryliving.png",
    type: "web",
    category: "website",
  },
];

const TABS = [
  { id: "all", label: "All" },
  { id: "websites", label: "Websites" },
  { id: "webapps", label: "Web apps" },
  { id: "other", label: "Others" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function Projects() {
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const featuredProject = PROJECTS.find((p) => p.isFeatured);
  const otherProjects = PROJECTS.filter((p) => !p.isFeatured);

  const renderProjectCard = (project: Project, index: number, extraClass = "") => (
    <article
      key={project.title}
      className={`project-card ${extraClass}`.trim()}
    >
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
              style={
                {
                  "--tilt": index % 2 === 0 ? "-3deg" : "2deg",
                } as CSSProperties
              }
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
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
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
            <a
              href={project.href}
              className="project-link"
              aria-label={`View ${project.title}`}
            >
              Live →
            </a>
            {project.repo && (
              <a
                href={project.repo}
                className="project-link"
                aria-label={`${project.title} repo`}
              >
                Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );

  const filterByTab = (project: Project): boolean => {
    if (activeTab === "all") return true;
    if (activeTab === "websites") return project.category === "website";
    if (activeTab === "webapps") return project.category === "webapp";
    if (activeTab === "other") return project.category === "other";
    return true;
  };

  const filteredProjects = otherProjects.filter(filterByTab);

  return (
    <section id="projects" className="projects section">
      <p className="section-title">/projects</p>
      <h2 className="section-heading">Things I've built</h2>

      {featuredProject && (
        <div className="projects-featured">
          {renderProjectCard(featuredProject, 0, "project-card-featured")}
        </div>
      )}

      <div className="projects-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`projects-tab ${
              activeTab === tab.id ? "projects-tab-active" : ""
            }`.trim()}
            onClick={() => setActiveTab(tab.id)}
            aria-pressed={activeTab === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) =>
          renderProjectCard(project, index)
        )}
      </div>
    </section>
  );
}
