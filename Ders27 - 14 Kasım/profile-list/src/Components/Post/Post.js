import React from "react";
import "./PostStyle.css";

function Post({ name, email, age, phoneNumber }) {
  return (
    <div className="postMain">
      <h2 className="postName">{name}</h2>
      <h3 className="postEmail">{email}</h3>
      <h4 className="postAge">Yaş: {age}</h4>
      <h4 className="postNumber">Telefon: {phoneNumber}</h4>
      {/* <h6>Admin: YES</h6> */}
    </div>
  );
}

export default Post;
