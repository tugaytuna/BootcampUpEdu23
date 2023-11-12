import "./App.css";
import { useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);

  function increase() {
    setCount1(count1 + 1);
  }

  // function decrease() {
  //   setCount1(count1 - 1);
  // }

  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="main">
        <button onClick={() => setCount1(count1 - 1)} className="buttonMinus">
          -
        </button>
        <label className="label1" htmlFor="">
          {count1}
        </label>
        <button onClick={increase} className="buttonPlus">
          +
        </button>
      </div>
    </div>
  );
}

export default App;
