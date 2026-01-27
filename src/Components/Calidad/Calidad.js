import React from 'react';

import './calidad.css';

function Calidad() {
    return (
        <section className='calidad' id='calidad'>
           <h3 className='titulo'>Calidad, Inocuidad y Uso</h3>
           <ul>
            <li className='items'><strong>Certificación GMP+ B2:</strong> Somos productores de ingredientes alimenticios certificados por el estándar internacional <strong>GMP+ Feed Safety Management System</strong></li>
            <li className='items'><strong>Inocuidad Certificada</strong>: Fabricado bajo las <strong>Buenas Prácticas de Manufactura y con el respaldo de la Certificación de Calidad ISO 9001:2015</strong>.</li>
            <li className='items'><strong>Controles de Inocuidad:</strong> VULGEL CR 40 cumple estrictamente con los contenidos máximos de sustancias indeseables para piensos, incluyendo <strong>Arsénico (12 ppm máx.), Cadmio (2 ppm máx.), Mercurio (0,2 ppm máx.) y Plomo (30 ppm máx.)</strong>.</li>
            <li className='items'><strong>Dosificación y Aplicación:</strong> Se recomienda la inclusión de 1 a 3 Kg/Ton de alimento balanceado para todas las especies.</li>
            <li className='items'><strong>Presentación:</strong> Disponible en Big Bags de 1.250 Kg. y en bolsas de 25 Kg..
                <ul className='listado'>
                <li className='items'><strong>Contenido:</strong> Fichas técnicas detalladas de productos por aplicación, estudios y casos de exito en su funcionamiento</li>
                </ul></li>
           </ul>
        </section>
    );
}

export default Calidad;