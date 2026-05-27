import WebIcon from "@mui/icons-material/Web";
import TerminalIcon from "@mui/icons-material/Terminal";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

export default function About() {
  return (
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
          Years of experience. Specialised in building apps, while ensuring a
          seamless web experience for end users.
        </p>
      </div>

      <div className="skills-grid">
        <div className="skill-card active-skill">
          <div className="skill-icon">
            <WebIcon fontSize="inherit" />
          </div>

          <h3>
            FRONTEND <br />
            DEVELOPMENT
          </h3>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <TerminalIcon fontSize="inherit" />
          </div>

          <h3>
            BACKEND <br />
            DEVELOPMENT
          </h3>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <PhoneIphoneIcon fontSize="inherit" />
          </div>

          <h3>
            MOBILE APP <br />
            DEVELOPMENT
          </h3>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <DesignServicesIcon fontSize="inherit" />
          </div>

          <h3>
            UI & UX <br />
            DESIGN
          </h3>
        </div>
      </div>
    </div>
  );
}
