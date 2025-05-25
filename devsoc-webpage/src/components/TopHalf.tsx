import type React from "react";

interface TopHalfProps {
  children: React.ReactNode;
}

function TopHalf({ children }: TopHalfProps) {
  //    using children allows us to add in more elements down the line (photos, texts, lists etc by creating more components
  //    and using them in App.tsx within <TopHalf><TopHalf>)
  return <>{children}</>;
}

export default TopHalf;
