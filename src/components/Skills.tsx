import "./Skills.css";

const SKILLS = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "HTML/CSS", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "REST APIs", "FastAPI", "PostgreSQL", "Redis"] },
  { category: "Tools", items: ["Git", "Docker", "Kubernetes", "Vite", "Figma"] },
];

export function Skills() {
  return (
    <section id="skills" className="skills section">
      <p className="section-title">/skills</p>
      <h2 className="section-heading">What I use</h2>
      <div className="skills-grid">
        {SKILLS.map(({ category, items }) => (
          <div key={category} className="skill-card">
            <h3 className="skill-category">{category}</h3>
            <ul className="skill-tags">
              {items.map((item) => (
                <li key={item}>
                  <span className="skill-tag">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
