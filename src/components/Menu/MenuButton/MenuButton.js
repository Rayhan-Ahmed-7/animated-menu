import React, { useContext } from 'react';
import { MenuContext } from '../MenuManager/MunuManager';

const MenuButton = () => {
    const {open,setOpen} = useContext(MenuContext);
    return (
        <div className={`menu-button-wrap ${open ? 'open': ''}`}>
            <button className='menu-button' onClick={()=>{setOpen(!open)}}><span></span></button>
            
        </div>
    );
};

export default MenuButton;