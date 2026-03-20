import { useState, useEffect, useRef } from "react";

const DATA = {
  name: "Vineela Yedlapalli",
  role: "Software Developer — Backend",
  tagline: "Building scalable backends, clean APIs, and end-to-end systems.",
  email: "yedlapallivineela@gmail.com",
  phone: "+91 9059230799",
  github: "https://github.com/VineelaYedlapalli",
  linkedin: "https://www.linkedin.com/in/vineela-yedlapalli-84a6731ba/",

  skills: [
    {
      category: "Languages",
      icon: "{ }",
      color: "#f0c060",
      items: ["Java", "Python", "SQL", "CPP", "JavaScript", "C"],
    },
    {
      category: "Backend Frameworks",
      icon: "⚙",
      color: "#60f0c0",
      items: ["Django", "Node.js", "Express.js", "ASP.NET"],
    },
    {
      category: "APIs & Architecture",
      icon: "↔",
      color: "#c060f0",
      items: ["RESTful APIs", "MVC Architecture", "CRUD", "JPA", "Mongoose"],
    },
    {
      category: "Databases",
      icon: "◫",
      color: "#f06090",
      items: ["MySQL", "MongoDB", "SQLite", "H2 Database"],
    },
    {
      category: "Testing & QA",
      icon: "✓",
      color: "#60c0f0",
      items: ["Selenium WebDriver", "TestNG", "BDD Cucumber", "Postman", "POM"],
    },
    {
      category: "DevOps & Tools",
      icon: "▶",
      color: "#f09060",
      items: ["Git", "Jenkins", "Maven", "JIRA", "CI/CD", "Agile/Scrum"],
    },
    {
      category: "Frontend",
      icon: "◱",
      color: "#90f060",
      items: ["React.js", "Redux Toolkit", "Material UI", "Recharts", "HTML/CSS"],
    },
    {
      category: "ML / Data Science",
      icon: "~",
      color: "#f060c0",
      items: ["BERT", "ELMo", "XLNet", "LSTM", "Linear Regression", "SVM"],
    },
  ],

  projects: [
    {
      id: "finance-dash",
      num: "01",
      title: "MERN Finance Dashboard",
      type: "Full-Stack",
      typeColor: "#60f0c0",
      summary:
        "Full-stack financial KPI dashboard with custom Recharts visualizations and a Linear Regression model forecasting future revenue with high accuracy on historical business data.",
      stack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux RTK", "Recharts"],
      highlights: [
        "Linear Regression model for revenue forecasting",
        "RTK Query for optimized data fetching",
        "Custom Recharts components for KPI visualizations",
        "Scalable MERN architecture with TypeScript",
      ],
      github: null,
    },
    {
      id: "todo-app",
      num: "02",
      title: "Full-Stack To-Do App",
      type: "Backend + Frontend",
      typeColor: "#f0c060",
      summary:
        "REST API backend using Spring Boot with JPA & H2. Full CRUD, service layers, exception handling, clean MVC. JavaScript SPA frontend consuming API via AJAX.",
      stack: ["Spring Boot", "JPA", "H2", "Java", "JavaScript", "AJAX", "REST API"],
      highlights: [
        "Spring Boot REST API with full CRUD operations",
        "Service layers with proper exception handling",
        "JavaScript SPA consuming API via AJAX",
        "Unit tests for backend task operations",
      ],
      github: "https://github.com/VineelaYedlapalli/ToDoList_Application",
    },
    {
      id: "django-chat",
      num: "03",
      title: "Django Chatbot App",
      type: "Backend",
      typeColor: "#60c0f0",
      summary:
        "Full-stack chatbot system with user authentication, session management, and SQL-backed chat history. Custom admin panel for managing users and chat data.",
      stack: ["Python", "Django", "SQL", "MVC", "Session Auth", "Admin Panel"],
      highlights: [
        "User authentication & session management",
        "SQL-backed persistent chat history",
        "Custom Django admin panel",
        "Clean modular Python code throughout",
      ],
      github: "https://github.com/VineelaYedlapalli/django_chatbot",
    },
    {
      id: "absa-dl",
      num: "04",
      title: "ABSA — Deep Learning",
      type: "ML / NLP",
      typeColor: "#c060f0",
      summary:
        "Novel XLNetCN model integrating XLNet and capsule networks with LSTM and fuzzy logic for precise aspect-level sentiment classification. Outperformed LSTM, RNN, and Bi-LSTM.",
      stack: ["XLNet", "Capsule Network", "LSTM", "Fuzzy Logic", "Python"],
      highlights: [
        "Hybrid XLNetCN model architecture",
        "LSTM + Fuzzy Logic integration",
        "Surpassed LSTM, RNN, Bi-LSTM baselines",
        "Fine-grained aspect-level predictions",
      ],
      github: null,
    },
    {
      id: "absa-ml",
      num: "05",
      title: "ABSA — ML Algorithms",
      type: "ML / NLP",
      typeColor: "#f060c0",
      summary:
        "Hybrid HAABSA model integrating sentiment ontology with LCRRot neural networks. Used BERT & ELMo embeddings with Softmax and SVM classifiers.",
      stack: ["BERT", "ELMo", "LCRRot", "SVM", "Softmax", "Python"],
      highlights: [
        "HAABSA hybrid architecture",
        "BERT and ELMo contextual embeddings",
        "Softmax and SVM classifiers",
        "Diverse multi-domain dataset evaluation",
      ],
      github: null,
    },
  ],

  experience: [
    {
      company: "Tech Mahindra",
      role: "Software Engineer – QA / SDET",
      period: "Mar 2024 – Present",
      location: "India",
      bullets: [
        "Enterprise banking mortgage applications — backend workflow and REST API validation",
        "Built Java automation frameworks: Selenium WebDriver, TestNG, BDD Cucumber, POM",
        "SQL-based DB validation + JSON API response analysis for business logic correctness",
        "Full Agile lifecycle: requirement analysis, sprint planning, design discussions, defect resolution",
        "CI/CD support via Jenkins for automated test runs and build validation",
      ],
    },
    {
      company: "TOPNOTCH SoftSol Pvt. Ltd.",
      role: "Software Development Intern",
      period: "Nov 2022 – Mar 2023",
      location: "India",
      bullets: [
        "Designed & built online bus reservation system with ASP.NET and C#",
        "Implemented core business logic and secure database schemas",
        "Applied OOP principles and layered application design",
      ],
    },
  ],

  certifications: [
    { name: "Microsoft Power BI Associate", issuer: "Microsoft", color: "#f0c060", url: "https://learn.microsoft.com/en-us/users/yedlapallivineela-6239/credentials/2451a4d6c622e73b" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", color: "#f09060", url: null },
    { name: "Neural Networks & Deep Learning", issuer: "Coursera / deeplearning.ai", color: "#c060f0", url: "https://www.coursera.org/account/accomplishments/verify/9UEX39X5H6S5" },
    { name: "DP-900 Azure Data Fundamentals", issuer: "Microsoft", color: "#60c0f0", url: null },
    { name: "Algorithmic Toolbox", issuer: "Coursera / UC San Diego", color: "#60f0c0", url: "https://www.coursera.org/account/accomplishments/verify/7NB59JGMLA2Z" },
    { name: "Data Structures", issuer: "Coursera", color: "#90f060", url: "https://www.coursera.org/account/accomplishments/verify/LJZZXWCM66BM" },
    { name: "Java Certification", issuer: "Udemy", color: "#f0a060", url: "https://www.udemy.com/certificate/UC-079d3354-328d-4bef-bc88-8b82269ad929/" },
    { name: "SQL Certification", issuer: "Online", color: "#f06090", url: null },
  ],
};

const TABS = ["// projects", "// skills", "// experience", "// certs", "// contact"];

// ── Typewriter hook ──
function useTypewriter(text, speed = 40, start = true) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!start) return;
    setDisplayed("");
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, start]);
  return displayed;
}

