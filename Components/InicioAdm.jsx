import React from 'react';
import './Style/Inicio.less';
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
    const GeneralHistoriaCitas = (ArrayDatos,Institucion,DescripcionCita, ) => {
    
   
            // let Container_notificaciones = document.getElementById('Container_notificaciones');
            // let Notificacion = document.createElement('div');
            // Notificacion.className = `Notificacion ${Institucion}`;

            // let spanIntitucion = document.createElement('span');
            // spanIntitucion.innerText = `${Institucion}`;

            // let Notificacion__div1 = document.createElement('div');
            // Notificacion__div1.className = `Notificacion__div1`;

            // let Asunto_Notificacion =  document.createElement('span');
            // Asunto_Notificacion.id = 'Asunto_Notificacion';
            // Asunto_Notificacion.innerText = 'Asunto ';

            // let spangray = document.createElement('span');
            // spangray.innerText = '-';

            // let parte_contenidoN = document.createElement('span');
            // parte_contenidoN.innerText = `${DescripcionCita}`;
            // parte_contenidoN.id = 'parte_contenidoN';

            // let Notificacion__div1_d1 = document.createElement('div');
            // Notificacion__div1_d1.className = 'Notificacion__div1_d1';

            // let span1 = document.createElement('span');
            // span1.addEventListener('click',()=>{
            //     Notificacion.remove()
            // })
            // span1.innerHTML = `<i class='bx bx-trash' ></i>`;
            // let span2 = document.createElement('span');
            // span2.innerHTML = `<i class='bx bx-envelope-open' ></i>`;
            // let span3 = document.createElement('span');
            // span3.innerHTML = `<i class='bx bx-time-five'></i>`;

            // Notificacion__div1_d1.append(span1,span2,span3);
            // Notificacion__div1.append(Asunto_Notificacion,spangray,parte_contenidoN,Notificacion__div1_d1);
            // Notificacion.append(spanIntitucion,Notificacion__div1)

            
            // console.log(`${Notificacion}`)
            // Container_notificaciones.append(Notificacion);

                      


          
    };

   
    
   
    

    const Perfil = () => {
        if(CambiarVista == undefined){
            Hoverperfil = undefined;
            HoverNotificaciones = true;
            document.getElementById('EstiloP').style.background = '#0b7cc8';
            document.getElementById('Main1').style.display = 'flex';
            CambiarVista = undefined;

        }else if(CambiarVista == 1){
            Hoverperfil = undefined;
            HoverNotificaciones = true;
            document.getElementById('Main2').style.display = 'none';
            document.getElementById('EstiloN').style.background = 'none';
            document.getElementById('EstiloP').style.background = '#0b7cc8';
            document.getElementById('Main1').style.display = 'flex';
            CambiarVista = undefined;

        }else if(CambiarVista == 2){
            Hoverperfil = undefined;
            HoverAgendarC = true;
            document.getElementById('EstiloAC').style.background = 'none';
            document.getElementById('Main3').style.display = 'none';
            document.getElementById('EstiloP').style.background = '#0b7cc8';
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
            document.getElementById('EstiloN').style.background = '#0b7cc8';
            document.getElementById('Main1').style.display = 'none';
            document.getElementById('Main2').style.display = 'flex';
            CambiarVista = 1;

        }else if(CambiarVista == 1){
            HoverNotificaciones = undefined;
            document.getElementById('EstiloN').style.background = '#0b7cc8';
            document.getElementById('Main2').style.display = 'flex';
            CambiarVista = 1;

        }else if(CambiarVista == 2){
            HoverNotificaciones = undefined;
            HoverAgendarC = true;
            document.getElementById('EstiloAC').style.background = 'none';
            document.getElementById('EstiloN').style.background = '#0b7cc8';
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
            document.getElementById('EstiloAC').style.background = '#0b7cc8';
            document.getElementById('Main1').style.display = 'none';
            document.getElementById('Main3').style.display = 'flex';
            CambiarVista = 2;

        }else if(CambiarVista == 1){
            HoverNotificaciones = true;
            HoverAgendarC = undefined;
            document.getElementById('EstiloN').style.background = 'none';
            document.getElementById('EstiloAC').style.background = '#0b7cc8';
            document.getElementById('Main2').style.display = 'none';
            document.getElementById('Main3').style.display = 'flex';
            CambiarVista = 2;

        }else if(CambiarVista == 2){
            HoverAgendarC = undefined;
            document.getElementById('EstiloAC').style.background = '#0b7cc8';
            document.getElementById('Main3').style.display = 'flex';
            CambiarVista = 2;

        }else if(CambiarVista == 3){

        }else{
            alert('Existe un error');
        }

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

    const Over1 = () => {

        if(Hoverperfil == undefined){

        }else if(Hoverperfil == true){
            document.getElementById('EstiloP').style.background = '#0b7cc8';
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
            document.getElementById('EstiloN').style.background = '#0b7cc8';
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
            document.getElementById('EstiloAC').style.background = '#0b7cc8';
        };
    };
    const Leave3 = () => {
        if(HoverAgendarC == undefined){

        }else if(HoverAgendarC == true){
            document.getElementById('EstiloAC').style.background = 'none';
        };
    };


    const  AgendarCita = () => {
        let ID = document.getElementById('ID');
        const Cedula = ID.value;

        switch(PuntoGOBSelecionado){
            //OrientalMAll
            case 1:
                switch(InstitucionSeleccionada){
                    case 0:
                        
                        let Institucion = DataPuntoGobs[0].GobOcidentalMall[0].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[0].MESCYT[0].ServiciosM;
                                SubirCita(Cedula,Institucion,servicio);
                                alert(Cedula+ ' ' + Institucion + ' '+ servicio);
                                break;
                            default:
                                break;
                        }


                        break;
                    case 1:
                        let Institucion1 = DataPuntoGobs[0].GobOcidentalMall[1].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[0].SIE[0].ServiciosSIE;
                                SubirCita(Cedula,Institucion1,servicio)
                                alert(Cedula+ ' ' + Institucion1 + ' '+ servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 2:
                        let Institucion2 = DataPuntoGobs[0].GobOcidentalMall[2].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[0].DIDA[0].ServiciosDIDA;
                                SubirCita(Cedula,Institucion2,servicio)
                                alert(Cedula+ ' ' + Institucion2 + ' '+ servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 3:
                        let Institucion3 = DataPuntoGobs[0].GobOcidentalMall[2].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[0].SISALRIL[0].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion3,servicio)
                                break;
                            case 1:
                                let servicio1 = DataServicios[0].SISALRIL[1].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion3,servicio1);
                                break;

                            case 2:
                                let servicio2 = DataServicios[0].SISALRIL[2].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion3,servicio2)
                                break;
                            case 3:
                                let servicio3 = DataServicios[0].SISALRIL[3].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion3,servicio3)
                                break;
                            case 4:
                                let servicio4 = DataServicios[0].SISALRIL[4].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion3,servicio4)
                                break;
                            default:
                                break;
                        }
                        break;

                    case 4:
                        let Institucion4 = DataPuntoGobs[0].GobOcidentalMall[4].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[0].TSS[0].ServiciosTSS;
                                SubirCita(Cedula,Institucion4,servicio)
                                break;
                            default:
                                break;
                        }
                        break;

                    case 5:
                        let Institucion5 = DataPuntoGobs[0].GobOcidentalMall[5].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[0].DMAPS[0].ServiciosDMAPS;
                                SubirCita(Cedula,Institucion5,servicio)
                                break;
                            default:
                                break;
                        }
                        break;
                    case 6:
                        let Institucion6 = DataPuntoGobs[0].GobOcidentalMall[6].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[0].MINE[0].ServiciosMine;
                                SubirCita(Cedula,Institucion6,servicio)
                                break;
                            default:
                                break;
                        }
                        break;
                    case 7:
                        let Institucion7 = DataPuntoGobs[0].GobOcidentalMall[7].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[0].INTRANT[0].ServiciosINTRANT;
                                SubirCita(Cedula,Institucion7,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[0].INTRANT[1].ServiciosINTRANT;
                                SubirCita(Cedula,Institucion7,servicio1);
                                break;
                            case 2:
                                let servicio2 = DataServicios[0].INTRANT[2].ServiciosINTRANT;
                                SubirCita(Cedula,Institucion7,servicio2);
                            default:
                                break;
                        }
                        break;
                    case 8:
                        let Institucion8 = DataPuntoGobs[0].GobOcidentalMall[8].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[0].DGM[0].ServiciosDGM;
                                SubirCita(Cedula,Institucion8,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break; 
                }
                break;
                //Sambil
            case 2:
                switch(InstitucionSeleccionada){
                    case 0:
                        let Institucion = DataPuntoGobs[0].GobSambil[0].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[1].DIDA[0].ServiciosDIDA;
                                SubirCita(Cedula,Institucion,servicio);
                                
                                break;
                            case 1:
                                let servicio1 = DataServicios[1].DIDA[1].ServiciosDIDA;
                                SubirCita(Cedula,Institucion,servicio1);
                                
                                break;
                            case 2:
                                let servicio2 = DataServicios[1].DIDA[2].ServiciosDIDA;
                                SubirCita(Cedula,Institucion,servicio2);
                                
                                break;
                            case 3:
                                let servicio3 = DataServicios[1].DIDA[3].ServiciosDIDA;
                                SubirCita(Cedula,Institucion,servicio3);
                                break;
                            case 4:
                                let servicio4 = DataServicios[1].DIDA[4].ServiciosDIDA;
                                SubirCita(Cedula,Institucion,servicio4);
                                break;
                            case 5:
                                let servicio5 = DataServicios[1].DIDA[5].ServiciosDIDA;
                                SubirCita(Cedula,Institucion,servicio5);
                                break;

                            default:
                                break;
                        }
                        break;
                    case 1:
                        let Institucion1 = DataPuntoGobs[0].GobSambil[1].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[1].PN[0].ServicioPN;
                                SubirCita(Cedula,Institucion1,servicio);
                                
                                break;
                            default:
                                break;
                        }
                        break;
                        
                    case 2:
                        let Institucion2 = DataPuntoGobs[0].GobSambil[2].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[1].DGP[0].ServicioDGP;
                                SubirCita(Cedula,Institucion2,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[1].DGP[1].ServicioDGP;
                                SubirCita(Cedula,Institucion2,servicio1);
                            case 2:
                                let servicio2 = DataServicios[1].DGP[2].ServicioDGP;
                                SubirCita(Cedula,Institucion2,servicio2);
                            default:
                                break;
                        }
                        break;
                    case 3:
                        let Institucion3 = DataPuntoGobs[0].GobSambil[3].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[1].DGM[0].ServiciosDGM;
                                SubirCita(Cedula,Institucion3,servicio);
                                break;
                        }
                        break;
                    case 4:
                        let Institucion4 = DataPuntoGobs[0].GobSambil[4].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[1].TSS[0].ServiciosTSS;
                                SubirCita(Cedula,Institucion4,servicio);
                            break;
                        }
                        break;
                    default:
                        break; 
                }
                break;
                //Expreso
            case 3:
                switch(InstitucionSeleccionada){
                    case 0:
                        let Institucion = DataPuntoGobs[0].GobExpreso[0].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[2].ADESS[0].ServiciosADESS;
                                SubirCita(Cedula,Institucion,servicio);
                                break;
                            default:
                                break;
                        
                        }
                        break;
                    case 1:
                        let Institucion1 = DataPuntoGobs[0].GobExpreso[1].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[2].ASDE[0].ServiciosASDE;
                                SubirCita(Cedula,Institucion1,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[2].ASDE[1].ServiciosASDE;
                                SubirCita(Cedula,Institucion1,servicio1);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 2:
                        let Institucion2 = DataPuntoGobs[0].GobExpreso[2].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[2].DGJP[0].ServiciosDGJP;
                                SubirCita(Cedula,Institucion2,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[2].DGJP[0].ServiciosDGJP;
                                SubirCita(Cedula,Institucion2,servicio1);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 3:
                        let Institucion3 = DataPuntoGobs[0].GobExpreso[3].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[2].DGP[0].ServicioDGP;
                                SubirCita(Cedula,Institucion3,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break; 
                }
                break;
            case 4://megacentro
                switch(InstitucionSeleccionada){
                    case 0:
                        let Institucion = DataPuntoGobs[0].GobMegacentro[0].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[3].ADESS[0].ServiciosADESS;
                                SubirCita(Cedula,Institucion,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[3].ADESS[1].ServiciosADESS;
                                SubirCita(Cedula,Institucion,servicio1);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 1:
                        let Institucion1 = DataPuntoGobs[0].GobMegacentro[1].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[3].INTRANT[0].ServiciosINTRANT;
                                SubirCita(Cedula,Institucion1,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[3].INTRANT[1].ServiciosINTRANT;
                                SubirCita(Cedula,Institucion1,servicio1);
                                break;
                            case 2:
                                let servicio2 = DataServicios[3].INTRANT[2].ServiciosINTRANT;
                                SubirCita(Cedula,Institucion1,servicio2);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 2:
                        let Institucion2 = DataPuntoGobs[0].GobMegacentro[2].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[3].DIDA[0].ServiciosDIDA;
                                SubirCita(Cedula,Institucion2,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[3].DIDA[1].ServiciosDIDA;
                                SubirCita(Cedula,Institucion2,servicio1);
                                break;
                            case 2:
                                let servicio2 = DataServicios[3].DIDA[2].ServiciosDIDA;
                                SubirCita(Cedula,Institucion2,servicio2);
                                break;
                            case 3:
                                let servicio3 = DataServicios[3].DIDA[3].ServiciosDIDA;
                                SubirCita(Cedula,Institucion2,servicio3);
                                break;
                            case 4:
                                let servicio4 = DataServicios[3].DIDA[4].ServiciosDIDA;
                                SubirCita(Cedula,Institucion2,servicio4);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 3:
                        let Institucion3 = DataPuntoGobs[0].GobMegacentro[3].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[3].ASDE[0].ServiciosASDE;
                                SubirCita(Cedula,Institucion3,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 4:
                        let Institucion4 = DataPuntoGobs[0].GobMegacentro[4].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[3].MIP[0].ServiciosMIP;
                                SubirCita(Cedula,Institucion4,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 5:
                        let Institucion5 = DataPuntoGobs[0].GobMegacentro[5].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[3].PGR[0].ServiciosPGR;
                                SubirCita(Cedula,Institucion5,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 6:
                        let Institucion6 = DataPuntoGobs[0].GobMegacentro[6].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[3].SISALRIL[0].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion6,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[3].SISALRIL[1].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion6,servicio1);
                                break;
                            case 2:
                                let servicio2 = DataServicios[3].SISALRIL[2].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion6,servicio2);
                                break;
                            case 3:
                                let servicio3 = DataServicios[3].SISALRIL[3].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion6,servicio3);
                                break;
                            case 4:
                                let servicio4 = DataServicios[3].SISALRIL[4].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion6,servicio4);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 7:
                        let Institucion7 = DataPuntoGobs[0].GobMegacentro[7].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[3].SIE[0].ServiciosSIE;
                                SubirCita(Cedula,Institucion7,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 8:
                        let Institucion8 = DataPuntoGobs[0].GobMegacentro[8].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[3].SUPERATE[0].ServiciosSUPERATE;
                                SubirCita(Cedula,Institucion8,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[3].SUPERATE[1].ServiciosSUPERATE;
                                SubirCita(Cedula,Institucion8,servicio1);
                                break;
                            case 2:
                                let servicio2 = DataServicios[3].SUPERATE[2].ServiciosSUPERATE;
                                SubirCita(Cedula,Institucion8,servicio2);
                                break;
                            case 3:
                                let servicio3 = DataServicios[3].SUPERATE[3].ServiciosSUPERATE;
                                SubirCita(Cedula,Institucion8,servicio3);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break; 
                }
                break;
            case 5://Santiago
                switch(InstitucionSeleccionada){
                    case 0:
                        let Institucion = DataPuntoGobs[0].GobSantiago[0].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[4].DIDA[0].ServiciosDIDA;
                                SubirCita(Cedula,Institucion,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[4].DIDA[1].ServiciosDIDA;
                                SubirCita(Cedula,Institucion,servicio1);
                                break;
                            case 2:
                                let servicio2 = DataServicios[4].DIDA[2].ServiciosDIDA;
                                SubirCita(Cedula,Institucion,servicio2);
                                break;
                            case 3:
                                let servicio3 = DataServicios[4].DIDA[3].ServiciosDIDA;
                                SubirCita(Cedula,Institucion,servicio3);
                                break;
                            case 4:
                                let servicio4 = DataServicios[4].DIDA[4].ServiciosDIDA;
                                SubirCita(Cedula,Institucion,servicio4);
                                break;
                                
                            default:
                                break;
                        }
                        break;
                    case 1:
                        let Institucion1 = DataPuntoGobs[0].GobSantiago[1].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[4].SISALRIL[0].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion1,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[4].SISALRIL[1].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion1,servicio1);
                                break;
                            case 2:
                                let servicio2 = DataServicios[4].SISALRIL[2].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion1,servicio2);
                                break;
                            case 3:
                                let servicio3 = DataServicios[4].SISALRIL[3].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion1,servicio3);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 2:
                        let Institucion2 = DataPuntoGobs[0].GobSantiago[2].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[4].TSS[0].ServiciosTSS;
                                SubirCita(Cedula,Institucion2,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 3:
                        let Institucion3 = DataPuntoGobs[0].GobSantiago[3].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[4].SUPERATE[0].ServiciosSUPERATE;
                                SubirCita(Cedula,Institucion3,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 4:
                        let Institucion4 = DataPuntoGobs[0].GobSantiago[4].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[4].INTRANT[0].ServiciosINTRANT;
                                SubirCita(Cedula,Institucion4,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[4].INTRANT[1].ServiciosINTRANT;
                                SubirCita(Cedula,Institucion4,servicio1);
                                break;
                            case 2:
                                let servicio2 = DataServicios[4].INTRANT[2].ServiciosINTRANT;
                                SubirCita(Cedula,Institucion4,servicio2);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 5:
                        let Institucion5 = DataPuntoGobs[0].GobSantiago[5].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[4].DGM[0].ServiciosDGM;
                                SubirCita(Cedula,Institucion5,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 6:
                        let Institucion6 = DataPuntoGobs[0].GobSantiago[5].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[4].MESCYT[0].ServiciosM;
                                SubirCita(Cedula,Institucion6,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 7:
                        let Institucion7 = DataPuntoGobs[0].GobSantiago[6].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[4].ADESS[0].ServiciosADESS;
                                SubirCita(Cedula,Institucion7,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[4].ADESS[1].ServiciosADESS;
                                SubirCita(Cedula,Institucion7,servicio1);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break; 
                }
                break;
            case 6://San Cristobal
                switch(InstitucionSeleccionada){
                    case 0:
                        let Institucion = DataPuntoGobs[0].GobSanCristobal[0].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[5].INTRANT[0].ServiciosINTRANT;
                                SubirCita(Cedula,Institucion,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[5].INTRANT[1].ServiciosINTRANT;
                                SubirCita(Cedula,Institucion,servicio1);
                                break;
                            case 2:
                                let servicio2 = DataServicios[5].INTRANT[2].ServiciosINTRANT;
                                SubirCita(Cedula,Institucion,servicio2);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 1:
                        let Institucion1 = DataPuntoGobs[0].GobSanCristobal[1].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[5].SIE[0].ServiciosSIE;
                                SubirCita(Cedula,Institucion1,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 2:
                        let Institucion2 = DataPuntoGobs[0].GobSanCristobal[2].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[5].DIDA[0].ServiciosDIDA;
                                SubirCita(Cedula,Institucion2,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[5].DIDA[1].ServiciosDIDA;
                                SubirCita(Cedula,Institucion2,servicio1);
                                break;
                            case 2:
                                let servicio2 = DataServicios[5].DIDA[2].ServiciosDIDA;
                                SubirCita(Cedula,Institucion2,servicio2);
                                break;
                            case 3:
                                let servicio3 = DataServicios[5].DIDA[3].ServiciosDIDA;
                                SubirCita(Cedula,Institucion2,servicio3);
                                break;
                            case 4:
                                let servicio4 = DataServicios[5].DIDA[4].ServiciosDIDA;
                                SubirCita(Cedula,Institucion2,servicio4);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 3:
                        let Institucion3 = DataPuntoGobs[0].GobSanCristobal[3].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[5].TSS[0].ServiciosTSS;
                                SubirCita(Cedula,Institucion3,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[5].TSS[1].ServiciosTSS;
                                SubirCita(Cedula,Institucion3,servicio1);
                                break
                            default:
                                break;
                        }
                        break;
                    case 4:
                        let Institucion4 = DataPuntoGobs[0].GobSanCristobal[4].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[5].ADESS[0].ServiciosADESS;
                                SubirCita(Cedula,Institucion4,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[5].ADESS[1].ServiciosADESS;
                                SubirCita(Cedula,Institucion4,servicio1);
                                break;
                            case 2:
                                let servicio2 = DataServicios[5].ADESS[2].ServiciosADESS;
                                SubirCita(Cedula,Institucion4,servicio2);
                                break;
                            case 3:
                                let servicio3 = DataServicios[5].ADESS[3].ServiciosADESS;
                                SubirCita(Cedula,Institucion4,servicio3);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break; 
                }
                break;
            case 7:
                switch(InstitucionSeleccionada){
                    case 0:
                        let Institucion = DataPuntoGobs[0].GobColinaCentro[0].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[6].ADESS[0].ServiciosADESS;
                                SubirCita(Cedula,Institucion,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[6].ADESS[1].ServiciosADESS;
                                SubirCita(Cedula,Institucion,servicio1);
                                break;
                            case 2:
                                let servicio2 = DataServicios[6].ADESS[2].ServiciosADESS;
                                SubirCita(Cedula,Institucion,servicio2);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 1:
                        let Institucion1 = DataPuntoGobs[0].GobColinaCentro[1].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[6].DGM[0].ServiciosDGM;
                                SubirCita(Cedula,Institucion1,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 2:
                        let Institucion2 = DataPuntoGobs[0].GobColinaCentro[2].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[6].SUPERATE[0].ServiciosSUPERATE;
                                SubirCita(Cedula,Institucion2,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 3:
                        let Institucion3 = DataPuntoGobs[0].GobColinaCentro[3].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[6].TSS[0].ServiciosTSS;
                                SubirCita(Cedula,Institucion3,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 4:
                        let Institucion4 = DataPuntoGobs[0].GobColinaCentro[4].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[6].DIDA[0].ServiciosDIDA;
                                SubirCita(Cedula,Institucion4,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[6].DIDA[1].ServiciosDIDA;
                                SubirCita(Cedula,Institucion4,servicio1);
                                break;
                            case 2:
                                let servicio2 = DataServicios[6].DIDA[2].ServiciosDIDA;
                                SubirCita(Cedula,Institucion4,servicio2);
                                break;
                            case 3:
                                let servicio3 = DataServicios[6].DIDA[3].ServiciosDIDA;
                                SubirCita(Cedula,Institucion4,servicio3);
                                break;
                            case 4:
                                let servicio4 = DataServicios[6].DIDA[4].ServiciosDIDA;
                                SubirCita(Cedula,Institucion4,servicio4);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 5:
                        let Institucion5 = DataPuntoGobs[0].GobColinaCentro[5].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[6].SISALRIL[0].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion5,servicio);
                                break;
                            case 1:
                                let servicio1 = DataServicios[6].SISALRIL[1].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion5,servicio1);
                                break;
                            case 2:
                                let servicio2 = DataServicios[6].SISALRIL[2].ServiciosSISALRIL;
                                SubirCita(Cedula,Institucion5,servicio2);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 6:
                        let Institucion6 = DataPuntoGobs[0].GobColinaCentro[6].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[6].MIP[0].ServiciosMIP;
                                SubirCita(Cedula,Institucion6,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 7:
                        let Institucion7 = DataPuntoGobs[0].GobColinaCentro[7].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[6].MINE[0].ServiciosMine;
                                SubirCita(Cedula,Institucion7,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    case 8:
                        let Institucion8 = DataPuntoGobs[0].GobColinaCentro[8].Instituciones;
                        switch(ServicioSeleccionado){
                            case 0:
                                let servicio = DataServicios[6].SIE[0].ServiciosSIE;
                                SubirCita(Cedula,Institucion8,servicio);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break; 
                }
                break;
            default:
                break;

        };
    };

    const SubirCita = async (Cedula,Institucion,servicio) => {
        fetch('http://localhost:4200/api/citasagendadas',{
            method: 'POST',
            headers: {'content-Type':'application/json'},
            body: JSON.stringify({InstitucionPublica: Institucion, DescripcionCita: servicio, Cedula: Cedula })
          }).then((respuesta)=> respuesta.json())
          .then(data => {
            console.log('Servicio Agregado',data)
          }).catch(
            (err)=>{
              console.log('tenemos un error', err)
            }
        );
    };
    
 

  return (
    <section className='Inicio'>
        <aside className='Aside'>
            <div className='Aside__div1'>
                <img src="Components/Img/LogoOffSimbolo.png" alt="" />
            </div>
            <div className='Aside__div2'>
            <span onClick={Perfil} onPointerOver={Over1} onPointerLeave={Leave1} id='EstiloP'><i class='bx bxs-user' ></i>Perfil administrativo</span>
                <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-data-fill" viewBox="0 0 16 16"><path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/><path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"/></svg>
                    Gestión de usuarios</span>
                <span onClick={Notificaciones} onPointerOver={Over2} onPointerLeave={Leave2} id='EstiloN'><i class='bx bx-mail-send'></i>Gestion de citas</span>
                <span onClick={AgendarCitas} onPointerOver={Over3} onPointerLeave={Leave3} id='EstiloAC'><i class='bx bxs-calendar-alt'></i>Agendar citas</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pie-chart-fill" viewBox="0 0 16 16"><path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778zM8.5.015V7.5h7.485A8 8 0 0 0 8.5.015"/></svg>
                    Exportacion de datos</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg>
                    Reportes</span>
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
        <main className='Main1' id='Main1'  >
            <header className='Main1__header'>
                <div>
                    <h1>Perfil</h1>
                </div>
            </header>
            <section className='Main1__section' >
                <div className='Main1__section_div2'>
                    <div className='Main1__section_div2_d1'>
                        <div>
                            <label className = 'exection' htmlFor="Name">Nombre</label>
                            <input type="text" name="" id="Name" disabled/>
                        </div>
                        <div>
                            <label className = 'exection' htmlFor="ID">ID</label>
                            <input type="text" name="" id="ID" disabled/>
                        </div>
                        <div>
                            <label  htmlFor="Email">Email </label>
                            <input  type="text" name="" id="Email" />
                        </div>
                    </div>
                    <div className='Main1__section_div2_d2'>
                        
                        <div>
                            <label htmlFor="">Numero de teléfono </label>
                            <input type="text" name="" id="" />
                        </div>

                    </div>
                    <div className='Ms_div2_d3_d3'>
                            <button>Actualizar</button>
                    </div>
                    
                    
                </div>
                <div className='Main1__section_div2_d3'>
                        <div className='Ms_div2_d3_d1'>
                            <h3>Cambiar contraseña actual</h3>
                        </div>
                        <div className='Ms_div2_d3_d2'>
                            <div>
                                <label htmlFor="">Contraseña actual <span>*</span>
                                </label>
                                <input type="text" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Nueva contraseña <span>*</span></label>
                                <input type="text" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Confirmar nueva contraseña <span>*</span></label>
                                <input type="text" name="" id="" />
                            </div>

                        </div>
                        <div className='Ms_div2_d3_d3'>
                            <button>Cambiar</button>
                        </div>
                    </div>
            </section>
        </main>

        {/* Bandeja de Citas */}

        <main className='Main2' id='Main2' style={{display: 'none'}}>
            <header className='Main2__header'>
                <div>
                    <h1>Citas Agendadas</h1>
                </div>
            </header>
            <section className='Container_notificaciones' id='Container_notificaciones'>
                
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
                        <button onClick={AgendarCita} className='confirm'>Agendar cita</button>
                </div>

            </section>
        </main>
    </section>
    );
};
