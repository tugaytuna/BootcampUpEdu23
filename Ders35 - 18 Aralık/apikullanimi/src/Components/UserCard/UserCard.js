import React from "react";
import "./UserCardStyle.css";

function UserCard({ fullname, email, address, company }) {
  return (
    <div className="mainUserDiv">
      <h4 className="userFullName">{fullname}</h4>
      <h4 className="userEmail">{email}</h4>
      <h4 className="userAddress">Address: {address}</h4>
      <h4 className="userComp">Company: {company}</h4>
    </div>
  );
}

export default UserCard;
