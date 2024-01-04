import "./App.css";
import CusButton from "./Components/CusButton/CusButton";

function App() {
  return (
    <div className="App">
      <h1>Custom Comp Example</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore
        nihil voluptatem aut molestias, inventore qui totam et illum.
        Necessitatibus aspernatur sed animi excepturi dicta nam mollitia esse
        error corrupti.
      </p>
      <hr />
      <CusButton title={"Kaydet"} />

      <CusButton title={"Giriş Yap"} />

      <CusButton title={"Çıkış Yap"} />

      <CusButton />
    </div>
  );
}

export default App;
