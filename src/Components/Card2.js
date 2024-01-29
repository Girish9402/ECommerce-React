import React from 'react'
import "./Card2.css"
const Card2 = ({img,des,price,bton}) => {
  return (
    <div>
      <div className="porul card" >
      <img className="dk card-img-top" src={img} alt="Card image"/>
      <div className="card-body">
        <h4 className="de card-title">{des}</h4>
        <p className="dj card-text">{price}</p>
        <a href="#" className="dn btn btn-primary">{bton}</a>
      </div>
      </div>
    </div>
  )
}

export default Card2
