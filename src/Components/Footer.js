import React from "react"
import whatsapp_icon from "./images/whatsapp_icon.png"
import instagram_icon from "./images/instagram_icon.png"
import pintester_icon from "./images/pintester_icon.png"
import "./Footer.css"
const Footer=()=>{
    return(
        <div className="footer">
            <h1 className="footer-logo">GROOVE</h1>
            <div className="footer-social-icon">
                    <img className="footer-social-icon1" src={whatsapp_icon} alt="whatsapp logo"/>
                    <img className="footer-social-icon2"src={instagram_icon} alt="instagram logo"/>
                    <img className="footer-social-icon3"src={pintester_icon} alt="pinterest logo"/>
            </div>
            <br/>
            <div className="footer-copyright">
                <p>CopyRight @ 2024-All Right Reserved.</p>
            </div>
        <div/>
    </div>
    )
}
export default Footer;