import React from 'react';

import Card1 from '../../IMG/Cards/Card1.webp';
import Card2 from '../../IMG/Cards/Card2.webp'
import Card3 from '../../IMG/Cards/Card3.webp'

import './imagenesInfo.css';

function ImagenesInfo() {
    return (
        
        <section className='cards'>
            
            <div>
                <img src={Card1} alt='' className='img' />
                    </div>

                    <div>
                <img src={Card2} alt='' className='img' />
                    </div>

                    <div>
                <img src={Card3} alt='' className='img' />
                    </div>
            
        </section>
    );
}

export default ImagenesInfo;