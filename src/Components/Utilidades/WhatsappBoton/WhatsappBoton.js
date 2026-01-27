import React from 'react';
import BotonWhatsapp from '../../../IMG/Index/Whatsapp.webp';

import './whatsapp.css';

const WhatsAppButton = () => {
  const phoneNumber = "5492215898698";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="whatsapp">
      <button onClick={handleClick} aria-label="WhatsApp">
        <img
          src={BotonWhatsapp}
          alt="Botón de WhatsApp"
          className="icono"
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;
