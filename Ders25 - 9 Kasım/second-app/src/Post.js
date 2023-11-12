import React from "react";
import "./PostStyle.css";

function Post() {
  function buttonClicked() {
    console.log("buton tıklandı!");
  }

  return (
    <div>
      <hr />
      <h4 className="postBaslik">Post 1</h4>
      <p className="postP">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officia
        iste, expedita aspernatur quis ipsum? Qui necessitatibus fuga, culpa
        animi quod nobis pariatur nesciunt iure, ad minima accusamus maxime
        fugit!
      </p>
      <button onClick={buttonClicked}>Kaydet</button>
      <hr />
    </div>
  );
}

export default Post;
