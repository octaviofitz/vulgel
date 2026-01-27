import React from 'react';
import Header from '../Header/Header';
import Nosotros from '../Nosotros/Nosotros';
import Contacto from '../Contacto/Contacto';
import Evidencia from '../Evidencia/Evidencia';
import ImagenesInfo from '../ImagenesInfo/ImagenesInfo';
import Calidad from '../Calidad/Calidad';

import './home.css';


function Home() {
    return (
        <section className='home'>
            <Header />
            <Nosotros />
            <Evidencia />
            <ImagenesInfo />
            <Calidad />
            <Contacto />
        </section>
    );
}

export default Home;