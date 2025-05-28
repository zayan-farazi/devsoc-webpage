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
  let isFlipped;
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
    ></section>
  );
}
