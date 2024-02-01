import React from 'react'
import Card from './Card';
import imgmen1 from "./images/imgmen1.png"
import product_1 from "./images/product_1.png"
import imgmen2 from "./images/imgmen2.png"
import product_2 from "./images/product_2.png"
import imgmen3 from "./images/imgmen3.png"
import imgmen4 from "./images/imgmen4.png"
import imgmen5  from "./images/imgmen5.png"
import product_3 from "./images/product_3.png"
import imgmen6 from "./images/imgmen6.png"
import "./Product.css"
const Product=()=>{
    const dresses=[
        {
            img:imgmen1,
            desc:"Puma Mercedes-AMG PETRONAS Motorsport Track Jacket in Eucalyptus size L",
            price:"$1000",
            bton:"Buy Now",
        },
        {
            img:product_1,
            desc:"Gucci Black Vegan Leather Zipper Winter Women's Jacket",
            price:"$7999",
            bton:"Buy Now",
        },
        {
            img:imgmen2,
            desc:"Roadster The Lifestyle Co. Mock Collar Bomber Jacket",
            price:"$2145",
            bton:"Buy Now",
        },
        {
            img:imgmen3,
            desc:"Mast & Harbour Balck And White Bomber Jacket",
            price:"$3521",
            bton:"Buy Now",
        },
        {
            img:product_2,
            desc:"Versace White full Sleeve Summer Women's top ",
            price:"$3521",
            bton:"Buy Now",
        },
        {
            img:imgmen4,
            desc:"Urbun Street Winter Weather-proof Hooded Jacket ",
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
            img:product_3,
            desc:"Armani Exchange Women Black And White Summer Collor Shirt",
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
    return(
        <div className="pro">
            {
                dresses.map((dress,index)=>(
                    <Card key={index} img={dress.img} des={dress.desc} price={dress.price} bton={dress.bton}/>
                ))
            }
        </div>
    )
}
export default Product;
