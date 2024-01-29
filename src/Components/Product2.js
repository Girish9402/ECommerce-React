import React from 'react'
import "./Product2.css"
import Card2 from "./Card2"
import imgmen1 from "./images/imgmen1.png"
import imgmen2 from "./images/imgmen2.png"
import imgmen3 from "./images/imgmen3.png"
import imgmen4 from "./images/imgmen4.png"
import imgmen5 from "./images/imgmen5.png"
import imgmen6 from "./images/imgmen6.png"

const Product2 = () => {
    const dresses=[
        {
            img:imgmen1,
            desc:"Puma Mercedes-AMG PETRONAS  Track Jacket ",
            price:"$1000",
            bton:"Buy Now",
        },
        {
            img:imgmen2,
            desc:"Roadster Lifestyle Co. Mock Collar  Jacket",
            price:"$2145",
            bton:"Buy Now",
        },
        {
            img:imgmen3,
            desc:"Mast & Harbour Black And White Bomber Jacket",
            price:"$3521",
            bton:"Buy Now",
        },
        {
            img:imgmen4,
            desc:"Urbun Street Winter  Hooded Jacket ",
            price:"$1865",
            bton:"Buy Now",
        },
        {
            img:imgmen5,
            desc:"Highlander Men Printed Yellow Sweatshirt",
            price:"$1969",
            bton:"Buy Now",
        },
        {
            img:imgmen6,
            desc:"Urbun Street Multi-Color Hooded Jacket",
            price:"$2020",
            bton:"Buy Now",
        },
        
    ]
  return (
        <div className="pro">
            {
                dresses.map((dress,index)=>(
                    <Card2 key={index} img={dress.img} des={dress.desc} price={dress.price} bton={dress.bton}/>
                ))
            }
        </div>
  )
}

export default Product2
