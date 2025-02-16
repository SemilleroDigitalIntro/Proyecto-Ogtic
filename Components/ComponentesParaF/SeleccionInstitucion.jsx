import React from 'react';
import { useState } from 'react';

export let InstitucionSeleccionada;
export default function SeleccionInstitucion() {

    const [DeployI, SetdeployI] = useState(true);

    const DeployInstitucion = () => {
        SetdeployI(!DeployI);
        DeployI ? document.getElementById('Institucion__span').style.display = 'flex' : 
        document.getElementById('Institucion__span').style.display = 'none' ;

        DeployI ? document.getElementById('Institucion__GOB_Arrow').style.rotate = '90deg' :
        document.getElementById('Institucion__GOB_Arrow').style.rotate = '0deg';

    };

    const Institucion_DGP = () => {
      document.getElementById('Institucion__GOB').innerText = 'Dirección General de Pasaportes';
      InstitucionSeleccionada = 1;

    };

    const Institucion_Intrant = () => {
      document.getElementById('Institucion__GOB').innerText = 'Intrant';
      InstitucionSeleccionada = 2;
    };

    const Institucion_JCE = () => {
      document.getElementById('Institucion__GOB').innerText = 'Junta central electoral';
      InstitucionSeleccionada = 3;
    };

    const Institucion_DGM = () => {
      document.getElementById('Institucion__GOB').innerText = 'Direccion General de Migracion';
      InstitucionSeleccionada = 4;
    };

  return (
    <div className='Institucion'>
        <span>Institución pública</span>
        <button onClick={DeployInstitucion} className='Institucion__GOB'><span id='Institucion__GOB'>Seleciona una Institucion</span><i id='Institucion__GOB_Arrow' class='bx bx-chevron-right' ></i></button>
        <div className='Institucion__span' id='Institucion__span'>
            <span className='exection' onClick={Institucion_DGP}>Dirección General de Pasaportes</span>
            <span style={{display: 'none'}} onClick={Institucion_Intrant} >Intrant</span>
            <span style={{display: 'none'}}  onClick={Institucion_JCE}>Junta central electoral</span>
            <span className='exection2' onClick={Institucion_DGM} >Direccion General de Migracion</span>
        </div>
    </div>
  )
}
