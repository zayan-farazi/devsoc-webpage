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
      <h2 className="connect-title">Let's Connect</h2>

      <div className="connect-row">
        {/* Left: Info Card */}
        <div className="connect-info">
          <div className="connect-card">
            <h3>Get In Touch</h3>
            <p>
              Ready to collaborate on something amazing? Whether it’s a
              development project, photography session, or just a chat about
              flipping reality, I’d love to hear from you!
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

            <div className="connect-actions">
              <button className="btn solid">
                <Mail size={16} /> Send Message
              </button>
              <button className="btn outline">
                <Camera size={16} /> View Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Right: Placeholder Image */}
        <div className="connect-image">
          <div className="image-placeholder" />
        </div>
      </div>
    </section>
  );
}
