import React from "react";
import "./SearchItemStyle.css";

function SearchItem({ username, profileURL, avatarURL }) {
  return (
    <div className="searchItemMain">
      <img src={avatarURL} alt="" />
      <br />
      <a target="_blank" href={profileURL}>
        {username}
      </a>
    </div>
  );
}

export default SearchItem;
