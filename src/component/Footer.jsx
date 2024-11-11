import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaMailchimp, FaPhone } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import "./FooterStyles.css"

import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>C-3/128, Brijpuri, opp. yamuna vihar.</p>
                            <p>Delhi-110094.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +91 9643251470
                        </h4>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            dhruv8815@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>This is me Dhruv Gupta. I enjoy discussing new projects and design challenges. I love to create dynamic UI's. </p>

                    <div className="contact-icon">
                        <a href='https://www.facebook.com/profile.php?id=100009513211009' target='_blank' className="items">
                            <FaFacebook className='icons' />
                        </a>
                        <a href='https://www.linkedin.com/in/dhruv-gupta-85a0851aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className="items">
                            <FaLinkedin className='icons' />
                        </a>
                        <a href='https://x.com/dhruvgupta8815' target='_blank' className="items">
                            <FaSquareXTwitter className='icons' />
                        </a>
                        <a href='https://github.com/DhruvGuptahub' target='_blank' className="items">
                            <FaGithub className='icons' />
                        </a>
                        <a href='mailto:dhruv8815@gmail.com' target='_blank' className="items">
                            <SiGmail className='icons' />
                        </a>
                    </div>

                    {/* <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaTwitter <a href="https://x.com/dhruvgupta8815" size={30} style={{ color: "#fff", marginRight: "1rem" }} ></a>/>
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /> */}
                </div>
            </div>
        </div>
    )
}

export default Footer
