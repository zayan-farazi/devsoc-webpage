import "./SwapButton.css";

export interface SwapButtonProps {
  onFlip: () => void;
  Swapped: boolean;
}

export default function SwapButton({ onFlip, Swapped }: SwapButtonProps) {
  return (
    <button className="swap-button" onClick={onFlip}>
      {Swapped ? "Woah, what happened??" : "Click me & Switch it up!"}
    </button>
  );
}
