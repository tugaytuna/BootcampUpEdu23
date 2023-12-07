import { useState } from "react";
import "./UserCardStyle.css";

function UserCard({ fullname, email, phoneNumber, age, profilePic }) {
  const [toggleShowMore, setToggleShowMore] = useState(false);

  function toggleShowMoreClicked() {
    setToggleShowMore(!toggleShowMore);
  }

  return (
    <div className="UserCardMain">
      <img className="profilePic1" src={profilePic} alt="" />
      <h4 className="userCardFullname">{fullname}</h4>
      <h5 className="userCardEmail">{email}</h5>
      <button className="buttonToggle" onClick={toggleShowMoreClicked}>
        {toggleShowMore ? "show less..." : "show more..."}
      </button>
      {!toggleShowMore || (
        <div>
          <h5 className="userCardPhoneNumber">{phoneNumber}</h5>
          <h5 className="userCardPhoneNumber">{age} years old.</h5>
        </div>
      )}
    </div>
  );
}

export default UserCard;
