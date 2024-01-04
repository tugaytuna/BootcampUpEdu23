import { useState } from "react";
import axios from "axios";
import "./App.css";
import Coctail from "./components/Coctail";

function App() {
  const [allCoctails, setAllCoctails] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [alcoholic, setAlcoholic] = useState(false);

  const API_ListAllLetter =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c";

  const API_SearchbyName =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  function getAllCoctails() {
    axios.get(API_SearchbyName + inputSearch).then((response) => {
      console.log(response.data.drinks);
      setAllCoctails(response.data.drinks);
    });
  }

  return (
    <div className="App">
      <h1>Coctail App</h1>
      <input
        className="searchCoctail"
        placeholder="write a coctail..."
        type="text"
        name=""
        id=""
        value={inputSearch}
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
      />
      <br />
      <button className="searchButton" onClick={getAllCoctails}>
        Search
      </button>

      <br />

      <button
        className={alcoholic ? "alcoButton checked" : "alcoButton"}
        onClick={() => {
          setAlcoholic(true);
        }}
      >
        Alcoholic
      </button>
      <button
        className={alcoholic ? "alcoButton" : "alcoButton checked"}
        onClick={() => {
          setAlcoholic(false);
        }}
      >
        Non-Alcoholic
      </button>

      <br />

      {allCoctails.map((item) => {
        let alco = alcoholic ? "Alcoholic" : "Non alcoholic";
        if (item.strAlcoholic == alco) {
          return (
            <Coctail
              coctailTitle={item.strDrink}
              coctailImage={item.strDrinkThumb}
              coctailInto={item.strInstructions}
            ></Coctail>
          );
        }
      })}
    </div>
  );
}

export default App;
