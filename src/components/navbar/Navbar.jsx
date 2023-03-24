import React, { useState } from 'react'
import './navbar.css'
import { BiHomeAlt2 } from 'react-icons/bi'
import { FaRegUserCircle } from 'react-icons/fa'
import { TbTools } from 'react-icons/tb'
import { MdWorkOutline, MdOutlineConnectWithoutContact } from 'react-icons/md'



const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt2 /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUserCircle /></a>
            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><TbTools /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineConnectWithoutContact /></a>
        </nav>
    )
}

export default Navbar