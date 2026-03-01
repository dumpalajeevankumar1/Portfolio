import { useRef, useState } from "react";
import MatrixNetwork from "./visuals/MatrixNetwork";
import GeneratedName from "./components/GeneratedName";

export default function App() {
  const [showSubtitle, setShowSubtitle] = useState(false);

  const profileRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const focusRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const handleIntroComplete = () => {
    setTimeout(() => {
      profileRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };
const [copied, setCopied] = useState(false);

const copyEmail = () => {
  navigator.clipboard.writeText("jeevankumar082005@gmail.com");
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="logo-primary">portfolio</span>
            <span className="logo-sub">systems · data · ai</span>
          </div>

          {/* Navigation */}
          <ul className="nav-links">
            <li onClick={() => profileRef.current?.scrollIntoView({ behavior: "smooth" })}>
              About
            </li>
            <li onClick={() => experienceRef.current?.scrollIntoView({ behavior: "smooth" })}>
              Experience
            </li>
            <li onClick={() => skillsRef.current?.scrollIntoView({ behavior: "smooth" })}>
              Stack
            </li>
            <li onClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}>
              Projects
            </li>
            <li
              className="nav-cta"
              onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
            >
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
            I approach software as an engineered system — not just a collection of features.
          </p>

          <p>
            As a final-year AI & ML student and full-stack developer, I build scalable web products 
            with clearly structured client–server architecture, secure backend logic, and AI-driven enhancements.
          </p>

          <p>
            Working across React, Node.js, Django, and Firebase, I integrate real-time data systems, 
            LLM APIs, and authentication workflows into production-oriented applications 
            designed for clarity, reliability, and growth.
          </p>
        </div>

        <div className="about-right">
          <img
            src="/profile.jpg"
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
              Contributed to end-to-end product development and deployment pipelines. 
              Designed scalable client–server architecture using React & Node.js, 
              implemented secure authentication, and integrated AI-powered workflows into production systems.
            </p>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Matrimony in India — Freelance Full-Stack Developer</h3>
              <span className="exp-date">Mar 2025 – Jan 2026</span>
            </div>
            <p>
              Developed and maintained full-stack web application features and improved 
              search visibility through technical SEO implementation. Enhanced 
              performance and API responsiveness for high-traffic environments.
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
            <p>
              Architect full-stack systems with clear separation between frontend, 
              backend, and database layers for maximum maintainability.
            </p>
          </div>

          <div className="service-card">
            <h3>Secure Backend Systems</h3>
            <p>
              Design RESTful services with authentication flows, structured APIs, 
              and clean business logic.
            </p>
          </div>

          <div className="service-card">
            <h3>Data-Driven Dashboards</h3>
            <p>
              Develop dashboards that process and visualize real-time and structured 
              datasets for actionable insights.
            </p>
          </div>

          <div className="service-card">
            <h3>AI-Integrated Products</h3>
            <p>
              Integrate LLMs (ChatGPT, Gemini, Vertex AI) to build intelligent 
              automation, analysis, and decision-support systems.
            </p>
          </div>

          <div className="service-card">
            <h3>Cloud & Deployment</h3>
            <p>
              Configure Firebase backends, API integrations, and scalable 
              deployment workflows for production readiness.
            </p>
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
              <span>HTML</span><span>CSS</span><span>JavaScript</span>
              <span>React.js</span><span>TypeScript</span>
            </div>
          </div>

          <div className="skills-card">
            <h3>Backend & APIs</h3>
            <div className="skills-items">
              <span>Django</span><span>Node.js</span><span>Express.js</span>
              <span>Firebase</span><span>REST API Design</span>
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
            <h3>Architecture & Tools</h3>
            <div className="skills-items">
              <span>Client–Server</span><span>Git</span><span>GitHub</span>
              <span>Cursor AI</span><span>GitHub Copilot</span><span>Supabase</span>
            </div>
          </div>

          <div className="skills-card">
            <h3>Security</h3>
            <div className="skills-items">
              <span>OWASP Principles</span><span>Auth Flows</span><span>API Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ENGINEERING FOCUS ================= */}
      <section ref={focusRef} className="content-section focus-section">
        <h2>Engineering Principles</h2>

        <div className="focus-grid">
          <div className="focus-card">
            <h3>Clean Architecture</h3>
            <p>Prioritizing intentional system structure and readable, maintainable codebases.</p>
          </div>
          <div className="focus-card">
            <h3>Predictable Data Flow</h3>
            <p>Designing systems with logical data movement to reduce complexity and bugs.</p>
          </div>
          <div className="focus-card">
            <h3>Scalability-Aware Design</h3>
            <p>Considering performance constraints early to avoid architectural bottlenecks.</p>
          </div>
          <div className="focus-card">
            <h3>Security-Conscious</h3>
            <p>Implementing safe user input handling and secure authentication flows by default.</p>
          </div>
          <div className="focus-card">
            <h3>Production-Oriented</h3>
            <p>Iterating on real-world reliability rather than assuming ideal scenarios.</p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section ref={projectsRef} className="content-section projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-header">
              <h3>Accd Bazaar</h3>
              <span className="project-tag">Full-Stack Product</span>
            </div>
            <p className="project-desc">
              A scalable circular marketplace platform supporting dynamic listings 
              and structured user interactions.
            </p>
            <ul className="project-points">
              <li>Designed backend models and REST APIs for business logic</li>
              <li>Implemented responsive frontend using React and modern UI practices</li>
              <li>Structured client-server data flow for scalability</li>
            </ul>
            <a href="https://github.com/dumpalajeevankumar1/Web-application" target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub →
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-header">
              <h3>City Intelligence Dashboard</h3>
              <span className="project-tag">Google Hackathon Finalist</span>
            </div>
            <p className="project-desc">
              A real-time civic intelligence system for monitoring traffic and incidents 
              via geospatial insights.
            </p>
            <ul className="project-points">
              <li>Integrated Firebase for real-time updates</li>
              <li>Implemented Google Maps API for geospatial insights</li>
              <li>Designed rapid data-refresh architecture</li>
            </ul>
            <a href="https://github.com/dumpalajeevankumar1/scamps" target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub →
            </a>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-header">
              <h3>AgroMind</h3>
              <span className="project-tag">IoT + AI System</span>
            </div>
            <p className="project-desc">
              An AI-enhanced smart farming system collecting sensor data and generating 
              automated agricultural recommendations.
            </p>
            <ul className="project-points">
              <li>Collected IoT sensor data using ESP8266</li>
              <li>Processed data with Gemini AI API</li>
              <li>Generated automated agricultural recommendations</li>
            </ul>
            <a href="https://github.com/dumpalajeevankumar1/agromind" target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* ================= RESUME ================= */}
      <section ref={resumeRef} className="content-section resume-section">
        <div className="resume-box">
          <h2>Resume</h2>
          <p className="resume-text">
            A concise overview of my academic background, technical skills, and 
            hands-on engineering experience in full-stack and AI systems.
          </p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
            Download Resume
          </a>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
        <section ref={contactRef} className="content-section contact-section">
        <h2>Let’s Connect</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Contact</h3>
            
            {/* Standard Mailto Link */}
            <p>
              <strong>Email:</strong>{" "}
              <a 
                href="mailto:jeevankumar082005@gmail.com"
                className="email-link"
                title="Open in mail app"
              >
                jeevankumar082005@gmail.com
              </a>
            </p>

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
              I am seeking opportunities as a <strong>Software Developer</strong> or 
              <strong> Full-Stack Intern</strong>, focusing on backend systems and 
              AI product development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
