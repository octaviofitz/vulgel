import React from 'react';

import Card1 from '../../IMG/Cards/Card1.webp';
import Card2 from '../../IMG/Cards/Card2.webp'
import Card3 from '../../IMG/Cards/Card3.webp'

import './imagenesInfo.css';

function ImagenesInfo() {
    return (
        
        <section className='imagenesInfo'>
            
            <div>
                <img src={Card1} alt='banner1' className='img' />
                    </div>

                    <div>
                <img src={Card2} alt='banner2' className='img' />
                    </div>

                    <div>
                <img src={Card3} alt='banner3' className='img' />
                    </div>
            
        </section>
    );
}

export default ImagenesInfo;