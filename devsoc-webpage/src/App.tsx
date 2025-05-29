import { useState } from "react";
import AboutSection from "./components/about-section";
import ConnectSection from "./components/connect-section";
import ExperiencesSection from "./components/experiences-section";
import IntroSection from "./components/intro-section";
import SkillsSection from "./components/skills-section";
import SwapButton from "./components/SwapButton";
import "./index.css";
import "./App.css";
import Stars from "./components/stars";

export default function App() {
  const [swapped, setSwapped] = useState(false);
  const handleSwap = () => setSwapped((f) => !f);

  return (
    <>
      <Stars count={200}></Stars>
      <SwapButton onFlip={handleSwap} Swapped={swapped}></SwapButton>
      <div className={`app-container ${swapped ? " swapped" : ""}`}>
        <IntroSection></IntroSection>
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
        <ExperiencesSection></ExperiencesSection>
        <ConnectSection></ConnectSection>
      </div>
    </>
  );
}
