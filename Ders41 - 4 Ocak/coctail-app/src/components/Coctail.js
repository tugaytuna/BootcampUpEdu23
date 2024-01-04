import { useState, useEffect } from "react";
import "./CoctailStyle.css";

function Coctail({ coctailTitle, coctailImage, coctailInto }) {
  const [intoShorten, setIntoShorten] = useState("");

  useEffect(() => {
    setIntoShorten(coctailInto.substring(0, 100) + "...");
  }, []);

  return (
    <div className="CoctailMainDiv">
      <h4 className="CoctailTitle1">{coctailTitle}</h4>
      <img className="CoctailImg1" src={coctailImage} alt="" />
      <p className="CoctailInto">{intoShorten}</p>
    </div>
  );
}

export default Coctail;
