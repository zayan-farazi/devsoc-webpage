// import { useState } from "react";
import BottomHalf from "./components/BottomHalf";
import Message from "./components/Message";
import SwapButton from "./components/SwapButton";
import TopHalf from "./components/TopHalf";

function App() {
  // let [isInverted, setIsInverted] = useState(false);
  // essentially, when button is clicked, the two halves should swap, thus re-rendering

  return (
    <>
      <div className="d-flex flex-column vh-100">
        <TopHalf>
          <Message></Message>
        </TopHalf>
        <SwapButton></SwapButton>
        <BottomHalf>
          <Message></Message>
        </BottomHalf>
      </div>
    </>
  );
}

export default App;
