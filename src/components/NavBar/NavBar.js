import React from 'react';
import './NavBar.css';
import Arg from '../../arg.png';

function NavBar() {

    const width = window.screen.width;

    return (
        <nav className='bar'>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className='btn'>Profile</button>
            <button onClick={() => window.scrollTo({top: width < 500 ? 530 : width < 800 ? 500 : 475, behavior: 'smooth'})} className='btn'>Career</button>
            <button onClick={() => window.scrollTo({top: width < 500 ? 1050 : width < 800 ? 1020 : 990, behavior: 'smooth'})} className='btn'>Apps</button>
            <button onClick={() => window.scrollTo({top: width < 500 ? 1580 : 1665, behavior: 'smooth'})} className='btn'>Code</button>
            {width > 500 ? <img src={Arg} className='arg'/> : null}
        </nav>
    );
}

export default NavBar;