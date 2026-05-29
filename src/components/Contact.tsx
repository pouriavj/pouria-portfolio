"use client";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Link from "next/link";

import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-left">
        <p className="contact-subtitle">Connect With Me:</p>

        <p className="contact-heading">Satisfied with me? Please contact me</p>

        <div className="contact-socials">
          <Link href="https://github.com/pouriavj">
            <GitHubIcon className="contact-social-icon" />
          </Link>

          <Link href="https://www.linkedin.com/in/pouriavojdani">
            <LinkedInIcon className="contact-social-icon" />
          </Link>

          
          <Link href="https://t.me/pouriavj">
            <TelegramIcon className="contact-social-icon" />
          </Link>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=pouriav95@gmail.com">
            <EmailIcon className="contact-social-icon" />
          </Link>
        </div>
      </div>

      <div className="contact-right">
        <h3>Contact me, let's make magic together </h3>
        <div className="contact-form">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            spellCheck={false}
            sx={{
              "& .MuiInputLabel-root": {
                color: "#cfcfcf",
                fontFamily: "Poppins",
              },

              "& .MuiOutlinedInput-root": {
                color: "white",
                fontFamily: "Poppins",
                backgroundColor: "#32323f",
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "#4a4a5e",
                },

                "&:hover fieldset": {
                  borderColor: "#8171df",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#8171df",
                },
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#8171df",
              },
              "& input:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #32323f inset",
                WebkitTextFillColor: "white",
                transition: "background-color 5000s ease-in-out 0s",
              },

              "& input:-webkit-autofill:hover": {
                WebkitBoxShadow: "0 0 0 100px #32323f inset",
                WebkitTextFillColor: "white",
              },

              "& input:-webkit-autofill:focus": {
                WebkitBoxShadow: "0 0 0 100px #32323f inset",
                WebkitTextFillColor: "white",
              },
            }}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiInputLabel-root": {
                color: "#cfcfcf",
                fontFamily: "Poppins",
              },

              "& .MuiOutlinedInput-root": {
                color: "white",
                fontFamily: "Poppins",
                backgroundColor: "#32323f",
                borderRadius: "8px",

                "& fieldset": {
                  borderColor: "#4a4a5e",
                },

                "&:hover fieldset": {
                  borderColor: "#8171df",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#8171df",
                },
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#8171df",
              },
              "& input:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #32323f inset",
                WebkitTextFillColor: "white",
                transition: "background-color 5000s ease-in-out 0s",
              },

              "& input:-webkit-autofill:hover": {
                WebkitBoxShadow: "0 0 0 100px #32323f inset",
                WebkitTextFillColor: "white",
              },

              "& input:-webkit-autofill:focus": {
                WebkitBoxShadow: "0 0 0 100px #32323f inset",
                WebkitTextFillColor: "white",
              },
            }}
          />

          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            sx={{
              "& .MuiInputLabel-root": {
                color: "#cfcfcf",
                fontFamily: "Poppins",
              },

              "& .MuiOutlinedInput-root": {
                color: "white",
                fontFamily: "Poppins",
                backgroundColor: "#32323f",
                borderRadius: "8px",

                "& fieldset": {
                  borderColor: "#4a4a5e",
                },

                "&:hover fieldset": {
                  borderColor: "#8171df",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#8171df",
                },
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#8171df",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8171df",
              padding: "12px 62px",
              textTransform: "none",
              borderRadius: "8px",
              fontWeight: 600,
              fontFamily: "Poppins",
              alignSelf: "flex-start",

              "&:hover": {
                backgroundColor: "#6d5dd3",
              },
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
