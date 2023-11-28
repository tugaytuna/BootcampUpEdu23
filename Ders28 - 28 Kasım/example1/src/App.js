import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("tugay");

  const [dizi1, setDizi1] = useState([name, "esma", "emir", "ahmet"]);

  function buttonClicked() {
    // setName("tolga");
  }

  return (
    <div className="App">
      <h1>Example 1</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
        nostrum deleniti necessitatibus, dignissimos blanditiis minus repellat
        optio. Quae explicabo et ipsam incidunt tempora assumenda perferendis?
        Numquam sit sapiente commodi aperiam!
      </p>
      <hr />
      <h3>{name}</h3>

      {/* <h2>{dizi1[0]}</h2>
      <h2>{dizi1[1]}</h2>
      <h2>{dizi1[2]}</h2>
      <h2>{dizi1[3]}</h2> */}

      {dizi1.map((item) => {
        return <h2>{item}</h2>;
      })}

      <button onClick={buttonClicked}>Test</button>
    </div>
  );
}

export default App;
