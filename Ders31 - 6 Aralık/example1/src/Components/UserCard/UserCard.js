import React from "react";
import "./UserCardStyle.css";

function UserCard({ fullname, email, phoneNumber }) {
  return (
    <div className="UserCardMain">
      <h4>{fullname}</h4>
      <h5>{email}</h5>
      <h5>{phoneNumber}</h5>
    </div>
  );
}

export default UserCard;
