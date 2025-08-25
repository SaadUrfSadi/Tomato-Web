import React from "react";
import "./Footer.css";
import { assets } from "../assets/frontend_assets/assets";

function Footer() {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
               <img src={assets.logo} alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem ad, ullam necessitatibus illum mollitia.</p>
               <div className="footer-social-icons">
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.facebook_icon} alt="" />
               </div>
          </div>
          <div className="footer-content-center">
               <h2>Company</h2>
               <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
               </ul>
        </div>
        <div className="footer-content-right">
             <h2>Get in Touch</h2>
             <ul>
                <li>+92-3286869790</li>
                <li>contact@tomato.com</li>
             </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © Tomato.com - All Right Reserved.
      </p>
      </div>
    </>
  );
}

export default Footer;
