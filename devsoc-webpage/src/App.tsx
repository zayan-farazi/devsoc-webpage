// import { useState } from "react";
import { useRef, useState } from "react";
import BottomHalf from "./components/BottomHalf";
import SwapButton from "./components/SwapButton";
import TopHalf from "./components/TopHalf";
import TopHalfMessage from "./components/TopHalfMessage";
import BottomHalfMessage from "./components/BottomHalfMessage";

function App() {
  // essentially, when button is clicked, the two halves should swap, thus re-rendering
  let [isInverted, setIsInverted] = useState(false);

  // created a reference for the bottom half
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleMouseScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (bottomRef.current) {
      bottomRef.current.scrollTop -= e.deltaY;
    }
  }


  return (
    <>
      <div className={isInverted ? "inverted" : ""}>
        <div className="container-fluid vh-100 d-flex flex-column p-0">
          <div className="row g-0 flex-grow-1">
            <div className="d-flex flex-column vh-100">
              {/* this renders the page according to whether the page is flipped or not */}
              {isInverted ? (
                <>
                  <BottomHalf
                    ref = {bottomRef}
                    onWheel={handleMouseScroll}
                  >
                    <BottomHalfMessage></BottomHalfMessage>
                  </BottomHalf>
                  <TopHalf>
                    <TopHalfMessage></TopHalfMessage>
                  </TopHalf>
                </>
              ) : (
                <>
                  <TopHalf>
                    <TopHalfMessage></TopHalfMessage>
                  </TopHalf>
                  <BottomHalf>
                    <BottomHalfMessage></BottomHalfMessage>
                  </BottomHalf>
                </>
              )}
              <SwapButton onClick={() => setIsInverted((prev) => !prev)}>
                {isInverted ? "Unflip & Uninvert" : "Flip & Invert"}
              </SwapButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
