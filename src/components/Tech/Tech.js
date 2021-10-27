import React from 'react'
import JS from './javascript.svg';
import Node from './nodejs.svg';
import ReactI from './react.svg';
import Redux from './redux.svg';
import Typescript from './typescript-icon.svg';
import Sequelize from './sequelize.svg';
import Express from './express.svg';
import Postgre from './postgresql.svg';


const Tech = () => {
    return (
        <div style={{display:'flex', justifyContent: 'space-evenly'}}>
            <img src={JS} height='43px' />
            <span style={{marginLeft:'-1.5em', fontWeight:'bolder'}}>Javascript</span>
            <img src={Node} height='43px' />
            <span style={{marginLeft:'-1.5em', fontWeight:'bolder'}}>Node</span>
            <img src={ReactI} height='43px' />
            <span style={{marginLeft:'-1.5em', fontWeight:'bolder'}}>React</span>
            <img src={Redux} height='43px' />
            <span style={{marginLeft:'-1.5em', fontWeight:'bolder'}}>Redux</span>
            <img src={Typescript} height='43px' />
            <span style={{marginLeft:'-1.5em', fontWeight:'bolder'}}>Typescript</span>
            <img src={Sequelize} height='43px' />
            <span style={{marginLeft:'-1.5em', fontWeight:'bolder'}}>Sequelize</span>
            <img src={Express} height='43px' />
            <span style={{marginLeft:'-1.5em', fontWeight:'bolder'}}>Express</span>
            <img src={Postgre} height='43px' />
            <span style={{marginLeft:'-1.5em', fontWeight:'bolder'}}>PostgreSQL</span>
        </div>
    )
}

export default Tech;
