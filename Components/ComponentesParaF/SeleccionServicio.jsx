import React from 'react';
import { useState } from 'react';

export default function SeleccionServicio() {

    const [Servicio, Setservicio] = useState(true);
    const DeployServicio = () => {
        Setservicio(!Servicio);
        Servicio ? document.getElementById('Servicio__span').style.display = 'flex' :
        document.getElementById('Servicio__span').style.display = 'none';

        Servicio ? document.getElementById('Servicio__GOB_Arrow').style.rotate = '90deg' :
        document.getElementById('Servicio__GOB_Arrow').style.rotate = '0deg';

    };

    const Servicio_1 = () => {

    };

    const Servicio_2 = () => {

    };

    const Servicio_3 = () => {

    };


  return (
    <div className='Servicio'>
    <span>Servicio a solicitar</span>
    <button onClick={DeployServicio} className='Servicio__GOB'><span id='Servicio__GOB'>Seleciona una Servicio</span><i id='Servicio__GOB_Arrow' class='bx bx-chevron-right' ></i></button>
    <div className='Servicio__span' id='Servicio__span'>
        <span className='exection' onClick={Servicio_1}>Dirección General de Pasaportes</span>
        <span onClick={Servicio_2} >Intrant</span>
        <span className='exection2' onClick={Servicio_3}>Junta central electoral</span>
    </div>
</div>
  )
}
