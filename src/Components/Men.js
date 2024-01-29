import React from 'react'
import"./Men.css"
import Men_banner from "./images/men_banner.png"
import Product2 from './Product2'
const Men = () => {
  return (
    <div>
    <img class="menbanner" src={Men_banner}/>
    <br/>
    <br/>
    <Product2/>
    </div>
  )
}

export default Men
