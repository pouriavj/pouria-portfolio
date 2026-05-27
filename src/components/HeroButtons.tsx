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
          variant="contained"
          endIcon={<PersonIcon />}
          sx={{
            backgroundColor: "#8171df",
            padding: "8px 24px",
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
            fontFamily: "Poppins",
          }}
        >
          About me
        </Button>
      </Link>

      <Link href="#projects">
        <Button
          variant="outlined"
          endIcon={<CodeIcon />}
          sx={{
            borderColor: "#8171df",
            color: "white",
            padding: "8px 24px",
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
            fontFamily: "Poppins",

            "&:hover": {
              borderColor: "#8171df",
              backgroundColor: "#8171df",
            },
          }}
        >
          Projects
        </Button>
      </Link>
    </div>
  );
}