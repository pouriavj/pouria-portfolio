"use client";
import Image from "next/image";

import Button from "@mui/material/Button";

import LaunchIcon from "@mui/icons-material/Launch";

export default function Projects() {
  return (
    <div className="projects-section">
      <h2 className="projects-heading">Featured projects:</h2>

      <p className="projects-description">
        I have worked on many projects throughout my journey as a Fullstack
        Developer. Here are some of my featured real-world applications.
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <Image
            src="/codevault-cover-image.png"
            alt="Project CodeVault Editor"
            width={400}
            height={220}
            priority
            className="project-image"
          />

          <h3>CodeVault</h3>

          <p>
            A VS Code-inspired editor with powerful coding tools and an
            intuitive file and folder management system.
          </p>

          <div className="project-buttons">
            <Button
              className="project-button primary"
              href="https://codevault.ir"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              endIcon={<LaunchIcon />}
              sx={{
                backgroundColor: "#8171df",
                padding: {
                  xs: "6px 26px",
                  xl: "8px 54px",
                },
                textTransform: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              View Live
            </Button>

            <Button
              className="project-button secondary"
              href="https://github.com/pouriavj/codevault"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                borderColor: "#8171df",
                padding: {
                  xs: "6px 26px",
                  xl: "8px 36px",
                },
                color: "white",
                textTransform: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              Github Repo
            </Button>
          </div>
        </div>

        <div className="project-card">
          <Image
            src="/teashop-portfolio-image.png"
            alt="Project Tea Shop"
            width={400}
            height={220}
            priority
            className="project-image"
          />

          <h3>Tea Shop</h3>

          <p>
            A complete ecommerce tea store featuring shopping, payments, cart
            management, and ratings.
          </p>

          <div className="project-buttons">
            <Button
              className="project-button primary"
              href="https://pouriavj.github.io/my-ux-samples"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              endIcon={<LaunchIcon />}
              sx={{
                backgroundColor: "#8171df",
                padding: {
                  xs: "6px 26px",
                  xl: "8px 54px",
                },
                textTransform: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              View Live
            </Button>

            <Button
              className="project-button secondary"
              href="https://github.com/pouriavj/my-ux-samples"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                borderColor: "#8171df",
                padding: {
                  xs: "6px 26px",
                  xl: "8px 36px",
                },
                color: "white",
                textTransform: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              Github Repo
            </Button>
          </div>
        </div>

        <div className="project-card">
          <Image
            src="/faradate-cover-image.png"
            alt="Faradate Website"
            width={400}
            height={220}
            priority
            className="project-image"
          />

          <h3>Faradate</h3>

          <p>
            A platform for showcasing company services, managing digital
            products, and selling applications online.
          </p>

          <div className="project-buttons">
            <Button
              className="project-button primary"
              href="https://faradate.ir"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              endIcon={<LaunchIcon />}
              sx={{
                backgroundColor: "#8171df",
                padding: {
                  xs: "6px 26px",
                  xl: "8px 54px",
                },
                textTransform: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              View Live
            </Button>

            <Button
              className="project-button secondary"
              href="https://github.com/pouriavj"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                borderColor: "#8171df",
                padding: {
                  xs: "6px 26px",
                  xl: "8px 36px",
                },
                color: "white",
                textTransform: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              Github Repo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
