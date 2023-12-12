import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [validText, setValidText] = useState(false);

  useEffect(() => {
    setValidText(false);
    if ((input1.length > 3 && !input1.includes(" ")) || input1 == "") {
      setValidText(true);
    }
  }, [input1]);

  function signUp() {
    console.log(input1);
  }

  return (
    <div className="App">
      <h1>useEffect Kullanımı</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        eius quidem numquam exercitationem mollitia inventore veniam est vitae
        harum laboriosam quis necessitatibus optio totam maiores rem nam
        ducimus, repudiandae ratione.
      </p>
      <input
        className={validText ? "valid" : "notvalid"}
        value={input1}
        onChange={(e) => {
          setInput1(e.target.value);
        }}
        type="text"
      />
      <br />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}

export default App;
