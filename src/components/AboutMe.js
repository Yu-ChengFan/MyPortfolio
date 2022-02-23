import React from 'react'
import Me from "../assets/Me.svg"


const AboutMe = () => {
    return (
        <div id="about" className='about container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div>
                        <img className='profile-img' src={Me} alt='Me'/>
                    </div>
                    
                </div>
                <div className='col-lg-6 col-xm-12 '>
                    <h1 className='about-heading'>About Me</h1>
                    <p className='about-text'>Hello, I am Kevin. I am a game major. I am currently enrolled at the University of Utah working towards my bachelor's degree in Games. I’ve been playing games since I was just a boy, and I have been interested in the design aspect ever since. I love creating and exploring new ways to solve problems, as well as the artistic side of game development. I am skilled with Unreal Blueprints, Maya, Zbrush, Substance Designer, Environmental Arts, Level Design, Playtesting, etc., as I work through courses and personal projects. </p>
                </div>
            </div>
        </div>
    )
}


export default AboutMe