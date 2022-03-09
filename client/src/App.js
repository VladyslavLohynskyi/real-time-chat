import "./App.css";
import EventSourcing from "./EventSourcing";
import LongPulling from "./LongPulling";
import WebSock from "./WebSocket";

function App() {
  return (
    <div className="App">
      <WebSock />
    </div>
  );
}

export default App;
