import React from 'react';
import './styles.css';
import udesa from './img/udesa.png'
import tmdb from './img/tmdb.png'
import dh from './img/dh.png'

export default function Header(){
    return(
        <div className='header'>
            <img src={udesa} alt='udesa'></img>
            <img src={dh} alt='dh'></img>
            <img src={tmdb} alt='tmdb'></img>
         </div>
    )
}