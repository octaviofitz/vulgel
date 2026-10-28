import React from 'react';

// Íconos de la ficha, dibujados para verse nítidos en cualquier pantalla
const iconos = {
    humedad: (
        <svg viewBox='0 0 32 32' aria-hidden='true'>
            <path d='M16 4.5c-4.2 5.6-8 10.4-8 15a8 8 0 0 0 16 0c0-4.6-3.8-9.4-8-15z' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' />
            <path d='M19.6 20.4a4 4 0 0 1-3.2 3.8' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
        </svg>
    ),
    densidad: (
        <svg viewBox='0 0 32 32' aria-hidden='true'>
            <g fill='none' stroke='currentColor' strokeWidth='1.6'>
                <circle cx='16' cy='7' r='2.6' />
                <circle cx='9' cy='14' r='2.2' />
                <circle cx='23' cy='14' r='2.2' />
                <circle cx='9' cy='23' r='2.8' />
                <circle cx='23' cy='23' r='2.8' />
                <path d='M13.5 24.5a2.6 2.6 0 0 0 5 0' strokeLinecap='round' />
            </g>
            <circle cx='16' cy='15' r='1.8' fill='currentColor' />
        </svg>
    ),
    granoGrueso: (
        <svg viewBox='0 0 32 32' aria-hidden='true' fill='currentColor'>
            {[6, 12.7, 19.3, 26].flatMap((y, f) =>
                [6, 12.7, 19.3, 26].map((x, c) => ((f + c) % 3 === 2 && f === 0 ? null : <circle key={`${f}-${c}`} cx={x} cy={y} r='1.5' />))
            )}
        </svg>
    ),
    granoFino: (
        <svg viewBox='0 0 32 32' aria-hidden='true' fill='currentColor'>
            {[5, 9.5, 14, 18.5, 23, 27.5].flatMap((y, f) =>
                [5, 9.5, 14, 18.5, 23, 27.5].map((x, c) => (
                    <circle key={`${f}-${c}`} cx={x + (f % 2 ? 1.2 : 0)} cy={y} r={(f + c) % 3 === 0 ? 1.1 : 0.8} opacity={(f * 2 + c) % 5 === 0 ? 0.55 : 1} />
                ))
            )}
        </svg>
    ),
    dosis: (
        <svg viewBox='0 0 32 32' aria-hidden='true'>
            <path d='M10 5h12l-1.4 4.2c3.2 2.6 4.4 6.6 4.4 11.8V27H7v-6c0-5.2 1.2-9.2 4.4-11.8z' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' />
            <path d='M11.4 9.2h9.2' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
        </svg>
    ),
};

const filas = [
    { icono: 'humedad', color: 'naranja', parametro: 'Humedad', valor: '15%', nota: 'máximo' },
    { icono: 'densidad', color: 'celeste', parametro: 'Densidad aparente', valor: '0,70 – 0,75', nota: 'kg/L' },
    { icono: 'granoGrueso', color: 'tinta', parametro: 'Granulometría', detalle: 'ASTM #40 (0,425 mm)', valor: '0,0%' },
    { icono: 'granoFino', color: 'naranja', parametro: 'Granulometría', detalle: 'ASTM #200 (0,075 mm)', valor: '25,0%', nota: 'máximo' },
    { icono: 'dosis', color: 'celeste', parametro: 'Dosis', valor: '1 – 3', nota: 'kg/t' },
];

function FichaTecnica() {
    return (
        <div className='tablaFicha'>
            <table>
                <caption className='oculto'>Ficha físico-química de VULGEL DUO</caption>
                <thead className='oculto'>
                    <tr>
                        <th scope='col'>Ícono</th>
                        <th scope='col'>Parámetro</th>
                        <th scope='col'>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {filas.map(({ icono, color, parametro, detalle, valor, nota }) => (
                        <tr key={parametro + (detalle || '')}>
                            <td className={`celdaIcono ${color}`}>{iconos[icono]}</td>
                            <th scope='row' className='parametro'>
                                {parametro}
                                {detalle && <span className='detalle'>{detalle}</span>}
                            </th>
                            <td className='valor'>
                                <span className='cifra'>{valor}</span>
                                {nota && <span className='nota'>{nota}</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FichaTecnica;
