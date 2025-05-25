import type React from "react";

interface BottomHalfProps {
  children: React.ReactNode;
}

function BottomHalf({ children }: BottomHalfProps) {
  return <>{children}</>;
}

export default BottomHalf;
