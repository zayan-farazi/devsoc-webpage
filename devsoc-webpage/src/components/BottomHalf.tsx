import type React from "react";
import { forwardRef } from "react";

interface BottomHalfProps {
  children: React.ReactNode;
  onWheel?: React.WheelEventHandler<HTMLDivElement>;
}

const BottomHalf = forwardRef<HTMLDivElement, BottomHalfProps>(
  ({ children, onWheel }, ref) => (
    <div ref={ref} className="half" id="bottom-half" onWheel={onWheel}>
      {children}
    </div>
  )
);

BottomHalf.displayName = "BottomHalf";

export default BottomHalf;
