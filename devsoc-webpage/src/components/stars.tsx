import { useMemo } from "react";
import "./stars.css";

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  opacity: number;
}

export default function Stars({ count = 100 }: { count?: number }) {
  // generate stars only once
  const stars: Star[] = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1, // 1px–3px
      opacity: Math.random() * 0.5 + 0.3, // 0.3–0.8
    }));
  }, [count]);

  return (
    <div className="stars-container">
      {stars.map(({ id, top, left, size, opacity }) => (
        <div
          key={id}
          className="star"
          style={{ top, left, width: size, height: size, opacity }}
        />
      ))}
    </div>
  );
}
