import React from 'react';
import './NavBar.css';
import Arg from '../../arg.png';

function NavBar() {
    return (
        <nav className='bar'>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className='btn'>Profile</button>
            <button onClick={() => window.scrollTo({top: 475, behavior: 'smooth'})} className='btn'>Career</button>
            <button onClick={() => window.scrollTo({top: 982, behavior: 'smooth'})} className='btn'>Apps</button>
            <button onClick={() => window.scrollTo({top: 1665, behavior: 'smooth'})} className='btn'>Code</button>
            <img src={Arg} style={{height:'4rem', marginLeft: '53rem'}}/>
        </nav>
    );
}

export default NavBar;