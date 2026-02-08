import "./About.css";

export function About() {
  return (
    <section id="about" className="about section">
      <p className="section-title">/about</p>
      <h2 className="section-heading">About me</h2>
      <div className="about-content">
        <p>
          I'm a software engineer who loves turning ideas into reliable, fast
          software. I focus on the web — from APIs and databases to interfaces
          people actually enjoy using.
        </p>
        <p>
          When I'm not coding, I'm reading docs, trying new tools, or
          contributing to open source. I care about clean architecture, testing,
          and shipping things that last.
        </p>
        <div className="about-highlight">
          <code className="about-code">
            <span className="code-keyword">const</span>{" "}
            <span className="code-var">engineer</span> ={" "}
            <span className="code-string">"always learning"</span>;
          </code>
        </div>
      </div>
    </section>
  );
}
