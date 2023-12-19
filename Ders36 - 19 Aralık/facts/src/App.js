import "./App.css";
import { useState } from "react";
import Facts from "./Components/Facts/Facts";

function App() {
  const [input1, setInput1] = useState("");

  return (
    <div className="App">
      <h1>Random Facts</h1>
      {/* <input
        type="text"
        onChange={(e) => {
          if (/^[0-9]*$/.test(e.target.value)) {
            setInput1(e.target.value);
          }
        }}
        value={input1}
        placeholder={"0-9"}
        style={{ textAlign: "center" }}
      /> */}

      <Facts></Facts>
    </div>
  );
}

export default App;
