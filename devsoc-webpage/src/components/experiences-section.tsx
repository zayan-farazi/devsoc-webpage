import React from "react";
import "./experiences-section.css";

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const data: Experience[] = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 – Present",
    description:
      "Leading development of innovative web applications using React, Next.js, and Node.js. Mentoring junior developers and implementing best practices.",
  },
  {
    title: "Frontend Developer",
    company: "Creative Digital Agency",
    period: "2020 – 2022",
    description:
      "Developed responsive websites and interactive experiences for high-profile clients. Specialized in modern JavaScript frameworks and creative animations.",
  },
];

const ExperiencesSection: React.FC = () => {
  return (
    <section className="experiences-section">
      {data.map((exp, idx) => (
        <div
          key={idx}
          className={`experience-row ${idx % 2 === 0 ? "left" : "right"}`}
        >
          <div className="experience-card text-box">
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-meta">
              {exp.company} • {exp.period}
            </p>
            <p className="experience-description">{exp.description}</p>
          </div>
          <div className="experience-image">
            <div className="image-placeholder" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperiencesSection;
