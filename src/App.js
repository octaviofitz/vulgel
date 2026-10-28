import { useEffect } from 'react';
import './App.css';
import Router from './Components/Router/Router';

// Cada tipo de bloque entra a su manera, una sola vez, al aparecer en pantalla
const EFECTOS = [
  // Títulos: se descubren de abajo hacia arriba y después se dibuja la línea naranja
  { selector: '.tituloSeccion', clase: 'efectoTitulo' },
  // Listas: entran fila por fila desde la izquierda
  { selector: '.nosotros .dual li, .calidad .garantia', clase: 'efectoFila' },
  // Imágenes: aparecen con un fundido simple
  { selector: '.evidencia .ficha', clase: 'efectoFundido' },
  // Tarjetas y bloques de texto: suben suave
  {
    selector: [
      '.nosotros .containerTexto > .texto',
      '.evidencia .containerTexto > .texto',
      '.evidencia .beneficios .items:not(.fichaItem)',
      '.calidad .intro',
      '.calidad .certificacion',
      '.marcas .bajada',
      '.marcas .marca',
      '.contacto .texto',
      '.contacto .campo',
      '.contacto .boton',
    ].join(', '),
    clase: 'efectoSubir',
  },
];

function App() {
  useEffect(() => {
    // El menú gana una sombra suave cuando la página ya bajó
    const nav = document.querySelector('.navBar');
    const alScroll = () => nav && nav.classList.toggle('conSombra', window.scrollY > 8);
    alScroll();
    window.addEventListener('scroll', alScroll, { passive: true });

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => window.removeEventListener('scroll', alScroll);
    }

    const elementos = [];
    EFECTOS.forEach(({ selector, clase }) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add('revelar', clase);
        elementos.push(el);
      });
    });

    // En celulares las fotos de la galería aparecen de a una con un fundido
    if (window.matchMedia('(max-width: 767px)').matches) {
      document.querySelectorAll('.imagenesInfo > div').forEach((foto) => {
        foto.classList.add('revelar', 'efectoFundido');
        elementos.push(foto);
      });
    }

    // Escalonado entre hermanos: 80 ms entre cada uno, cuatro pasos como máximo
    elementos.forEach((el) => {
      const hermanos = [...el.parentElement.children].filter((h) => h.classList.contains('revelar'));
      const indice = Math.max(hermanos.indexOf(el), 0);
      el.style.setProperty('--retraso', `${Math.min(indice, 4) * 80}ms`);
    });

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px' });

    document.documentElement.classList.add('animado');
    elementos.forEach((el) => observador.observe(el));

    return () => {
      window.removeEventListener('scroll', alScroll);
      observador.disconnect();
    };
  }, []);

  return (
    <div className="App">
     <Router />
    </div>
  );
}

export default App;
