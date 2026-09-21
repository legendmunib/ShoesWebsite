import profile from "../images/profile.jpg.jpeg";
import waqas from "../images/waqas.jpeg";

function About() {
  return (
    <div className="about-page">
      {/* ================= HERO ================= */}

      <section className="about-hero">
        <div className="about-text">
          <span className="about-tag">ABOUT US</span>

          <h1>
            Meet the <span>Developers</span>
          </h1>

          <h2>Web Frontend Developers</h2>

          <p>
            We are Muneeb Ahsan and Waqas Ahmad, Software Engineering students
            passionate about web development, modern design and creating
            beautiful user experiences.
          </p>

          <p>
            FootWear is a project we built together to practice and showcase our
            frontend development and web design skills.
          </p>

          <div className="about-buttons">
            <a href="mailto:06muneebahsan@gmail.com" className="about-btn">
              Contact Us
            </a>

            <a
              href="https://github.com/legendmunib"
              target="_blank"
              rel="noreferrer"
              className="about-btn outline"
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* ================= TWO PROFILES ================= */}

        <div className="profile-area">
          {/* Muneeb */}

          <div className="person-card">
            <div className="profile-circle">
              <img src={profile} alt="Muneeb Ahsan" />
            </div>

            <h3>Muneeb Ahsan</h3>

            <span>Frontend Developer</span>
          </div>

          {/* Waqas */}

          <div className="person-card">
            <div className="profile-circle">
              <img src={waqas} alt="Waqas Ahmad" />
            </div>

            <h3>Waqas Ahmad</h3>

            <span>Frontend Developer</span>
          </div>
        </div>
      </section>

      {/* ================= SHARED INFO ================= */}

      <section className="about-info">
        <div className="info-card">
          <div className="info-icon">💻</div>

          <h3>Frontend Development</h3>

          <p>
            We create responsive and user-friendly websites using modern
            frontend technologies.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">🎨</div>

          <h3>Web Design</h3>

          <p>
            We focus on clean, attractive and modern designs with a smooth user
            experience.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">🎓</div>

          <h3>Software Engineering</h3>

          <p>
            We are Software Engineering students at The Islamia University of
            Bahawalpur.
          </p>
        </div>
      </section>

      {/* ================= ABOUT PROJECT ================= */}

      <section className="personal-section">
        <div className="personal-title">
          <span>OUR PROJECT</span>

          <h2>About FootWear</h2>
        </div>

        <div className="personal-content">
          <div>
            <p>
              FootWear is a modern shoe e-commerce website created by Muneeb
              Ahsan and Waqas Ahmad.
            </p>

            <p>
              The project includes product cards, brand categories, responsive
              layouts, navigation, routing and modern UI components.
            </p>

            <p>
              Our goal was to create a clean and attractive shopping experience
              while improving our frontend development skills.
            </p>
          </div>

          <div className="details">
            <div>
              <span>Developers</span>
              <strong>Muneeb Ahsan & Waqas Ahmad</strong>
            </div>

            <div>
              <span>Profession</span>
              <strong>Web Frontend Developers</strong>
            </div>

            <div>
              <span>Education</span>
              <strong>Software Engineering</strong>
            </div>

            <div>
              <span>University</span>
              <strong>The Islamia University of Bahawalpur</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Bahawalpur, Pakistan</strong>
            </div>

            <div>
              <span>Project</span>
              <strong>FootWear</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section className="skills-section">
        <div className="personal-title">
          <span>OUR SKILLS</span>

          <h2>Technologies We Work With</h2>
        </div>

        <div className="skills">
          <div className="skill">
            <span>HTML</span>

            <div className="skill-bar">
              <div style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>CSS</span>

            <div className="skill-bar">
              <div style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>JavaScript</span>

            <div className="skill-bar">
              <div style={{ width: "75%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>React</span>

            <div className="skill-bar">
              <div style={{ width: "70%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>Bootstrap</span>

            <div className="skill-bar">
              <div style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>Responsive Design</span>

            <div className="skill-bar">
              <div style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section className="about-bottom">
        <h2>Let's build something great together.</h2>

        <p>Have an idea or want to get in touch with us?</p>

        <a href="mailto:06muneebahsan@gmail.com">Get In Touch →</a>
      </section>
    </div>
  );
}

export default About;
