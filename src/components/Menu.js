import React from 'react'
import { faFacebookSquare, faInstagram, faTwitter, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import './Menu.css'

function Menu(props) {
    return (
        <div className="menu-mainContainer">
            <FontAwesomeIcon icon={faBars} className="menu-bars"/>
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
                <Link to="/login" className="menu-login">
                    <label>
                        {/* {!props.user ? `${props.user.username}` :" */}
                        Đăng Nhập
                        {/* "} */}
                    </label>
                </Link>

            </div>
            <div className="menu-logo">
                <img src="/img/logo.png" alt="" />
            </div>
        </div>
    )
}

export default Menu
