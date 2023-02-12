import "./AboutContent.css"
import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/developer.png"
import React2 from "../assets/developer2.jpg"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who I Am</h1>
            <p>I'm a front end web developer and designer.
                I work with Html,Css,Bootstrap, Javascript and React.
                 I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="image"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="image"/>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default AboutContent
