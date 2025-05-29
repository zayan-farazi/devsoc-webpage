import { useState, useEffect } from "react";
import { Monitor } from "lucide-react";
import "./skills-section.css";

interface SkillsSectionProps {
  swapped: boolean;
}

const SkillsSection = ({ swapped }: SkillsSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const element = document.querySelector(".skills-container");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const normalSkills = [
    { skill: "Cooking", level: 95 },
    { skill: "TypeScript", level: 90 },
    { skill: "Blowing up Capacitators", level: 88 },
    { skill: "Cricket", level: 85 },
    { skill: "Creative Problem Solving", level: 82 },
    { skill: "Curating Music Playlists", level: 98 },
  ];

  const flippedSkills = [
    { skill: "Procrastinating", level: 95 },
    { skill: "Dodging MyExperience Surveys", level: 88 },
    { skill: "Watching Reels", level: 92 },
    { skill: "Skipping Lectures", level: 85 },
    { skill: "Grinding RPGs", level: 90 },
    { skill: "Watching Indian men on YouTube coding", level: 78 },
  ];

  const skillsToShow = swapped ? flippedSkills : normalSkills;

  return (
    <div className="skills-container">
      <div className="half left-half">
        <div
          className="content"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <div className="skills-content">
            <h3>{swapped ? "My Actual Skills…" : "My Skills & Talents!"}</h3>
            <div className="skills-grid">
              {skillsToShow.map((skill, index) => (
                <div key={skill.skill} className="skill-item text-box">
                  <div className="skill-header">
                    <h3>{skill.skill}</h3>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="half right-half">
        <div
          className="content"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <div className="image-area">
            <div className="image-placeholder">
              <div className="monitor-icon">
                <Monitor size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
