import { useState } from "react";
import axios from "axios";
import "./App.css";
import UserCard from "./Components/UserCard/UserCard";

function App() {
  const [data, setData] = useState([]);

  function getData() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
      // console.log(data);
    });
  }

  return (
    <div className="App">
      <h1>Api Kullanımı</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellat
        nihil doloribus est voluptate deleniti neque culpa earum quae ea,
        corrupti molestiae. Molestiae quibusdam doloribus earum nulla.
        Molestiae, blanditiis deleniti.
      </p>
      <button onClick={getData}>Get Data</button>
      <br />
      {data.map((user) => {
        return (
          <UserCard
            fullname={user.name}
            email={user.email}
            address={user.address.city}
            company={user.company.name}
          ></UserCard>
        );
      })}
    </div>
  );
}

export default App;
