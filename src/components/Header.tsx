"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState("home");

 useEffect(() => {
  // Listener added only once
  const handleScroll = () => {
    if (window.scrollY < 2) {
      setActive("home");

      if (window.location.hash !== "#home") {
        window.history.replaceState(null, "", "/");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  // Cleanup function returned from useEffect
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <header>
      <h1>Pouria Vojdani</h1>

      <nav>
        <Link
          href="/"
          className={active === "home" ? "active" : ""}
          onClick={() => setActive("home")}
        >
          Home
        </Link>

        <Link
          href="#about"
          className={active === "about" ? "active" : ""}
          onClick={() => setActive("about")}
        >
          About me
        </Link>

        <Link
          href="#projects"
          className={active === "projects" ? "active" : ""}
          onClick={() => setActive("projects")}
        >
          Projects
        </Link>

        <Link
          href="#contact"
          className={active === "contact" ? "active" : ""}
          onClick={() => setActive("contact")}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}