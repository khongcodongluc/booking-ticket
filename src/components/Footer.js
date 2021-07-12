import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faTwitter, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

//Hiển thị thông tin phía dưới cùng
const Footer = (props)=>{
    return(
        <div className="footer-container">
            <img src="/img/logo.png" alt="" className="footer-logo"/>
            <div className="footer-copyright">
                This website was made by H2M<br/>
                Contact: 0339163099<br/>
                ĐH Công Nghệ - ĐHQGHN
            </div>
            <div className="menu-contact">
                <a 
                    href="https://www.facebook.com/duongductung1410" 
                    className="menu-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faFacebookSquare} className="menu-icon"/>
                </a>
                <a 
                    href="https://www.instagram.com/duongtung7885/" 
                    className="menu-link" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} className="menu-icon"/>
                </a>
                <FontAwesomeIcon icon={faTwitter} className="menu-icon"/>
                <FontAwesomeIcon icon={faYoutubeSquare} className="menu-icon"/>
            </div>
        </div>
    )
}



export default Footer