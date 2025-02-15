import React from 'react';
import './Style/Smain.less';

export default function Smain() {
  return (
    <section className='Smain'>
        <div className='Smain__background'>

        </div>
        <div className='Smain__Card'>
            <div className='Sm__Card_content'>
                <h1>Este sistema es para ti, porque el progreso comienza con el acceso a mejores servicios.</h1>
            </div>
            <div className='Sm__Card_BtnAgendar' >
                <button className='BtnAgendar'>Agenda tu cita ahora</button>
            </div>

        </div>
            <img src="https://pgr.gob.do/wp-content/uploads/2022/05/LA2A1422.jpg" alt="Imagen de un punto Gob" />

    </section>
  )
}
