import React, { useContext } from 'react';
import './style.css';
import {Plus} from 'react-feather';
import { MenuContext } from '../Menu/MenuManager/MunuManager';

const ContactBtn = () => {
    const {open,setOpen} = useContext(MenuContext);
    return (
        <button 
        className={`contact-button ${open ? 'open':''}`} 
        onClick={()=>setOpen(!open)}>
            <span>Contact Us</span>
            <Plus></Plus>
        </button>
    );
};

export default ContactBtn;