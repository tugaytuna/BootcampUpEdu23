import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [allCoctails, setAllCoctails] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

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

      {allCoctails.map((item) => {
        if (item.strAlcoholic == "Alcoholic") {
          return (
            <div>
              <h6>{item.strDrink}</h6>
              <label htmlFor="">{item.strAlcoholic}</label>
              <img height={100} width={100} src={item.strDrinkThumb} alt="" />
            </div>
          );
        }
      })}
    </div>
  );
}

export default App;
