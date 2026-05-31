"use client";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Link from "next/link";

import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Controller } from "react-hook-form";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { useActionState, useEffect, useState } from "react";
import * as actions from "@/actions";

export default function Contact() {
  const [formState, submitAction, isPending] = useActionState(
    actions.sendMessage,
    { message: "", timestamp: Date.now() },
  );
  // Custom Generic Hook to handle RHF and UAS hooks submission
  const { control, formRef, handleFormSubmit, rhfErrors, reset } =
    useFormSubmission(submitAction);
  const [displayMessage, setDisplayMessage] = useState("");
  useEffect(() => {
    if (!formState.message) return;

    setDisplayMessage(formState.message);
    reset();
    const timeout = setTimeout(() => {
      setDisplayMessage("");
    }, 4000);

    return () => clearTimeout(timeout);
  }, [formState.timestamp]);
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
        <div>
          <form
            ref={formRef}
            onSubmit={handleFormSubmit}
            className="contact-form"
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  onChange={(e) => {
                    field.onChange(e); // For live error update
                  }}
                  error={!!rhfErrors.name}
                  helperText={rhfErrors.name?.message}
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
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  onChange={(e) => {
                    field.onChange(e); // For live error update
                  }}
                  error={!!rhfErrors.email}
                  helperText={rhfErrors.email?.message}
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
              )}
            />
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  onChange={(e) => {
                    field.onChange(e); // For live error update
                  }}
                  error={!!rhfErrors.message}
                  helperText={rhfErrors.message?.message}
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
              )}
            />
            <Button
              type="submit"
              loading={isPending}
              className="primary"
              variant="contained"
              sx={{
                backgroundColor: "#8171df",
                padding: "12px 60px",
                textTransform: "none",
                borderRadius: "8px",
                fontWeight: 600,
                fontFamily: "Poppins",
                alignSelf: "flex-start",
              }}
            >
              Send
            </Button>
            {displayMessage === "ok" && (
              <div className="success-message">
                ✓ Your message has been sent successfully.
              </div>
            )}

            {displayMessage.includes("error") && (
              <div className="error-message">✕ {displayMessage}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
