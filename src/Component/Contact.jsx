import React from 'react'
import './Contact.css'
function Contact() {
  return (

   <div className='contactPage'>
    <h1 className='heading'>contact us</h1>
<br />
<form action="#">
  <input type="text" placeholder='your full name' />

  <input type="text" placeholder='subject' />

  <textarea name="" id="" placeholder='write your message'></textarea>

  <button className='send'>Submit</button>
</form>
   </div>
  )
}

export default Contact