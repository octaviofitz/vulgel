import React from 'react';

import './evidencia.css';

function Evidencia() {
    return (
        <section className='evidencia' id='evidencia'>
            <div className='containerTitulo'>
                <h2 className='titulo'>Evidencia de Eficacia</h2>
                </div>
                <div className='containerTexto'>
                <p className='texto'>La clave de VULGEL CR 40 es su mecanismo de acción único:</p>
                <ul>
                    <li className='items'><strong>Estructura Adsorbente:</strong> Su estructura trilaminar de montmorillonita le permite capturar y retener las micotoxinas mediante enlaces iónicos, formando un complejo estable que es eliminado en las excretas.</li>
                    <li className='items'><strong>Capacidad de Adsorción Comprobada (AFB1):</strong>
                        <ul className='listado'>
                            <li className='items'>Mínimo de <strong>90,0%</strong> de Adsorción de Aflatoxina B1 a pH 3,0 (jugo gástrico artificial).</li>
                            <li className='items'>Mínimo de <strong>90,0%</strong> de Adsorción de Aflatoxina B1 a pH 6,0 (jugo intestinal artificial).</li>
                        </ul>
                    </li>
                    <li className='items'><strong>Ventaja Competitiva:</strong> Su alta capacidad de adsorción permite una baja inclusión en la ración (0,2-0,3%) manteniendo su eficacia.</li>
                </ul>
            </div>
        </section>
    );
}

export default Evidencia;