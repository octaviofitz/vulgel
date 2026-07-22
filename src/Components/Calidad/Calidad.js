import React from 'react';

import './calidad.css';

function Calidad() {
    return (
        <section className='calidad' id='calidad'>
           <h3 className='titulo'>Calidad, Trazabilidad e Inocuidad Garantizada</h3>
           <p className='items'>Todos los productos desarrollados por <strong>MPSA</strong> cuentan con rigurosos controles a lo largo de toda la cadena de producción, respaldados por investigación y desarrollo técnico continuo:</p>
           <ul>
            <li className='items'><strong>Habilitación Oficial:</strong> Producto registrado y aprobado por el <strong>SENASA</strong> (Certificado N° 26-514/A).</li>
            <li className='items'><strong>Respaldado por MPSA:</strong> Ofrecemos auditorías y controles de proveedores para brindar total tranquilidad y garantizar la trazabilidad del producto.</li>
            <li className='items'><strong>Control de Inocuidad:</strong> Cumple de manera estricta con los límites máximos permitidos de sustancias indeseables en piensos (Arsénico, Cadmio, Mercurio y Plomo)</li>
            <li className='items'><strong>Dosificación y Uso:</strong> Incluir de <strong>1 a 3 kg por tonelada</strong> de alimento balanceado para todas las especies.</li>

           </ul>
        </section>
    );
}

export default Calidad;