import type React from "react";

interface BottomHalfProps {
  children: React.ReactNode;
}

function BottomHalf({ children }: BottomHalfProps) {
  return (
    <>
      {/* used div blocks to section out the two halves */}
      <div className="half" id="BottomHalf">
        {children}
      </div>
    </>
  );
}

export default BottomHalf;
