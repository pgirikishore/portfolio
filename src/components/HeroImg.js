import "./HeroImgStyles.css";
import portfolio from "../portfolio";

import React from 'react'
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={portfolio.heroImg} alt="Intro Img" />
        </div>
        <div className="content">
            <p>Hi, I'm a</p>
            <div className="typewriter">
                <Typewriter
                onInit={(typewriter)=> {
                typewriter
                .typeString(portfolio.about1)
                .pauseFor(1000)
                .deleteAll()
                .typeString(portfolio.about2)
                .pauseFor(1000)
                .start();
                }}
                options={{
                    loop:true,
                }}
                />
            </div>
            <div>
                <Link to={portfolio.resume} target="_blank" download className="btn">Resume</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg