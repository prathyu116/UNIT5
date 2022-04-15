import React, { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";

const App = () => {
  const [show, setShow] = useState(false);


  return (
    <div className="App">
      {show && <Timer startTime={0} endTime={10} /> }
      <button onClick={() => setShow(!show)}>{show ? "Hidetimer" : "Showtimer"}</button>
    </div>
  );
};

export default App;


