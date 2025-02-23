import React from "react";
import './Style/Calendario.less';



export default function Horario(){
    return(
        <div className="container-hora">
                    <div className="titulos --hora">  
                            <h1 className="title --horatitle"> <i class='bx bx-time' ></i>Hora</h1>
                    </div>

                    <div className="prb">
                            <button id="horasDispos1">8:00 AM - 9:00 AM</button>
                            <button id="horasDispos2">9:00 AM - 10:00 AM</button>
                            <button id="horasDispos3">10:00 AM - 11:00 AM</button>
                            <button id="horasDispos4">11:00 AM - 12:00 PM</button>
                            <button id="horasDispos5">12:00 PM - 1:00 PM</button>
                            <button id="horasDispos6">1:00 PM - 2:00 PM</button>
                            <button id="horasDispos7">2:00 PM - 3:00 PM</button>
                            <button id="horasDispos8">3:00 PM - 4:00 PM</button>
                            <button id="horasDispos9">4:00 PM - 5:00 PM</button>
                            <button id="horasDispos10">5:00 PM - 6:00 PM</button>
                            <button id="horasDispos11">6:00 PM - 7:00 PM</button>
                            <button id="horasDispos12">7:00 PM - 7:45 PM</button>
                    </div> 
        </div>
    )};
