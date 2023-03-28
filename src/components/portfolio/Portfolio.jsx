import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/movie-App.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Project title',
        github: 'https://github.com',
        demo: '#'
    },
    {
        id: 2,
        image: IMG1,
        title: 'Project title',
        github: 'https://github.com',
        demo: '#'
    },
    {
        id: 3,
        image: IMG1,
        title: 'Project title',
        github: 'https://github.com',
        demo: '#'
    },
    {
        id: 4,
        image: IMG1,
        title: 'Project title',
        github: 'https://github.com',
        demo: '#'
    }
]




const Portfolio = () => {
    return (
        <section id="portfolio" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio-cta">
                                    <a href={github} target="_blank" className='btn'>Github</a>
                                    <a href={demo} target="_blank" className='btn btn-primary'>Live Demo</a>
                                </div>

                            </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Portfolio