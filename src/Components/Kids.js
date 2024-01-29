import React from 'react'
import kids_banner from "./images/kids_banner.png"
import "./Kids.css"
import Product4 from './Product4'
const Kids = () => {
  return (
    <div>
      <br/>
      <br/>
      <img className="kidsbanner" src={kids_banner}/>
      <Product4/>
    </div>
  )
}

export default Kids
