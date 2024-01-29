import React from'react'
import banner_2 from "./images/banner_2.png"
import Banner_1 from "./images/Banner_1.png"
import banner_3 from "./images/banner_3.png"
import banner_4 from "./images/banner_4.png"
import banner_5 from "./images/banner_5.png"
import "./Carousel.css"
const Carousel=()=>{
  return(
    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
  <ol className="caro carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
    <li data-target="#carousel-example-generic" data-slide-to="4"></li>
  </ol>

  <div className="carousel-inner" role="listbox">
    <div className="item active">
      <img className="caroimage" src={banner_2} alt="..." style={{height:"400px"}}/>
    </div>
    <div className="item">
      <img className="caroimage" src={Banner_1} alt="..."style={{height:"400px"}}/>
    </div>
    <div className="item">
      <img className="caroimage" src={banner_3} alt="..."style={{height:"400px"}}/>
    </div>

    <div className="item">
      <img className="caroimage" src={banner_4} alt="..."style={{height:"400px"}}/>
    </div>

    <div className="item">
      <img className="caroimage" src={banner_5} alt="..."style={{height:"400px"}}/>
    </div>
  </div>

  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  )
}
export default Carousel;