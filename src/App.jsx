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
              text="TECH ENTHUSIAST"
              speed={60}
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
        Skills
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

        <p>
          I am a Computer Science undergraduate specializing in Artificial
          Intelligence and Machine Learning, driven by a deep curiosity about how
          software systems actually work in the real world. I enjoy exploring
          problems beyond surface-level solutions—understanding why systems behave
          the way they do, where they fail, and how they can be improved.
        </p>

        <p>
          My experience spans full-stack development, data-driven applications, and
          system-oriented projects, where I have worked with technologies such as
          Python, Django, JavaScript, cloud APIs, and modern web architectures. I
          have built dashboards, integrated external data sources, and experimented
          with real-time and AI-powered components, focusing on clean architecture,
          logical data flow, and performance considerations.
        </p>
      </div>

      <div className="about-right">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="profile-image"
        />
      </div>
    </section>



      {/* ================= LEARNING & EXPERIENCE ================= */}
      <section ref={experienceRef} className="content-section experience-section">
        <h2>Learning & Experience</h2>

        <div className="experience-list">
          <div className="experience-item">
            <h3>Full-Stack Application Development</h3>
            <p>
              Built complete web applications using Django and JavaScript, handling
              frontend logic, backend processing, and database interactions with a
              focus on clarity and maintainability.
            </p>
          </div>

          <div className="experience-item">
            <h3>Backend APIs & Cloud Integration</h3>
            <p>
              Designed RESTful APIs and integrated cloud-based services, learning how
              data flows between systems and how backend decisions impact performance
              and scalability.
            </p>
          </div>

          <div className="experience-item">
            <h3>Data-Driven Dashboards</h3>
            <p>
              Worked on dashboards that consume and visualize structured data,
              emphasizing meaningful insights, clean UI structure, and efficient data
              handling.
            </p>
          </div>

          <div className="experience-item">
            <h3>AI / ML Exploration</h3>
            <p>
              Experimented with AI and machine-learning components to understand how
              intelligent features can enhance applications, focusing on practical
              use cases rather than theoretical models.
            </p>
          </div>

          <div className="experience-item">
            <h3>Production-Oriented Iteration</h3>
            <p>
              Approached projects with a production mindset by iterating on designs,
              improving reliability, fixing edge cases, and learning from failures to
              refine system behavior.
            </p>
          </div>
        </div>
      </section>


      {/* ================= SERVICES ================= */}
      {/* ================= SERVICES ================= */}
      <section ref={servicesRef} className="content-section services-section">
        <h2>What I Do</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Full-Stack Web Development</h3>
            <p>
              Design and build end-to-end web applications with a clear separation
              between frontend, backend, and data layers, focusing on maintainable
              and scalable architecture.
            </p>
          </div>

          <div className="service-card">
            <h3>Backend APIs & System Design</h3>
            <p>
              Develop RESTful APIs, define data contracts, and structure backend
              systems that support clean data flow, extensibility, and reliability.
            </p>
          </div>

          <div className="service-card">
            <h3>Data Dashboards & Integrations</h3>
            <p>
              Build data-driven dashboards and integrate external APIs to visualize,
              process, and monitor real-time or historical information.
            </p>
          </div>

          <div className="service-card">
            <h3>AI-Assisted Features</h3>
            <p>
              Experiment with machine-learning-powered components such as basic
              predictions, intelligent data processing, and decision-support
              features.
            </p>
          </div>

          <div className="service-card">
            <h3>Cloud & Deployment Basics</h3>
            <p>
              Configure cloud-based backends, authentication flows, and deployment
              pipelines with an understanding of performance, security, and
              scalability constraints.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      {/* ================= SKILLS ================= */}
      <section ref={skillsRef} className="content-section skills-section">
        <h2>Skills</h2>

        <div className="skills-grid">
          {/* Web */}
          <div className="skills-card">
            <h3>Web Development</h3>
            <div className="skills-items">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React (Basic)</span>
            </div>
          </div>

          {/* Backend */}
          <div className="skills-card">
            <h3>Backend & Databases</h3>
            <div className="skills-items">
              <span>Firebase</span>
              <span>API Integration</span>
              <span>NoSQL Basics</span>
            </div>
          </div>

          {/* Programming */}
          <div className="skills-card">
            <h3>Programming</h3>
            <div className="skills-items">
              <span>Python</span>
              <span>Scripting</span>
              <span>Data Handling</span>
            </div>
          </div>

          {/* Architecture */}
          <div className="skills-card">
            <h3>Architecture & DevOps</h3>
            <div className="skills-items">
              <span>Client–Server</span>
              <span>REST APIs</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </div>

          {/* Security */}
          <div className="skills-card">
            <h3>Security & Tools</h3>
            <div className="skills-items">
              <span>OWASP Basics</span>
              <span>Auth Flows</span>
              <span>Debugging</span>
            </div>
          </div>
        </div>
      </section>


      {/* ================= ENGINEERING FOCUS ================= */}
      {/* ================= ENGINEERING FOCUS ================= */}
      <section ref={focusRef} className="content-section focus-section">
        <h2>Engineering Focus</h2>

        <div className="focus-grid">
          <div className="focus-card">
            <h3>Clean & Intentional Architecture</h3>
            <p>
              I prioritize clear separation of concerns and readable system
              structure, ensuring that codebases remain understandable, maintainable,
              and extensible as they grow.
            </p>
          </div>

          <div className="focus-card">
            <h3>Logical Data Flow</h3>
            <p>
              I design systems with predictable data movement, focusing on how
              information enters, transforms, and exits the system to reduce bugs and
              improve clarity.
            </p>
          </div>

          <div className="focus-card">
            <h3>Scalability & Performance Awareness</h3>
            <p>
              While building features, I consider performance implications and
              scalability constraints early, aiming to avoid architectural bottlenecks
              and unnecessary complexity.
            </p>
          </div>

          <div className="focus-card">
            <h3>Security-Conscious Design</h3>
            <p>
              I follow security-aware development practices such as basic OWASP
              principles, authentication flows, and safe handling of user input to
              minimize common vulnerabilities.
            </p>
          </div>

          <div className="focus-card">
            <h3>Real-World Reliability</h3>
            <p>
              I focus on building systems that behave predictably under real-world
              conditions by handling edge cases, failures, and iterative improvements
              rather than assuming ideal scenarios.
            </p>
          </div>
        </div>
      </section>


      {/* ================= PROJECTS ================= */}
      {/* ================= PROJECTS ================= */}
      <section ref={projectsRef} className="content-section projects-section">
        <h2>Projects</h2>

        <p className="projects-intro">
          A selection of system-oriented projects focused on real-world problems,
          combining backend architecture, data integration, and intelligent features.
        </p>

        <div className="projects-list">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-header">
              <h3>Accd Bazaar</h3>
              <span className="project-tag">Full-Stack Platform</span>
            </div>

            <p className="project-desc">
              A circular marketplace for buying and selling pre-owned goods, designed
              with a dynamic UI and a REST-based backend to support scalable product
              listings and user interactions.
            </p>

            <ul className="project-points">
              <li>Designed Django models and REST APIs for core business logic</li>
              <li>Implemented dynamic frontend using HTML, CSS, Bootstrap, and JavaScript</li>
              <li>Used SQLite for structured data storage during development</li>
            </ul>

            <a
              href="https://github.com/dumpalajeevankumar1/Web-application"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-header">
              <h3>City Intelligence Dashboard</h3>
              <span className="project-tag">Real-Time Analytics</span>
            </div>

            <p className="project-desc">
              A real-time civic analytics dashboard for traffic monitoring and incident
              reporting, developed as part of a hackathon and selected as a Google
              Hackathon Finalist.
            </p>

            <ul className="project-points">
              <li>Integrated live data using Firebase for real-time updates</li>
              <li>Visualized location-based insights using Google Maps API</li>
              <li>Focused on real-world usability and fast data refresh cycles</li>
            </ul>

            <a
              href="https://github.com/dumpalajeevankumar1/scamps"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-header">
              <h3>AgroMind</h3>
              <span className="project-tag">IoT & AI System</span>
            </div>

            <p className="project-desc">
              An IoT-based smart farming system that collects environmental data from
              sensors and applies AI-based analysis to generate actionable farming
              insights.
            </p>

            <ul className="project-points">
              <li>Collected real-time sensor data using ESP8266 and environmental sensors</li>
              <li>Processed and analyzed data using cloud-based Gemini AI API</li>
              <li>Delivered intelligent recommendations based on environmental patterns</li>
            </ul>

            <a
              href="https://github.com/dumpalajeevankumar1/agromind"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>


      {/* ================= RESUME ================= */}
      {/* ================= RESUME ================= */}
      <section ref={resumeRef} className="content-section resume-section">
        <div className="resume-box">
          <h2>Resume</h2>

          <p className="resume-text">
            A concise overview of my academic background, technical skills, and
            hands-on engineering experience, highlighting system-oriented projects,
            problem-solving approach, and learning progression.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            Download Resume
          </a>
        </div>
      </section>


      {/* ================= CONTACT / HIRE ME ================= */}
      <section ref={contactRef} className="content-section contact-section">
        <h2>Let’s Connect</h2>

        <p className="contact-intro">
          I am open to software development and full-stack internship opportunities
          where I can contribute to real-world systems, learn from experienced
          engineers, and grow through meaningful challenges.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Contact</h3>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:jeevankumar082005@gmail.com">
                jeevankumar082005@gmail.com
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/dumpalajeevankumar1"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/dumpalajeevankumar1
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/jeevankumar-465a85324/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/jeevankumar
              </a>
            </p>
          </div>

          <div className="contact-card highlight">
            <h3>Hire Me</h3>
            <p>
              I am seeking opportunities as a <strong>Software Developer</strong> or
              <strong> Full-Stack Intern</strong>, with interests in backend systems,
              data-driven applications, and intelligent features.
            </p>
            <p>
              I value clean architecture, reliability, and learning through real
              production challenges.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
