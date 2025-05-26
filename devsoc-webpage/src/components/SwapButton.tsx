import type React from "react";

interface SwapButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

function SwapButton({ onClick, children }: SwapButtonProps) {
  return (
    <button
      type="button"
      className="btn btn-primary btn-lg"
      // changed functionality to setup swapping halves when clicked.
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SwapButton;
