import React from "react";
import "./experiences-section.css";

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const normalData: Experience[] = [
  {
    title: "God of War/God of War Ragnarok",
    company: "Sony Interactive Entertainment",
    period: "2018 – 2022",
    description:
      "Fully 100% the story, achievements and collectibles on NG+, got the platinum as well.",
  },
  {
    title: "Call of Duty",
    company: "Treyarch, Sledgehammer Games, Activision",
    period: "2012 – Present",
    description:
      "I make it my mission to complete the campaign on the hardest difficulty every year and don't get me started on the multiplayer.",
  },
];

const flippedData: Experience[] = [
  {
    title: "Sekiro: Shadows Die Twice",
    company: "FromSoftware",
    period: "2019 - Present",
    description:
      "Genuinely, I haven't been able to get past the third boss, really questioned my will to live. Every time I go to pick this game up, I remember my sanity and put it back down.",
  },
  {
    title: "Genshin Impact",
    company: "miHoYo",
    period: "2020 - Present",
    description: "Nothing needs to be said, I've lost too many 50/50's.",
  },
];

const ExperiencesSection: React.FC<{ swapped?: boolean }> = ({ swapped }) => {
  const base = import.meta.env.BASE_URL;

  const imageFiles = swapped
    ? [`${base}photos/j.jpg`, `${base}photos/download.jpg`]
    : [`${base}photos/gow.jpg`, `${base}photos/cod.jpg`];

  const data = swapped ? flippedData : normalData;
  const header = swapped
    ? "Games I routinely get demolished by"
    : "Games I've demolished";

  return (
    <section className="experiences-section">
      <div className="section-title text-box">
        <h3>{header}</h3>
      </div>
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
            <div className="image-placeholder">
              <img
                src={imageFiles[idx]}
                alt={exp.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperiencesSection;
