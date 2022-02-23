import React from "react";
import Typed from "react-typed";
import Me2 from "../assets/Me2.svg"
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <img className='profile-img' src={Me2} alt='Me' />
                <h1>Welcome to Kevin's Potfolio</h1>
                <Typed
                    className="typed-text"
                    strings={["Designer", "Game 3D Artist", "Fullstack Web Developer"]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                />
                <Link to="contact" href="#" className="btn-main-offer">Contact me</Link>
            </div>
        </div>
    )
}

export default Header