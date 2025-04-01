import React from "react";
import "./Home.css";
import img1 from "./image/a5.jpg";
function Home() {
  return (
    <div className="heroSection">
      <div className="container">
        <h className="title">Home</h>
        <p className="des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam incidunt sed reiciendis cumque. Maiomque repudiandae illo officiis quos iusto maiores! Impedit harum amet, quo veritatis voluptate natus exercitationem cupiditate ab cumque ipsa iusto, ipsam nemo cum ex similique illum? Omnis porro ullam reiciendis voluptatibus ipsam.</p>
        <a href="#hero">Know more</a>
      </div>
      <div id="hero">
        <div className="content">
          <h1>React Router</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            repellat eius maiores quod earum facere, illum corrupti laboriosam
            quaerat velit, esse praesentium rerum dolore sequi dolorem, quisquam
            nobis veritatis blanditiis!
          </p>
          <div className="btns">
          <button>Details</button>
          <button>Offers</button>
          </div>
        </div>
        <img src={img1} alt="image" />
      </div>
    </div>
  );
}

export default Home;
