import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {


    return (
        <>
            <Header />
            <Navbar />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}
