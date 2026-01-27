import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Logo from '../../IMG/Index/Logo.webp';

import './navBar.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navBar">
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo a la izquierda */}
        <Navbar.Brand href="#home" style={{ flexShrink: 0 }}>
          <img src={Logo} className="logo" alt="Logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex w-100 justify-content-lg-end">
            <Nav.Link className="link" href="#adsorbente">
            Adsorbente 
            </Nav.Link>
            <Nav.Link className="link" href="#evidencia">
              Evidencia
            </Nav.Link>
            <Nav.Link className="link" href="#calidad">
              Calidad
            </Nav.Link>
            <Nav.Link className="link" href="#contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
