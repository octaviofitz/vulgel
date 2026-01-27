import React from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom'

import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import Home from '../../Components/Home/Home';
import WhatsappBoton from '../../Components/Utilidades/WhatsappBoton/WhatsappBoton';

import './router.css';

function Router() {
    return (
        <>
        <BrowserRouter>
            <NavBar />
            <div className='body'>
            <Routes>
            <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
            <WhatsappBoton />
            </div>
            </BrowserRouter>
        </>
    );
}

export default Router;