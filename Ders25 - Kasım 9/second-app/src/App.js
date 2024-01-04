import "./App.css";
import NavBar from "./NavBar";
import Post from "./Post";

function App() {
  let name = "tugay";

  console.log("hello react!");
  console.log(name);

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit eveniet
        sequi, dolore ipsa dolorem eum quidem corporis similique, id laudantium
        in laboriosam, non recusandae tenetur vero iure consequatur ab impedit.
      </p>
      <NavBar />
      {/* <Post></Post> */}
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  );
}

export default App;
