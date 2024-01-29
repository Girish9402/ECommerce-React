import React from 'react'
import "./Product4.css"
import Card4 from './Card4'
import kids_1 from "./images/kids_1.png"
import kids_2 from "./images/kids_2.png"
import kids_3 from "./images/kids_3.png"
import kids_4 from "./images/kids_4.png"
import kids_5 from "./images/kids_5.png"
import kids_6 from "./images/kids_6.png"

const Product4 = () => {
    const dresses=[
        {
            img:kids_1,
            desc:"H&M Boys Back Printed Pullover Hoodie",
            price:"$7999",
            bton:"Buy Now",
        },
        {
            img:kids_2,
            desc:"Gini and Jony Boys Colourblocked Hooded Fleece Sweatshirt",
            price:"$3521",
            bton:"Buy Now",
        },
        {
            img:kids_3,
            desc:"The Souled Store Boys Colourblocked Long Sleeve Cotton Pullover Sweatshirt",
            price:"$1969",
            bton:"Buy Now",
        }, {
            img:kids_4,
            desc:"HOUSE OF VEDAS Boys Lightweight Bomber Jacket",
            price:"$1909",
            bton:"Buy Now",
        },
        {
            img:kids_5,
            desc:"UNDER FOURTEEN ONLY Boys Typography Printed Spread Collar Denim Jacket",
            price:"$2100",
            bton:"Buy Now",
        },
        {
            img:kids_6,
            desc:"HOUSE OF VEDAS Boys Stand Collar Lightweight Bomber Jacket",
            price:"$1010",
            bton:"Buy Now",
        },
        
    ]
  return (
    <div>
       <div className="pro">
            {
                dresses.map((dress,index)=>(
                    <Card4 key={index} img={dress.img} des={dress.desc} price={dress.price} bton={dress.bton}/>
                ))
            }
        </div>
    </div>
  )
}

export default Product4
