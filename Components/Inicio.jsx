import React from 'react';
import './Style/Inicio.less';
import EstandarN from './ComponentesParaN/EstandarN';
import DataN from './Data/DataN';
import SeleccionPuntoGOB from './ComponentesParaF/SeleccionPuntoGOB';
import SeleccionInstitucion from './ComponentesParaF/SeleccionInstitucion';
import SeleccionServicio from './ComponentesParaF/SeleccionServicio';
import Calendario from './ComponentesParaF/Calendario';

export default function Inicio() {
    let CambiarVista;
    let genero = false;

    let Hoverperfil;
    let HoverAgendarC;
    let HoverCitasA;
    let HoverNotificaciones;



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
            Hoverperfil = undefined;
            HoverNotificaciones = true;
            document.getElementById('EstiloP').style.background = '#003876';
            document.getElementById('Main1').style.display = 'flex';
            CambiarVista = undefined;

        }else if(CambiarVista == 1){
            Hoverperfil = undefined;
            HoverNotificaciones = true;
            document.getElementById('Main2').style.display = 'none';
            document.getElementById('EstiloN').style.background = 'none';
            document.getElementById('EstiloP').style.background = '#003876';
            document.getElementById('Main1').style.display = 'flex';
            CambiarVista = undefined;

        }else if(CambiarVista == 2){
            Hoverperfil = undefined;
            HoverAgendarC = true;
            document.getElementById('EstiloAC').style.background = 'none';
            document.getElementById('Main3').style.display = 'none';
            document.getElementById('EstiloP').style.background = '#003876';
            document.getElementById('Main1').style.display = 'flex';
            CambiarVista = undefined;

        }else if(CambiarVista == 3){

        }else{
            alert('Existe un error');
        }
    };


    const Notificaciones = () => {
        if(CambiarVista == undefined){
            Hoverperfil = true;
            HoverNotificaciones = undefined;
            document.getElementById('EstiloP').style.background = 'none';
            document.getElementById('EstiloN').style.background = '#003876';
            document.getElementById('Main1').style.display = 'none';
            document.getElementById('Main2').style.display = 'flex';
            CambiarVista = 1;

        }else if(CambiarVista == 1){
            HoverNotificaciones = undefined;
            document.getElementById('EstiloN').style.background = '#003876';
            document.getElementById('Main2').style.display = 'flex';
            CambiarVista = 1;

        }else if(CambiarVista == 2){
            HoverNotificaciones = undefined;
            HoverAgendarC = true;
            document.getElementById('EstiloAC').style.background = 'none';
            document.getElementById('EstiloN').style.background = '#003876';
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
            Hoverperfil = true;
            HoverAgendarC = undefined;
            document.getElementById('EstiloP').style.background = 'none';
            document.getElementById('EstiloAC').style.background = '#003876';
            document.getElementById('Main1').style.display = 'none';
            document.getElementById('Main3').style.display = 'flex';
            CambiarVista = 2;

        }else if(CambiarVista == 1){
            HoverNotificaciones = true;
            HoverAgendarC = undefined;
            document.getElementById('EstiloN').style.background = 'none';
            document.getElementById('EstiloAC').style.background = '#003876';
            document.getElementById('Main2').style.display = 'none';
            document.getElementById('Main3').style.display = 'flex';
            CambiarVista = 2;

        }else if(CambiarVista == 2){
            HoverAgendarC = undefined;
            document.getElementById('EstiloAC').style.background = '#003876';
            document.getElementById('Main3').style.display = 'flex';
            CambiarVista = 2;

        }else if(CambiarVista == 3){

        }else{
            alert('Existe un error');
        }

    };


    const Cerrarsesion = () => {
        document.getElementById('ModalCerrarSesion').style.display = 'flex';
    };

    const CerrarsesionConfirmacion = () => {
        window.location.href = '/';
    };

    const NocerrarSesion = () => {
        document.getElementById('ModalCerrarSesion').style.display = 'none';
    };

    const Over1 = () => {

        if(Hoverperfil == undefined){

        }else if(Hoverperfil == true){
            document.getElementById('EstiloP').style.background = 'gray';
        };

    };
    const Leave1 = () => {

        if(Hoverperfil == undefined){
            
        }else if(Hoverperfil == true){
            document.getElementById('EstiloP').style.background = 'none';
        };

    };


    const Over2 = () => {
        if(HoverNotificaciones == undefined){

        }else if(HoverNotificaciones == true){
            document.getElementById('EstiloN').style.background = 'gray';
        };

    };
    const Leave2 = () => {
        if(HoverNotificaciones == undefined){

        }else if(HoverNotificaciones == true){
            document.getElementById('EstiloN').style.background = 'none';
        };
    };


    const Over3 = () => {
        if(HoverAgendarC == undefined){

        }else if(HoverAgendarC == true){
            document.getElementById('EstiloAC').style.background = 'gray';
        };
    };
    const Leave3 = () => {
        if(HoverAgendarC == undefined){

        }else if(HoverAgendarC == true){
            document.getElementById('EstiloAC').style.background = 'none';
        };
    };

    
 

  return (
    <section className='Inicio'>
        <aside className='Aside'>
            <div className='Aside__div1'>
                <img src="Components/Img/LogoOffSimbolo.png" alt="" />
            </div>
            <div className='Aside__div2'>
                <span onClick={Perfil} onPointerOver={Over1} onPointerLeave={Leave1} id='EstiloP'><i class='bx bxs-user' ></i>Perfil</span>
                <span onClick={Notificaciones} onPointerOver={Over2} onPointerLeave={Leave2} id='EstiloN'><i class='bx bx-mail-send'></i>Citas Agendadas</span>
                <span onClick={AgendarCitas} onPointerOver={Over3} onPointerLeave={Leave3} id='EstiloAC'><i class='bx bxs-calendar-alt'></i>Agendar Citas</span>
                <span onClick={Cerrarsesion} id='CerrarSesion'><i class='bx bx-log-out' ></i>Cerrar sesion</span>
            </div>

        </aside>
        {/* Perfil */}
        <dialog className='ModalCerrarSesion' id='ModalCerrarSesion' open>
            <div className='ModalCerrarSesion_div1'>
                <h2>{`${ genero ? 'Segura que quieres cerrar sesion?' : 'Seguro que quieres cerrar sesion?'}`}</h2>
                <div>
                    <button onClick={NocerrarSesion}>No</button>
                    <button onClick={CerrarsesionConfirmacion} id='Si'>Si</button>
                </div>
            </div>
        </dialog>
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
                            <label className = 'exection' htmlFor="Name">Name</label>
                            <input type="text" name="" id="Name" disabled/>
                        </div>
                        <div>
                            <label className = 'exection' htmlFor="ID">ID</label>
                            <input type="text" name="" id="ID" disabled/>
                        </div>
                        <div>
                            <label  htmlFor="Email">Email</label>
                            <input  type="text" name="" id="Email" />
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
                    <h1>Citas Agendadas</h1>
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
                <div className='Main3__section1_div2'>
                    <div className='Main3__section1_Apartado1'>
                        <h2><i class='bx bxs-user-circle' ></i>Datos Personales</h2>
                    </div>
                    <div className='Main3__section_div2_d1'>
                        <div>
                            <label htmlFor="Name" id='NameL'>Name</label>
                            <input type="text" name="" id="Name" disabled/>
                        </div>
                        <div>
                            <label htmlFor="ID" id='IDL'>ID</label>
                            <input type="text" name="" id="ID" disabled/>
                        </div>
                        <div>
                            <label htmlFor="Email">Email</label>
                            <input type="text" name="" id="Email" />
                        </div>
                    </div>
                    <div className='Main3__section_div2_d2'>
                        
                        <div>
                            <label htmlFor="Pnumber">Phone Number</label>
                            <input type="text" name="" id="Pnumber" />
                        </div>

                    </div>
                </div>
                <div className='Main3__section1_div3'>
                    <div className='Main3__section1_Apartado2'>
                        <h2><i class='bx bxs-map'></i>Ubicacion</h2>
                    </div>
                    <div className='Main3__section1_div3_d1'>
                      <SeleccionPuntoGOB/>
                      <SeleccionInstitucion/>
                      <SeleccionServicio/>
                      
                    </div>
                    <div className='Horario'>
                        <Calendario/>
                      </div>

                </div>

            </section>
        </main>
    </section>
  );
};
