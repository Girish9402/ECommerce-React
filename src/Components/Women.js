import React from 'react'
import "./Women.css"
import Women_banner from "./images/Women_banner.png"
import Product3 from './Product3'
const Women = () => {
  return (
    <div>
      <img className="womenbanner" src={Women_banner}/>
      <br/>
      <br/>
      <Product3/>
    </div>
  )
}

export default Women
