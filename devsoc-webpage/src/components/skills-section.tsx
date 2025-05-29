import { useState, useEffect } from "react";
import { Monitor } from "lucide-react";
import "./skills-section.css";

const SkillsSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check if section is in viewport to trigger animations
      const element = document.querySelector(".skills-container");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // creating arrays for tables almost souls-like meters
  const normalSkills = [
    { skill: "Cooking", level: 95 },
    { skill: "TypeScript", level: 90 },
    { skill: "Blowing up Capacitators", level: 88 },
    { skill: "Cricket", level: 85 },
    { skill: "Creative Problem Solving", level: 82 },
    { skill: "Curating Music Playlists", level: 98 },
  ];

  // should only be seen when flipped button is clicked
  const flippedSkills = [
    { skill: "Procrastinating", level: 95 },
    { skill: "Dodging MyExperience Surveys", level: 88 },
    { skill: "Watching Reels", level: 92 },
    { skill: "Skipping Lectures", level: 85 },
    { skill: "Grinding RPGs", level: 90 },
    { skill: "Watching Indian men on YouTube coding", level: 78 },
  ];

  return (
    <div className="skills-container">
      {/* Left Half - Skills */}
      <div className="half left-half">
        <div
          className="content"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <div className="skills-content">
            <h3>My Skills & Talents!</h3>
            <div className="skills-grid">
              {normalSkills.map((skill, index) => (
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
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Half - Image Area */}
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

      {/* Upside Down Version (Hidden for now, can be revealed with flip) */}
      <div className="upside-down-content">
        <div className="half left-half-inverted">
          <div className="content upside-down">
            <div className="image-area">
              <div className="image-placeholder inverted">
                <div className="monitor-icon">
                  <Monitor size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="half right-half-inverted">
          <div className="content upside-down">
            <div className="skills-content">
              <div className="skills-grid">
                {flippedSkills.map((skill, index) => (
                  <div key={`inverted-${skill.skill}`} className="skill-item">
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 0.1}s`,
                        }}
                      ></div>
                    </div>
                    <div className="skill-header">
                      <span className="skill-percentage">%{skill.level}</span>
                      <h3>{skill.skill.split("").reverse().join("")}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
