import { useSwap } from "@/SwapContext";

export function FloatingStars() {
  const { isFlipped } = useSwap();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={`star-${i}`}
          className={`absolute w-1 h-1 rounded-full transition-colors duration-1000 ${
            isFlipped ? "bg-yellow-400" : "bg-white"
          }`}
          //   this part was using co-pilot, as the tutorial for flashing stars was too convulated
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animation: "twinkle 3s infinite",
          }}
        />
      ))}
    </div>
  );
}
