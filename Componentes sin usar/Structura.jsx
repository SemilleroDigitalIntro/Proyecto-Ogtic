import React from 'react';
import ContactoH from './ContactoH';
import Header from './Header';
import Smain from './Smain';
import Servicios from './Servicios';
import Novedades from './Novedades';
import Footer from './Footer';


export default function Structura() {
  return (
    <section>
        <Header/>
        <Smain/>
        <Servicios/>
        <Novedades/>
        <Footer/>
    </section>
  )
};
