import React from 'react';
import Nav from 'react-bootstrap/Nav';

import logo from '../../IMG/Index/Isologo.webp';

import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
          
            <div className='containerImg'>
                <img src={logo} className='logo' alt='Logo Megasteel' />
                     </div>

                <div className='containerTexto'>
                <Nav.Link className="link" href="/#adsorbente">Adsorbente</Nav.Link>
                <Nav.Link className="link" href="/#evidencia">Evidencia</Nav.Link>
                <Nav.Link className="link" href="/#calidad">Calidad</Nav.Link>
                <Nav.Link className="link" href="/#contacto">Contacto</Nav.Link>
            </div>

            <div className='galide'>
            <p className='texto'>Desarrollado por <a href='https://www.galide.com.ar' target='__blank' className='bold'>Galidé</a></p>
            </div>
           
        </footer>
    );
}

export default Footer;