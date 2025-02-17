import React from 'react';
import DataCards from './Data/DataCards';
import './Style/Servicios.less';

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
        
    />});

    const Scrollrigth = () => {

    };


    const Scrollleft = () => {

    };


  return (
    <section className='Servicios' id='Servicios'>
        <div className='Servicios__div1'>
            <h2>Servicios gubernamentales por institución</h2>
            <a href="">Ver todos los servicios<i class='bx bx-right-arrow-alt'></i></a>
        </div>
        
            <div className='Container__CardServices'> 
            <div className='Container__BtnServices'>
                <button onClick={Scrollrigth}><i class='bx bx-chevron-left' ></i></button>
                <button onClick={Scrollleft}><i class='bx bx-chevron-left bx-rotate-180' ></i></button>
              </div>
              <div className='Container__CardServices2'>
                {Cardlist}
            </div>
            </div>
   
        

    </section>
  )
};
