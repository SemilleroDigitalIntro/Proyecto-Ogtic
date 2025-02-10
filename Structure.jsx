import React from 'react'
import ContactoH from "./Components/ContactoH";
import Header from "./Components/Header";
import Smain from "./Components/Smain";
import Servicios from "./Components/Servicios";
import Novedades from './Components/Novedades';
import SobreNosotros from './Components/SobreNosotros';
import Footer from './Components/Footer';

export default function Structure() {
  return (
    <section>
        <ContactoH/>
        <Header/>
        <Smain/>
        <Servicios/>
        <Novedades/>
        <SobreNosotros/>
        <Footer/>
    </section>
  )
}
