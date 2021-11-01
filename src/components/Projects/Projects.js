import React from 'react';
import './Projects.css';
import Weather from './weather2.png';
import Global from './global2.png';
import Film from './film2.png';
import Card from '../Card/Card';
import Bit from '../Carousel/gamestore.png';

const Projects = () => {
    return (
        <div className='tarjeta'>
            <Card name={'Weather App'} imagen={Weather} linkGit={'https://github.com/guidogambini/Weather-App'} linkVercel={'https://weather-app-three-omega.vercel.app/'}/>
            <Card name={'Movie App'} imagen={Film} linkGit={'https://github.com/guidogambini/Movie-App'} linkVercel={'https://movie-app-tau-six.vercel.app/'}/>
            <Card name={'Global App'} imagen={Global} linkGit={'https://github.com/guidogambini/PI-Countries'} linkVercel={'https://global-app.vercel.app/'}/>
            <Card name={'16-Bit'} imagen={Bit} linkGit={'https://github.com/2Davit/16Bit-GameStore'} linkVercel={'https://16-bit-gamestore.vercel.app/'}/>
        </div>
    )
}

export default Projects;
