import { useRef, useEffect, useState } from "react";
import "./Story.css";

type Phase = "education" | "firstCompany" | "secondCompany";

const CHAPTERS: { id: Phase; year: string; title: string; subtitle?: string; points: string[] }[] = [
  {
    id: "education",
    year: "2016 – 2020",
    title: "Education",
    subtitle: "Bachelor's in Computer Science",
    points: [
      "Built a strong foundation in algorithms, data structures, and software engineering.",
      "Worked on academic projects spanning web development and databases.",
      "Graduated ready to turn theory into real-world code.",
    ],
  },
  {
    id: "firstCompany",
    year: "2020 – 2022",
    title: "First company",
    subtitle: "Where it all began",
    points: [
      "Joined as a software engineer and shipped my first production features.",
      "Learned to collaborate with design and product, and to own end-to-end delivery.",
      "Grew from writing small fixes to owning full modules and mentoring juniors.",
    ],
  },
  {
    id: "secondCompany",
    year: "2022 – Present",
    title: "Current chapter",
    subtitle: "Building at scale",
    points: [
      "Moved to a role focused on larger systems and cross-team impact.",
      "Working on cloud security, platforms, and products used by many teams.",
      "Continuing to level up on architecture, performance, and clean code.",
    ],
  },
];

function GraduationScene() {
  return (
    <div className="story-scene story-scene-education" aria-hidden>
      <div className="story-scene-cap">
        <div className="story-cap-board" />
        <div className="story-cap-top" />
        <div className="story-cap-tassel" />
      </div>
      <div className="story-scroll">
        <div className="story-scroll-line" />
        <div className="story-scroll-line" />
        <div className="story-scroll-line" />
      </div>
    </div>
  );
}

function FirstJobScene() {
  return (
    <div className="story-scene story-scene-first-job" aria-hidden>
      <div className="story-laptop">
        <div className="story-laptop-screen">
          <div className="story-code-line" />
          <div className="story-code-line story-code-line-short" />
          <div className="story-code-line story-code-line-cursor" />
        </div>
        <div className="story-laptop-base" />
      </div>
    </div>
  );
}

function SecondCompanyScene() {
  return (
    <div className="story-scene story-scene-second-company" aria-hidden>
      <div className="story-rocket">
        <div className="story-rocket-body" />
        <div className="story-rocket-fin story-rocket-fin-l" />
        <div className="story-rocket-fin story-rocket-fin-r" />
        <div className="story-rocket-flame" />
      </div>
      <div className="story-stars">
        <span className="story-star" />
        <span className="story-star" />
        <span className="story-star" />
      </div>
    </div>
  );
}

export function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const firstCompanyRef = useRef<HTMLDivElement>(null);
  const secondCompanyRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState<Phase>("education");

  useEffect(() => {
    const refs = [
      { ref: educationRef, id: "education" as Phase },
      { ref: firstCompanyRef, id: "firstCompany" as Phase },
      { ref: secondCompanyRef, id: "secondCompany" as Phase },
    ].filter((r) => r.ref.current);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = refs.find((r) => r.ref.current === entry.target)?.id;
          if (id) setActivePhase(id);
        }
      },
      { root: null, rootMargin: "-30% 0px -40% 0px", threshold: 0 }
    );

    refs.forEach(({ ref }) => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, []);

  const renderScene = () => {
    switch (activePhase) {
      case "education":
        return <GraduationScene />;
      case "firstCompany":
        return <FirstJobScene />;
      case "secondCompany":
        return <SecondCompanyScene />;
      default:
        return <GraduationScene />;
    }
  };

  return (
    <section id="story" className="story section" ref={sectionRef}>
      <p className="section-title">/story</p>
      <h2 className="section-heading">My journey</h2>

      <div className="story-layout">
        <div className="story-left">
          <div className="story-scene-wrapper">{renderScene()}</div>
        </div>

        <div className="story-timeline">
          {CHAPTERS.map((chapter) => (
            <div
              key={chapter.id}
              ref={
                chapter.id === "education"
                  ? educationRef
                  : chapter.id === "firstCompany"
                    ? firstCompanyRef
                    : secondCompanyRef
              }
              className={`story-chapter ${activePhase === chapter.id ? "story-chapter-active" : ""}`}
              data-phase={chapter.id}
            >
              <div className="story-chapter-marker" />
              <div className="story-chapter-content">
                <span className="story-chapter-year">{chapter.year}</span>
                <h3 className="story-chapter-title">{chapter.title}</h3>
                {chapter.subtitle && (
                  <p className="story-chapter-subtitle">{chapter.subtitle}</p>
                )}
                <ul className="story-chapter-points">
                  {chapter.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
