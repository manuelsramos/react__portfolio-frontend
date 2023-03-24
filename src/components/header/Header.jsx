import React from 'react'
import './header.css'
import CTA from './CTA'
import HERO from '../../assets/hero.png'
import HeaderSocial from './HeaderSocials'


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello I'm </h5>
                <h1>Manuel Santamaria</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className="hero">
                    <img src={HERO} alt='' />
                </div>
                <a href="#contact" className='scroll__down'> Scroll Down</a>
            </div>
        </header>
    )
}

export default Header