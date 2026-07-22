import React from 'react';

import './nosotros.css';

function Nosotros() {
    return (
        <section className='nosotros' id='adsorbente'>
        <div className='containerTitulo'>
            <h2 className='titulo'>El Adsorbente Natural con Poder Dual</h2>
            </div>

            <div className='containerTexto'>
            <p className='texto'><strong>VULGEL DUO</strong> es la solución definitiva basada en Bentonita Sódica Natural, especialmente indicada para neutralizar los problemas causados por micotoxinas e infecciones como la aflatoxicosis en bovinos, aves, cerdos, equinos y peces.</p>
            <p className='texto'>Tal como su nombre lo indica, <strong>VULGEL DUO</strong> posee un potencial dual único en el mercado:</p>
            <ul>
                <li className='texto'>Adsorción molecular de micotoxinas y contaminantes.</li>
                <li className='texto'>Aglutinación eficiente y cuidado industrial del peletizado.</li>
            </ul>
            <p className='texto'>Gracias a su estructura de aluminosilicato en capas (2:1), su elevada superficie específica y su alta afinidad química, <strong>VULGEL DUO</strong> atrapa y retiene de forma efectiva micotoxinas (Aflatoxinas, T2, Zearalenona, DON / vomitoxina) y metales pesados (como plomo o cobre).</p>
            <p className='texto'>Además, su excelente dispersabilidad y poder de cohesión confieren al pellet una <strong>máxima resistencia mecánica y estabilidad dimensional</strong>. Al ser una bentonita de alta calidad y bajo contenido de impurezas, actúa como un excelente aglutinante <strong>sin dañar la peletizadora</strong>: su bajo nivel de residuos abrasivos <strong>evita el desgaste prematuro o la rotura de los dados y rodillos de la maquinaria</strong>, protegiendo tu inversión industrial.</p>
            </div>
        </section>
    );
}

export default Nosotros;