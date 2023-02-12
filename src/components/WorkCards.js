import "./WorkCards.css"
import React from 'react'

import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
               <img src={props.imgsrc} alt="image"/> 
               <h2 className="project-title">{props.title}</h2>
               <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                <a href="https://github.com/Ekene001?tab=repositories" target="_blank" className="btn">view</a>
                <a href="https://github.com/Ekene001?tab=repositories" target="_blank" className="btn">source</a>
                </div>
               </div>
            </div>
  )
}

export default WorkCard
