import { useRef, useState } from "react";
import MatrixNetwork from "./visuals/MatrixNetwork";
import GeneratedName from "./components/GeneratedName";

export default function App() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Section Refs
  const profileRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const focusRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleIntroComplete = () => {
    setTimeout(() => {
      profileRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("jeevankumar082005@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close mobile menu on click
  };

  return (
    <main>
      {/* MATRIX BACKGROUND */}
      <MatrixNetwork />

      {/* ================= HERO ================= */}
      <section className="matrix-section">
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
      <nav className="navbar">
        <div className="nav-inner">
          {/* Brand */}
          <div
            className="nav-logo"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="logo-primary">portfolio</span>
            <span className="logo-sub">systems · data · ai</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMobileMenuOpen ? "nav-links-mobile-open" : ""}`}>
            <li onClick={() => scrollToSection(profileRef)}>About</li>
            <li onClick={() => scrollToSection(experienceRef)}>Experience</li>
            <li onClick={() => scrollToSection(skillsRef)}>Stack</li>
            <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
            <li className="nav-cta" onClick={() => scrollToSection(contactRef)}>
              Contact
            </li>
          </ul>
        </div>
      </nav>

      {/* ================= ABOUT ================= */}
      <section ref={profileRef} className="content-section about-section">
        <div className="about-left">
          <h2>About</h2>

          <p className="about-lead">
            I am a developer who enjoys building products from the ground up, approaching software as an engineered system rather than just a collection of features.
          </p>

          <p>
            As a final-year AI & ML student and full-stack developer, I build scalable web products with clearly structured client–server architecture, secure backend logic, and AI-driven enhancements. I handle everything from technical architecture and cloud deployment to product development and ongoing maintenance.
          </p>

          <p>
            Working across React, Node.js, Django, and PostgreSQL, I integrate real-time data systems, LLM APIs, and authentication workflows into production-oriented applications designed for clarity, reliability, and business growth. I am always eager to learn new technologies and solve practical business problems through software.
          </p>
        </div>

        <div className="about-right">
          <img
            src="/profile.jpeg"
            alt="Dumpala Jeevan Kumar"
            className="profile-image"
          />
        </div>
      </section>

      {/* ================= PROFESSIONAL EXPERIENCE ================= */}
      <section ref={experienceRef} className="content-section experience-section">
        <h2>Professional Experience</h2>

        <div className="experience-list">
          <div className="experience-item">
            <div className="exp-header">
              <h3>Inteleforge Limited — Full-Stack Developer Intern</h3>
              <span className="exp-date">Jan 2026 – Present</span>
            </div>
            <p>
              Contributed to end-to-end product development and deployment pipelines. Designed scalable client–server architecture using React & Node.js, implemented secure authentication, and integrated AI-powered workflows into production systems.
            </p>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Noreatrix Technologies — Founder & Lead Engineer</h3>
              <span className="exp-date">2026 – Present</span>
            </div>
            <p>
              Leading technical strategy and product development for proprietary tools like NoreaTools. Managing full-stack architecture, deployment on modern cloud infrastructure, and overseeing business operations, branding, and local SEO optimizations.
            </p>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Freelance Developer — Client Solutions</h3>
              <span className="exp-date">Mar 2025 – Present</span>
            </div>
            <p>
              Developed, deployed, and currently maintain production applications like <strong>The SBK Dance</strong> from the ground up. Architected and delivered several real-world projects under NDA client agreements, focusing on system architecture, performance optimization, and search visibility.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHAT I BUILD (SERVICES) ================= */}
      <section ref={servicesRef} className="content-section services-section">
        <h2>What I Build</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Scalable Web Applications</h3>
            <p>Architect full-stack systems with clear separation between frontend, backend, and database layers for maximum maintainability.</p>
          </div>

          <div className="service-card">
            <h3>Secure Backend Systems</h3>
            <p>Design RESTful services with authentication flows, structured APIs, and clean business logic.</p>
          </div>

          <div className="service-card">
            <h3>End-to-End Product Development</h3>
            <p>Drive projects from initial wireframes to database schema design, continuous deployment, and post-launch maintenance.</p>
          </div>

          <div className="service-card">
            <h3>AI-Integrated Products</h3>
            <p>Integrate LLMs (ChatGPT, Gemini, Vertex AI) to build intelligent automation, analysis, and decision-support systems.</p>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL STACK ================= */}
      <section ref={skillsRef} className="content-section skills-section">
        <h2>Technical Stack</h2>

        <div className="skills-grid">
          <div className="skills-card">
            <h3>Web Development</h3>
            <div className="skills-items">
              <span>React.js</span><span>Next.js</span><span>TypeScript</span>
              <span>JavaScript</span><span>HTML/CSS</span>
            </div>
          </div>

          <div className="skills-card">
            <h3>Backend & Data</h3>
            <div className="skills-items">
              <span>Node.js</span><span>Express.js</span><span>Django</span>
              <span>PostgreSQL</span><span>Firebase</span><span>REST APIs</span>
            </div>
          </div>

          <div className="skills-card">
            <h3>AI & Generative AI</h3>
            <div className="skills-items">
              <span>OpenAI (ChatGPT)</span><span>Google Gemini API</span>
              <span>Vertex AI</span><span>Prompt Engineering</span>
            </div>
          </div>

          <div className="skills-card">
            <h3>Infrastructure & Tools</h3>
            <div className="skills-items">
              <span>Vercel</span><span>Git/GitHub</span><span>Supabase</span>
              <span>Cursor AI</span><span>SEO Optimization</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section ref={projectsRef} className="content-section projects-section">
        <h2>Live Products & Projects</h2>
        <div className="projects-list">
          
          {/* NoreaTools */}
          <div className="project-card">
            <div className="project-header">
              <h3>NoreaTools</h3>
              <span className="project-tag">Live Product</span>
            </div>
            <p className="project-desc">
              A suite of online productivity and PDF tools. Built independently from the ground up, handling both the technical roadmap and product development.
            </p>
            <a href="https://noreatools.noreatrix.com" target="_blank" rel="noopener noreferrer" className="project-link">
              Visit NoreaTools →
            </a>
          </div>

          {/* The SBK Dance */}
          <div className="project-card">
            <div className="project-header">
              <h3>The SBK Dance</h3>
              <span className="project-tag">Client Application</span>
            </div>
            <p className="project-desc">
              Independently designed, developed, deployed, and currently maintaining the digital platform for a dance organization, ensuring high uptime and performance.
            </p>
            <a href="https://thesbkdance.com" target="_blank" rel="noopener noreferrer" className="project-link">
              Visit Site →
            </a>
          </div>

          {/* Accd Bazaar */}
          <div className="project-card">
            <div className="project-header">
              <h3>Accd Bazaar</h3>
              <span className="project-tag">Full-Stack System</span>
            </div>
            <p className="project-desc">
              A scalable circular marketplace platform supporting dynamic listings and structured client-server data flow.
            </p>
            <a href="https://github.com/dumpalajeevankumar1/Web-application" target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub →
            </a>
          </div>

          {/* City Intelligence */}
          <div className="project-card">
            <div className="project-header">
              <h3>City Intelligence Dashboard</h3>
              <span className="project-tag">Hackathon Finalist</span>
            </div>
            <p className="project-desc">
              A real-time civic intelligence system for monitoring traffic via geospatial insights, utilizing Firebase and Google Maps API.
            </p>
            <a href="https://github.com/dumpalajeevankumar1/scamps" target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section ref={contactRef} className="content-section contact-section">
        <h2>Let’s Connect</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Contact Details</h3>
            
            <div className="email-copy-wrapper">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:jeevankumar082005@gmail.com" className="email-link">
                  jeevankumar082005@gmail.com
                </a>
              </p>
              <button onClick={copyEmail} className="copy-btn">
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>

            <p>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/dumpalajeevankumar1" target="_blank" rel="noopener noreferrer">
                github.com/dumpalajeevankumar1
              </a>
            </p>
            
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/jeevankumar-465a85324/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/jeevankumar
              </a>
            </p>
          </div>

          <div className="contact-card highlight">
            <h3>Hire Me</h3>
            <p>
              I am seeking opportunities as a <strong>Software Developer</strong> or <strong>Full-Stack Intern</strong>, focusing on scalable backend systems, cloud deployment, and AI product development.
            </p>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button mt-4 inline-block">
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
