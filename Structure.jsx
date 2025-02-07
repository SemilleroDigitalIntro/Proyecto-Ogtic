import React from 'react'
import ContactoH from "./Components/ContactoH";
import Header from "./Components/Header";
import Smain from "./Components/Smain";
import Servicios from "./Components/Servicios";

export default function Structure() {
  return (
    <section>
        <ContactoH/>
        <Header/>
        <Smain/>
        <Servicios/>
    </section>
  )
}
