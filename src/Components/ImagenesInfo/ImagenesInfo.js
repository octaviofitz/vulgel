import React from 'react';

import Card1 from '../../IMG/Cards/Card1.webp';
import Card2 from '../../IMG/Cards/Card2.webp'
import Card3 from '../../IMG/Cards/Card3.webp'

import './imagenesInfo.css';

function ImagenesInfo() {
    return (
        
        <section className='imagenesInfo'>
            
            <div>
                <img src={Card1} alt='Laboratorio de control de calidad' className='img' loading='lazy' />
                    </div>

                    <div>
                <img src={Card2} alt='Acopio de bentonita' className='img' loading='lazy' />
                    </div>

                    <div>
                <img src={Card3} alt='Cantera de bentonita' className='img' loading='lazy' />
                    </div>
            
        </section>
    );
}

export default ImagenesInfo;