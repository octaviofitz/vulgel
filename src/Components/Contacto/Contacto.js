import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import './contacto.css';

// Campo del formulario con su etiqueta y su mensaje de error
function Campo({ id, etiqueta, error, leyenda, multilinea, ...props }) {
  const Control = multilinea ? 'textarea' : 'input';
  return (
    <div className={`campo${error ? ' conError' : ''}`}>
      <label htmlFor={id} className="oculto">{etiqueta}</label>
      <Control
        id={id}
        placeholder={etiqueta}
        aria-invalid={error}
        aria-describedby={`${id}-error`}
        rows={multilinea ? 4 : undefined}
        {...props}
      />
      <p id={`${id}-error`} className="leyenda">{leyenda}</p>
    </div>
  );
}

function Contacto() {
  const [name, setName] = useState('');
  const [leyendaName, setLeyendaName] = useState('');
  const [errorName, setErrorName] = useState(false);

  const [mail, setMail] = useState('');
  const [leyendaMail, setLeyendaMail] = useState('');
  const [errorMail, setErrorMail] = useState(false);

  const [telefono, setTelefono] = useState('');
  const [leyendaTel, setLeyendaTel] = useState('');
  const [errorTel, setErrorTel] = useState(false);

  const [mensaje, setMensaje] = useState('');
  const [leyendaMsg, setLeyendaMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);

  const re = /\S+@\S+\.+\S+/;

  const validateName = () => {
    if (!name.trim() || name.length > 45) {
      setErrorName(true);
      setLeyendaName('Ingrese un nombre válido');
    } else {
      setErrorName(false);
      setLeyendaName('');
    }
  };

  const validateMail = () => {
    if (!re.test(mail)) {
      setErrorMail(true);
      setLeyendaMail('Ingrese un correo electrónico válido');
    } else {
      setErrorMail(false);
      setLeyendaMail('');
    }
  };

  const validateTel = () => {
    const clean = telefono.replace(/\D/g, '');
    // Requerido: al menos 6 dígitos (ajustá si querés)
    if (!clean || clean.length < 6) {
      setErrorTel(true);
      setLeyendaTel('Ingrese un teléfono válido');
    } else {
      setErrorTel(false);
      setLeyendaTel('');
    }
  };

  const validateMsg = () => {
    if (!mensaje.trim()) {
      setErrorMsg(true);
      setLeyendaMsg('Ingrese un mensaje');
    } else {
      setErrorMsg(false);
      setLeyendaMsg('');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validaciones requeridas
    const cleanPhone = telefono.replace(/\D/g, '');

    const nameInvalid = !name.trim() || name.length > 45;
    const mailInvalid = !re.test(mail);
    const telInvalid = !cleanPhone || cleanPhone.length < 6;
    const msgInvalid = !mensaje.trim();

    setErrorName(nameInvalid);
    setLeyendaName(nameInvalid ? 'Ingrese un nombre válido' : '');

    setErrorMail(mailInvalid);
    setLeyendaMail(mailInvalid ? 'Ingrese un correo electrónico válido' : '');

    setErrorTel(telInvalid);
    setLeyendaTel(telInvalid ? 'Ingrese un teléfono válido' : '');

    setErrorMsg(msgInvalid);
    setLeyendaMsg(msgInvalid ? 'Ingrese un mensaje' : '');

    if (nameInvalid || mailInvalid || telInvalid || msgInvalid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor complete todos los campos requeridos correctamente',
        icon: 'error',
      });
      return;
    }

    Swal.fire({
      title: 'Enviando mensaje...',
      text: 'Por favor espere',
      didOpen: () => {
        Swal.showLoading();
      },
    });

    emailjs
      .sendForm(
        'service_jskz02s',
        'template_naf8zcv',
        e.target,
        'UYGamSx02-dxkooxG'
      )
      .then((response) => {
        console.log('Estado:', response.status);
        console.log('Mensaje:', response.text);
        Swal.fire({
          title: '¡Mensaje enviado!',
          text: 'Gracias por contactarnos.',
          icon: 'success',
        }).then(() => {
          e.target.reset();
          setName('');
          setMail('');
          setTelefono('');
          setMensaje('');
        });
      })
      .catch((err) => {
        console.error('Error completo:', err);
        Swal.fire({
          title: 'Error al enviar',
          text: 'Por favor intente nuevamente más tarde.',
          icon: 'error',
        });
      });
  };

  return (
    <section className="contacto" id="contacto">
      <div className="containerTexto">
        <div>
          <h2 className="titulo tituloSeccion">Contacto</h2>
          <p className="texto">
          <strong>¿Querés proteger la salud de tus animales, mejorar la calidad del pellet y cuidar la vida útil de tu maquinaria?</strong>
          </p>
          <p className="texto">
          Ponete en contacto con nuestro equipo técnico para recibir asesoramiento personalizado sobre <strong>VULGEL DUO</strong> o solicitar una cotización.
          </p>
        </div>
      </div>

      <div className="containerBox">
        <form noValidate autoComplete="off" id="formulario" onSubmit={sendEmail} className="box">
          <Campo
            id="nombre"
            name="nombre"
            etiqueta="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
            error={errorName}
            leyenda={leyendaName}
          />

          <Campo
            id="mail"
            name="mail"
            type="email"
            etiqueta="Correo electrónico"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            onBlur={validateMail}
            error={errorMail}
            leyenda={leyendaMail}
          />

          <Campo
            id="tel"
            name="tel"
            type="tel"
            etiqueta="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            onBlur={validateTel}
            error={errorTel}
            leyenda={leyendaTel}
          />

          <Campo
            id="msg"
            name="msg"
            multilinea
            etiqueta="Mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            onBlur={validateMsg}
            error={errorMsg}
            leyenda={leyendaMsg}
          />

          <button className="boton" type="submit">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;
