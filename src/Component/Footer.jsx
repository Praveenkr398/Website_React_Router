import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className='footerSection'>
        <div className='links'><h3>Office Address</h3>
        <address>
          <h4>near sai Complex</h4>
          <p>Ram Krishna Nagar, BPO</p>
          <p>Patan, Bihar (8030293)</p>
        </address>
        </div>
        <div className='links'><h3>Links</h3>
        <ul>
          <li><a href="about">About us</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Offers</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Conditions</a></li>
        </ul>
        </div>
        <div className='links'><h3>Follow</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Linkedin</a></li>
          <li><a href="#">GitHub</a></li>         
        </ul>
        </div>
    </div>
        <div className='copyright'>copyright &copy; Web2code all right reserve 2025</div>
    </>
  )
}

export default Footer