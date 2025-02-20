import React from 'react';
import { useState } from 'react';
import { PuntoGOBSelecionado } from './SeleccionPuntoGOB';
import DataPuntoGobs from '../Data/DataInst';

export let InstitucionSeleccionada;
export default function SeleccionInstitucion() {

    const [DeployI, SetdeployI] = useState(true);
  

    const DeployInstitucion = () => {
        SetdeployI(!DeployI);
        DeployI ? document.getElementById('Institucion__span').style.display = 'flex' : 
        document.getElementById('Institucion__span').style.display = 'none' ;

        DeployI ? document.getElementById('Institucion__GOB_Arrow').style.rotate = '90deg' :
        document.getElementById('Institucion__GOB_Arrow').style.rotate = '0deg';

        let Institucion__span = document.getElementById('Institucion__span');
        Institucion__span.innerHTML = '';
        let Institucion__GOB = document.getElementById('Institucion__GOB');

        switch (PuntoGOBSelecionado){
          case 1:

              for(let I = 0 ; I < 14; I++){
                let Ints = document.createElement('span');
                Ints.className = `Servicio${I}`;
                Ints.addEventListener('click',()=>{
                  Institucion__GOB.innerText = `${DataPuntoGobs[0].GobOcidentalMall[I].Instituciones}`;
                  InstitucionSeleccionada = I;
                })
                let Intstext = document.createTextNode(`${DataPuntoGobs[0].GobOcidentalMall[I].Instituciones}`);
                
                Ints.append(Intstext)
                Institucion__span.append(Ints);
              };
            
            break;
          case 2:

            for(let I = 0 ; I < 18; I++){
              let Ints = document.createElement('span');
                Ints.className = `${DataPuntoGobs[0].GobSambil[I].Instituciones}`;
                Ints.addEventListener('click',()=>{
                  Institucion__GOB.innerText = `${DataPuntoGobs[0].GobSambil[I].Instituciones}`;
                  InstitucionSeleccionada = I;
                })
                let Intstext = document.createTextNode(`${DataPuntoGobs[0].GobSambil[I].Instituciones}`);
                
                Ints.append(Intstext)
                Institucion__span.append(Ints);
            }


            break;
          case 3:
            for(let I = 0 ; I < 10; I++){

              let Ints = document.createElement('span');
                Ints.className = `${DataPuntoGobs[0].GobExpreso[I].Instituciones}`;
                Ints.addEventListener('click',()=>{
                  Institucion__GOB.innerText = `${DataPuntoGobs[0].GobExpreso[I].Instituciones}`;
                  InstitucionSeleccionada = I;

                })
                let Intstext = document.createTextNode(`${DataPuntoGobs[0].GobExpreso[I].Instituciones}`);
                
                Ints.append(Intstext)
                Institucion__span.append(Ints);

            }
            break;
          case 4:
            for(let I = 0 ; I < 16; I++){
              let Ints = document.createElement('span');
                Ints.className = `${DataPuntoGobs[0].GobMegacentro[I].Instituciones}`;
                Ints.addEventListener('click',()=>{
                  Institucion__GOB.innerText = `${DataPuntoGobs[0].GobMegacentro[I].Instituciones}`;
                  InstitucionSeleccionada = I;
                })
                let Intstext = document.createTextNode(`${DataPuntoGobs[0].GobMegacentro[I].Instituciones}`);
                
                Ints.append(Intstext)
                Institucion__span.append(Ints);
            }
            break;
          case 5:
            for(let I = 0 ; I < 15; I++){
              let Ints = document.createElement('span');
                Ints.className = `${DataPuntoGobs[0].GobSantiago[I].Instituciones}`;
                Ints.addEventListener('click',()=>{
                  Institucion__GOB.innerText = `${DataPuntoGobs[0].GobSantiago[I].Instituciones}`;
                  InstitucionSeleccionada = I;
                })
                let Intstext = document.createTextNode(`${DataPuntoGobs[0].GobSantiago[I].Instituciones}`);
                
                Ints.append(Intstext)
                Institucion__span.append(Ints);
            }
            break;
          case 6:
            for(let I = 0 ; I < 10; I++){
              let Ints = document.createElement('span');
                Ints.className = `${DataPuntoGobs[0].GobSanCristobal[I].Instituciones}`;
                Ints.addEventListener('click',()=>{
                  Institucion__GOB.innerText = `${DataPuntoGobs[0].GobSanCristobal[I].Instituciones}`;
                  InstitucionSeleccionada = I;
                })
                let Intstext = document.createTextNode(`${DataPuntoGobs[0].GobSanCristobal[I].Instituciones}`);
                
                Ints.append(Intstext)
                Institucion__span.append(Ints);
            }
            break;
          case 7:
            let Ints = document.createElement('span');
                Ints.className = `${DataPuntoGobs[0].GobColinaCentro[I].Instituciones}`;
                Ints.addEventListener('click',()=>{
                  Institucion__GOB.innerText = `${DataPuntoGobs[0].GobColinaCentro[I].Instituciones}`;
                  InstitucionSeleccionada = I;
                })
                let Intstext = document.createTextNode(`${DataPuntoGobs[0].GobColinaCentro[I].Instituciones}`);
                
                Ints.append(Intstext)
                Institucion__span.append(Ints);
            break;

          default:
            break;

        }

    };

    // const Institucion_DGP = () => {
    //   document.getElementById('Institucion__GOB').innerText = 'Dirección General de Pasaportes';
    //   document.getElementById('Institucion__GOB_Arrow').style.rotate = '0deg';
    //   document.getElementById('Institucion__span').style.display = 'none' ;
    //   SetdeployI(!DeployI);
    //   InstitucionSeleccionada = 1;

    // };

    // const Institucion_Intrant = () => {
    //   document.getElementById('Institucion__GOB').innerText = 'Intrant';
    //   document.getElementById('Institucion__GOB_Arrow').style.rotate = '0deg';
    //   document.getElementById('Institucion__span').style.display = 'none' ;
    //   SetdeployI(!DeployI);
    //   InstitucionSeleccionada = 2;
    // };

    // const Institucion_JCE = () => {
    //   document.getElementById('Institucion__GOB').innerText = 'Junta central electoral';
    //   document.getElementById('Institucion__GOB_Arrow').style.rotate = '0deg';
    //   document.getElementById('Institucion__span').style.display = 'none' ;
    //   SetdeployI(!DeployI);
    //   InstitucionSeleccionada = 3;
    // };

    // const Institucion_DGM = () => {
    //   document.getElementById('Institucion__GOB').innerText = 'Direccion General de Migracion';
    //   document.getElementById('Institucion__GOB_Arrow').style.rotate = '0deg';
    //   document.getElementById('Institucion__span').style.display = 'none' ;
    //   SetdeployI(!DeployI);
    //   InstitucionSeleccionada = 4;
    // };

  return (
    <div className='Institucion'>
        <span>Institución pública</span>
        <button onClick={DeployInstitucion} className='Institucion__GOB'><span id='Institucion__GOB'>Seleciona una Institucion</span><i id='Institucion__GOB_Arrow' class='bx bx-chevron-right' ></i></button>
        <div className='Institucion__span' id='Institucion__span'>
            
        </div>
    </div>
  )
}
