import React from "react";
import '../Componentes sin usar/Style/AC.less'

export default function AgendaYa(){
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
                            <button className="agendar">Agenda tu cita ahora</button>
                            </div>
                    </div>
                    
            </div>
            
        </div>
    )
}