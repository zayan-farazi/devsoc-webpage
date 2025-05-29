import { useEffect, useState } from "react";

export default function IntroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Left Half - Normal */}
      <div className="half left-half">
        <div
          className="content"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="about-section">
            <div className="profile-image">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Profile"
                className="avatar"
              />
            </div>
            <div className="intro-text">
              <h1>Hi, I'm</h1>
            </div>
            <div className="description">
              <p>
                Full-stack developer, photographer, and reality bender who loves
                creating immersive digital experiences
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Half - Upside Down */}
      <div className="half right-half">
        <div
          className="content upside-down"
          style={{
            transform: `translateY(${-scrollY * 0.1}px) rotate(180deg)`,
          }}
        >
          <div className="about-section">
            <div className="description">
              <p>
                secneirepxe latigid evisremmi gnitaerc sevol ohw redneb ytillaer
                dna ,rehpargotohp ,repoleved kcats-lluF
              </p>
            </div>
            <div className="intro-text">
              <h1>m'I ,iH</h1>
            </div>
            <div className="profile-image">
              <div className="avatar-inverted"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
        <div className="floating-dot dot-4"></div>
        <div className="floating-dot dot-5"></div>
        <div className="floating-star star-1">★</div>
      </div>
    </div>
  );
}
