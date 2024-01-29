import React from 'react'
import "./Product3.css"
import Card3 from './Card3'
import product_1 from "./images/product_1.png"
import product_2 from "./images/product_2.png"
import product_3 from "./images/product_3.png"
import product_4 from "./images/product_4.png"
import product_5 from "./images/product_5.png"
import product_6 from "./images/product_6.png"
const Product3 = () => {
    const dresses=[
        {
            img:product_1,
            desc:"Gucci Black Vegan Leather Zipper Winter Women's Jacket",
            price:"$7999",
            bton:"Buy Now",
        },
        {
            img:product_2,
            desc:"Versace White full Sleeve Summer Women's top ",
            price:"$3521",
            bton:"Buy Now",
        },
        {
            img:product_3,
            desc:"Armani Exchange Women Black And White Summer Collor Shirt",
            price:"$1969",
            bton:"Buy Now",
        }, {
            img:product_4,
            desc:"Herr by invictus Solid Shirt Style Top",
            price:"$1909",
            bton:"Buy Now",
        },
        {
            img:product_5,
            desc:"CODE by Lifestyle V-Neck Cinched Waist Top",
            price:"$2100",
            bton:"Buy Now",
        },
        {
            img:product_6,
            desc:"Roadster Women Chic Brown Solid Cardigan Set",
            price:"$1010",
            bton:"Buy Now",
        },
        
    ]
  return (
    <div>
       <div className="pro">
            {
                dresses.map((dress,index)=>(
                    <Card3 key={index} img={dress.img} des={dress.desc} price={dress.price} bton={dress.bton}/>
                ))
            }
        </div>
    </div>
  )
}

export default Product3
