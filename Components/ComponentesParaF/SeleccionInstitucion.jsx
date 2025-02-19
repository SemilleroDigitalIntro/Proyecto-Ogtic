import React from 'react';
import { useState } from 'react';
import { PuntoGOBSelecionado } from './SeleccionPuntoGOB';

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


        switch (PuntoGOBSelecionado){
          case 1:
            for(let I = 0 ; I < 14; I++){

            }
            break;
          case 2:
            for(let I = 0 ; I < 18; I++){

            }
            break;
          case 3:
            for(let I = 0 ; I < 10; I++){

            }
            break;
          case 4:
            for(let I = 0 ; I < 16; I++){

            }
            break;
          case 5:
            for(let I = 0 ; I < 15; I++){

            }
            break;
          case 6:
            for(let I = 0 ; I < 10; I++){

            }
            break;
          default:
            break;

        }

    };

    const Institucion_DGP = () => {
      document.getElementById('Institucion__GOB').innerText = 'Dirección General de Pasaportes';
      document.getElementById('Institucion__GOB_Arrow').style.rotate = '0deg';
      document.getElementById('Institucion__span').style.display = 'none' ;
      SetdeployI(!DeployI);
      InstitucionSeleccionada = 1;

    };

    const Institucion_Intrant = () => {
      document.getElementById('Institucion__GOB').innerText = 'Intrant';
      document.getElementById('Institucion__GOB_Arrow').style.rotate = '0deg';
      document.getElementById('Institucion__span').style.display = 'none' ;
      SetdeployI(!DeployI);
      InstitucionSeleccionada = 2;
    };

    const Institucion_JCE = () => {
      document.getElementById('Institucion__GOB').innerText = 'Junta central electoral';
      document.getElementById('Institucion__GOB_Arrow').style.rotate = '0deg';
      document.getElementById('Institucion__span').style.display = 'none' ;
      SetdeployI(!DeployI);
      InstitucionSeleccionada = 3;
    };

    const Institucion_DGM = () => {
      document.getElementById('Institucion__GOB').innerText = 'Direccion General de Migracion';
      document.getElementById('Institucion__GOB_Arrow').style.rotate = '0deg';
      document.getElementById('Institucion__span').style.display = 'none' ;
      SetdeployI(!DeployI);
      InstitucionSeleccionada = 4;
    };

  return (
    <div className='Institucion'>
        <span>Institución pública</span>
        <button onClick={DeployInstitucion} className='Institucion__GOB'><span id='Institucion__GOB'>Seleciona una Institucion</span><i id='Institucion__GOB_Arrow' class='bx bx-chevron-right' ></i></button>
        <div className='Institucion__span' id='Institucion__span'>
            <span className='exection' onClick={Institucion_DGP}>Dirección General de Pasaportes</span>
            <span  onClick={Institucion_Intrant} >Intrant</span>
            <span  onClick={Institucion_JCE}>Junta central electoral</span>
            <span className='exection2' onClick={Institucion_DGM} >Direccion General de Migracion</span>
        </div>
    </div>
  )
}
