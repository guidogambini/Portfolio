import React from 'react';
import './NavBar.css';
/* import { CgProfile } from 'react-icons/cg'; */
import Arg from '../../arg.png';

function NavBar() {
    return (
        <nav className='bar'>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className='btn'>About me</button>
            <button onClick={() => window.scrollTo({top: 507, behavior: 'smooth'})} className='btn'>Apps</button>
            <button onClick={() => window.scrollTo({top: 1265, behavior: 'smooth'})} className='btn'>Code</button>
            <img src={Arg} style={{height:'4rem', marginLeft: '57rem'}}/>
        </nav>
    );
}

export default NavBar;