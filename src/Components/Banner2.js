import React from 'react'
import "./Banner2.css"
import cover1 from "./images/cover1.jpg"
import cover2 from "./images/cover2.png"
import cover3 from "./images/cover3.jpg"
import cover4 from "./images/cover4.png"
const Banner2 = () => {
  return (
   <div>
        <h3 className="collection">TREND-SETTING COLLECTION</h3>
        <hr/>
        <div className='ban'>
            <div className="card1 card">
                <img className="photo card-img-top" src={cover1} alt="Card image cap"/>
                    <div className="card-body">
                    <h6 className="card-title">Roadster Men Grey Melange Solid Round Neck T-shirt</h6>
                    <p className="card-text">$1035</p>
                    <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
            </div>

            <div className="card1 card">
                <img className="photo card-img-top" src={cover2} alt="Card image cap"/>
                <div className="card-body">
                <h6 className="card-title">RARE Square Neck Puff Sleeves Top</h6>
                <p className="card-text">$897.</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div>

            <div className="card1 card">
                <img className="photo card-img-top" src={cover3} alt="Card image cap"/>
                <div className="card-body">
                <h6 className="card-title">Men Turquoise Blue Floral Printed Bandhgala Blazer</h6>
                <p className="card-text">$9000</p>
                <a href="#" className="btn btn-primary">Buy Now.</a>
                </div>
            </div>
            <div className="card1 card">
                <img className="photo card-img-top" src={cover4} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Highlander Black and White Printed Hoodie</h5>
                    <p className="card-text">$15000.</p>
                    <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner2;
