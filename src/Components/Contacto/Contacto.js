import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './contacto.css';

const theme = createTheme({});

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
        'service_avyk5ff',
        'template_ayu86b6',
        e.target,
        'kGJMjsQGEXz5lmSJ2'
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
    <ThemeProvider theme={theme}>
      <section className="contacto" id="contacto">
        <div className="containerTexto">
          <div>
            <h4 className="titulo">Contacto</h4>
            <p className="texto">
              Proteja la salud de sus animales y reduzca las pérdidas productivas
              causadas por micotoxinas con VULGEL CR 40, el adsorbente natural de
              alto rendimiento con eficacia comprobada y baja inclusión en la ración.
            </p>
            <p className="texto">
              Complete el formulario para cotizar VULGEL CR 40, consultar disponibilidad,
              presentaciones y recibir asesoramiento técnico-comercial para su aplicación
              según especie y tipo de producción.
            </p>
          </div>
        </div>

        <div className="containerBox">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1 },
            }}
            noValidate
            autoComplete="off"
            id="formulario"
            onSubmit={sendEmail}
            className="box"
          >
            <div>
              <TextField
                id="outlined-basic"
                name="nombre"
                label="Nombre"
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '4px',
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={validateName}
                error={errorName}
                helperText={leyendaName}
              />

              <TextField
                id="outlined-required"
                label="Correo electrónico"
                name="mail"
                variant="outlined"
                fullWidth
                type="email"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                }}
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                onBlur={validateMail}
                error={errorMail}
                helperText={leyendaMail}
                
              />

              <TextField
                id="outlined-tel"
                label="Teléfono"
                name="tel"
                type="tel"
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                }}
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                onBlur={validateTel}
                error={errorTel}
                helperText={leyendaTel}
                
              />

              <TextField
                id="outlined-multiline-static"
                label="Mensaje"
                name="msg"
                multiline
                fullWidth
                rows={4}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                }}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                onBlur={validateMsg}
                error={errorMsg}
                helperText={leyendaMsg}
                
              />

              <Button variant="contained" size="large" className="boton" type="submit">
                Enviar mensaje
              </Button>
            </div>
          </Box>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default Contacto;
