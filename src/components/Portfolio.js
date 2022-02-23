import React from 'react';
import paw from "../assets/pawgers.JPG";
import stream from "../assets/streamability.JPG";
import chap from "../assets/chappie.JPG";
import gun from "../assets/gun-texture.JPG";
import hhr from "../assets/heehaw-ranch.JPG";
import sic from "../assets/soul-in-chamber.png";


export const Portfolio = () => {
    return (
        <div  id="portfolio" className='portfolio-wrapper'>
            <div className='container'>
                <h1 className='portfolio-header text-uppercase text-center'>
                    Portfolio
                </h1>

                <h2 className='portfolio-header text-uppercase text-center py-5'>Deployed Websites</h2>
                <div className='portfolio-container'>
                    <div className='portfolio-image-box'>
                        <a href='https://github.com/Thesselonian/Pawgers'>
                            <img className='portfolio-image' src={paw} alt='https://pawgers.herokuapp.com/explore' />
                            <div class="image__overlay">
                                <div class="image__title">Pawgers</div>
                            </div>
                        </a>
                    </div>
                    <div className='portfolio-image-box'>
                        <a href='https://github.com/Thenlie/Streamability'>
                            <img className='portfolio-image' src={stream} alt='https://streamability.herokuapp.com/' />
                            <div class="image__overlay">
                                <div class="image__title">Streamability</div>
                            </div>
                        </a>
                    </div>
                </div>


                <h2 className='portfolio-header text-uppercase text-center py-5'>Game Projects</h2>
                <div className='portfolio-container'>
                    
                    <div className='portfolio-image-box'>
                        <a href='https://github.com/joshalexander717/OneShot'>
                            <img className='portfolio-image' src={sic} alt='' />
                            
                            <div class="image__overlay">
                                <div class="image__title">Soul in the Chamber</div>
                            </div>
                        </a>
                    </div>
                    <div className='portfolio-image-box'>
                        <a href='https://lukeguy.itch.io/hee-haw-ranch'>
                            <img className='portfolio-image' src={hhr} alt='' />
                            <div class="image__overlay">
                                <div class="image__title">Heehaw ranch</div>
                            </div>
                        </a>

                    </div>
                </div>


                <h2 className='portfolio-header text-uppercase text-center py-5'>3D Projects</h2>
                <div className='portfolio-container'>
                    <div className='portfolio-image-box'>
                        <a href='https://www.artstation.com/artwork/lxL62z'>
                            <img className='portfolio-image' src={chap} alt='' />
                            <div class="image__overlay">
                                <div class="image__title">Hard Surface Model</div>
                            </div>
                        </a>

                    </div>
                    <div className='portfolio-image-box'>
                        <a href='https://www.artstation.com/artwork/Oo05Ee'>
                            <img className='portfolio-image' src={gun} alt='' />
                            <div class="image__overlay">
                                <div class="image__title">PBR Revolver</div>
                            </div>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Portfolio