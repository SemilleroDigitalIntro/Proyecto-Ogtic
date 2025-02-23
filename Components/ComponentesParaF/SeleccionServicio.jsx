import { useState } from 'react';
import { InstitucionSeleccionada } from './SeleccionInstitucion';
import { PuntoGOBSelecionado } from './SeleccionPuntoGOB';
import DataServicios from '../Data/DataServicios';

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