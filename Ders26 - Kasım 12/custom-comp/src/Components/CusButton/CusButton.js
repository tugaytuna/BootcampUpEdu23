import React from "react";
import "./CusButtonStyle.css";

function CusButton({ title = "Test" }) {
  title = title.toUpperCase();

  return (
    <div className="btnMain">
      <button className="btnKaydet">{title}</button>
    </div>
  );
}

export default CusButton;
