import React from 'react'
import "./Banner2.css"
import cover1 from "./images/cover1.jpg"
import cover2 from "./images/cover2.png"
import cover3 from "./images/cover3.jpg"
import cover4 from "./images/cover4.png"
const Banner2 = () => {
  return (
   <div>
        <h1 className="collection">NEW ARRIVALS</h1>
        <hr/>
        <div className='ban'>
            <div className="card1 card">
                <img className="photo card-img-top" src={cover1} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">ROADSTER STYLISH T-SHIRTS</h5>
                    <p className="aa card-text">Upto 80% Off</p>
                    </div>
            </div>

            <div className="card1 card">
                <img className="photo card-img-top" src={cover2} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">MOSS & MELANGE COLLECTIONS</h5>
                <p className="aa card-text">Upto 60% Off.</p>
                </div>
            </div>

            <div className="card1 card">
                <img className="photo card-img-top" src={cover3} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">ARMANI-EXCHANGE BANDHGALA BLAZERS</h5>
                <p className="aa card-text">Upto 50% Off.</p>
                </div>
            </div>
            <div className="card1 card">
                <img className="photo card-img-top" src={cover4} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">MARKS & SPENCER WINTER HOODIES</h5>
                    <p className="aa card-text">Upto 90% Off.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner2;
