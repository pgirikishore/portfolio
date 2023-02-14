import "./FooterStyles.css";
import portfolio from "../portfolio";

import React from 'react'
import { FaCity, FaDev, FaGithub, FaHackerrank, FaInstagram, FaLinkedin, FaMailBulk, FaMedium, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaCity size={20} style={{color:"white", marginRight: "2rem"}} />
                    <div>
                        <p>{portfolio.city}</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"white", marginRight: "2rem"}} />
                        {portfolio.phone}
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"white", marginRight: "2rem"}} />
                        {portfolio.email}
                    </h4>
                </div>
            </div>
            <div className="right">
                <div className="profile-title">
                    Dev Profiles
                </div>
                <div className="profile-icons">
                    <a href={portfolio.github}><FaGithub size={30} style={{color:"white", marginRight: "1rem"}} /></a>
                    <a href={portfolio.hackerrank}><FaHackerrank size={30} style={{color:"white", marginRight: "1rem"}} /></a>
                    <a href={portfolio.devTo}><FaDev size={30} style={{color:"white", marginRight: "1rem"}} /></a>
                    <a href={portfolio.medium}><FaMedium size={30} style={{color:"white", marginRight: "1rem"}} /></a>
                </div>
                <div className="profile-title">
                    Social Profiles
                </div>
                <div className="profile-icons">
                    <a href={portfolio.linkedin}><FaLinkedin size={30} style={{color:"white", marginRight: "1rem"}} /></a>
                    <a href={portfolio.twitter}><FaTwitter size={30} style={{color:"white", marginRight: "1rem"}} /></a>
                    <a href={portfolio.instagram}><FaInstagram size={30} style={{color:"white", marginRight: "1rem"}} /></a>
                    {/*<a href="https://www.facebook.com/pgirikishore/"><FaFacebook size={30} style={{color:"white", marginRight: "1rem"}} /></a>
                    <a href="https://t.me/pgirikishore"><FaTelegram size={30} style={{color:"white", marginRight: "1rem"}} /></a>*/}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer