import React from 'react';

import './evidencia.css';

function Evidencia() {
    return (
        <section className='evidencia' id='evidencia'>
           
                <h2 className='titulo'>Evidencia de Eficacia</h2>
                
                <div className='containerTexto'>
                <p className='texto'><strong>La clave de VULGEL CR 40 es su mecanismo de acción único:</strong></p>
                <ul>
                    <li className='items'><strong>Estructura Adsorbente:</strong> Su estructura trilaminar de montmorillonita le permite <strong>capturar y retener las micotoxinas</strong> mediante enlaces iónicos, formando un complejo estable que es eliminado en las excretas.</li>
                    <li className='items'><strong>Ventaja Competitiva:</strong> Su alta capacidad de adsorción permite una baja inclusión en la ración (0,2-0,3%) manteniendo su eficacia.</li>
                    <li className='items'><strong>Capacidad de Adsorción Comprobada (AFB1):</strong>
                       
                    <div className="cards">

                        <div className="card">
                        <h5 className="porcentaje porcentaje-verde">90% <span className='prueba'>Mínimo</span></h5>
                        <h4 className="subtitulo">
                            <span>Adsorción a pH 3.0</span>
                        </h4>
                        <p className="texto">
                            Ensayo in vitro en condiciones de <strong>jugo gástrico artificial</strong>.
                            El adsorbente mantiene una <strong>alta captura de Aflatoxina B1</strong> en ambiente ácido,
                            reduciendo su disponibilidad antes de la absorción.
                        </p>
                       {/*  <p className="nota">
                            Condición: pH 3.0 (simulación gástrica) • Objetivo: máxima retención en fase inicial.
                        </p> */}
                        </div>

                        <div className="card">
                        <h5 className="porcentaje porcentaje-azul">90% <span className='prueba'>Mínimo</span></h5>
                        <h4 className="subtitulo">
                            <span>Adsorción a pH 6.0</span>
                        </h4>
                        <p className="texto">
                            Ensayo in vitro en condiciones de <strong>jugo intestinal artificial</strong>.
                            Se observa <strong>estabilidad del complejo adsorbente-toxina</strong>,
                            conservando la retención y evitando la liberación de Aflatoxina B1 en el tracto intestinal.
                        </p>
                       {/*  <p className="nota">
                            Condición: pH 6.0 (simulación intestinal) • Objetivo: estabilidad y retención sostenida.
                        </p> */}
                        </div>

                    </div>




                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Evidencia;