import { useState } from 'react';
import { InstitucionSeleccionada } from './SeleccionInstitucion';
import { PuntoGOBSelecionado } from './SeleccionPuntoGOB';
import DataServicios from '../Data/DataServicios';

export default function SeleccionServicio() {

    const [Servicio, Setservicio] = useState(true);

    const DeployServicio = () => {
        Setservicio(!Servicio);
        Servicio ? document.getElementById('Servicio__span').style.display = 'flex' :
        document.getElementById('Servicio__span').style.display = 'none';

        Servicio ? document.getElementById('Servicio__GOB_Arrow').style.rotate = '90deg' :
        document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
        
        Continua();


    };

    const Continua = () =>{
        let Container = document.getElementById('Servicio__span');
        Container.innerHTML = '';
        // if(Servicio == true){
            

        //     switch (InstitucionSeleccionada) {
        //         case 1:
                    
        //             let ServicioDGP1 = document.createElement('span');
        //             let ServicioDGPText1 = document.createTextNode('Solicitud de Pasaporte por primera vez (Adulto)');
        //             ServicioDGP1.className = 'exection'
        //             ServicioDGP1.append(ServicioDGPText1);
        //             ServicioDGP1.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText = 'Solicitud de Pasaporte por primera vez (Adulto)';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                    
        //             });
        //             Container.append(ServicioDGP1);


        //             let ServicioDGP2 = document.createElement('span');
        //             let ServicioDGPText2 = document.createTextNode('Renovación Pasaporte Adulto por Pérdida');
        //             ServicioDGP2.append(ServicioDGPText2);
        //             ServicioDGP2.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText ='Renovación Pasaporte Adulto por Pérdida';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                       
        //             });
        //             Container.append(ServicioDGP2);

        //             let ServicioDGP3 = document.createElement('span');
        //             let ServicioDGPText3 = document.createTextNode('Renovación Pasaporte Menor por Pérdida');
        //             ServicioDGP3.append(ServicioDGPText3);
        //             ServicioDGP3.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText ='Renovación Pasaporte Menor por Pérdida';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGP3);

        //             let ServicioDGP4 = document.createElement('span');
        //             let ServicioDGPText4 = document.createTextNode('Renovación Pasaporte adulto por deterioro');
        //             ServicioDGP4.append(ServicioDGPText4);
        //             ServicioDGP4.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText = 'Renovación Pasaporte adulto por deterioro';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                       
        //             });
        //             Container.append(ServicioDGP4);

        //             let ServicioDGP5 = document.createElement('span');
        //             let ServicioDGPText5 = document.createTextNode('Renovación de Pasaporte para Adultos por Vencimiento');
        //             ServicioDGP5.append(ServicioDGPText5);
        //             ServicioDGP5.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText = 'Renovación de Pasaporte para Adultos por Vencimiento';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGP5);
                
        //             let ServicioDGP6 = document.createElement('span');
        //             let ServicioDGPText6 = document.createTextNode('Renovación Pasaporte Menor por Vencimiento');
        //             ServicioDGP6.className = 'exection2';
        //             ServicioDGP6.append(ServicioDGPText6);
        //             ServicioDGP6.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText = 'Renovación Pasaporte Menor por Vencimiento';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGP6);


        //             break;
        //         case 4:
        //             //servicio 1
        //             let ServicioDGM1 = document.createElement('span');
        //             let ServicioDGMText1 = document.createTextNode('Permiso de Salida de Menores de Edad');
        //             ServicioDGM1.append(ServicioDGMText1);
        //             ServicioDGM1.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText ='Permiso de Salida de Menores de Edad';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGM1);

        //             //servicio 2

        //             let ServicioDGM2 = document.createElement('span');
        //             let ServicioDGMText2 = document.createTextNode('Renovación de Residencia Permanente');
        //             ServicioDGM2.append(ServicioDGMText2);
        //             ServicioDGM2.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText ='Renovación de Residencia Permanente';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGM2);

        //             //servicio 3
                    
        //             let ServicioDGM3 = document.createElement('span');
        //             let ServicioDGMText3 = document.createTextNode('Permisos para fines de Estudios');
        //             ServicioDGM3.append(ServicioDGMText3);
        //             ServicioDGM3.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText ='Permisos para fines de Estudios';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGM3);

        //             //servicio 4

        //             let ServicioDGM4 = document.createElement('span');
        //             let ServicioDGMText4 = document.createTextNode('Permiso de Permanencia Corto Plazo');
        //             ServicioDGM4.append(ServicioDGMText4);
        //             ServicioDGM4.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText ='Permiso de Permanencia Corto Plazo';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGM4);

        //             //servicio 5

        //             let ServicioDGM5 = document.createElement('span');
        //             let ServicioDGMText5 = document.createTextNode('Residencia Definitiva (RD-1)');
        //             ServicioDGM5.append(ServicioDGMText5);
        //             ServicioDGM5.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText ='Residencia Definitiva (RD-1)';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGM5);

        //             //servicio 6

        //             let ServicioDGM6 = document.createElement('span');
        //             let ServicioDGMText6 = document.createTextNode('Residencia Permanente');
        //             ServicioDGM6.append(ServicioDGMText6);
        //             ServicioDGM6.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText ='Residencia Permanente';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGM6);

        //             //servicio 7


        //             let ServicioDGM7 = document.createElement('span');
        //             let ServicioDGMText7 = document.createTextNode('Residencia Temporal (RT-4)');
        //             ServicioDGM7.append(ServicioDGMText7);
        //             ServicioDGM7.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText ='Residencia Temporal (RT-4)';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGM7);

        //             //servicio 8

        //             let ServicioDGM8 = document.createElement('span');
        //             let ServicioDGMText8 = document.createTextNode('Residencia Permanente en Calidad de Inversionista');
        //             ServicioDGM8.append(ServicioDGMText8);
        //             ServicioDGM8.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText ='Residencia Permanente en Calidad de Inversionista';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGM8);

        //             //servicio 9

        //             let ServicioDGM9 = document.createElement('span');
        //             let ServicioDGMText9 = document.createTextNode('Residencia por inversión en calidad de Jubilado o Pensionado');
        //             ServicioDGM9.append(ServicioDGMText9);
        //             ServicioDGM9.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText ='Residencia por inversión en calidad de Jubilado o Pensionado';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGM9);

        //             //servicio 10


        //             let ServicioDGM10 = document.createElement('span');
        //             let ServicioDGMText10 = document.createTextNode('Residencia por inversión en calidad de Rentista');
        //             ServicioDGM10.append(ServicioDGMText10);
        //             ServicioDGM10.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText ='Residencia por inversión en calidad de Rentista';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGM10);

        //             //servicio 11


        //             let ServicioDGM11 = document.createElement('span');
        //             let ServicioDGMText11 = document.createTextNode('Renovación de Residencia Temporal');
        //             ServicioDGM11.append(ServicioDGMText11);
        //             ServicioDGM11.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText ='Renovación de Residencia Temporal';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGM11);

        //             //servicio 12

        //             let ServicioDGM12 = document.createElement('span');
        //             let ServicioDGMText12 = document.createTextNode('Autogate');
        //             ServicioDGM1.append(ServicioDGMText12);
        //             ServicioDGM1.addEventListener('click',()=>{
        //                 document.getElementById('Servicio__GOB').innerText ='Autogate';
        //                 document.getElementById('Servicio__span').style.display = 'none';
        //                 document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg'
                        
        //             });
        //             Container.append(ServicioDGM1);



                    



        //             break;
        //         case 3:
        //             break;

        //         default:
        //             break;
        //     }
        // }else{
        //     Container.innerHTML = '';

        // }
        if(PuntoGOBSelecionado == 1){
            switch(InstitucionSeleccionada){//OcidentalMall
                case 0:
                    for(let x = 0; x<1;x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[0].MESCYT[x].ServiciosM}
                        `);
                        servicio.append(servicioText)
                        Container.append(servicio);
                    };
                    break;
                case 1:
                    for(let x = 0; x < 1; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[0].SIE[x].ServiciosSIE}
                        `);
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 2:
                    for(let x = 0; x < 1; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[0].DIDA[x].ServiciosDIDA}
                        `);
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 3:
                    for(let x = 0; x < 5; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[0].SISALRIL[x].ServiciosSISALRIL}
                        `);
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 4:
                    for(let x = 0; x < 1; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[0].TSS[x].ServiciosTSS}
                        `);
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 5:
                    for(let x = 0; x < 1; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[0].DMAPS[x].ServiciosDMAPS}
                        `);
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 6:
                    for(let x = 0; x < 1; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[0].MINE[x].ServiciosMine}
                        `);
                        servicio.append(servicioText);
                        Container.append(servicio);

                    };
                    break;
                case 7:
                    for(let x = 0; x < 3; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[0].INTRANT[x].ServiciosINTRANT}
                        `);
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 8:
                    for(let x = 0; x < 1; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[0].DGM[x].ServiciosDGM}
                        `);

                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;

                default:
                    alert('tenemos un error')
                    break;
            }
        }else if(PuntoGOBSelecionado == 2){//Sambil
            switch (InstitucionSeleccionada) {
                case 0:
                    for(let x = 0; x < 6; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[1].DIDA[x].ServiciosDIDA}
                        `);
                        servicio.append(servicioText);
                        Container.append(servicio)

                    };
                    break;
                case 1:
                    for(let x = 0; x < 1; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[1].PN[x].ServicioPN}
                        `);
                        servicio.append(servicioText);
                        Container.append(servicio)
                    };
                    break;
                case 2:
                    for(let x = 0; x < 4; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[1].DGP[x].ServicioDGP}
                        `);
                        servicio.append(servicioText);
                        Container.append(servicio)
                    };
                    break;
                case 3:
                    for(let x = 0; x < 1; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[1].DGM[x].ServiciosDGM}
                        `);
                        servicio.append(servicioText);
                        Container.append(servicio)
                    };
                    break;
                case 4:
                    for(let x = 0; x < 1; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[1].TSS[x].ServiciosTSS}
                        `);
                        servicio.append(servicioText);
                        Container.append(servicio)
                    };
                    break;
                default:
                    break;
            }
        }else if(PuntoGOBSelecionado == 3){
           switch(InstitucionSeleccionada){
            case 0:
                for(let x = 0; x < 1; x++){
                    let servicio = document.createElement('span');
                    let servicioText = document.createTextNode(`
                        ${DataServicios[3].ADESS[x].ServiciosADESS}
                    `);
                    servicio.append(servicioText);
                    Container.append(servicio);
                };
                break;
            case 1:
                for(let x = 0; x < 1; x++){
                    let servicio = document.createElement('span');
                    let servicioText = document.createTextNode(`
                        ${DataServicios[3].ASDE[x].ServiciosASDE}
                    `);
                    servicio.append(servicioText);
                    Container.append(servicio);
                };
                break;
            case 2:
                for(let x = 0; x < 1; x++){
                    let servicio = document.createElement('span');
                    let servicioText = document.createTextNode(`
                        ${DataServicios[3].DGJP[x].ServiciosDGJP}
                    `);
                    servicio.append(servicioText);
                    Container.append(servicio);
                };
                break;
            case 3:
                for(let x = 0; x < 1; x++){
                    let servicio = document.createElement('span');
                    let servicioText = document.createTextNode(`
                        ${DataServicios[3].DGP[x].ServicioDGP}
                    `);
                    servicio.append(servicioText);
                    Container.append(servicio);
                };
                break;
            case 4:
                for(let x = 0; x < 1; x++){
                    let servicio = document.createElement('span');
                    let servicioText = document.createTextNode(`
                        No hay servicios disponibles
                    `);
                    servicio.append(servicioText);
                    Container.append(servicio);
                };
                break;
            case 5:
                for(let x = 0; x < 1; x++){
                    let servicio = document.createElement('span');
                    let servicioText = document.createTextNode(`
                        No hay servicios disponibles
                    `);
                    servicio.append(servicioText);
                    Container.append(servicio);
                };
                break;
            case 6:
                for(let x = 0; x < 1; x++){
                    let servicio = document.createElement('span');
                    let servicioText = document.createTextNode(`
                        No hay servicios disponibles
                    `);
                    servicio.append(servicioText);
                    Container.append(servicio);
                };
                break;
            default:
               (error)=>{
                alert(error)
               };
                break;

           } 
        };



    };

    const DeployInstitucion1 =  () =>{
        alert('funciona')
      };
  

  return (
    <div className='Servicio'>
    <span>Servicio a solicitar</span>
    <button onClick={DeployServicio} className='Servicio__GOB'>
        <span id='Servicio__GOB'>Seleciona una Servicio</span>
        <i id='Servicio__GOB_Arrow' class='bx bx-chevron-right' ></i>
    </button>
    <div style={{zIndex:'4'}} className='Servicio__span' id='Servicio__span'>
        
    </div>
</div>
  )
}
