import { Camera } from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutSection() {
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
      {/* Left Half - Content */}
      <div className="half left-half">
        <div
          className="content"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <div className="about-content">
            <div className="story-section">
              <h2>My Story</h2>
              <p>
                <span className="highlight">
                  I'm a passionate second-year software engineering student with
                  ample experience with C/C++, JS/TS and Python. When I'm not
                  coding, you'll find me on a cricket field, keeping behind the
                  stumps or on the football pitch, sending it top corner.
                </span>{" "}
              </p>
              <p>
                To be honest, this whole "opposites attract" theme is quite a
                hassle to get around but click the button if you want to see my
                best.
              </p>
            </div>

            <div className="philosophy-section">
              <h2>Philosophy</h2>
              <blockquote>
                "And those who were seen dancing were thought to be insane by
                those who could not hear the music" - Friedrich Nietzche
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Right Half - Image Area */}
      <div className="half right-half">
        <div
          className="content"
          style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
        >
          <div className="image-area">
            <div className="image-placeholder">
              <div className="camera-icon">
                <Camera size={24} />
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
                <div className="camera-icon">
                  <Camera size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="half right-half-inverted">
          <div className="content upside-down">
            <div className="about-content">
              <div className="philosophy-section">
                <blockquote>placeholder</blockquote>
                <h2>yhposolihP</h2>
              </div>

              <div className="story-section">
                <p>
                  !gnicneirepxe er'uoy egap yrev siht ekil - sehcaorppa
                  lanoitnevnocnu htiw gnitnemirexe evol I dna ,ytillaer otni
                  saedi mrofsnaRT ot ygolonhcet fo rewop eht ni eveileb I
                </p>
                <p>
                  .sevitcepsrep euqinu morf dlrow eht gnirutpac aremaC a dniheb
                  em dnif ll'uoy ,gnidoc ton m'I nehW{" "}
                  <span className="highlight">
                    seiradnuob hsup taht secneirepxe latigid gnitaerc ecneirepxe
                    fo sraey +5 htiw repoleved kcats-lluf etanoissap a m'I
                  </span>
                </p>
                <h2>yrotS yM</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
