import React from 'react';
import DataCards from './Data/DataCards';
import './Style/Servicios.css';

export default function Servicios() {
    
    function CardServicios(props) {
        return (
          <div className='CardServices' >
              <div className='CardServiciosBackground' id={props.borderleftColor}>
      
              </div>
              <img src={props.logoInstitucion} alt={props.AltImg} />
              <div className='CardContent'>
                  <h3>{props.NameInstitucion}</h3>
                  <p>{props.Descripcion}</p>
              </div>
          </div>
        )
      };


    const  Cardlist = DataCards.map( C=>{
    return <CardServicios 
        
        borderleftColor = {C.borderleftColor}
        logoInstitucion = {C.logoInstitucion}
        AltImg = {C.AltImg}
        NameInstitucion = {C.NameInstitucion}
        Descripcion = {C.Descripcion}
        
    />})




  return (
    <section className='Servicios'>
        <div className='Servicios__div1'>
            <h2>Servicios gubernamentales por institución</h2>
            <a href="">Ver todos los servicios<i class='bx bx-right-arrow-alt'></i></a>
        </div>
        
            <div className='Container__CardServices'> 
                {Cardlist}
            </div>
   
        

    </section>
  )
};
