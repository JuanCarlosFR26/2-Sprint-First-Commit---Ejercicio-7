import React from 'react';
import myImage from '../assets/img/user.jpg';
import './Header.css';

const Header = () => {
    return(
        <div>
            <header className='header'>
                <img src={myImage} alt='user'></img>
                <p>Nombre Alumno</p>
                <span><i class="fas fa-map-marker-alt"></i> Valencia | España</span>
            </header>
        </div>
    )
};

export default Header;