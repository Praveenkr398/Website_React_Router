import React from 'react'
import img1 from "./image/a3.png";

function Service() {
  return (
    <div className='aboutSection'>Service
       <div className="section1">
         <img src={img1} alt="img" />
         <div className="content">
             <h1>What we Provides </h1>
             <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
               repellat eius maiores quod earum facere, illum corrupti laboriosam
               quaerat velit, esse praesentium rerum dolore sequi dolorem, quisquam
               nobis veritatis blanditiis!
             </p>
             <div className="btns">
             <button>Service</button>
             <button>Offers</button>
             </div>
           </div>
       </div>
       </div>
  )
}

export default Service