import React from 'react';
import { useState } from 'react';

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

    };

    const Institucion_Intrant = () => {

    };

    const Institucion_JCE = () => {

    };

  return (
    <div className='Institucion'>
        <span>Institución pública</span>
        <button onClick={DeployInstitucion} className='Institucion__GOB'><span id='Institucion__GOB'>Seleciona una Institucion</span><i id='Institucion__GOB_Arrow' class='bx bx-chevron-right' ></i></button>
        <div className='Institucion__span' id='Institucion__span'>
            <span className='exection' onClick={Institucion_DGP}>Dirección General de Pasaportes</span>
            <span onClick={Institucion_Intrant} >Intrant</span>
            <span className='exection2' onClick={Institucion_JCE}>Junta central electoral</span>
        </div>
    </div>
  )
}
