import React from 'react';
import { Button, Nav} from 'react-bootstrap';

import BannerIMG from '../../IMG/Index/Banner.webp';

import './header.css';

function Header() {
    return (
        <section className='header'>
            <img src={BannerIMG} className='banner' alt='Cantera de bentonita sódica en la Patagonia' fetchpriority='high' />
            <div className='copia'>
                <h1 className='titulo'><span className='mascara'><span className='linea'>VULGEL DUO</span></span></h1>
                <h2 className='subitutlo'>Secuestrante de Micotoxinas y Aglutinante Natural de Alto Rendimiento para Bovinos y Otras Especies</h2>
                <p className='especies'>Bovinos · Aves · Cerdos · Equinos · Peces</p>
                <Nav.Link href="#contacto"><Button variant="secondary" size="lg" className='button-compra-bentonita'>
                    <span>CONSULTAR</span><span className='flechaBoton' aria-hidden='true'>→</span>
                </Button></Nav.Link>
            </div>
        </section>
    );
}

export default Header;
