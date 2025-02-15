import React from 'react';


export default function EstandarN(props) {



    const Opcion = () => {

    };


  return (
    <div onClick={Opcion} className={`Notificacion ${props.Institucion}`}>
        <span>{props.Institucion}</span>
        <div className='Notificacion__div1'>
            <span id='Asunto_Notificacion'>{props.Asunto}</span>
            <span id='spangray'>-</span>
            <span id='parte_contenidoN'>{props.parte_contenidoN}</span>
            <div className='Notificacion__div1_d1'>
                <span><i class='bx bx-trash' ></i></span>
                <span><i class='bx bx-envelope-open' ></i></span>
                <span><i class='bx bx-time-five'></i></span>
            </div>
        </div>
    </div>
  )
};