// ── Terminal line component ──
function TermLine({ prefix = "$", text, color = "#60f0c0", delay = 0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, []);
  return (
    <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s", fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: "0.82rem", padding: "0.15rem 0", color: "#aaa" }}>
      <span style={{ color }}>{prefix} </span>
      <span style={{ color: "#e0e0e0" }}>{text}</span>
    </div>
  );
}

// ── Skill Card ──
function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? skill.color + "55" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "4px",
        padding: "1.2rem",
        transition: "all 0.25s",
        animation: `fadeUp 0.4s ${index * 0.07}s both`,
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.9rem" }}>
        <span style={{ fontFamily: "monospace", fontSize: "1rem", color: skill.color, background: skill.color + "18", padding: "0.2rem 0.45rem", borderRadius: "3px" }}>
          {skill.icon}
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: skill.color }}>
          {skill.category}
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {skill.items.map((item) => (
          <span key={item} style={{
            fontFamily: "monospace", fontSize: "0.72rem", padding: "0.25rem 0.6rem",
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "2px", color: "#b0b0c0",
          }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

// ── Project Card ──
function ProjectCard({ project, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: isActive ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.015)",
        border: `1px solid ${isActive ? project.typeColor + "60" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "4px",
        padding: "1.2rem 1.4rem",
        cursor: "pointer",
        transition: "all 0.2s",
        display: "flex", alignItems: "center", gap: "1rem",
      }}
    >
      <span style={{ fontFamily: "monospace", fontSize: "1.4rem", fontWeight: 900, color: "rgba(255,255,255,0.06)", flexShrink: 0 }}>{project.num}</span>
      <div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: project.typeColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
          {project.type}
        </div>
        <div style={{ fontSize: "0.9rem", fontWeight: 600, color: isActive ? "#fff" : "#ccc" }}>{project.title}</div>
      </div>
      <span style={{ marginLeft: "auto", color: isActive ? project.typeColor : "#555", fontSize: "1rem" }}>›</span>
    </div>
  );
}

// ── Project Detail ──
function ProjectDetail({ project }) {
  return (
    <div style={{ animation: "fadeUp 0.3s ease both" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.2rem", flexWrap: "wrap", gap: "0.5rem" }}>
        <div>
          <div style={{ fontFamily: "monospace", fontSize: "0.65rem", color: project.typeColor, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
            {project.type}
          </div>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{project.title}</h3>
        </div>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" style={{
            fontFamily: "monospace", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase",
            color: project.typeColor, border: `1px solid ${project.typeColor}40`, padding: "0.4rem 0.9rem",
            borderRadius: "3px", textDecoration: "none", transition: "background 0.2s",
            background: project.typeColor + "10",
          }}>⌥ GitHub ↗</a>
        )}
      </div>

      <p style={{ fontSize: "0.88rem", color: "#909098", lineHeight: 1.8, marginBottom: "1.5rem" }}>{project.summary}</p>

      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ fontFamily: "monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#555", marginBottom: "0.7rem" }}>
          // highlights
        </div>
        {project.highlights.map((h, i) => (
          <div key={i} style={{ display: "flex", gap: "0.75rem", padding: "0.35rem 0", fontSize: "0.85rem", color: "#b0b0c0" }}>
            <span style={{ color: project.typeColor, flexShrink: 0 }}>✦</span>
            {h}
          </div>
        ))}
      </div>

      <div>
        <div style={{ fontFamily: "monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#555", marginBottom: "0.7rem" }}>
          // tech stack
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {project.stack.map((s) => (
            <span key={s} style={{
              fontFamily: "monospace", fontSize: "0.72rem",
              background: project.typeColor + "12", border: `1px solid ${project.typeColor}30`,
              color: project.typeColor, padding: "0.25rem 0.65rem", borderRadius: "3px",
            }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Portfolio ──
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [heroReady, setHeroReady] = useState(false);
  const typed = useTypewriter(DATA.tagline, 35, heroReady);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 400);
    return () => clearTimeout(t);
  }, []);

  const styles = {
    root: {
      minHeight: "100vh",
      background: "#0c0c12",
      color: "#d0d0e0",
      fontFamily: "'Outfit', 'Segoe UI', sans-serif",
      position: "relative",
      overflow: "hidden",
    },
    grid: {
      position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    },
  };

  return (
    <div style={styles.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&family=JetBrains+Mono:wght@300;400;500&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } 
        ::-webkit-scrollbar-track { background: #0c0c12; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
      `}</style>

      <div style={styles.grid} />

      {/* ── HEADER ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(12,12,18,0.92)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 2rem",
        display: "flex", alignItems: "stretch",
      }}>
        {/* Window dots */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", paddingRight: "1.5rem", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
          {["#f05050", "#f0b030", "#40c060"].map((c) => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.8 }} />
          ))}
        </div>
        {/* Name */}
        <div style={{ padding: "0 1.5rem", display: "flex", alignItems: "center", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "#60f0c0" }}>vineela</span>
          <span style={{ fontFamily: "monospace", fontSize: "0.78rem", color: "#555" }}>.portfolio</span>
        </div>
        {/* Tabs */}
        <div style={{ display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{
              background: activeTab === i ? "rgba(255,255,255,0.04)" : "transparent",
              border: "none", borderBottom: activeTab === i ? "2px solid #60f0c0" : "2px solid transparent",
              color: activeTab === i ? "#e0e0f0" : "#555",
              fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.05em",
              padding: "0 1.25rem", cursor: "pointer", whiteSpace: "nowrap",
              transition: "all 0.2s", height: "48px",
            }}>{tab}</button>
          ))}
        </div>
        {/* Status */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "0.5rem", padding: "0 1rem" }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#60f060", boxShadow: "0 0 8px #60f060" }} />
          <span style={{ fontFamily: "monospace", fontSize: "0.65rem", color: "#555" }}>open to work</span>
        </div>
      </header>

      {/* ── HERO ── */}
      <div style={{
        padding: "3.5rem 2rem 2rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "linear-gradient(180deg, rgba(96,240,192,0.03) 0%, transparent 100%)",
        position: "relative", zIndex: 1,
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <TermLine prefix=">" text="whoami" color="#60f0c0" delay={100} />
          <TermLine prefix="" text={`name: "${DATA.name}"`} color="#555" delay={300} />
          <TermLine prefix="" text={`role: "${DATA.role}"`} color="#555" delay={500} />
          <div style={{ height: "0.8rem" }} />

          <div style={{
            animation: heroReady ? "fadeUp 0.7s 0.4s both" : "none",
            opacity: heroReady ? undefined : 0,
          }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.15em", flexWrap: "wrap" }}>
              <h1 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}>
                Vineela{" "}
              </h1>
              <h1 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 900,
                color: "#60f0c0",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}>
                Yedlapalli
              </h1>
            </div>
            <div style={{ marginTop: "0.75rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9rem", color: "#888", minHeight: "1.4rem" }}>
              {typed}
              <span style={{ animation: "blink 1s infinite", color: "#60f0c0" }}>▌</span>
            </div>
          </div>

          {/* Stats row */}
          <div style={{
            display: "flex", gap: "2rem", flexWrap: "wrap", marginTop: "2rem",
            animation: heroReady ? "fadeUp 0.7s 0.7s both" : "none",
            opacity: heroReady ? undefined : 0,
          }}>
            {[
              { val: "2", label: "Years Experience", color: "#60f0c0" },
              { val: "5", label: "Projects Built", color: "#f0c060" },
              { val: "8.56", label: "Engineering GPA", color: "#c060f0" },
              { val: "8+", label: "Certifications", color: "#60c0f0" },
            ].map(({ val, label, color }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.8rem", fontWeight: 900, color, lineHeight: 1 }}>{val}</span>
                <span style={{ fontFamily: "monospace", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#555" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TAB CONTENT ── */}
      <main style={{ maxWidth: 960, margin: "0 auto", padding: "2.5rem 2rem", position: "relative", zIndex: 1 }}>

        {/* PROJECTS */}
        {activeTab === 0 && (
          <div style={{ animation: "fadeUp 0.35s ease both" }}>
            <SectionLabel text="projects" comment="5 builds — backends, full-stack, ML" />
            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "1.5rem", alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {DATA.projects.map((p, i) => (
                  <ProjectCard key={p.id} project={p} isActive={activeProject === i} onClick={() => setActiveProject(i)} />
                ))}
              </div>
              <div style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "6px",
                padding: "2rem",
                position: "sticky", top: "70px",
              }}>
                <ProjectDetail project={DATA.projects[activeProject]} />
              </div>
            </div>
          </div>
        )}

        {/* SKILLS */}
        {activeTab === 1 && (
          <div style={{ animation: "fadeUp 0.35s ease both" }}>
            <SectionLabel text="skills" comment="languages · frameworks · tools · ML" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
              {DATA.skills.map((skill, i) => (
                <SkillCard key={skill.category} skill={skill} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* EXPERIENCE */}
        {activeTab === 2 && (
          <div style={{ animation: "fadeUp 0.35s ease both" }}>
            <SectionLabel text="experience" comment="professional history" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {DATA.experience.map((exp, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "6px",
                  padding: "1.8rem 2rem",
                  animation: `fadeUp 0.4s ${i * 0.1}s both`,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.2rem" }}>
                    <div>
                      <div style={{ fontFamily: "monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#60f0c0", marginBottom: "0.3rem" }}>
                        {exp.company}
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff" }}>{exp.role}</h3>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "#888" }}>{exp.period}</div>
                      <div style={{ fontFamily: "monospace", fontSize: "0.65rem", color: "#555" }}>{exp.location}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                    {exp.bullets.map((b, j) => (
                      <div key={j} style={{ display: "flex", gap: "0.75rem", fontSize: "0.87rem", color: "#909098", lineHeight: 1.6 }}>
                        <span style={{ color: "#60f0c0", flexShrink: 0, marginTop: "0.05rem" }}>›</span>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CERTS */}
        {activeTab === 3 && (
          <div style={{ animation: "fadeUp 0.35s ease both" }}>
            <SectionLabel text="certifications" comment="verified credentials" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
              {DATA.certifications.map((cert, i) => {
                const Tag = cert.url ? "a" : "div";
                const linkProps = cert.url ? { href: cert.url, target: "_blank", rel: "noreferrer" } : {};
                return (
                  <Tag key={i} {...linkProps} style={{
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${cert.color}25`,
                    borderRadius: "6px",
                    padding: "1.4rem 1.6rem",
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                    animation: `fadeUp 0.4s ${i * 0.07}s both`,
                    transition: "border-color 0.25s, background 0.25s",
                    cursor: cert.url ? "pointer" : "default",
                    textDecoration: "none",
                  }}
                    onMouseEnter={e => { if (cert.url) { e.currentTarget.style.borderColor = cert.color + "70"; e.currentTarget.style.background = cert.color + "08"; }}}
                    onMouseLeave={e => { if (cert.url) { e.currentTarget.style.borderColor = cert.color + "25"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}}
                  >
                    <span style={{ color: cert.color, fontSize: "1.1rem", marginTop: "0.1rem", flexShrink: 0 }}>✦</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.3rem" }}>
                        <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#e0e0f0" }}>{cert.name}</div>
                        {cert.url && (
                          <span style={{
                            fontFamily: "monospace", fontSize: "0.6rem", letterSpacing: "0.08em",
                            color: cert.color, background: cert.color + "15",
                            border: `1px solid ${cert.color}30`,
                            padding: "0.15rem 0.45rem", borderRadius: "2px", flexShrink: 0,
                          }}>verified ↗</span>
                        )}
                      </div>
                      <div style={{ fontFamily: "monospace", fontSize: "0.68rem", color: "#666" }}>{cert.issuer}</div>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </div>
        )}

        {/* CONTACT */}
        {activeTab === 4 && (
          <div style={{ animation: "fadeUp 0.35s ease both" }}>
            <SectionLabel text="contact" comment="let's build something together" />
            <div style={{ maxWidth: 560 }}>
              <div style={{ marginBottom: "2.5rem" }}>
                <TermLine prefix=">" text="./connect --mode=work" color="#60f0c0" delay={0} />
                <TermLine prefix="" text='status: "actively seeking Backend / Full-Stack SDE roles"' color="#555" delay={200} />
                <TermLine prefix="" text='location: "India · open to remote"' color="#555" delay={400} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {[
                  { label: "email", value: DATA.email, href: `mailto:${DATA.email}`, color: "#60f0c0" },
                  { label: "phone", value: DATA.phone, href: `tel:${DATA.phone}`, color: "#f0c060" },
                  { label: "github", value: "VineelaYedlapalli", href: DATA.github, color: "#c060f0" },
                  { label: "linkedin", value: "vineelayedlapalli", href: DATA.linkedin, color: "#60c0f0" },
                ].map(({ label, value, href, color }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${color}25`,
                    borderRadius: "4px", padding: "1rem 1.3rem",
                    textDecoration: "none", transition: "all 0.2s",
                    color: "inherit",
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = color + "10"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
                  >
                    <span style={{ fontFamily: "monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color, width: 60, flexShrink: 0 }}>{label}</span>
                    <span style={{ fontFamily: "monospace", fontSize: "0.82rem", color: "#c0c0d0" }}>{value}</span>
                    <span style={{ marginLeft: "auto", color: "#444", fontSize: "0.8rem" }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ── FOOTER ── */}
      <footer style={{
        textAlign: "center",
        padding: "1.2rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "monospace",
        fontSize: "0.65rem",
        color: "#444",
        position: "relative", zIndex: 1,
      }}>
        <span style={{ color: "#60f0c0" }}>// </span>
        Vineela Yedlapalli · Backend Developer · Built with React
      </footer>
    </div>
  );
}

function SectionLabel({ text, comment }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#555", marginBottom: "0.3rem" }}>
        {"/* " + comment + " */"}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#60f0c0" }}>const</span>
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "#fff" }}>{text}</span>
        <span style={{ fontFamily: "monospace", color: "#555", fontSize: "0.9rem" }}>= {"{"}</span>
      </div>
    </div>
  );
}
