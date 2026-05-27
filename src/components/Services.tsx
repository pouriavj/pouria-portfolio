import DesignServicesIcon from "@mui/icons-material/DesignServices";
import WebIcon from "@mui/icons-material/Web";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TerminalIcon from "@mui/icons-material/Terminal";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

export default function Services() {
  return (
    <div className="services-section">
      <h2 className="services-heading">The services i offer:</h2>

      <div className="services-grid">
        <div className="service-card ">
          <div className="service-icon">
            <DeveloperModeIcon fontSize="inherit" />
          </div>

          <h3>FULLSTACK DEVELOPMENT</h3>

          <p>
            I build complete modern applications with Next.js, React, and
            PostgreSQL databases.
          </p>
        </div>

        <div className="service-card active-service">
          <div className="service-icon">
            <DesignServicesIcon fontSize="inherit" />
          </div>

          <h3>UI & UX DESIGN</h3>

          <p>
            I design modern user interfaces with clean layouts and user-focused design principles.
          </p>
        </div>

        <div className="service-card ">
          <div className="service-icon">
            <WebIcon fontSize="inherit" />
          </div>

          <h3>FRONTEND DEVELOPMENT</h3>

          <p>
          I build responsive web applications using Next.js, React, TypeScript, and frontend best practices.
          </p>
        </div>

        <div className="service-card active-service">
          <div className="service-icon">
            <TerminalIcon fontSize="inherit" />
          </div>

          <h3>BACKEND DEVELOPMENT</h3>

          <p>
            I develop scalable APIs, authentication, databases, and server-side
            systems.
          </p>
        </div>

        <div className="service-card ">
          <div className="service-icon">
            <PhoneIphoneIcon fontSize="inherit" />
          </div>

          <h3>MOBILE DEVELOPMENT</h3>

          <p>
            I build cross-platform mobile apps with React Native and modern PWAs
            using Next.js.
          </p>
        </div>

        <div className="service-card active-service">
          <div className="service-icon">
            <CloudUploadIcon fontSize="inherit" />
          </div>

          <h3>DEPLOYMENT & HOSTING</h3>

          <p>
            I deploy and manage applications using Vercel, Docker, and modern
            cloud hosting platforms.
          </p>
        </div>
      </div>
    </div>
  );
}
