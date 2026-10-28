import React from 'react';

import LogoBentonita from '../../IMG/Marcas/bentonita.webp';
import LogoAglupel from '../../IMG/Marcas/aglupel.webp';
import LogoRubicat from '../../IMG/Marcas/rubicat.webp';

import './marcas.css';

const marcas = [
    {
        nombre: 'Bentonita',
        logo: LogoBentonita,
        rubro: 'Minería',
        descripcion: 'Venta de bentonita sódica natural por mayor, directo del yacimiento patagónico.',
        url: 'https://www.bentonita.com.ar/',
    },
    {
        nombre: 'Aglupel Eco',
        logo: LogoAglupel,
        rubro: 'Peletizado',
        descripcion: 'Aglutinante natural de alta cohesión, para un pellet más firme y resistente.',
        url: 'https://peletizado.com.ar/',
    },
    {
        nombre: 'Rubicat',
        logo: LogoRubicat,
        rubro: 'Mascotas',
        descripcion: 'Arena sanitaria para gatos elaborada a base de bentonita.',
        url: 'https://rubicat.com.ar/',
    },
];

function Marcas() {
    return (
        <section className='marcas' id='marcas'>
            <h2 className='titulo tituloSeccion centrado'>Nuestras Marcas</h2>
            <p className='bajada'>Productos a base de bentonita elaborados por <strong>MPSA</strong> para cada industria.</p>

            <div className='grilla'>
                {marcas.map(({ nombre, logo, rubro, descripcion, url }) => (
                    <a key={nombre} href={url} target='_blank' rel='noopener noreferrer' className='marca'>
                        <span className='logoMarca'>
                            <img src={logo} alt={nombre} loading='lazy' />
                        </span>
                        <span className='rubro'>{rubro}</span>
                        <span className='descripcion'>{descripcion}</span>
                        <span className='visitar'>Visitar sitio <span className='flecha' aria-hidden='true'>→</span></span>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Marcas;
