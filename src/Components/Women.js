import React from 'react'
import "./Women.css"
import Womens_banner from "./images/Womens_banner.png"
import Product3 from './Product3'
const Women = () => {
  return (
    <div>
      <img className="womenbanner" src={Womens_banner}/>
      <br/>
      <br/>
      <Product3/>
    </div>
  )
}

export default Women
