import { useState } from "react";
import "./LoginStyle.css";
import UserCard from "../UserCard/UserCard";

function Login() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const [users, setUsers] = useState([
    {
      id: 1,
      fullname: "Tugay Tuna",
      username: "tugayt",
      password: 1234,
      age: 18,
      email: "tugay@outlook.com",
      phoneNumber: "0544 444 44 44",
    },
    {
      id: 2,
      fullname: "Esma Sağlam",
      username: "esmas",
      password: 555,
      age: 22,
      email: "esma@outlook.com",
      phoneNumber: "0555 554 45 46",
    },
    {
      id: 3,
      fullname: "Emir Kabadayı",
      username: "emirk",
      password: 888,
      age: 22,
      email: "emir@outlook.com",
      phoneNumber: "0534 354 35 35",
    },
    {
      id: 4,
      fullname: "Tolga Tuna",
      username: "tolgat",
      password: 999,
      age: 25,
      email: "tolga@outlook.com",
      phoneNumber: "0534 357 77 77",
    },
    {
      id: 5,
      fullname: "Ahmet Tuna",
      username: "ahmett",
      password: 777,
      age: 30,
      email: "ahmet@outlook.com",
      phoneNumber: "0534 358 88 88",
    },
  ]);

  function buttonClicked() {
    // console.log(inputUsername, inputPassword);
    // console.log(users);

    users.map((user) => {
      if (user.username == inputUsername && user.password == inputPassword) {
        setIsLogin(true);
      }
    });
  }

  return (
    <div>
      {/* {isLogin ? (
        <div>
          {" "}
          <button
            onClick={() => {
              setIsLogin(false);
              setInputPassword("");
              setInputUsername("");
            }}
          >
            Log out
          </button>{" "}
          <br></br>{" "}
        </div>
      ) : (
        <></>
      )} */}
      {isLogin ? (
        users.map((item) => {
          return (
            <UserCard
              fullname={item.fullname}
              email={item.email}
              phoneNumber={item.phoneNumber}
            ></UserCard>
          );
        })
      ) : (
        <div className="LoginMainDiv">
          <input
            className="input1"
            placeholder="write your username.."
            type="text"
            value={inputUsername}
            onChange={(e) => {
              setInputUsername(e.target.value);
            }}
            name=""
            id=""
          />
          <input
            className="input1"
            placeholder="write your password..."
            type="password"
            value={inputPassword}
            onChange={(e) => {
              setInputPassword(e.target.value);
            }}
            name=""
            id=""
          />
          <button onClick={buttonClicked}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;
