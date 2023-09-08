import React from 'react'
import './footer.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'> Manuel Santamaria</a>
            <ul className="permalinks">
                <li><a className='social__list' href="#">Home</a></li>
                <li><a className='social__list' href="#about" about>About</a></li>
                <li><a className='social__list' href="#skills">Skills</a></li>
                <li><a className='social__list' href="#portfolio">Portfolio</a></li>
                <li><a className='social__list' href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://github.com/manuelsramos" target="_blank"><BsGithub className='footer-icons' /></a>
                <a href="https://www.linkedin.com/in/manuel-santamaria-ramos-11b608263/" target="_blank" ><BsLinkedin className='footer-icons' /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Manuel Santamaria. All rights RESERVED.</small>
            </div>
        </footer>
    )
}

export default Footer