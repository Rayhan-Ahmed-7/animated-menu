import React from 'react';
import Menu from '../Menu/Menu';
import './style.css';
const Header = () => {
    return (
        <div className='header-wrap'>
            <p className='brand-description'>Digital experience design studio</p>
            <Menu/>
        </div>
    );
};

export default Header;