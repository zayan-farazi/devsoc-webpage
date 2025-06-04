import { Camera } from "lucide-react";
import { useEffect, useState } from "react";
import "./about-section.css";

interface AboutSectionProps {
  swapped: boolean;
}

export default function AboutSection({ swapped }: AboutSectionProps) {
  const base = import.meta.env.BASE_URL;
  const imageSrc = swapped
    ? `${base}photos/sleep.jpeg`
    : `${base}photos/IMG_2231%20(1).jpeg`;

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-container">
      <div className="half left-half">
        <div
          className="content"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <div className="about-content">
            {!swapped && (
              <>
                <div className="story-section text-box">
                  <h2>My Story</h2>
                  <p>
                    <span className="highlight">
                      I’m a passionate second-year software engineering student
                      with ample experience with C/C++, JS/TS and Python. When
                      I’m not coding, you’ll find me on a cricket field, keeping
                      behind the stumps or on the football pitch, sending it top
                      corner.
                    </span>
                  </p>
                  <p>
                    To be honest, this whole "opposites attract" theme is quite
                    a hassle to get around but click the button if you want to
                    see my best.
                  </p>
                </div>
                <div className="philosophy-section text-box">
                  <h2>Quote of the Day</h2>
                  <blockquote>
                    "And those who were seen dancing were thought to be insane
                    by those who could not hear the music" - Friedrich Nietzsche
                  </blockquote>
                </div>
              </>
            )}
            {swapped && (
              <>
                <div className="story-section text-box">
                  <h2>The Real Me?</h2>
                  <p>
                    I’m a serial binge watcher, managing to binge an entire
                    K-Drama while coding up this project. I might skip my
                    lectures on time but Saturday at 2 am, I’m on HiAnime
                    watching the latest releases.
                  </p>
                </div>
                <div className="philosophy-section text-box">
                  <h2>Quote of the Day</h2>
                  <blockquote>
                    "The art of living happily is to live in the present" -{" "}
                    Pythagoras
                  </blockquote>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="half right-half">
        <div
          className="content"
          style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
        >
          <div className="image-area">
            <div className="image-placeholder">
              <img src={imageSrc}></img>
              <div className="camera-icon">
                <Camera size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
