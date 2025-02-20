import React from "react";
import './Style/Calendario.less';



export default function Horario(){
    return(
        <div className="container-hora">
                    <div className="titulos --hora">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
                                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
                            </svg>
                        </div>
                        <div>
                            <h1 className="title --horatitle">Hora</h1>
                        </div>
                    </div>






                    <div className="prb">
                            <button id="horasDispos">8:00 AM - 9:00 AM</button>
                            <button id="horasDispos">9:00 AM - 10:00 AM</button>
                            <button id="horasDispos">10:00 AM - 11:00 AM</button>
                            <button id="horasDispos">11:00 AM - 12:00 PM</button>
                            <button id="horasDispos">12:00 PM - 1:00 PM</button>
                            <button id="horasDispos">1:00 PM - 2:00 PM</button>
                            <button id="horasDispos">2:00 PM - 3:00 PM</button>
                            <button id="horasDispos">3:00 PM - 4:00 PM</button>
                            <button id="horasDispos">4:00 PM - 5:00 PM</button>
                            <button id="horasDispos">5:00 PM - 6:00 PM</button>
                            <button id="horasDispos">6:00 PM - 7:00 PM</button>
                            <button id="horasDispos">7:00 PM - 7:45 PM</button>
                    </div> 
        </div>
    )};
