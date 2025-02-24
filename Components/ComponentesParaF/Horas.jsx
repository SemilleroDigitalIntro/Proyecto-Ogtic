import React from "react";
import './Style/Calendario.less';


export let HoraSeleccionada;
export default function Horario(){

        


    let CambioHora;

    const BtnLeft = () => {
        let horasDispos1 = document.getElementById(`horasDispos1`);
        let horasDispos2 = document.getElementById('horasDispos2');
        let horasDispos3 = document.getElementById('horasDispos3');
        let horasDispos4 = document.getElementById('horasDispos4');
        let horasDispos5 = document.getElementById('horasDispos5');
        let horasDispos6 = document.getElementById('horasDispos6');
        let horasDispos7 = document.getElementById('horasDispos7');
        let horasDispos8 = document.getElementById('horasDispos8');
        let horasDispos9 = document.getElementById('horasDispos9');
        let horasDispos10 = document.getElementById('horasDispos10');
        let horasDispos11 = document.getElementById('horasDispos11');
        let horasDispos12 = document.getElementById('horasDispos12');
       
        
        if(CambioHora == undefined){
            horasDispos11.style.display = 'flex';
            horasDispos12.style.display = 'flex';
            horasDispos1.style.display = 'none';
            horasDispos2.style.display = 'none';
            CambioHora = 5;
        }else if(CambioHora == 1){
            horasDispos1.style.display = 'flex';
            horasDispos2.style.display = 'flex';
            horasDispos3.style.display = 'none';
            horasDispos4.style.display = 'none';
            CambioHora = undefined;
        }else if(CambioHora == 2){
            horasDispos3.style.display = 'flex';
            horasDispos4.style.display = 'flex';
            horasDispos5.style.display = 'none';
            horasDispos6.style.display = 'none';
            CambioHora = 1;
           
        }else if(CambioHora == 3){
            horasDispos5.style.display = 'flex';
            horasDispos6.style.display = 'flex';
            horasDispos7.style.display = 'none';
            horasDispos8.style.display = 'none';
            CambioHora = 2;
        }else if(CambioHora == 4){
            horasDispos7.style.display = 'flex';
            horasDispos8.style.display = 'flex';
            horasDispos9.style.display = 'none';
            horasDispos10.style.display = 'none';

            CambioHora = 3;
            
        }else if(CambioHora == 5){
            horasDispos9.style.display = 'flex';
            horasDispos10.style.display = 'flex';
            horasDispos11.style.display = 'none';
            horasDispos12.style.display = 'none';
            CambioHora = 4;
        }else{
            alert('tenemos un error');
        }
    };

    const BtnRight = () => {
        let horasDispos1 = document.getElementById(`horasDispos1`);
        let horasDispos2 = document.getElementById('horasDispos2');
        let horasDispos3 = document.getElementById('horasDispos3');
        let horasDispos4 = document.getElementById('horasDispos4');
        let horasDispos5 = document.getElementById('horasDispos5');
        let horasDispos6 = document.getElementById('horasDispos6');
        let horasDispos7 = document.getElementById('horasDispos7');
        let horasDispos8 = document.getElementById('horasDispos8');
        let horasDispos9 = document.getElementById('horasDispos9');
        let horasDispos10 = document.getElementById('horasDispos10');
        let horasDispos11 = document.getElementById('horasDispos11');
        let horasDispos12 = document.getElementById('horasDispos12');
       
        
        if(CambioHora == undefined){
            horasDispos1.style.display = 'none';
            horasDispos2.style.display = 'none';

            horasDispos3.style.display = 'flex';
            horasDispos4.style.display = 'flex';
            CambioHora = 1;

        }else if(CambioHora == 1){
            horasDispos3.style.display = 'none';
            horasDispos4.style.display = 'none';
            horasDispos5.style.display = 'flex';
            horasDispos6.style.display = 'flex';

            CambioHora = 2;
        }else if(CambioHora == 2){
            horasDispos5.style.display = 'none';
            horasDispos6.style.display = 'none';
            horasDispos7.style.display = 'flex';
            horasDispos8.style.display = 'flex';

            CambioHora = 3;
        }else if(CambioHora == 3){
            horasDispos7.style.display = 'none';
            horasDispos8.style.display = 'none';
            horasDispos9.style.display = 'flex';
            horasDispos10.style.display = 'flex';

            CambioHora = 4;
        }else if(CambioHora == 4){
            horasDispos9.style.display = 'none';
            horasDispos10.style.display = 'none';
            horasDispos11.style.display = 'flex';
            horasDispos12.style.display = 'flex';

            CambioHora = 5;
        }else if(CambioHora == 5){
            horasDispos11.style.display = 'none';
            horasDispos12.style.display = 'none';
            horasDispos1.style.display = 'flex';
            horasDispos2.style.display = 'flex';

            CambioHora = undefined;
        }else{
            alert('tenemos un error');
        }
    };

    const horasDispos1 = () => {
        HoraSeleccionada = 1;

        for(let x = 1; x < 13; x++){
            document.getElementById(`horasDispos${x}`).style.background = 'none';
            document.getElementById(`horasDispos${x}`).style.fontSize = '14px';
        document.getElementById(`horasDispos${x}`).style.fontWeight = '400'; 
        document.getElementById(`horasDispos${x}`).style.color ='black';
        }
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.background = '#01346B';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontSize = '16px';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontWeight = '600'; 
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.color = 'white';
    };
    const horasDispos2 = () => {
        HoraSeleccionada = 2;
        for(let x = 1; x < 13; x++){
            document.getElementById(`horasDispos${x}`).style.background = 'none';
            document.getElementById(`horasDispos${x}`).style.fontSize = '14px';
        document.getElementById(`horasDispos${x}`).style.fontWeight = '400'; 
        document.getElementById(`horasDispos${x}`).style.color ='black';
        }
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.background = '#01346B';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontSize = '16px';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontWeight = '600'; 
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.color = 'white';
    };
    const horasDispos3 = () => {
        HoraSeleccionada = 3;
        for(let x = 1; x < 13; x++){
            document.getElementById(`horasDispos${x}`).style.background = 'none';
            document.getElementById(`horasDispos${x}`).style.fontSize = '14px';
        document.getElementById(`horasDispos${x}`).style.fontWeight = '400'; 
        document.getElementById(`horasDispos${x}`).style.color ='black';
        }
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.background = '#01346B';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontSize = '16px';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontWeight = '600'; 
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.color = 'white'; 
    };
    const horasDispos4 = () => {
        HoraSeleccionada = 4;
        for(let x = 1; x < 13; x++){
            document.getElementById(`horasDispos${x}`).style.background = 'none';
            document.getElementById(`horasDispos${x}`).style.fontSize = '14px';
        document.getElementById(`horasDispos${x}`).style.fontWeight = '400'; 
        document.getElementById(`horasDispos${x}`).style.color ='black';
        }
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.background = '#01346B';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontSize = '16px';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontWeight = '600'; 
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.color = 'white';
    };
    const horasDispos5 = () => {
        HoraSeleccionada = 5;
        for(let x = 1; x < 13; x++){
            document.getElementById(`horasDispos${x}`).style.background = 'none';
            document.getElementById(`horasDispos${x}`).style.fontSize = '14px';
        document.getElementById(`horasDispos${x}`).style.fontWeight = '400'; 
        document.getElementById(`horasDispos${x}`).style.color ='black';
        }
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.background = '#01346B';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontSize = '16px';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontWeight = '600'; 
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.color = 'white'; 
    };
    const horasDispos6 = () => {
        HoraSeleccionada = 6;
        for(let x = 1; x < 13; x++){
            document.getElementById(`horasDispos${x}`).style.background = 'none';
            document.getElementById(`horasDispos${x}`).style.fontSize = '14px';
        document.getElementById(`horasDispos${x}`).style.fontWeight = '400'; 
        document.getElementById(`horasDispos${x}`).style.color ='black';
        }
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.background = '#01346B';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontSize = '16px';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontWeight = '600'; 
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.color = 'white'; 
    };
    const horasDispos7 = () => {
        HoraSeleccionada = 7;
        for(let x = 1; x < 13; x++){
            document.getElementById(`horasDispos${x}`).style.background = 'none';
            document.getElementById(`horasDispos${x}`).style.fontSize = '14px';
        document.getElementById(`horasDispos${x}`).style.fontWeight = '400'; 
        document.getElementById(`horasDispos${x}`).style.color ='black';
        }
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.background = '#01346B';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontSize = '16px';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontWeight = '600'; 
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.color = 'white'; 
    };
    const horasDispos8 = () => {
        HoraSeleccionada = 8;
        for(let x = 1; x < 13; x++){
            document.getElementById(`horasDispos${x}`).style.background = 'none';
            document.getElementById(`horasDispos${x}`).style.fontSize = '14px';
        document.getElementById(`horasDispos${x}`).style.fontWeight = '400'; 
        document.getElementById(`horasDispos${x}`).style.color ='black';
        }
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.background = '#01346B';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontSize = '16px';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontWeight = '600'; 
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.color = 'white';
    };
    const horasDispos9 = () => {
        HoraSeleccionada = 9;
        for(let x = 1; x < 13; x++){
            document.getElementById(`horasDispos${x}`).style.background = 'none';
            document.getElementById(`horasDispos${x}`).style.fontSize = '14px';
        document.getElementById(`horasDispos${x}`).style.fontWeight = '400'; 
        document.getElementById(`horasDispos${x}`).style.color ='black';
        }
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.background = '#01346B';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontSize = '16px';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontWeight = '600'; 
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.color = 'white'; 
    };
    const horasDispos10 = () => {
        HoraSeleccionada = 10;
        for(let x = 1; x < 13; x++){
            document.getElementById(`horasDispos${x}`).style.background = 'none';
            document.getElementById(`horasDispos${x}`).style.fontSize = '14px';
        document.getElementById(`horasDispos${x}`).style.fontWeight = '400'; 
        document.getElementById(`horasDispos${x}`).style.color ='black';
        }
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.background = '#01346B';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontSize = '16px';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontWeight = '600'; 
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.color = 'white'; 
    };
    const horasDispos11 = () => {
        HoraSeleccionada = 11;
        for(let x = 1; x < 13; x++){
            document.getElementById(`horasDispos${x}`).style.background = 'none';
            document.getElementById(`horasDispos${x}`).style.fontSize = '14px';
        document.getElementById(`horasDispos${x}`).style.fontWeight = '400'; 
        document.getElementById(`horasDispos${x}`).style.color ='black';
        }
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.background = '#01346B';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontSize = '16px';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontWeight = '600'; 
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.color = 'white';
    };
    const horasDispos12 = () => {
        HoraSeleccionada = 12;
        for(let x = 1; x < 13; x++){
            document.getElementById(`horasDispos${x}`).style.background = 'none';
            document.getElementById(`horasDispos${x}`).style.fontSize = '14px';
        document.getElementById(`horasDispos${x}`).style.fontWeight = '400'; 
        document.getElementById(`horasDispos${x}`).style.color ='black';
        }
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.background = '#01346B';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontSize = '16px';
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.fontWeight = '600'; 
        document.getElementById(`horasDispos${HoraSeleccionada}`).style.color = 'white';
    };




    return(
        <div className="container-hora">
                    <div className="titulos --hora">  
                            <h1 className="title --horatitle"> <i class='bx bx-time' ></i>Hora</h1>
                    </div>

                    <div className="prb">
                        <div className="control_btn_hora1">
                            <button onClick={BtnLeft} id="BtnLeft" ><i class='bx bxs-left-arrow' ></i></button>
                        </div>
                            <button onClick={horasDispos1} id="horasDispos1">8:00 AM - 9:00 AM</button>
                            <button onClick={horasDispos2} id="horasDispos2">9:00 AM - 10:00 AM</button>
                            <button onClick={horasDispos3} id="horasDispos3">10:00 AM - 11:00 AM</button>
                            <button onClick={horasDispos4} id="horasDispos4">11:00 AM - 12:00 PM</button>
                            <button onClick={horasDispos5} id="horasDispos5">12:00 PM - 1:00 PM</button>
                            <button onClick={horasDispos6} id="horasDispos6">1:00 PM - 2:00 PM</button>
                            <button onClick={horasDispos7} id="horasDispos7">2:00 PM - 3:00 PM</button>
                            <button onClick={horasDispos8} id="horasDispos8">3:00 PM - 4:00 PM</button>
                            <button onClick={horasDispos9} id="horasDispos9">4:00 PM - 5:00 PM</button>
                            <button onClick={horasDispos10} id="horasDispos10">5:00 PM - 6:00 PM</button>
                            <button onClick={horasDispos11} id="horasDispos11">6:00 PM - 7:00 PM</button>
                            <button onClick={horasDispos12} id="horasDispos12">7:00 PM - 7:45 PM</button>
                        <div className="control_btn_hora2">
                           <button onClick={BtnRight}><i class='bx bxs-right-arrow' ></i></button>
                        </div>
                    </div> 
        </div>
    )};
