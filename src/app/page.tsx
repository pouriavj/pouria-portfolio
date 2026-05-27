import Image from "next/image";
import styles from "./page.module.css";
import HeroButtons from "@/components/HeroButtons";

export default function Home() {
  return (
    <div className="container">
      <section id="home">
        <div className="hero-flex">
          <div className="hero-left">
            <p className="hero-intro">Hello, i’m</p>

            <h1 className="hero-title">Pouria Vojdani</h1>

            <p className="hero-description">
              Freelance UI designer, Fullstack developer, & <br />
              Data Miner. I create seamless web experiences <br />
              for end-users.
            </p>

            <HeroButtons />
          </div>
          <Image
            src={"/Pouria.png"}
            alt="My picture"
            width={337}
            height={392}
            priority
          />
          <div className="rectangle"></div>
        </div>
      </section>
      <section id="about">
        <div className="about-section">
          <h2 className="about-heading">About me:</h2>

          <p className="about-text">
            Hi, my name is Pouria Vojdani, i am a Fullstack web developer, UI
            designer, and Mobile developer. I have honed my skills in Web
            Development and advanced UI design principles.
            <br />
            Here are the major skills i have.
          </p>

          <div className="experience-row">
            <h1 className="experience-number">5+</h1>

            <p className="experience-text">
              Years of experience. Specialised in building apps, while ensuring
              a seamless web experience for end users.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card active-skill">
              <div className="skill-icon">✦</div>

              <h3>
                UI & UX <br />
                DESIGNING
              </h3>
            </div>

            <div className="skill-card">
              <div className="skill-icon">⌘</div>

              <h3>
                WEB <br />
                DEVELOPMENT
              </h3>
            </div>

            <div className="skill-card">
              <div className="skill-icon">◈</div>

              <h3>
                MOBILE <br />
                DEVELOPMENT
              </h3>
            </div>

            <div className="skill-card">
              <div className="skill-icon">⚙</div>

              <h3>
                WEB SCRAPING <br />
                WITH PYTHON
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h1>Projects</h1>
      </section>

      <section id="contact">
        <h1>Contact</h1>
      </section>
    </div>
  );
}
