import { useSwap } from "../SwapContext";

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

export function SkilsSection() {
  //   isFlipped needs to be revamped, but skills should show flippedSkills if isFlipped is true, else show normal skills.
  const { isFlipped } = useSwap();
  const skills = isFlipped ? flippedSkills : normalSkills;

  return (
    <section
      // transitions come from tailwind, easier than doing it myself
      className="py-20 px-8 transition-all duration-1000"
      style={{
        // this should flip & invert colours the table when isFlipped is true
        transform: isFlipped ? "scaleY(-1)" : "scaleY(1)",
        filter: isFlipped ? "invert(1) hue-rotate(180deg)" : "none",
      }}
    >
      {/* making a header here */}
      <div className="max-w-6xl mx-auto">
        <h3
          className={`text-3xl font-bold text-center mb-12 transition-colors duration-1000 ${
            isFlipped ? "text-yellow-400" : "text-purple-400"
          }`}
          style={{
            // since the section is already flipped but we want the text right side up, we need to flip the header again
            transform: isFlipped ? "scaleY(-1)" : "scaleY(1)",
          }}
        >
          {isFlipped ? "My ACTUAL Skills" : "Skills I tell everyone"}
        </h3>

        {/* creating two column setup here */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isFlipped ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Skills List */}
          <div
            className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 transform ${
              isFlipped ? "lg:col-start-2" : ""
            }`}
          >
            {/* this creates a loading bar from the skill arrays */}
            {skills.map((item, index) => (
              <div
                key={`skill-${item.skill}-${index}`}
                className={`p-4 rounded-lg transition-all duration-1000 ${
                  isFlipped ? "bg-slate-700" : "bg-slate-800"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  transform: isFlipped ? "scaleY(-1)" : "scaleY(1)",
                }}
              >
                <h4 className="text-white font-semibold mb-2">{item.skill}</h4>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      isFlipped ? "bg-yellow-400" : "bg-purple-400"
                    }`}
                    style={{
                      width: `${item.level}%`,
                      transitionDelay: `${index * 50 + 200}ms`,
                    }}
                  />
                </div>
                <span className="text-sm text-gray-400">{item.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
