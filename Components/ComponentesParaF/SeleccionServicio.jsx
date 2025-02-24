import { useState } from 'react';
import { InstitucionSeleccionada } from './SeleccionInstitucion';
import { PuntoGOBSelecionado } from './SeleccionPuntoGOB';
import DataServicios from '../Data/DataServicios';
import { caES } from '@mui/x-date-pickers/locales';

export let ServicioSeleccionado;
export default function SeleccionServicio() {

    const [Servicio, Setservicio] = useState(true);

    const DeployServicio = () => {
        Setservicio(!Servicio);
        Servicio ? document.getElementById('Servicio__span').style.display = 'flex' :
        document.getElementById('Servicio__span').style.display = 'none';

        Servicio ? document.getElementById('Servicio__GOB_Arrow').style.rotate = '90deg' : document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
        
        Continua();


    };

    const Continua = () =>{
        let Container = document.getElementById('Servicio__span');
        Container.innerHTML = '';
        let Servicio__GOB_btn = document.getElementById('Servicio__GOB');
        
        if(PuntoGOBSelecionado == 1){
            switch(InstitucionSeleccionada){//OcidentalMall
                case 0:
                    for(let x = 0; x<1;x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[0].MESCYT[x].ServiciosM}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `${DataServicios[0].MESCYT[x].ServiciosM}`;
                            Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                        })
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
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `${DataServicios[0].SIE[x].ServiciosSIE}`;
                            Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                        })
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
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `${DataServicios[0].DIDA[x].ServiciosDIDA}`;
                            Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                        });
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
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = ` ${DataServicios[0].SISALRIL[x].ServiciosSISALRIL}`;
                            Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                        });
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
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = ` ${DataServicios[0].TSS[x].ServiciosTSS}`;
                            Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                        });
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
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = ` ${DataServicios[0].DMAPS[x].ServiciosDMAPS}`;
                            Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                        });
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
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = ` ${DataServicios[0].MINE[x].ServiciosMine}`;
                            Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                        });
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
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = ` ${DataServicios[0].INTRANT[x].ServiciosINTRANT}`;
                            Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                        });
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
                        servicio.addEventListener('click',()=>{;
                            Servicio__GOB_btn.innerText = ` ${DataServicios[0].DGM[x].ServiciosDGM}`;
                            Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                        });
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
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = ` ${DataServicios[1].DIDA[x].ServiciosDIDA}`;
                            Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                        });
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
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[1].PN[x].ServicioPN}`;
                            Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                        });
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
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = ` ${DataServicios[1].DGP[x].ServicioDGP}`;
                            Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                        });
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
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[1].DGM[x].ServiciosDGM}`;
                            Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                        });
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
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[1].TSS[x].ServiciosTSS}`;
                            Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                        });
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
                        ${DataServicios[2].ADESS[x].ServiciosADESS}
                    `);
                    servicio.addEventListener('click',()=>{
                        Servicio__GOB_btn.innerText = `  ${DataServicios[2].ADESS[x].ServiciosADESS}`;
                        Setservicio(!Servicio);
                            document.getElementById('Servicio__span').style.display = 'none';
                            document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                            ServicioSeleccionado = x;
                    });
                    servicio.append(servicioText);
                    Container.append(servicio);
                };
                break;
            case 1:
                for(let x = 0; x < 1; x++){
                    let servicio = document.createElement('span');
                    let servicioText = document.createTextNode(`
                        ${DataServicios[2].ASDE[x].ServiciosASDE}
                    `);
                    servicio.addEventListener('click',()=>{
                        Servicio__GOB_btn.innerText = `  ${DataServicios[2].ASDE[x].ServiciosASDE}`;
                        Setservicio(!Servicio);
                        document.getElementById('Servicio__span').style.display = 'none';
                        document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                        ServicioSeleccionado = x;
                    });
                    servicio.append(servicioText);
                    Container.append(servicio);
                };
                break;
            case 2:
                for(let x = 0; x < 1; x++){
                    let servicio = document.createElement('span');
                    let servicioText = document.createTextNode(`
                        ${DataServicios[2].DGJP[x].ServiciosDGJP}
                    `);
                    servicio.addEventListener('click',()=>{
                        Servicio__GOB_btn.innerText = `  ${DataServicios[2].DGJP[x].ServiciosDGJP}`;
                        Setservicio(!Servicio);
                        document.getElementById('Servicio__span').style.display = 'none';
                        document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                        ServicioSeleccionado = x;
                    });
                    servicio.append(servicioText);
                    Container.append(servicio);
                };
                break;
            case 3:
                for(let x = 0; x < 1; x++){
                    let servicio = document.createElement('span');
                    let servicioText = document.createTextNode(`
                        ${DataServicios[2].DGP[x].ServicioDGP}
                    `);
                    servicio.addEventListener('click',()=>{
                        Servicio__GOB_btn.innerText = `  ${DataServicios[2].DGP[x].ServicioDGP}`;
                        Setservicio(!Servicio);
                        document.getElementById('Servicio__span').style.display = 'none';
                        document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                        ServicioSeleccionado = x;
                    });
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
        }else if(PuntoGOBSelecionado == 4){
            
            switch(InstitucionSeleccionada){
                case 0:
                    let largoarray = DataServicios[3].ADESS.length;
                    for(let x = 0; x < largoarray; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[3].ADESS[x].ServiciosADESS}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[3].ADESS[x].ServiciosADESS}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 1:
                    let largoarray1 = DataServicios[3].INTRANT.length;
                    for(let x = 0; x < largoarray1; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[3].INTRANT[x].ServiciosINTRANT}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[3].INTRANT[x].ServiciosINTRANT}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 2:
                    let largoarray2 = DataServicios[3].DIDA.length;
                    for(let x = 0; x < largoarray2; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[3].DIDA[x].ServiciosDIDA}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[3].DIDA[x].ServiciosDIDA}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 3:
                    let largoarray3 = DataServicios[3].ASDE.length;
                    for(let x = 0; x < largoarray3; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[3].ASDE[x].ServiciosASDE}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[3].ASDE[x].ServiciosASDE}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 4:
                    let largoarray4 = DataServicios[3].MIP.length;
                    for(let x = 0; x < largoarray4; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[3].MIP[x].ServiciosMIP}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[3].MIP[x].ServiciosMIP}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 5:
                    let largoarray5 = DataServicios[3].PGR.length;
                    for(let x = 0; x < largoarray5; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[3].PGR[x].ServiciosPGR}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[3].PGR[x].ServiciosPGR}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 6:
                    let largoarray6 = DataServicios[3].SISALRIL.length;
                    for(let x = 0; x < largoarray6; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[3].SISALRIL[x].ServiciosSISALRIL}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[3].SISALRIL[x].ServiciosSISALRILE}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 7:
                    let largoarray7 = DataServicios[3].SIE.length;
                    for(let x = 0; x < largoarray7; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[3].SIE[x].ServiciosSIE}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `${DataServicios[3].SIE[x].ServiciosSIE}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 8:
                    let largoarray8 = DataServicios[3].SUPERATE.length;
                    for(let x = 0; x < largoarray8; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[3].SUPERATE[x].ServiciosSUPERATE}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `${DataServicios[3].SUPERATE[x].ServiciosSUPERATE}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                default:
                    break;
            }
        }else if(PuntoGOBSelecionado == 5){
            switch(InstitucionSeleccionada){
                case 0:
                    let largoarray = DataServicios[4].DIDA.length;
                    for(let x = 0; x < largoarray; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[4].DIDA[x].ServiciosDIDA}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[4].DIDA[x].ServiciosDIDA}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                    
                    
                case 1:
                    
                    let largoarray1 = DataServicios[4].SISALRIL.length;
                    for(let x = 0; x < largoarray1; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[4].SISALRIL[x].ServiciosSISALRIL}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[4].SISALRIL[x].ServiciosSISALRIL}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                    
                    
                case 2:
                    let largoarray2 = DataServicios[4].TSS.length;
                    for(let x = 0; x < largoarray2; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[4].TSS[x].ServiciosTSS}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[4].TSS[x].ServiciosTSS}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                    
                   
                case 3:
                    let largoarray3 = DataServicios[4].SUPERATE.length;
                    for(let x = 0; x < largoarray3; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[4].SUPERATE[x].ServiciosSUPERATE}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[4].SUPERATE[x].ServiciosSUPERATE}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 4:
                    let largoarray4 = DataServicios[4].INTRANT.length;
                    for(let x = 0; x < largoarray4; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[4].INTRANT[x].ServiciosINTRANT}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[4].INTRANT[x].ServiciosINTRANT}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                    
                case 5:
                    let largoarray5 = DataServicios[4].DGM.length;
                    for(let x = 0; x < largoarray5; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[4].DGM[x].ServiciosDGM}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[4].DGM[x].ServiciosDGM}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                    
                case 6:
                    
                    let largoarray6 = DataServicios[4].MESCYT.length;
                    for(let x = 0; x < largoarray6; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[4].MESCYT[x].ServiciosM}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[4].MESCYT[x].ServiciosM}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 7:
                    let largoarray7 = DataServicios[4].ADESS.length;
                    for(let x = 0; x < largoarray7; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[4].ADESS[x].ServiciosADESS}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[4].ADESS[x].ServiciosADESS}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                    
                default:
                    break;
            }
        }else if(PuntoGOBSelecionado == 6){
            switch(InstitucionSeleccionada){
                case 0:
                    let largoarray = DataServicios[5].INTRANT.length;
                    for(let x = 0; x < largoarray; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[5].INTRANT[x].ServiciosINTRANT}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[5].INTRANT[x].ServiciosINTRANT}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break
                case 1:
                    let largoarray1 = DataServicios[5].SIE.length;
                    for(let x = 0; x < largoarray1; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[5].SIE[x].ServiciosSIE}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[5].SIE[x].ServiciosSIE}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 2:
                    let largoarray2 = DataServicios[5].DIDA.length;
                    for(let x = 0; x < largoarray2; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[5].DIDA[x].ServiciosDIDA}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[5].DIDA[x].ServiciosDIDA}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 3:
                    let largoarray3 = DataServicios[5].TSS.length;
                    for(let x = 0; x < largoarray3; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[5].TSS[x].ServiciosTSS}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[5].TSS[x].ServiciosTSS}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 4:
                    let largoarray4 = DataServicios[5].ADESS.length;
                    for(let x = 0; x < largoarray4; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[5].ADESS[x].ServiciosADESS}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[5].ADESS[x].ServiciosADESS}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 5:
                    let largoarray5 = DataServicios[5].SUPERATE.length;
                    for(let x = 0; x < largoarray5; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[5].SUPERATE[x].ServiciosSUPERATE}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[5].SUPERATE[x].ServiciosSUPERATE}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                default:
                    break;
            }
        }else if(PuntoGOBSelecionado == 7){
            switch(InstitucionSeleccionada){
                case 0:
                    let largoarray = DataServicios[6].ADESS.length;
                    for(let x = 0; x < largoarray; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[6].ADESS[x].ServiciosADESS}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[6].ADESS[x].ServiciosADESS}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break
                case 1:
                    let largoarray1 = DataServicios[6].DGM.length;
                    for(let x = 0; x < largoarray1; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[6].DGM[x].ServiciosDGM}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[6].DGM[x].ServiciosDGM}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 2:
                    let largoarray2 = DataServicios[6].SUPERATE.length;
                    for(let x = 0; x < largoarray2; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[6].SUPERATE[x].ServiciosSUPERATE}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[6].SUPERATE[x].ServiciosSUPERATE}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 3:
                    let largoarray3 = DataServicios[6].TSS.length;
                    for(let x = 0; x < largoarray3; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[6].TSS[x].ServiciosTSS}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[6].TSS[x].ServiciosTSS}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 4:
                    let largoarray4 = DataServicios[6].DIDA.length;
                    for(let x = 0; x < largoarray4; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[6].DIDA[x].ServiciosDIDA}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[6].DIDA[x].ServiciosDIDA}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 5:
                    let largoarray5 = DataServicios[6].SISALRIL.length;
                    for(let x = 0; x < largoarray5; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[6].SISALRIL[x].ServiciosSISALRIL}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[6].SISALRIL[x].ServiciosSISALRIL}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 6:
                    let largoarray6 = DataServicios[6].MIP.length;
                    for(let x = 0; x < largoarray6; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[6].MIP[x].ServiciosMIP}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[6].MIP[x].ServiciosMIP}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 7:
                    let largoarray7 = DataServicios[6].MINE.length;
                    for(let x = 0; x < largoarray7; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[6].MINE[x].ServiciosMine}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[6].MINE[x].ServiciosMine}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                case 8:
                    let largoarray8 = DataServicios[6].SIE.length;
                    for(let x = 0; x < largoarray8; x++){
                        let servicio = document.createElement('span');
                        let servicioText = document.createTextNode(`
                            ${DataServicios[6].SIE[x].ServiciosSIE}
                        `);
                        servicio.addEventListener('click',()=>{
                            Servicio__GOB_btn.innerText = `  ${DataServicios[6].SIE[x].ServiciosSIE}`;
                            Setservicio(!Servicio);
                                document.getElementById('Servicio__span').style.display = 'none';
                                document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';
                                ServicioSeleccionado = x;
                        });
                        servicio.append(servicioText);
                        Container.append(servicio);
                    };
                    break;
                default:
                    break;
            }
        }else{

        };



    };

  
  

  return (
    <div className='Servicio'>
    <span>Servicio a solicitar</span>
    <button onClick={DeployServicio} className='Servicio__GOB_btn' id='Servicio__GOB_btn'>
        <span id='Servicio__GOB'>Seleciona una Servicio</span>
        <i id='Servicio__GOB_Arrow' class='bx bx-chevron-right' ></i>
    </button>
    <div style={{zIndex:'4', background: 'white'}} className='Servicio__span' id='Servicio__span'>
        
    </div>
</div>
  )
};