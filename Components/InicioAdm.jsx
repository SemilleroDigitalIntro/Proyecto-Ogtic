import React from 'react';
import './Style/InicioAdmin.less';
import EstandarN from './ComponentesParaN/EstandarN';
import SeleccionPuntoGOB from './ComponentesParaF/SeleccionPuntoGOB';
import SeleccionInstitucion from './ComponentesParaF/SeleccionInstitucion';
import SeleccionServicio from './ComponentesParaF/SeleccionServicio';
import Calendario from './ComponentesParaF/Calendario';
import Horario from './ComponentesParaF/horas';
import { PuntoGOBSelecionado } from './ComponentesParaF/SeleccionPuntoGOB';
import { InstitucionSeleccionada } from './ComponentesParaF/SeleccionInstitucion';
import { ServicioSeleccionado } from './ComponentesParaF/SeleccionServicio';
import DataPuntoGobs from './Data/DataInst';
import DataServicios from './Data/DataServicios';

export default function InicioAdm() {
    let CambiarVista;
    let genero = false;

    let Hoverperfil;
    let HoverAgendarC;
    let HoverCitasA;
    let HoverNotificaciones;



    let SectionPerfil = document.getElementById('Main1');
    let SectionNotificacion = document.getElementById('Main2');
    let SectionAgendarCita = document.getElementById('Main3');

    

    // const DataNlist = DataN.map( E =>{
    //     return(
    //         <EstandarN Institucion = {E.Institucion} Asunto = {E.Asunto} parte_contenidoN = {E.parte_contenidoN}/>
    //     )
    // });
    

    // const ValidacionInicioSesion = async () => {
    //     fetch('http://localhost:4000/api/Users',{
    //         method: 'PUT',
    //         headers: {'content-Type' : 'application/json'},
    //         body: JSON.stringify({})
    //     })
        
    // };
    let Noexiste;
    const ValidacionInicioSesion = async () =>{
        const connection = await fetch('http://localhost:4000/api/Users');
        const Data = await connection.json();
        let Inicio = document.querySelector('.Inicio');
        let root = document.getElementById('root');
        const largoArray = Data.data.length;
        for(let x=0;x < largoArray; x++){
            if(Data.data[x].InicioSesion == 1){
                InicioSesion(Data.data[x].NombreCompleto , Data.data[x].Cedula, Data.data[x].Gmail)
                Noexiste = true;
            }else{
                continue;
            }
        }
        if(Noexiste == undefined){
            Inicio.remove();

            let dialog = document.createElement('dialog');
            dialog.open = 'true';
            dialog.style.height = '100vh';
            dialog.style.border = 'none';
            let dialogh1 = document.createElement('h1');
            dialogh1.style.color = '#003876';
            let dialogText = document.createTextNode = 'No se ha registrado un inicio de sesion valido, por favor regresar al login para iniciar sesion⚠️.';

            let dialogBtn = document.createElement('button');
            dialogBtn.style.height = '1cm';
            dialogBtn.style.width = '3cm';
            dialogBtn.style.border = '1px solid gray';
            dialogBtn.style.borderRadius = '10px';
            dialogBtn.style.fontSize = '16px';
            dialogBtn.style.fontWeight = '600';
            dialogBtn.style.background = '#003876';
            dialogBtn.style.color = 'white';
            dialogBtn.style.cursor = 'pointer';

            dialogBtn.addEventListener('pointerover',()=>{
                dialogBtn.style.opacity = '0.7'
            });
            dialogBtn.addEventListener('pointerleave', ()=>{
                dialogBtn.style.opacity = '1';
            });
            dialogBtn.addEventListener('click',()=>{
                window.location.href = '/login';
            });

            let dialogBtnText = document.createTextNode = 'Ir a login';
            dialogBtn.append(dialogBtnText);
            dialogh1.append(dialogText);
            dialog.append(dialogh1,dialogBtn);
            root.append(dialog);

        }else{

        }
    };
    ValidacionInicioSesion();

    const InicioSesion = (NombreCompleto,Cedula,CorreoElectronico)=> {

        let Name = document.getElementById('Name');
        Name.value = NombreCompleto;

        let ID = document.getElementById('ID');
        ID.value = Cedula;

        let Email = document.getElementById('Email');
        Email.value = CorreoElectronico;

        let NameF = document.getElementById('NameF');
        NameF.value = NombreCompleto;

        let IDF = document.getElementById('IDF');
        IDF.value = Cedula;
        
        let EmailF = document.getElementById('EmailF');
        EmailF.value = CorreoElectronico;

        ValidacionCitas(NombreCompleto,Cedula,CorreoElectronico)
        
    };
    

    
    const ValidacionCitas = async (NombreCompleto,Cedula,CorreoElectronico) => {
        let prueba;
        const conexion = await fetch('http://localhost:4200/api/citasagendadas');
        const Data = await conexion.json();
        const largoArray = Data.data.length;
        for(let x = 0; x < largoArray; x++){
            if(Data.data[x].Cedula == Cedula){
                GeneralHistoriaCitas(Data.data[x].InstitucionPublica,Data.data[x].DescripcionCita)
            }else{
                continue;
            }
        };

        
    };
    

   
    
   
    
    let P;
    const Perfil = () => {
        
        for(let x = 1; x < 7; x++){
            document.getElementById(`Estilo${x}`).style.background = 'none';
            document.getElementById(`Main${x}ad`).style.display = 'none';
           }
           document.getElementById(`Estilo1`).style.background = '#0b7cc8';
           document.getElementById('Main1ad').style.display = 'flex';
           P = true;
           GU = undefined;
           GC = undefined;
           AC = undefined;
           EXP = undefined;
           REP = undefined;
    };

    let GU;
    const GestionUsuario = () => {
       for(let x = 1; x < 7; x++){
        document.getElementById(`Estilo${x}`).style.background = 'none';
        document.getElementById(`Main${x}ad`).style.display = 'none';
       }
       document.getElementById(`Estilo2`).style.background = '#0b7cc8';
       document.getElementById('Main2ad').style.display = 'flex';
       GU = true;
       P = undefined;
       GC = undefined;
       AC = undefined;
       EXP = undefined;
       REP = undefined;
    };

   
    let GC;
    const Gestioncitas = () => {
        for(let x = 1; x < 7; x++){
            document.getElementById(`Estilo${x}`).style.background = 'none';
            document.getElementById(`Main${x}ad`).style.display = 'none';
           }
           document.getElementById(`Estilo3`).style.background = '#0b7cc8';
           document.getElementById('Main3ad').style.display = 'flex';
           GC = true;
           GU = undefined;
           P = undefined;
           AC = undefined;
           EXP = undefined;
           REP = undefined;
    };

    let AC;
    const AgendarCitas = () => {
        for(let x = 1; x < 7; x++){
            document.getElementById(`Estilo${x}`).style.background = 'none';
            document.getElementById(`Main${x}ad`).style.display = 'none';
           }
           document.getElementById(`Estilo4`).style.background = '#0b7cc8';
           document.getElementById('Main4ad').style.display = 'flex';
           AC = true;
           EXP = undefined;
           GU = undefined;
           P = undefined;
           GC = undefined;
           REP = undefined;
    };

    let EXP;
    const Exportaciondatos = () => {
        for(let x = 1; x < 7; x++){
            document.getElementById(`Estilo${x}`).style.background = 'none';
            document.getElementById(`Main${x}ad`).style.display = 'none';
           }
           document.getElementById(`Estilo5`).style.background = '#0b7cc8';
           document.getElementById('Main5ad').style.display = 'flex';
           EXP = true;
           GU = undefined;
           P = undefined;
           GC = undefined;
           REP = undefined;
           AC = undefined;
        };
    let REP;
    const Reportes = () => {
        for(let x = 1; x < 7; x++){
            document.getElementById(`Estilo${x}`).style.background = 'none';
            document.getElementById(`Main${x}ad`).style.display = 'none';
           }
           document.getElementById(`Estilo6`).style.background = '#0b7cc8';
           document.getElementById('Main6ad').style.display = 'flex';
           REP = true;
           GU = undefined;
           P = undefined;
           GC = undefined;
           EXP = undefined;
           AC = undefined;
        };


    const CerrarsesionModal = () => {
        document.getElementById('ModalCerrarSesion').style.display = 'flex';
    };

    const CerrarsesionConfirmacion = async () => {
        const connection = await fetch('http://localhost:4000/api/Users');
        const Data = await connection.json();
        const largoArray = Data.data.length;
        for(let x = 0; x < largoArray; x++){
            if(Data.data[x].InicioSesion == 1){
                Cerrarsesion(Data.data[x].ID,Data.data[x].InicioSesion)
            }else{
                continue;
            }
        }

        
    };

    const Cerrarsesion = (ID,BINARIO_INICIO_SESION) =>{
        fetch('http://localhost:4000/api/Users/:ID',{
            method: 'PUT',
            headers: {'content-Type':'application/json'},
            body: JSON.stringify({InicioSesion: 2, ID: ID })
          }).then((respuesta)=> respuesta.json())
          .then(data => {
            console.log('Usuario agregado',data)
            window.location.href = '/login';
          }).catch(
            (err)=>{
              console.log('tenemos un error', err)
            }
        );
    };

    const NocerrarSesion = () => {
        document.getElementById('ModalCerrarSesion').style.display = 'none';
    };

    //hover Perfil Administrativo
    const Over1 = () => {
        document.getElementById('Estilo1').style.background = '#0b7cc8';

    };
    const Leave1 = () => {
        if(P== undefined){
            document.getElementById('Estilo1').style.background = 'none';
        }
    };

    //Hover Gestion de usuario

    const Over2 = () => {
        document.getElementById('Estilo2').style.background = '#0b7cc8';
    };
    const Leave2 = () => {
        if(GU == undefined){
            document.getElementById('Estilo2').style.background = 'none';
        }
    };

    //Hover Gestion de usuario
    const Over3 = () => {
        document.getElementById('Estilo3').style.background = '#0b7cc8';
    };
    const Leave3 = () => {
        if(GC == undefined){
            document.getElementById('Estilo3').style.background = 'none';
        }
    };


    //Hover Agendar citas
    const Over4 = () => {
        document.getElementById('Estilo4').style.background = '#0b7cc8';
    };
    const Leave4 = () => {
        if(AC == undefined){
            document.getElementById('Estilo4').style.background = 'none';
        }
    };



    //Hover Exportacion de citas
    const Over5 = () => {
        document.getElementById('Estilo5').style.background = '#0b7cc8';
    };
    const Leave5 = () => {
       if(EXP == undefined){
        document.getElementById('Estilo5').style.background = 'none';
       }
    };


    //Hover Reportes
    const Over6 = () => {
        document.getElementById('Estilo6').style.background = '#0b7cc8';
    };
    const Leave6 = () => {
        if(REP == undefined){
            document.getElementById('Estilo6').style.background = 'none';
        }
    };


    

  return (
    <section className='Inicio'>
        <aside className='AsideAD'>
            <div className='Aside__div1'>
                <img src="Components/Img/LogoOffSimbolo.png" alt="" />
            </div>
            <div className='Aside__div2'>
            <span onClick={Perfil} onPointerOver={Over1} onPointerLeave={Leave1} id='Estilo1'>
                <i class='bx bxs-user' ></i>
                Perfil administrativo
            </span>
                <span onClick={GestionUsuario} onPointerOver={Over2} onPointerLeave={Leave2} id='Estilo2'> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-data-fill" viewBox="0 0 16 16"><path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/><path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"/></svg>
                    Gestión de usuarios
                </span>

                <span  onClick={Gestioncitas} onPointerOver={Over3} onPointerLeave={Leave3} id='Estilo3'>
                    <i class='bx bx-mail-send'></i>
                    Gestion de citas
                </span>

                <span onClick={AgendarCitas} onPointerOver={Over4} onPointerLeave={Leave4} id='Estilo4'>
                    <i class='bx bxs-calendar-alt'></i>
                    Agendar citas
                </span>

                <span onClick={Exportaciondatos} onPointerOver={Over5} onPointerLeave={Leave5}  id='Estilo5' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pie-chart-fill" viewBox="0 0 16 16"><path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778zM8.5.015V7.5h7.485A8 8 0 0 0 8.5.015"/></svg>
                    Exportacion de datos
                    </span>
                <span onClick={Reportes} onPointerOver={Over6} onPointerLeave={Leave6} id='Estilo6'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg>
                    Reportes
                </span>
                <span onClick={CerrarsesionModal} id='CerrarSesion'><i class='bx bx-log-out' ></i>Cerrar sesion</span>
            </div>

        </aside>  
        {/* Perfil */}
        <dialog className='ModalCerrarSesion' id='ModalCerrarSesion' open>
            <div className='ModalCerrarSesion_div1'>
                <h2>{`${ genero ? '¿Segura que quieres cerrar sesión?' : '¿Seguro que quieres cerrar sesión?'}`}</h2>
                <div>
                    <button onClick={NocerrarSesion}>No</button>
                    <button onClick={CerrarsesionConfirmacion} id='Si'>Si</button>
                </div>
            </div>
        </dialog>
        <main className='Main1ad' id='Main1ad'  >
            <header className='Main1__header'>
                <div>
                    <h1><i class='bx bxs-user' ></i>Perfil administrativo</h1>
                </div>
            </header>
            <section className='Main1__section' >
                <div className='Main1__section_div2'>
                    <div className='Main1__section_div2_d1'>
                        <div>
                            <img src="Components/Img/ImgAdm.png" alt="Img Adm" />
                        </div>
                        <div className='Inputs1' >
                            <div className='Inputs_div1' >
                                <div>
                                    <label className = 'exection' htmlFor="Name">Nombre</label>
                                    <input type="text" name="" id="Name" disabled/>
                                 </div>
                                <div>
                                    <label className = 'exection' htmlFor="ID">ID</label>
                                    <input type="text" name="" id="ID" disabled/>
                                </div>
                            </div>
                            <div className='Inputs_div2'>
                                <div>
                                    <label  htmlFor="Email">Email </label>
                                    <input  type="text" name="" id="Email" disabled/>
                                </div>
                                <div>
                                    <label htmlFor="">Numero de teléfono </label>
                                    <input type="text" name="" id="" disabled/>
                                </div>
                            </div>
                        </div>
                    </div>
             
                    
                    
                </div>
                <div className='Main1__section_div2_d3a'>
                        <div className='Ms_div2_d3_d2'>
                            <div>
                                <label htmlFor="">Supervisor/a <span>*</span>
                                </label>
                                <input type="text" name="" id="" value={'Amelia Vega'} disabled/>
                            </div>
                            <div>
                                <label htmlFor="">Departamento<span>*</span></label>
                                <input type="text" name="" id="" value={'Dep. de Atención al cliente'} disabled/>
                            </div>
                            <div>
                                <label htmlFor="">Cargo<span>*</span></label>
                                <input type="text" name="" value={'Administrador/a'} id="" disabled/>
                            </div>

                        </div>
                        <div className='Ms_div2_d3_d3'>
                            <div>
                                <label htmlFor="">Correo Electronico<span>*</span></label>
                                <input type="text" name="" id="" value={'Prueba123@gmail.com'} disabled/>
                            </div>
                            <div>
                                <label htmlFor="">Último acceso <span>*</span></label>
                                <input type="text" name="" id="" value={'27/11/2025 a las 9:30 am'} disabled />
                            </div>

                        </div>
                        <div className='Ms_div2_d3_d4'>
                            <label htmlFor="">Descripción</label>
                            <textarea name="" id="" disabled>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem qui repellendus, neque quibusdam omnis asperiores fuga ipsam error quos inventore eveniet dolor reprehenderit natus voluptatem? Nobis minus dolores quas laudantium.</textarea>
                        </div>
                    </div>
            </section>
        </main>

        {/* Gestion de usuarios */}

        <main className='Main2ad' id='Main2ad' style={{display: 'none'}}>
            <header className='Main2__header'>
                <div>
                    <h1> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clipboard2-data-fill" viewBox="0 0 16 16"><path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/><path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"/></svg>
                        <span>Gestión de usuarios</span>
                    </h1>
                </div>
            </header>
            <section className='Container_GestionUsuarios' id='Container_GestionUsuarios'>
                
            </section>
        </main>

        {/* Gestion de citas */}
        <main className='Main3ad' id='Main3ad' style={{display: 'none'}}>
            <header className='Main3__header'>
                <div>
                    <h1><i class='bx bx-mail-send'></i><span>Gestión de citas</span></h1>
                </div>
            </header>
            <section className='Container_Gestióncitas' id='Container_Gestióncitas'>
                
            </section>
        </main>

        <main className='Main4ad' id='Main4ad' style={{display: 'none'}}>
            <header className='Main3__header'>
                <div>
                    <h1><i class='bx bxs-calendar-alt'></i>Agendar Cita</h1>
                </div>
            </header>
            <section className='Main3__section1'>
                <div className='Main3__section1_div2'>
                    <div className='Main3__section1_Apartado1'>
                        <h2><i class='bx bxs-user-circle' ></i>Datos Personales</h2>
                    </div>
                    <div className='Main3__section_div2_d1'>
                        <div>
                            <label htmlFor="Name" id='NameL'>Nombre </label>
                            <input type="text" name="" id="NameF" disabled/>
                        </div>
                        <div>
                            <label htmlFor="ID" id='IDL'>ID</label>
                            <input type="text" name="" id="IDF" disabled/>
                        </div>
                        <div>
                            <label htmlFor="Email">Email</label>
                            <input type="text" name="" id="EmailF" />
                        </div>
                    </div>
                    <div className='Main3__section_div2_d2'>
                        
                        <div>
                            <label htmlFor="Pnumber">Numero </label>
                            <input type="text" name="" id="Pnumber" />
                        </div>

                    </div>
                </div>
                <div className='Main3__section1_div3'>
                    <div className='Main3__section1_Apartado2'>
                        <h2><i class='bx bxs-map'></i>Ubicacion </h2>
                    </div>
                    <div className='Main3__section1_div3_d1'>
                        <SeleccionPuntoGOB/>
                        <SeleccionInstitucion/>
                        <SeleccionServicio/>
                    </div>
                    
                </div>
                <div className='Horario'>
                        <Calendario/>
                        <Horario/>
                </div>
                <div className='container_btn_confirm'>
                        <button  className='confirm'>Agendar cita</button>
                </div>

            </section>
        </main>
        <main className='Main5ad' id='Main5ad' style={{display: 'none'}}>
            <header className='Main3__header'>
                <div>
                    <h1> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pie-chart-fill" viewBox="0 0 16 16"><path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778zM8.5.015V7.5h7.485A8 8 0 0 0 8.5.015"/></svg>
                        <span>Exportaciones de datos</span>
                    </h1>
                </div>
            </header>
            <section className='Container_notificaciones' id='Container_notificaciones'>
                
            </section>
        </main>
        <main className='Main6ad' id='Main6ad' style={{display: 'none'}}>
            <header className='Main3__header'>
                <div>
                    <h1><i class='bx bxs-flag-alt' ></i><span>Reportes</span></h1>
                </div>
            </header>
            <section className='Container_notificaciones' id='Container_notificaciones'>
                
            </section>
        </main>
    </section>
    );
};
