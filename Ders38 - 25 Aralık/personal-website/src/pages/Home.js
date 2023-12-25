import React from "react";
import "./HomeStyle.css";

function Home() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi
        ipsum tempore nesciunt quo quae a beatae, cumque excepturi veritatis,
        deserunt distinctio molestias praesentium possimus, amet quis odio iure
        nisi.
      </p>

      <h1>Services</h1>

      <div className="homeServices">
        <div>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4>Web Applications</h4>
          <label htmlFor="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            atque fugit ab modi illo obcaecati magni molestias praesentium
            nihil, vel dolorum perspiciatis tempore.
          </label>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4>Mobile Applications</h4>
          <label htmlFor="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            atque fugit ab modi illo obcaecati magni molestias praesentium
            nihil, vel dolorum perspiciatis tempore.
          </label>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4>Game Development</h4>
          <label htmlFor="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            atque fugit ab modi illo obcaecati magni molestias praesentium
            nihil, vel dolorum perspiciatis tempore.
          </label>
        </div>
      </div>
    </div>
  );
}

export default Home;
