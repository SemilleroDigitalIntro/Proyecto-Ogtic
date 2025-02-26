import React from 'react'
import './Style/Centros.less';
import DataPuntosGob from './Data/DataPuntosGob';
import {InicioConfirmado} from './Header.jsx';

export default function Centros() {




    const PuntosGobs = (props) => {
        const Verservicios = () => {
            if(InicioConfirmado == true){
                window.location.href = '/Inicio';
            }else{
                window.location.href = '/login';
            }
        };

        return(
            <div className="cards__ubi">
                <div className="card__img">
                    <img className="img__ubi" src={props.img__ubi} alt={props.img__ubi_descripcion}/>
                </div>
                <div className="card__title">

                    <h1>{props.NombrePuntoGob}</h1>

                 </div>
                <div className = 'Gcard__text'>
                    <div className="card__text --ubicacion">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0185e8" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>

                        <p>{props.UbicacionPuntoGob}</p>

                    </div>
                    <div className="card__text --horario">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0185e8" class="bi bi-stopwatch" viewBox="0 0 16 16"><path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/><path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/></svg>
                        <p>{props.HorarioSemana} y {props.HorarioFinSemana}</p>
                    </div>
                    <div className="card__text --servicios">
                        <img src="../nashla/apreton-de-manos.png"/>
                        <p>{props.Servicios}</p>
                    </div>
                    <div className="card__text --instituciones">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0185e8" class="bi bi-bank" viewBox="0 0 16 16"><path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/></svg>
                        <p>{props.Instituciones}</p>
                    </div>
                </div>

                <div className="btn__ver">
                    <button onClick={Verservicios}>Ver servicios y tramites <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg>
                    </button>
                </div>
        </div>
        )
    };

    const DataPuntosGoblist = DataPuntosGob.map( DP => {
        return(
            <PuntosGobs 
            img__ubi = {DP.img__ubi} 
            img__ubi_descripcion = {DP.img__ubi_descripcion} 
            NombrePuntoGob = {DP.NombrePuntoGob}
            UbicacionPuntoGob = {DP.UbicacionPuntoGob}
            HorarioSemana = {DP.HorarioSemana}
            HorarioFinSemana = {DP.HorarioFinSemana}
            Servicios = {DP.Servicios}
            Instituciones = {DP.Instituciones}
            />
        )
    });

    let Scroling;
    const Right = () => {
      if(Scroling == undefined){
        document.getElementById('Centros__div2').scroll(1070,0);
        Scroling = 1;
      }else if(Scroling == 1){
        document.getElementById('Centros__div2').scroll(1400,0);
        Scroling = 2;
      }else{
        document.getElementById('Centros__div2').scroll(0,0);
        Scroling = undefined;
      };
    };

    const Left = () => {
        if(Scroling == undefined){
            document.getElementById('Centros__div2').scroll(1400,0);
            Scroling = 1;
          }else if(Scroling == 1){
            document.getElementById('Centros__div2').scroll(1070,0);
            Scroling = 2;
          }else{
            document.getElementById('Centros__div2').scroll(0,0);
            Scroling = undefined;
          };
    };



  return (
    <section className='Centros'>
        <div className='Centros__div1'>
           <div>
           <h2><span>Centros</span> de Atención Ciudadana Presencial</h2>
           
           </div>
            <a href="">Ver todos los Puntos GOB<i class='bx bx-right-arrow-alt'></i></a>
        </div>
        <div className='Centros__div2'>
            <div className='ControlGobs'>
                <button onClick={Left}><i class='bx bx-chevron-left' ></i></button>
                <button onClick={Right}><i class='bx bx-chevron-right'></i></button>
            </div>
            <div className='Centros__div2' id='Centros__div2'>
            
            {DataPuntosGoblist}
        </div>
        </div>
        
    </section>
  )
};
