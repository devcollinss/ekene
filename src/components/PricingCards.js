import "./PricingCards.css"

import React from 'react'
import { Link } from "react-router-dom";
const PricingCards = () => {
  return (
    <div className="Pricing">
        <div className="card-container">
            <div className="card">
                <h3>-basic-</h3>
                <span className="bar"></span>
                <p className="btc">$100</p>
                <p>-3 days-</p>
                <p>-3 pages-</p>
                <p> Featured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>-Premium-</h3>
                <span className="bar"></span>
                <p className="btc">$200</p>
                <p>-2 days-</p>
                <p>-5 pages-</p>
                <p> Featured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>-business-</h3>
                <span className="bar"></span>
                <p className="btc">$100</p>
                <p>-5 days-</p>
                <p>-8 pages-</p>
                <p> Featured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
      
    </div>
  )
}

export default PricingCards
