import './About.css'
import React from 'react'
import img1 from "./image/a6.jpg";

function About() {
  return (
    <div className='aboutSection'>About
    <div className="section1">
      <img src={img1} alt="img" />
      <div className="content">
          <h1>Interduce me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            repellat eius maiores quod earum facere, illum corrupti laboriosam
            quaerat velit, esse praesentium rerum dolore sequi dolorem, quisquam
            nobis veritatis blanditiis!
          </p>
          <div className="btns">
          <button>Contact</button>
          <button>Offers</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default About