// import { useState } from "react";
import { useState } from "react";
import BottomHalf from "./components/BottomHalf";
import Message from "./components/Message";
import SwapButton from "./components/SwapButton";
import TopHalf from "./components/TopHalf";

function App() {
  let [isInverted, setIsInverted] = useState(false);
  // essentially, when button is clicked, the two halves should swap, thus re-rendering

  return (
    <>
      <div className="container-fluid vh-100 d-flex flex-column p-0">
        <div className="row g-0 flex-grow-1">
          <div className="d-flex flex-column vh-100">
            <TopHalf>
              <Message></Message>
            </TopHalf>
            <SwapButton onClick={() => setIsInverted((prev) => !prev)}>
              {isInverted ? "Unflip & Uninvert" : "Flip & Invert"}
            </SwapButton>
            <BottomHalf>
              <Message></Message>
            </BottomHalf>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
