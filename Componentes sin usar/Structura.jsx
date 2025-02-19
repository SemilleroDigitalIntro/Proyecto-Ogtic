import React from 'react';
import ContactoH from './ContactoH';
import Header from './Header';
import Smain from './Smain';
import Servicios from './Servicios';
import Novedades from './Novedades';
import Footer from './Footer';
import Centros from './Centros';
import ServMasCon from './servMasCon';
import InfoAdicional from './InfoAdicional';


export default function Structura() {
  return (
    <section>
        <Header/>
        <Smain/>
        <ServMasCon/>
        <Centros/>
        <InfoAdicional/>
        <Footer/>
        
        
    </section>
  )
};
