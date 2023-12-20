import { useState } from "react";
import "./FactsStyle.css";
import axios from "axios";

function Facts() {
  const [fact, setFact] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const [lang, setLang] = useState("en");

  const API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=";
  //const API_URL_EN = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";
  //const API_URL_DE = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=de";

  function getFacts() {
    setLoading(true);
    axios
      .get(API_URL + lang)
      .then((data) => {
        //   console.log(data.data);
        setErr(false);
        setFact(data.data);
      })
      .catch((err) => {
        setErr(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <label htmlFor="eng">English</label>
      <input
        type="radio"
        name="lan"
        id="eng"
        onChange={() => {
          setLang("en");
        }}
      />
      <label htmlFor="de">German</label>
      <input
        type="radio"
        name="lan"
        id="de"
        onChange={(e) => {
          setLang("de");
        }}
      />
      <br />
      <br />
      <button onClick={getFacts} className="facts-button1">
        Get New Facts
      </button>
      <p className="Pfacts">{loading ? "Loading..." : fact.text}</p>
      {!err || (
        <h4 style={{ color: "#B80000" }}>
          There is an error! Please try again and check your connection.
        </h4>
      )}
      {/* <h6>{fact.source}</h6> */}
    </div>
  );
}

export default Facts;
