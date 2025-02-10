import React from 'react';
import DataNovedades from './Data/DataNovedades';
import './Style/Novedades.css';


export default function Novedades() {


  const NovedadesD = (props) =>{
    return(
      <div className='Novedades__Cards'>
        <img src={props.img} alt={props.imgAlt} />
        <div className='NvModal'>
          <h4>{props.title}</h4>
          <p>{props.descripcion}</p>
        </div>
      </div>
    )
  };

  const Novedadelist = DataNovedades.map( DN =>{
    return(
      <NovedadesD img = {DN.img} imgAlt = {DN.imgAlt} title = {DN.title}/>
    )
  })


  return (
    <section className='Novedades' id='Novedades'>
      <div className='Novedades__div1'>
        <h3>Novedades</h3>
        <a href="">Ver todas las novedades<i class='bx bx-right-arrow-alt'></i></a>
      </div>
      <div className='Novedades__div2'>
        {Novedadelist}
      </div>
    </section>
  )
};
