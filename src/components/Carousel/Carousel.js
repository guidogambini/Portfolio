import React from "react";
import { StyledCarousel } from "./Carousel.style";
import { Fade } from "react-awesome-reveal";
import useEmblaCarousel from "embla-carousel-react";
import Weather from './weather.png';
import Film from './film.png';
import Global from './global.png';
import Bit from './gamestore.png';




const Carousel = () => {
    
    

    const [viewportRef, embla] = useEmblaCarousel({ loop: true, speed: 1 });
    

  

    const projects = [{
        id: 1,
        name: 'Weather App 🌤 ⭐⭐',
        projectImage: Weather,
        url: 'https://weather-app-three-omega.vercel.app/',
        description: 'React-Redux Application consuming the required data from an external API.'
    },
    {
        id: 2,
        name: 'Movie App 🎞 ⭐⭐⭐',
        projectImage: Film,
        url: 'https://movie-app-tau-six.vercel.app/',
        description: 'React App with the usage of the IMDb API. This site also includes Sweet Alert notifications.'
    },
    {
        id: 3,
        name: 'Global App 🌍 ⭐⭐⭐⭐',
        projectImage: Global,
        url: 'https://global-app.vercel.app/',
        description: 'Full Stack App. Back to Front project using Postgre database. Own App server built up handling Node, Express and Sequelize. Complete React-Redux user interface provided.'
    },
    {
        id: 4,
        name: '16-Bit Gamestore 🎮 ⭐⭐⭐⭐⭐',
        projectImage: Bit,
        url: 'https://16-bit-gamestore.vercel.app/',
        description: 'Full Stack App. Back to Front project using Postgre database. Own App server built up handling Node, Express and Sequelize. Complete React-Redux user interface provided.'
    }

    ];

  

    return (
    <StyledCarousel>
      <Fade>
        <div className="embla">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              {projects.map((prod) => (
                  <div className="embla__slide" key={prod.id}>
                    <a href={prod.url} target='_blank' className='anchor'><h1 className='nombre1'>{prod.name}</h1></a>
                    <div className="embla__slide__inner">
                      <img
                        className="embla__slide__img"
                        src={prod.projectImage}
                        alt={prod.name}
                      />
                    </div>
                    
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Fade>
    </StyledCarousel>
    )
};


export default Carousel
