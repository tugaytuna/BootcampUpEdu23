import React from "react";
import "./AboutMeStyle.css";

function AboutMe() {
  return (
    <div className="aboutme-main-div">
      <div>
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div>
        <label htmlFor="">Who is Tugay Tuna?</label>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          officiis dolore eum ratione, facilis quaerat ullam natus pariatur nisi
          itaque iure quasi rerum eos quam, expedita sunt minima ipsum hic?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          dicta porro, magnam alias iusto nobis ducimus dolorem minus esse vitae
          beatae rerum impedit, tenetur vel ullam, repellendus ratione sit
          exercitationem!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
