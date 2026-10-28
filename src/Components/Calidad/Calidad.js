import React from 'react';
import Senasa from '../../IMG/Index/Senasa.webp';
import Iram from '../../IMG/Index/Iram.webp';

import './calidad.css';

const certificaciones = [
    {
        logo: Senasa,
        alt: 'SENASA',
        titulo: 'Habilitación oficial SENASA',
        dato: 'Certificado N° 26-514/A',
        texto: 'Producto registrado y aprobado por el Servicio Nacional de Sanidad y Calidad Agroalimentaria.',
    },
    {
        logo: Iram,
        alt: 'IRAM',
        titulo: 'Certificación IRAM-ISO 9001:2015',
        dato: 'Registro N° 9000-3780',
        texto: 'Sistema de Gestión de la Calidad certificado para la explotación, elaboración y comercialización de bentonitas sódicas naturales.',
    },
];

const garantias = [
    {
        titulo: 'Respaldado por MPSA',
        texto: 'Auditorías y control de proveedores para garantizar la trazabilidad del producto.',
    },
    {
        titulo: 'Control de inocuidad',
        texto: 'Cumple con los límites máximos de sustancias indeseables en piensos: arsénico, cadmio, mercurio y plomo.',
    },
    {
        titulo: 'Dosificación y uso',
        texto: 'De 1 a 3 kg por tonelada de alimento balanceado, para todas las especies.',
    },
];

function Calidad() {
    return (
        <section className='calidad' id='calidad'>
            <h2 className='titulo tituloSeccion centrado'>Calidad, Trazabilidad e Inocuidad Garantizada</h2>
            <p className='intro'>
                Todos los productos desarrollados por <strong>MPSA</strong> cuentan con rigurosos controles a lo largo de toda la cadena de producción, respaldados por investigación y desarrollo técnico continuo.
            </p>

            <div className='certificaciones'>
                {certificaciones.map(({ logo, alt, titulo, dato, texto }) => (
                    <article key={titulo} className='certificacion'>
                        <div className='sello'>
                            <img src={logo} alt={alt} loading='lazy' />
                        </div>
                        <h3>{titulo}</h3>
                        <p className='dato'>{dato}</p>
                        <p>{texto}</p>
                    </article>
                ))}
            </div>

            <div className='garantias'>
                {garantias.map(({ titulo, texto }) => (
                    <div key={titulo} className='garantia'>
                        <h3>{titulo}</h3>
                        <p>{texto}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Calidad;
