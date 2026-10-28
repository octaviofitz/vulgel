import { useEffect } from 'react';
import './App.css';
import Router from './Components/Router/Router';

// Bloques que aparecen suavemente al hacer scroll
const SELECTOR_REVELAR = [
  '.tituloSeccion',
  '.nosotros .containerTexto',
  '.evidencia .beneficios .items',
  '.evidencia .ficha',
  '.calidad .intro',
  '.calidad .certificacion',
  '.calidad .garantia',
  '.marcas .bajada',
  '.marcas .marca',
  '.contacto .containerBox',
].join(', ');

function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const elementos = [...document.querySelectorAll(SELECTOR_REVELAR)];

    // En celulares las fotos de la galería también entran de a una
    if (window.matchMedia('(max-width: 767px)').matches) {
      document.querySelectorAll('.imagenesInfo > div').forEach((foto) => {
        foto.classList.add('revelarFoto');
        elementos.push(foto);
      });
    }

    elementos.forEach((el) => {
      el.classList.add('revelar');
      // Pequeño escalonado entre hermanos (tarjetas en fila)
      const hermanos = [...el.parentElement.children].filter((h) => h.matches(SELECTOR_REVELAR));
      const indice = Math.max(hermanos.indexOf(el), 0);
      el.style.setProperty('--retraso', `${Math.min(indice, 4) * 90}ms`);
    });

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px' });

    document.documentElement.classList.add('animado');
    elementos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);

  return (
    <div className="App">
     <Router />
    </div>
  );
}

export default App;
