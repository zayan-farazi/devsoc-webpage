import "./App.css";
import AboutSection from "./components/about-section";
import ConnectSection from "./components/connect-section";
import ExperiencesSection from "./components/experiences-section";
import IntroSection from "./components/intro-section";
import SkillsSection from "./components/skills-section";
import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      <SkillsSection></SkillsSection>
      <IntroSection></IntroSection>
      <AboutSection></AboutSection>
      <ExperiencesSection></ExperiencesSection>
      <ConnectSection></ConnectSection>
    </div>
  );
}
