import "./SwapButton.css";

export interface SwapButtonProps {
  onFlip: () => void;
}

export default function SwapButton({ onFlip }: SwapButtonProps) {
  return (
    <button className="swap-button" onClick={onFlip}>
      Click me & Switch it up!
    </button>
  );
}
