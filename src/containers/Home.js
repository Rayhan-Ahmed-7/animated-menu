import React from 'react';
import ContactBtn from '../components/ContactButton/ContactBtn';
import Header from '../components/Header/Header';
import MenuManager from '../components/Menu/MenuManager/MunuManager';

const Home = () => {
    return (
        <MenuManager>
            <Header/>
            <div className="main-container" id='container'>
            <h1>Rayhan <br/>Ahmed<br/>Portfolio</h1>
            <ContactBtn/>
            </div>
        </MenuManager>
    );
};

export default Home;