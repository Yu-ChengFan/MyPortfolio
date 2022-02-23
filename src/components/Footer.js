import React from "react";
import git from "../assets/github_icon.png";
import art from "../assets/artstation_logo.png";
import link from "../assets/linkedin_logo.png"

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="text-center">
                <div>
                    <a href="https://github.com/Yu-ChengFan?tab=repositories"><img className="footer-logo" src={git}></img></a>
                    <a href="https://www.linkedin.com/in/yu-cheng-fan-a99167182/"><img className="footer-logo" src={link}></img></a>
                    <a href="https://www.artstation.com/yuchengfan"><img className="footer-logo" src={art}></img></a>
                </div>
            </div>
        </div>
    )
}

export default Footer