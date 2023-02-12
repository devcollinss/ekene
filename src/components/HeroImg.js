import "./HeroImg.css";
import React from 'react';
import { Link } from "react-router-dom";

import IntroImg from "../assets/image bg3.jpg"
const heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>HI I'M A FREELANCER</p>
        <h1>React Developer</h1>
        <Link to="/project" className="btn">
            Projects</Link>
        <Link to="/contact" className="btn btn-light">
            Contact</Link>
      </div>
    </div>
  )
}

export default heroimg
