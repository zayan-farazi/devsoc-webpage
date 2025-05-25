import BottomHalf from "./components/BottomHalf";
import ListGroup from "./components/ListGroup";
import Message from "./components/Message";
import TopHalf from "./components/TopHalf";

function App() {
  return (
    <>
      <TopHalf>
        <Message></Message>
        <ListGroup></ListGroup>
      </TopHalf>

      <BottomHalf>
        <Message></Message>
      </BottomHalf>
    </>
  );
}

export default App;
