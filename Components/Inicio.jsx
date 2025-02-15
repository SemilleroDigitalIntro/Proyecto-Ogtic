import React from 'react';
import './Style/Inicio.less';
import EstandarN from './ComponentesParaN/EstandarN';
import DataN from './Data/DataN';

export default function Inicio() {
    let CambiarVista;
    let SectionPerfil = document.getElementById('Main1');
    let SectionNotificacion = document.getElementById('Main2');
    let SectionAgendarCita = document.getElementById('Main3');

    const DataNlist = DataN.map( E =>{
        return(
            <EstandarN Institucion = {E.Institucion} Asunto = {E.Asunto} parte_contenidoN = {E.parte_contenidoN}/>
        )
    });

    const Perfil = () => {
        if(CambiarVista == undefined){

            document.getElementById('Main1').style.display = 'flex';
            CambiarVista = undefined;

        }else if(CambiarVista == 1){
            document.getElementById('Main2').style.display = 'none';
            document.getElementById('Main1').style.display = 'flex';
            CambiarVista = undefined;

        }else if(CambiarVista == 2){
            
            document.getElementById('Main3').style.display = 'none';
            document.getElementById('Main1').style.display = 'flex';
            CambiarVista = undefined;

        }else if(CambiarVista == 3){

        }else{
            alert('Existe un error');
        }
    };


    const Notificaciones = () => {
        if(CambiarVista == undefined){

            document.getElementById('Main1').style.display = 'none';
            document.getElementById('Main2').style.display = 'flex';
            CambiarVista = 1;

        }else if(CambiarVista == 1){

            document.getElementById('Main2').style.display = 'flex';
            CambiarVista = 1;

        }else if(CambiarVista == 2){
            
            document.getElementById('Main3').style.display = 'none';
            document.getElementById('Main2').style.display = 'flex';
            CambiarVista = 1;

        }else if(CambiarVista == 3){

        }else{
            alert('Existe un error');
        }

    };

    const AgendarCitas = () => {
        if(CambiarVista == undefined){

            document.getElementById('Main1').style.display = 'none';
            document.getElementById('Main3').style.display = 'flex';
            CambiarVista = 2;

        }else if(CambiarVista == 1){
            document.getElementById('Main2').style.display = 'none';
            document.getElementById('Main3').style.display = 'flex';
            CambiarVista = 2;

        }else if(CambiarVista == 2){
            
            document.getElementById('Main3').style.display = 'flex';
            CambiarVista = 2;

        }else if(CambiarVista == 3){

        }else{
            alert('Existe un error');
        }

    };

    const CitasAgendadas = () => {

    };

    const Cerrarsesion = () => {

    };
 

  return (
    <section className='Inicio'>
        <aside className='Aside'>
            <div className='Aside__div1'>
                <img src="Components/Img/LogoOffSimbolo.png" alt="" />
            </div>
            <div className='Aside__div2'>
                <span onClick={Perfil}><i class='bx bxs-user' ></i>Perfil</span>
                <span onClick={Notificaciones}><i class='bx bx-mail-send'></i>Notificaciones</span>
                <span onClick={AgendarCitas}><i class='bx bxs-calendar-alt'></i>Agendar Citas</span>
                <span onClick={CitasAgendadas}><i class='bx bxs-calendar' ></i>Citas Agendadas</span>
                <span onClick={Cerrarsesion} id='CerrarSesion'><i class='bx bx-log-out' ></i>Cerrar sesion</span>
            </div>

        </aside>
        {/* Perfil */}
        <main className='Main1' id='Main1'  >
            <header className='Main1__header'>
                <div>
                    <h1>Perfil</h1>
                </div>
            </header>
            <section className='Main1__section' >
                {/* <div className='Main1__section_div1'>
                    <span>Opcion 1 </span>
                    <span>Opcion 2</span>
                    <span>Opcion 3</span>
                </div> */}
                <div className='Main1__section_div2'>
                    <div className='Main1__section_div2_d1'>
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">ID</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className='Main1__section_div2_d2'>
                        
                        <div>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name="" id="" />
                        </div>

                    </div>
                    <div className='Ms_div2_d3_d3'>
                            <button>Actualizar</button>
                    </div>
                    
                    
                </div>
                <div className='Main1__section_div2_d3'>
                        <div className='Ms_div2_d3_d1'>
                            <h3>Cambiar contrasena actual</h3>
                        </div>
                        <div className='Ms_div2_d3_d2'>
                            <div>
                                <label htmlFor="">Contrasena actual <span>*</span>
                                </label>
                                <input type="text" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Nueva contrasena <span>*</span></label>
                                <input type="text" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Confirmar nueva contrasena <span>*</span></label>
                                <input type="text" name="" id="" />
                            </div>

                        </div>
                        <div className='Ms_div2_d3_d3'>
                            <button>Cambiar</button>
                        </div>
                    </div>
            </section>
        </main>

        {/* Bandeja de Notificaciones */}

        <main className='Main2' id='Main2' style={{display: 'none'}}>
            <header className='Main2__header'>
                <div>
                    <h1>Notificaciones</h1>
                </div>
            </header>
            <section className='Container_notificaciones'>
                {DataNlist}
            </section>
        </main>

        {/* Agendar Cita */}

        <main className='Main3' id='Main3' style={{display: 'none'}}>
            <header className='Main3__header'>
                <div>
                    <h1>Agendar Cita</h1>
                </div>
            </header>
            <section className='Main3__section1'>
            <div className='Main3__section_div2'>
                    <div className='Main3__section_div2_d1'>
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">ID</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className='Main3__section_div2_d2'>
                        
                        <div>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name="" id="" />
                        </div>

                    </div>
                </div>

            </section>
        </main>
    </section>
  );
};
