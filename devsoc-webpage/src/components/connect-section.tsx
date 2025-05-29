import React from "react";
import { Mail, GithubIcon, Linkedin, Camera } from "lucide-react";
import "./connect-section.css";

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const contactLinks: ContactLink[] = [
  {
    icon: <Mail size={18} />,
    label: "zayan.farazi1@gmail.com",
    href: "mailto:zayan.farazi1@gmail.com",
  },
  {
    icon: <GithubIcon size={18} />,
    label: "github.com/zayan-farazi",
    href: "https://github.com/zayan-farazi",
  },
  {
    icon: <Linkedin size={18} />,
    label: "linkedin.com/in/zayan-farazi/",
    href: "https://www.linkedin.com/in/zayan-farazi/",
  },
  {
    icon: <Camera size={18} />,
    label: "@zayanfarazi",
    href: "https://www.instagram.com/zayanfarazi/",
  },
];

export default function ConnectSection() {
  return (
    <section className="connect-section">
      <h2 className="connect-title">The End...?</h2>

      <div className="connect-row">
        <div className="connect-info">
          <div className="connect-card text-box">
            <h3>Take me as a trainee please 🙏🏾</h3>
            <p>
              Genuinely, this was such a pain to come up with no experience
              whatsoever, that being said even if this application is
              unsuccessful, thank you for the opportunity to get me out of my
              comfort zone and try a front-end project (even if it's small).
            </p>

            <ul className="contact-list">
              {contactLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <span className="icon">{link.icon}</span>
                    <span className="label">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="connect-image">
          <div className="image-placeholder">
            <img
              src="/photos/eepy.jpeg"
              alt="more cat"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
