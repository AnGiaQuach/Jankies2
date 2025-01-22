import { useState } from "react";
import Whiteboard from "./components/Whiteboard.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Whiteboard></Whiteboard>
    </div>
  );
}

export default App;
