import React, { useEffect, useRef } from 'react'
import './HeroImgStyles.css'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'
import Typed from 'typed.js'
import pdf from '../pdf/DHRUVGUPTA_RESUME.pdf'

function HeroImg() {
    const typedRef = useRef(null)
    const typedRef2 = useRef(null)

    useEffect(() => {
        const options = {
            strings: ["HI, I'M DHRUV GUPTA."],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        }

        const typed = new Typed(typedRef.current, options)

        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <div className='hero'>
            <div className="mask">
                <img className='into-img' src={IntroImg} alt="Introimg" />
            </div>
            <div className='content'>
                <p ref={typedRef}></p>
                <h1>React Developer.</h1>
                <div>
                    <Link to='/project' className='btn'>Projects</Link>
                    <Link to='/contact' className='btn btn-light'>Contact</Link>
                </div>
                <div className='btn btn-light resume'>
                    <a href={pdf} download="DhruvResume.pdf">Download Resume</a>
                </div>
            </div>
        </div>
    )
}


export default HeroImg
