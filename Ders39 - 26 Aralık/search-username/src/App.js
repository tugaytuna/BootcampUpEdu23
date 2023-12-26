import { useState } from "react";
import axios from "axios";
import "./App.css";
import SearchItem from "./components/SearchItem";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);

  const API_URL = "https://api.github.com/search/users?q=";

  function search() {
    if (searchText == "") {
      return;
    }

    axios.get(API_URL + searchText).then((response) => {
      setSearchData(response.data.items);
    });
  }

  return (
    <div className="App">
      <h1>Github</h1>
      <h2>Username Search</h2>
      <input
        placeholder="type an username..."
        type="text"
        name=""
        id=""
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={search} className="buttonSearch">
        Search
      </button>
      <br />

      {searchData.map((item) => {
        return (
          <SearchItem
            username={item.login}
            profileURL={item.html_url}
            avatarURL={item.avatar_url}
          />
        );
      })}
    </div>
  );
}

export default App;
