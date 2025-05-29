import { useState } from "react";
import AboutSection from "./components/about-section";
import ConnectSection from "./components/connect-section";
import ExperiencesSection from "./components/experiences-section";
import IntroSection from "./components/intro-section";
import SkillsSection from "./components/skills-section";
import SwapButton from "./components/SwapButton";
import Stars from "./components/stars";
import "./index.css";
import "./App.css";

export default function App() {
  const [swapped, setSwapped] = useState(false);
  const [fading, setFading] = useState(false);

  const handleSwap = () => {
    // start fade-out
    setFading(true);

    // after fade duration, toggle swap & fade back in
    setTimeout(() => {
      setSwapped((s) => !s);
      setFading(false);
    }, 400); // match this to the CSS transition time
  };

  return (
    <>
      <Stars count={200} />
      <SwapButton onFlip={handleSwap} Swapped={swapped} />
      {/* wrapper that handles the fade */}
      <div className={`app-wrapper${fading ? " fade-out" : ""}`}>
        <div className={`app-container${swapped ? " swapped" : ""}`}>
          <IntroSection />
          <AboutSection swapped={swapped} />
          <SkillsSection swapped={swapped} />
          <ExperiencesSection swapped={swapped} />
          <ConnectSection />
        </div>
      </div>
    </>
  );
}
