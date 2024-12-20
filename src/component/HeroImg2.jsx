import React from 'react'
import "./HeroImg2Styles.css"
import IntroImg from '../assets/intro-bg.jpg'


function HeroImg2(props) {
    return (
        <div className='hero-img'>
            {/* <div className="mask">
                <img  alt="Introimg" />
            </div> */}
            <div className='heading'>
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default HeroImg2
