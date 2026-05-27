import Image from "next/image";
import styles from "./page.module.css";
import HeroButtons from "@/components/HeroButtons";
import About from "@/components/About";
import Services from "@/components/Services";


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
        <About />
        <Services />
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
