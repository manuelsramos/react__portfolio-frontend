import React from 'react'
import './about.css'
import ROBOTS from '../../assets/robots.png'
import { TbViewfinder } from 'react-icons/tb'
import { BiBook, BiWorld } from 'react-icons/bi'

const About = () => {
    return (
        <section id='about' data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1200">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ROBOTS} alt="About Image" />
                    </div>
                </div>


                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <TbViewfinder className='about__icon' />
                            <h5>Experience</h5>
                            <small>Indepedent Developer</small>
                        </article>



                        <article className="about__card">
                            <BiBook className='about__icon' />
                            <h5>Learned</h5>
                            <small>Udemy
                                <br />Coderhouse
                            </small>

                        </article>


                        <article className="about__card">
                            <BiWorld className='about__icon' />
                            <h5>Who I am</h5>
                            <small>I'm a enthusiastic of learning</small>
                        </article>
                    </div>

                    <p>My name is Manuel Santamaria and I'm a frontend developer. I'm a passionate person that like to solve problems and create functional web apps. Besides, I consider myself a creative developer that is committed to become a better professional.
                        <br /> I'm looking for my first job opportunity, so don't hesitate to contact me. I would be so glad to be in touch!
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About