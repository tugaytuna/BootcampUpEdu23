import { useState } from "react";
import "./FactsStyle.css";
import axios from "axios";

function Facts() {
  const [fact, setFact] = useState("");
  const API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random";
  //const API_URL_EN = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";
  //const API_URL_DE = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=de";

  function getFacts() {
    axios.get(API_URL).then((data) => {
      //   console.log(data.data);
      setFact(data.data);
    });
  }

  return (
    <div>
      <button onClick={getFacts} className="facts-button1">
        Get New Facts
      </button>
      <p className="Pfacts">{fact.text}</p>
    </div>
  );
}

export default Facts;
