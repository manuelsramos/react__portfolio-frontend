import React from 'react'
import './skills.css'
import { BsBookmarkCheckFill } from 'react-icons/bs'
import JS from '../../assets/js-ilus.png'

const Skills = () => {
    return (
        <section id='skills'>
            <h5>Skills</h5>
            <h2>What Skills I Have</h2>

            <div className="container skills__container">
                <div className="skills__frontend">
                    <h3>Frontend Development</h3>
                    <div className="skills__content">
                        <article className='skills__details'>
                            <BsBookmarkCheckFill className='skills__detail-icon' />
                            <h4>HTML5</h4>
                        </article>

                        <article className='skills__details'>
                            <BsBookmarkCheckFill className='skills__detail-icon' />
                            <h4>CSS3</h4>
                        </article>

                        <article className='skills__details'>
                            <BsBookmarkCheckFill className='skills__detail-icon' />
                            <h4>Bootstrap</h4>
                        </article>

                        <article className='skills__details'>
                            <BsBookmarkCheckFill className='skills__detail-icon' />
                            <h4>Javascript</h4>
                        </article>

                        <article className='skills__details'>
                            <BsBookmarkCheckFill className='skills__detail-icon' />
                            <h4>React Js</h4>
                        </article>

                        <article className='skills__details'>
                            <BsBookmarkCheckFill className='skills__detail-icon' />
                            <h4>Firebase</h4>
                        </article>
                        <article className='skills__details'>
                            <BsBookmarkCheckFill className='skills__detail-icon' />
                            <h4>Git</h4>
                        </article>
                    </div>
                </div>
                <div className="skills__image">
                    <img src={JS} className='skills__image-me' />
                    <span className='shadow'></span>
                </div>

            </div>
        </section>
    )
}

export default Skills