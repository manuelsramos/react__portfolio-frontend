import React from 'react'
import './footer.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'> Manuel Santamaria</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#" about>About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="http://www.github.com" target="_blank"><BsGithub className='footer-icons' /></a>
                <a href="http://wwww.linkedin.com" target="_blank" ><BsLinkedin className='footer-icons' /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Manuel Santamaria. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer