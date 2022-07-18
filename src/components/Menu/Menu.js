import React from 'react';
import MenuButton from './MenuButton/MenuButton';
import MenuContent from './MenuContent/MenuContent';
import './style.css';
const Menu = () => {
    return (
        <div className='menu-wrapper'>
            <MenuButton/>
            <MenuContent/>
        </div>
    );
};

export default Menu;