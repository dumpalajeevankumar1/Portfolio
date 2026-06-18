import { useRef, useState, useEffect } from "react";
import MatrixNetwork from "./visuals/MatrixNetwork";
import GeneratedName from "./components/GeneratedName";

// ================= DATA CONFIGURATION =================

const EXPERIENCE_DATA = [
  {
    role: "Full-Stack Developer Intern",
    company: "Inteleforge Limited",
    date: "Jan 2026 – Present",
    desc: "Contributed to end-to-end product development and deployment pipelines. Designed scalable client–server architecture using React & Node.js, implemented secure authentication, and integrated AI-powered workflows into production systems.",
    tech: ["React.js", "Node.js", "AI Workflows", "System Architecture"]
  },
  {
    role: "Founder & Lead Engineer",
    company: "Noreatrix Technologies",
    date: "2026 – Present",
    desc: "Leading technical strategy and product development for proprietary tools like NoreaTools. Managing full-stack architecture, deployment on modern cloud infrastructure, and overseeing business operations, branding, and local SEO optimizations.",
    tech: ["Next.js", "Cloud Infra", "Product Dev", "SEO"]
  },
  {
    role: "Freelance Developer",
    company: "Client Solutions",
    date: "Mar 2025 – Present",
    desc: "Developed, deployed, and currently maintain production applications like The SBK Dance from the ground up. Architected and delivered several real-world projects under NDA client agreements, focusing on system architecture, performance optimization, and search visibility.",
    tech: ["Full-Stack", "Performance Optimization", "Client Comm"]
  },
];

const SERVICES_DATA = [
  {
    title: "Scalable Web Applications",
    desc: "Architect full-stack systems with clear separation between frontend, backend, and database layers for maximum maintainability.",
  },
  {
    title: "Secure Backend Systems",
    desc: "Design RESTful services with authentication flows, structured APIs, and clean business logic.",
  },
  {
    title: "End-to-End Product Development",
    desc: "Drive projects from initial wireframes to database schema design, continuous deployment, and post-launch maintenance.",
  },
  {
    title: "AI-Integrated Products",
    desc: "Integrate LLMs (ChatGPT, Gemini, Vertex AI) to build intelligent automation, analysis, and decision-support systems.",
  },
];

const SKILLS_DATA = [
  {
    category: "Programming & Web",
    items: ["Python", "TypeScript", "JavaScript", "React.js", "HTML/CSS"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "Express.js", "Django", "Firebase", "REST APIs"],
  },
  {
    category: "AI & Generative AI",
    items: ["LLM Integration", "Prompt Engineering", "OpenAI API", "Google Gemini", "Vertex AI"],
  },
  {
    category: "AI-Assisted Dev Tools",
    items: ["GitHub Copilot", "Cursor AI", "Claude AI", "Google AI Studio", "Supabase"],
  },
  {
    category: "Architecture & Methods",
    items: ["Client–Server Arch", "Git & GitHub", "Agile", "CI/CD Workflows"],
  },
  {
    category: "Security & Tools",
    items: ["OWASP Principles", "Auth Flows", "API Testing", "Debugging"],
  },
];

const PROJECTS_DATA = [
  {
    title: "NoreaTools",
    tag: "Live Product",
    desc: "A suite of online productivity and PDF tools. Built independently from the ground up, handling both the technical roadmap and product development.",
    link: "https://noreatools.noreatrix.com",
    linkText: "Visit NoreaTools →",
  },
  {
    title: "The SBK Dance",
    tag: "Client Application",
    desc: "Independently designed, developed, deployed, and currently maintaining the digital platform for a dance organization, ensuring high uptime and performance.",
    link: "https://thesbkdance.com",
    linkText: "Visit Site →",
  },
  {
    title: "Accd Bazaar",
    tag: "Full-Stack System",
    desc: "A scalable circular marketplace platform supporting dynamic listings and structured client-server data flow.",
    link: "https://github.com/dumpalajeevankumar1/Web-application",
    linkText: "GitHub →",
  },
  {
    title: "City Intelligence Dashboard",
    tag: "Hackathon Finalist",
    desc: "A real-time civic intelligence system for monitoring traffic via geospatial insights, utilizing Firebase and Google Maps API.",
    link: "https://github.com/dumpalajeevankumar1/scamps",
    linkText: "GitHub →",
  },
];

// ================= CUSTOM HOOK FOR SCROLL ANIMATIONS =================
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
}

