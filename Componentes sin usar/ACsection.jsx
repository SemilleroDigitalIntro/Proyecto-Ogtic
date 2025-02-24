import React from "react";
import '../Componentes sin usar/Style/AC.less';
import {InicioConfirmado} from './Header.jsx';

export default function AgendaYa(){
    const Agendar = () => {
        if(InicioConfirmado== true){
            window.location.href = '/Inicio';
        }else{
            window.location.href = '/login';
        }
    };
    return(
        <div>
            <div className="containerAC">
                <img src="Componentes sin usar/img/pexels-mikhail-nilov-7682340.jpg"/>
                <div className="overlay"></div>
                    <div className="textoAC">
                        
                        <h1>Agenda tu cita en línea: <span className="Simple">simple,</span>  
                        <span className="rapido"> rápido </span>  
                        y <span className="sinfilas"> sin filas</span></h1>
                            <div>
                            <button onClick={Agendar} className="agendar">Agenda tu cita ahora</button>
                            </div>
                    </div>
                    
            </div>
            
        </div>
    )
}