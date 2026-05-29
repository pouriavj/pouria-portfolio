import Link from "next/link";

import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>@2026 Pouria Vojdani</p>

        <p>Fullstack Developer</p>

        <p>UI Designer</p>

        <p>Data Analyst</p>

        <p>Designed by @pouriavj</p>
      </div>

      <div className="footer-socials">
        <Link href="https://github.com/pouriavj">
          <GitHubIcon className="footer-social-icon" />
        </Link>

        <Link href="https://linkedin.com/in/yourusername">
          <LinkedInIcon className="footer-social-icon" />
        </Link>
        <Link href="https://t.me/yourusername">
          <TelegramIcon className="footer-social-icon" />
        </Link>
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=pouriav95@gmail.com">
          <EmailIcon className="footer-social-icon" />
        </Link>
      </div>
    </footer>
  );
}
