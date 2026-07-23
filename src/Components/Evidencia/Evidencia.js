import React from 'react';

import Tabla from '../../IMG/Index/ficha.jpeg';
import './evidencia.css';

function Evidencia() {

    const especificaciones = [
        { parametro: "Materia Prima", valor: "Bentonita Sódica Natural" },
        { parametro: "Forma Física", valor: "Polvo seco y fino" },
        { parametro: "Color", valor: "Beige / Marrón claro" },
        { parametro: "Humedad", valor: "15 %, máximo" },
        { parametro: "Densidad Aparente", valor: "0,70 – 0,75 kg/L" },
        { parametro: "Granulometría (ASTM #40 - 0,425 mm)", valor: "0,0 %" },
        { parametro: "Granulometría (ASTM #200 - 0,075 mm)", valor: "25,0 % máximo" },
        { parametro: "Dosis Recomendada", valor: "1 – 3 kg / tonelada de alimento" },
        { parametro: "Registro SENASA", valor: "N° 26-514/A" },
      ];


    return (
        <section className='evidencia' id='evidencia'>
           
                <h2 className='titulo'>Evidencia de Eficacia y Especificaciones Técnicas</h2>
                
                <div className='containerTexto'>
                <p className='texto'><strong className='subtitulo'>Mecanismo de Acción Dual y Beneficios Industriales</strong></p>
                <ul>
                    <li className='items'><strong>Estructura Adsorbente y Capacidad de Intercambio Catiónico (CIC):</strong> Su estructura trilaminar y su carga negativa le otorgan sitios de unión activos para capturar micotoxinas y cationes de metales pesados mediante enlaces estables, logrando que sean eliminados de manera segura a través de las excretas.</li>
                    <li className='items'><strong>Cohesión para Pelletizado y Protección de Equipos:</strong> Aumenta la durabilidad del pellet, reduce la presencia de finos y preserva la integridad del alimento. Asimismo, al carecer de residuos abrasivos significativos, <strong>preserva los componentes críticos del proceso de peletización (dados y rodillos)</strong>, extendiendo su vida útil.</li>
                    <li className='items'><strong><strong>Ficha Físico-Química de VULGEL DUO</strong></strong>
                       
                {/*     <div className="cards">

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
                      
                        </div>

                    </div> */}

{/*<div className="contenedor-tabla">
   <table className="tabla-especificaciones">
    <thead>
      <tr>
        <th className="tabla-especificaciones__encabezado">Parámetro</th>
        <th className="tabla-especificaciones__encabezado">Rango / Valor Especificado</th>
      </tr>
    </thead>
    <tbody>
      {especificaciones.map(({ parametro, valor }) => (
        <tr key={parametro} className="tabla-especificaciones__fila">
          <td className="tabla-especificaciones__parametro">{parametro}</td>
          <td className="tabla-especificaciones__valor">{valor}</td>
        </tr>
      ))}
    </tbody>
  </table> */}





                    </li>
                </ul>
                <div>
  <img className='imgTabla' src={Tabla} />
</div>
            </div>
        </section>
    );
}

export default Evidencia;