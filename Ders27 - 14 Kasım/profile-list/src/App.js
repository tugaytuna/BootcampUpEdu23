import "./App.css";
import { useState } from "react";

import Post from "./Components/Post/Post";

function App() {
  // const [name, setName] = useState("tugay");
  // setName("tolga");
  // // name = "tolga"; // YANLIŞ
  // console.log(name);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Tugay Tuna",
      age: 18,
      email: "tugay@outlook.com",
      phoneNumber: "0544 444 44 44",
    },
    {
      id: 2,
      name: "Esma Sağlam",
      age: 22,
      email: "esma@outlook.com",
      phoneNumber: "0555 554 45 46",
    },
    {
      id: 3,
      name: "Emir Kabadayı",
      age: 22,
      email: "emir@outlook.com",
      phoneNumber: "0534 354 35 35",
    },
    {
      id: 4,
      name: "Tolga Tuna",
      age: 25,
      email: "tolga@outlook.com",
      phoneNumber: "0534 357 77 77",
    },
    {
      id: 5,
      name: "Ahmet Tuna",
      age: 30,
      email: "ahmet@outlook.com",
      phoneNumber: "0534 358 88 88",
    },
  ]);

  // MAP
  users.map((item) => {
    console.log(item.name);
  });

  return (
    <div className="App">
      <h1>Profile List</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        architecto maxime facilis? Consequatur, accusamus cum placeat expedita
        sequi vitae quos sint eius, sit, veritatis aliquam consequuntur magni
        quisquam aliquid excepturi.
      </p>
      <hr />

      {users.map((item) => {
        return (
          <Post
            key={item.id}
            name={item.name}
            age={item.age}
            email={item.email}
            phoneNumber={item.phoneNumber}
          ></Post>
        );
      })}

      {/* <Post
        name={users[0].name}
        age={users[0].age}
        email={users[0].email}
        phoneNumber={users[0].phoneNumber}
      ></Post>

      <Post
        name={users[1].name}
        age={users[1].age}
        email={users[1].email}
        phoneNumber={users[1].phoneNumber}
      ></Post>

      <Post
        name={users[2].name}
        age={users[2].age}
        email={users[2].email}
        phoneNumber={users[2].phoneNumber}
      ></Post> */}
    </div>
  );
}

export default App;
