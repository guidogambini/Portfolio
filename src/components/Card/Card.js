import React from 'react';
import './Card.css';
import Git from './github-icon.svg';

const Card = ({ imagen, linkGit, linkVercel, name }) => {
    return (
        <div className='cardCont'>
            <h3 style={{fontSize: '25px', letterSpacing: '3px'}} className='nombre'>{name}</h3>
            <a href={linkVercel} target='_blank' style={{marginTop:'-2rem'}}><img src={imagen} className='apps' /></a>
            <div className='subDiv'>
                <a href={linkGit} target='_blank' className='anchor' >
                    <span>Look at the code here!</span>
                    <img src={Git} className='imagen' width='100px' height='50px' />
                </a>
            </div>    
        </div>
    )
}

export default Card;
