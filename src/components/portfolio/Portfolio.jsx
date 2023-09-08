import React from 'react'
import './portfolio.css'
import PORTFOLIO1 from '../../assets/blackjack-img.png'
import PORTFOLIO2 from '../../assets/movie-App.png'
import PORTFOLIO3 from '../../assets/watchedstore-img.png'
import PORTFOLIO4 from '../../assets/weatherapp-img.png'
import PORTFOLIO5 from '../../assets/costmanagement-img.png'

const data = [
    {
        id: 1,
        image: PORTFOLIO1,
        title: 'BlackJack App',
        github: 'https://github.com/manuelsramos/blackjack-game',
        demo: 'https://ms-blackjack-app.netlify.app/'
    },
    {
        id: 2,
        image: PORTFOLIO2,
        title: 'Movies App',
        github: 'https://github.com/manuelsramos/Movie-App',
        demo: 'https://masr-movie-app.netlify.app/'
    },
    {
        id: 3,
        image: PORTFOLIO3,
        title: 'Watched store',
        github: 'https://github.com/manuelsramos/watched-app',
        demo: 'https://watchedstore.netlify.app/'
    },
    {
        id: 4,
        image: PORTFOLIO4,
        title: 'Weather App',
        github: 'https://github.com/manuelsramos/weather-app',
        demo: 'https://weather-1r2g9ou72-manuelsramos.vercel.app/'
    },
    {
        id: 5,
        image: PORTFOLIO5,
        title: 'Cost Management',
        github: 'https://github.com/manuelsramos/budget-app',
        demo: 'https://budget-eqvru2jk5-manuelsramos.vercel.app/'
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