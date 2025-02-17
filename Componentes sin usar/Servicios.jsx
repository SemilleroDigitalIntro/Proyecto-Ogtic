import React from 'react';
import DataCards from './Data/DataCards';
import './Style/Servicios.less';

export default function Servicios() {
  let ScrollServices;
    
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
      switch(ScrollServices){
        case undefined:
          document.getElementById('Container__CardServices2').scroll(1300,0);
          document.getElementById('btnScrollleft').style.display = 'flex';
          document.getElementById('Container__BtnServices').style.justifyContent = 'space-between';
          ScrollServices = 1;
        break;

        case 1:
          document.getElementById('Container__CardServices2').scroll(2800,0);
          document.getElementById('btnScrollrigth').style.display = 'none';
          document.getElementById('Container__BtnServices').style.justifyContent = 'left';
          ScrollServices = undefined;
          break;
        default:

          alert('Error');
          break;

      }


    };


    const Scrollleft = () => {
      switch(ScrollServices){
        case undefined:
          document.getElementById('Container__CardServices2').scroll(1300,0);
          document.getElementById('btnScrollrigth').style.display = 'flex';
          document.getElementById('Container__BtnServices').style.justifyContent = 'space-between';
          ScrollServices = 1;
        break;

        case 1:
          document.getElementById('Container__CardServices2').scroll(0,0);
          document.getElementById('btnScrollleft').style.display = 'none';
          document.getElementById('Container__BtnServices').style.justifyContent = 'right';
          ScrollServices = undefined;
          break;

        default:

          alert('Error');
          break;

      }
    };


  return (
    <section className='Servicios' id='Servicios'>
        <div className='Servicios__div1'>
            <h2>Servicios gubernamentales por institución</h2>
            <a href="">Ver todos los servicios<i class='bx bx-right-arrow-alt'></i></a>
        </div>
        
            <div className='Container__CardServices'> 
              <div className='Container__BtnServices' id='Container__BtnServices'>
                <button onClick={Scrollleft} className='btn' id='btnScrollleft'><i class='bx bx-chevron-left' ></i></button>
                <button onClick={Scrollrigth} id='btnScrollrigth'><i class='bx bx-chevron-left bx-rotate-180' ></i></button>
              </div>
              <div className='Container__CardServices2' id='Container__CardServices2'>
                {Cardlist}
              </div>
          </div>
   
        

    </section>
  )
};
