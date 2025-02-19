import React from 'react';
import ContactoH from './ContactoH';
import Header from './Header';
import Smain from './Smain';
import SobreNosotros from './SobreNosotros';
import Servicios from './Servicios';
import Novedades from './Novedades';
import Footer from './Footer';
import Centros from './Centros';
import ServMasCon from './servMasCon';
import InfoAdicional from './InfoAdicional';


import Component_B from './component_B';


export default function Structura() {
  return (
    <section>
        <Header/>
        <Smain/>



        <Component_B/>
        <ServMasCon/>
        <Centros/>
        <InfoAdicional/>
        <Footer/>
    </section>
  )
};
