import { useState } from "react";
import "./LoginStyle.css";

function Login() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  function buttonClicked() {
    // console.log(inputUsername + " " + inputPassword);

    if (
      inputUsername === "tugaytuna@outlook.com.tr" &&
      inputPassword === "12345678910"
    ) {
      console.log("Bilgiler doğru");
    } else {
      console.log("Hatalı giriş yaptınız!");
    }
  }

  function testbutton() {
    setInputUsername("tugaytuna@outlook.com.tr");
    setInputPassword("12345678910");
  }

  return (
    <div className="LoginDiv">
      <button onClick={testbutton}>test</button>
      <input
        className="input1"
        placeholder="kullanıcı adı..."
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
        placeholder="şifre..."
        type="password"
        value={inputPassword}
        onChange={(e) => {
          setInputPassword(e.target.value);
        }}
        name=""
        id=""
      />
      <button onClick={buttonClicked} className="button1">
        Giriş Yap
      </button>

      {/* <h2>Merhaba {inputUsername}</h2> */}
    </div>
  );
}

export default Login;
