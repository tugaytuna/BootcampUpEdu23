import { useState } from "react";
import "./App.css";

function App() {
  const [toggleButton1, setToggleButton1] = useState(false);
  // const [buttonName, setButtonName] = useState("Göster");

  function buttonClicked() {
    // if (toggleButton1 == false) {
    //   setToggleButton1(true);
    // } else {
    //   setToggleButton1(false);
    // }

    // setToggleButton1(toggleButton1 ? false : true);

    setToggleButton1(!toggleButton1);

    // if (toggleButton1 == true) {
    //   setButtonName("Gizle");
    // } else {
    //   setButtonName("Göster");
    // }

    // console.log(toggleButton1);
  }

  return (
    <div className="App">
      <h1>Toggle Example - {toggleButton1.toString()}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur
        earum minus, dolorem, odit impedit dolore ipsa, ipsam labore esse
        tempora sit laudantium voluptatum qui veniam voluptates quasi fugiat
        officia.
      </p>

      <button
        className={toggleButton1 ? "kirmizi" : "yesil"}
        onClick={buttonClicked}
      >
        {toggleButton1 ? "Gizle" : "Göster"}
      </button>
    </div>
  );
}

export default App;
