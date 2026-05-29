
import HeroButtons from "@/components/HeroButtons";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import HeroImage from "@/components/HeroImage";

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
          <HeroImage />
          <div className="rectangle"></div>
        </div>
      </section>
      <section id="about">
        <About />
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
