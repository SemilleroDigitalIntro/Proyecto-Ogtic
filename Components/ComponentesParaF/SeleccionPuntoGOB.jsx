import React from 'react';
import { useState } from 'react';

export let PuntoGOBSelecionado;
export default function SeleccionPuntoGOB() {

    const [DeployPuntosGB, SetdeployGB] = useState(true);

    const DeployPuntosGOB = () =>{
        SetdeployGB(!DeployPuntosGB);
        DeployPuntosGB ? document.querySelector('.PuntoGOB__span').style.display = 'flex' :document.querySelector('.PuntoGOB__span').style.display = 'none';
        DeployPuntosGB ? document.getElementById('PuntoGOB__GOB_Arrow').style.rotate = '90deg' : document.getElementById('PuntoGOB__GOB_Arrow').style.rotate = '0deg';
    };

    const PGOB_Santo_Domingo_Oeste = () => {//OccidentalMall
        let PuntoGOB__GOB = document.getElementById('PuntoGOB__GOB');
        PuntoGOB__GOB.innerText = 'Punto GOB Occidental';
        PuntoGOBSelecionado = 1;
        SetdeployGB(!DeployPuntosGB);
        document.querySelector('.PuntoGOB__span').style.display = 'none';
        document.getElementById('PuntoGOB__GOB_Arrow').style.rotate = '0deg';
    };
    const PGOB_Sambil = () => {
        let PuntoGOB__GOB = document.getElementById('PuntoGOB__GOB');
        PuntoGOB__GOB.innerText = 'Punto GOB Sambil';
        PuntoGOBSelecionado = 2;
        SetdeployGB(!DeployPuntosGB);
        document.querySelector('.PuntoGOB__span').style.display = 'none';
        document.getElementById('PuntoGOB__GOB_Arrow').style.rotate = '0deg';
    };
    const PGOB_Expreso = () => {
        let PuntoGOB__GOB = document.getElementById('PuntoGOB__GOB');
        PuntoGOB__GOB.innerText = 'Punto GOB Expreso';
        PuntoGOBSelecionado = 3;
        SetdeployGB(!DeployPuntosGB);
        document.querySelector('.PuntoGOB__span').style.display = 'none';
        document.getElementById('PuntoGOB__GOB_Arrow').style.rotate = '0deg';
    };
    const PGOB_megacentro = () => {
        let PuntoGOB__GOB = document.getElementById('PuntoGOB__GOB');
        PuntoGOB__GOB.innerText = 'Punto GOB Megacentro';
        PuntoGOBSelecionado = 4;
        SetdeployGB(!DeployPuntosGB);
        document.querySelector('.PuntoGOB__span').style.display = 'none';
        document.getElementById('PuntoGOB__GOB_Arrow').style.rotate = '0deg';
    };
   
    
    const PGOB_Santiago = () => {
        let PuntoGOB__GOB = document.getElementById('PuntoGOB__GOB');
        PuntoGOB__GOB.innerText = 'Punto GOB Santiago';
        PuntoGOBSelecionado = 5;
        SetdeployGB(!DeployPuntosGB);
        document.querySelector('.PuntoGOB__span').style.display = 'none';
        document.getElementById('PuntoGOB__GOB_Arrow').style.rotate = '0deg';
    };
   
    const PGOB_San_Cristóbal = () => {
        let PuntoGOB__GOB = document.getElementById('PuntoGOB__GOB');
        PuntoGOB__GOB.innerText = 'Punto GOB San Cristóbal';
        PuntoGOBSelecionado = 6;
        SetdeployGB(!DeployPuntosGB);
        document.querySelector('.PuntoGOB__span').style.display = 'none';
        document.getElementById('PuntoGOB__GOB_Arrow').style.rotate = '0deg';
    };
    const PGOB_Santo_Doming_Norte = () => {//Colina Centro
        let PuntoGOB__GOB = document.getElementById('PuntoGOB__GOB');
        PuntoGOB__GOB.innerText = 'Punto GOB Colina Centro';
        PuntoGOBSelecionado = 7;
        SetdeployGB(!DeployPuntosGB);
        document.querySelector('.PuntoGOB__span').style.display = 'none';
        document.getElementById('PuntoGOB__GOB_Arrow').style.rotate = '0deg';
    };


  return (
    <div className='PuntoGOB'>
        <span>Punto GOB de preferencia</span>
        <button onClick={DeployPuntosGOB} className='PuntoGOB__GOB_btn'><span id='PuntoGOB__GOB'>Seleciona un punto GOB</span><i id='PuntoGOB__GOB_Arrow' class='bx bx-chevron-right' ></i></button>
        <div className='PuntoGOB__span' id='PuntoGOB__span'>
            <span className='exection' onClick={PGOB_Santo_Domingo_Oeste}>Punto GOB Occidental</span>
            <span onClick={PGOB_Sambil} >Punto GOB Sambil</span>
            <span onClick={PGOB_Expreso} >Punto GOB Expreso</span>
            <span  onClick={PGOB_megacentro}>Punto GOB Megacentro</span>
            <span onClick={PGOB_Santiago}>Punto GOB Santiago</span>
            <span  onClick={PGOB_San_Cristóbal}>Punto GOB San Cristobal</span>
            <span className='exection2' onClick={PGOB_Santo_Doming_Norte}>Punto GOB Colina Centro</span>
            
        </div>
    </div>
  )
};
