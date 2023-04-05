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
                            <small>I'm looking my first experience</small>
                        </article>



                        <article className="about__card">
                            <BiBook className='about__icon' />
                            <h5>Learned</h5>
                            <small>Where i learn</small>
                        </article>


                        <article className="about__card">
                            <BiWorld className='about__icon' />
                            <h5>Who I am</h5>
                            <small>I'm a enthusiastic of learning</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores recusandae distinctio. Quis aliquam incidunt temporibus dignissimos quo non iste voluptas repudiandae nostrum facere quod unde, corporis, quidem rem optio?</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About