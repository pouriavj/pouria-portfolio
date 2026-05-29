"use client";
import Image from "next/image";

import Button from "@mui/material/Button";

import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

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
            src="/snippet-editor-image.png"
            alt="Project Snippet Editor"
            width={400}
            height={220}
            className="project-image"
          />

          <h3>Snippet Editor</h3>

          <p>
            A VS Code-inspired editor with powerful coding tools and an
            intuitive file and folder management system.
          </p>

          <div className="project-buttons">
            <Button
              href="https://snippet-editor-lake.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              endIcon={<LaunchIcon />}
              sx={{
                backgroundColor: "#8171df",
                padding: "6px 28px",
                textTransform: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              View Live
            </Button>

            <Button
              href="https://github.com/pouriavj/snippet-editor-app"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              endIcon={<GitHubIcon />}
              sx={{
                borderColor: "#8171df",
                padding: "6px 20px",
                color: "white",
                textTransform: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontFamily: "Poppins",

                "&:hover": {
                  borderColor: "#8171df",
                },
              }}
            >
              Github Repo
            </Button>
          </div>
        </div>

        <div className="project-card">
          <Image
            src="/teashop-portfolio-image.png"
            alt="Project"
            width={400}
            height={220}
            className="project-image"
          />

          <h3>Tea Shop</h3>

          <p>
            A complete ecommerce tea store featuring seamless shopping,
            payments, cart management, and ratings.
          </p>

          <div className="project-buttons">
            <Button
              href="https://pouriavj.github.io/my-ux-samples"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              endIcon={<LaunchIcon />}
              sx={{
                backgroundColor: "#8171df",
                padding: "6px 28px",
                textTransform: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              View Live
            </Button>

            <Button
              href="https://github.com/pouriavj/my-ux-samples"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              endIcon={<GitHubIcon />}
              sx={{
                borderColor: "#8171df",
                padding: "6px 20px",
                color: "white",
                textTransform: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontFamily: "Poppins",

                "&:hover": {
                  borderColor: "#8171df",
                },
              }}
            >
              Github Repo
            </Button>
          </div>
        </div>

        <div className="project-card">
          <Image
            src="/faradate-portfolio-image.png"
            alt="Project"
            width={400}
            height={220}
            className="project-image"
          />

          <h3>Faradate</h3>

          <p>
            A platform for showcasing company services, managing digital
            products, and selling applications online.
          </p>

          <div className="project-buttons">
            <Button
              href="https://faradate.ir"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              endIcon={<LaunchIcon />}
              sx={{
                backgroundColor: "#8171df",
                padding: "6px 28px",
                textTransform: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              View Live
            </Button>

            <Button
              href="https://github.com/pouriavj"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              endIcon={<GitHubIcon />}
              sx={{
                borderColor: "#8171df",
                padding: "6px 20px",
                color: "white",
                textTransform: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontFamily: "Poppins",

                "&:hover": {
                  borderColor: "#8171df",
                },
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
