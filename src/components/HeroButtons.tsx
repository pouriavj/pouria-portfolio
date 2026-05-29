"use client";

import Link from "next/link";

import Button from "@mui/material/Button";

import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";

export default function HeroButtons() {
  return (
    <div className="hero-buttons">
      <Link href="#about">
        <Button
        className="hero-button"
          variant="contained"
          endIcon={<PersonIcon />}
          sx={{
            backgroundColor: "#8171df",
            padding: {
              xs: "8px 24px",
              xl: "10px 32px",
            },
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
            fontFamily: "Poppins",
            "&:hover": {
              backgroundColor: "#6d5dd3",
            },
          }}
        >
          About me
        </Button>
      </Link>

      <Link href="#projects">
        <Button
        className="hero-button"
          variant="outlined"
          endIcon={<CodeIcon />}
          sx={{
            borderColor: "#8171df",
            color: "white",
            padding: {
              xs: "8px 24px",
              xl: "10px 32px",
            },
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
            fontFamily: "Poppins",

            "&:hover": {
              backgroundColor: "rgba(129, 113, 223, 0.12)",
            },
          }}
        >
          Projects
        </Button>
      </Link>
    </div>
  );
}
