import React from 'react'
import './Style/InfoAdi.less';


export default function InfoAdicional() {
  return (
  
    <div className='Ginfo__adicional'>
        <div className="info__adicional">
        <div className="info__title">
            <h3>576</h3>
            <p>Servicios gubernamentales disponibles</p>
        </div>
        <div className="text__container">
        <div className="text">
            <h3>176</h3>
            <p>INSTITUCIONES</p>
        </div>
        <div class="text">
            <h3>115</h3>

            <p>TRAMITES INTERACTIVOS</p>
        </div>
        <div class="text">
            <h3>130</h3>
            <p>TRAMITES TRANSACCIONALES</p>
        </div>
        </div>
        <div className="text__masinfo">
            <p>Si sabes de un servicio y no lo encontraste, queremos escucharte.
            Déjanos saber cual necesitas. <a href="">Escribenos aquí</a>
             </p>
        </div>
        </div>
    </div>
  )
};