// ================= MAIN COMPONENT =================
export default function App() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useScrollReveal();

  const profileRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleIntroComplete = () => {
    setTimeout(() => profileRef.current?.scrollIntoView({ behavior: "smooth" }), 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("jeevankumar082005@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <main>
      {/* MATRIX BACKGROUND */}
      <div className="matrix-bg-container">
        <MatrixNetwork />
      </div>

      {/* ================= HERO ================= */}
      <section className="matrix-hero">
        <div className="matrix-content">
          <GeneratedName
            text="Dumpala Jeevan Kumar"
            onDone={() => setShowSubtitle(true)}
          />
          {showSubtitle && (
            <GeneratedName
              text="AI-FOCUSED FULL-STACK PRODUCT DEVELOPER"
              speed={50}
              isSubtitle
              onDone={handleIntroComplete}
            />
          )}
        </div>
      </section>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar glass-panel">
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="logo-primary">portfolio</span>
            <span className="logo-sub">systems · data · ai</span>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>

          <ul className={`nav-links ${isMobileMenuOpen ? "nav-links-mobile-open glass-panel" : ""}`}>
            <li onClick={() => scrollToSection(profileRef)}>About</li>
            <li onClick={() => scrollToSection(experienceRef)}>Experience</li>
            <li onClick={() => scrollToSection(skillsRef)}>Stack</li>
            <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
            <li className="nav-cta" onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
        </div>
      </nav>

      {/* ================= ABOUT ================= */}
      <section ref={profileRef} className="content-section about-section reveal-on-scroll">
        <div className="about-left">
          <h2>About</h2>
          <p className="about-lead">
            I am a developer who enjoys building products from the ground up, approaching software as an <span className="text-highlight">engineered system</span> rather than just a collection of features.
          </p>
          <p>
            As a final-year <span className="text-highlight">AI & ML student</span> and full-stack developer, I build scalable web products with clearly structured client–server architecture, secure backend logic, and AI-driven enhancements. I handle everything from technical architecture and cloud deployment to product development and ongoing maintenance.
          </p>
          <p>
            Working across React, Node.js, Django, and PostgreSQL, I integrate real-time data systems, LLM APIs, and authentication workflows into <span className="text-highlight">production-oriented applications</span> designed for clarity, reliability, and business growth.
          </p>
        </div>
        <div className="about-right">
          <div className="profile-wrapper">
            <img src="/profile.jpeg" alt="Dumpala Jeevan Kumar" className="profile-image" />
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE (TIMELINE) ================= */}
      <section ref={experienceRef} className="content-section experience-section reveal-on-scroll">
        <h2>Professional Experience</h2>
        <div className="timeline-container">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <div className="exp-header">
                <div className="exp-titles">
                  <h3>{exp.role}</h3>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <span className="exp-date">{exp.date}</span>
              </div>
              <p className="exp-desc">{exp.desc}</p>
              <div className="exp-tech-stack">
                {exp.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section ref={servicesRef} className="content-section services-section reveal-on-scroll">
        <h2>What I Build</h2>
        <div className="grid-layout">
          {SERVICES_DATA.map((service, idx) => (
            <div key={idx} className="glass-card service-card">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section ref={skillsRef} className="content-section skills-section reveal-on-scroll">
        <h2>Skills & Abilities</h2>
        <div className="grid-layout skills-grid-layout">
          {SKILLS_DATA.map((skillGroup, idx) => (
            <div key={idx} className="glass-card skills-card">
              <h3>{skillGroup.category}</h3>
              <div className="skills-items">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="skill-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section ref={projectsRef} className="content-section projects-section reveal-on-scroll">
        <h2>Live Products & Projects</h2>
        <div className="grid-layout">
          {PROJECTS_DATA.map((project, idx) => (
            <div key={idx} className="glass-card project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-tag">{project.tag}</span>
              </div>
              <p className="project-desc">{project.desc}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.linkText}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section ref={contactRef} className="content-section contact-section reveal-on-scroll">
        <h2>Let’s Connect</h2>
        <div className="grid-layout contact-grid">
          <div className="glass-card contact-card">
            <h3>Contact Details</h3>
            <div className="email-copy-wrapper">
              <p>
                <strong>Email:</strong>{" "}
                <span 
                  className="email-link interactable"
                  onClick={copyEmail}
                  onDoubleClick={() => window.location.href = "mailto:jeevankumar082005@gmail.com"}
                  title="Click to copy, Double-click to open mail app"
                >
                  jeevankumar082005@gmail.com
                </span>
                {copied && <span className="copied-text">Copied!</span>}
              </p>
            </div>
            <p><strong>GitHub:</strong> <a href="https://github.com/dumpalajeevankumar1" target="_blank" rel="noopener noreferrer">github.com/dumpalajeevankumar1</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jeevankumar-465a85324/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jeevankumar</a></p>
          </div>

          <div className="glass-card contact-card highlight-card">
            <h3>Hire Me</h3>
            <p>I am seeking opportunities as a <strong>Software Developer</strong> or <strong>Full-Stack Intern</strong>, focusing on scalable backend systems, cloud deployment, and AI product development.</p>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button mt-4 inline-block">Download Resume</a>
          </div>
        </div>
      </section>
    </main>
  );
}
