import React from 'react';
import './Style/Formulario.css';


export default function Form() {
  return (
    <section>
         <div class="logo_form">
            <img src="nashla/logoproyecto1.png"/>
        </div> 
        <h1 class="title --form">Agenda tu cita</h1>

        <div class="container_personaldata">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
            </div>
            <div>
                <h1 class="title --personaldata">Datos personales</h1>
            </div>
            
        </div>

        <div class="container_form_personaldata">
            <form id="form__personaldata"  action="">

                <div>
                    <div class="container__input">
                        <label>Nombre  <strong>*</strong></label>
                        <input class="input --name" type="text"  placeholder="Escribe aquí" required/>
                    </div>
                    <div  class="container__input">
                        <label>Apellido  <strong>*</strong></label>
                        <input class="input --lastname" type="text"  placeholder="Escribe aquí" required/>
                    </div>
                    <div  class="container__input">
                        <label>Cedula o pasaporte  <strong>*</strong></label>
                        <input class="input --cedula" type="text"  placeholder="Escribe aquí" required/>
                    </div>
                </div>

                <div>
                <div  class="container__input">
                    <label>Correo electronico  <strong>*</strong></label>
                    <input class="input --email" type="email"  placeholder="Escribe aquí" required/>
                </div>
                    
                    <div  class="container__input">
                        <label>Numero de telefono  <strong>*</strong></label>
                        <input class="input --number" type="text"  placeholder="Escribe aquí" required/>
                    </div>
                </div>

               
            </form>
        </div>
        <div>
            <div class="container_personaldata">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg>
                </div>
                <div>
                    <h1 class="title --Fecha">Fecha</h1>
                </div>
            </div>
     </div>

        
        
    </section>
  );
};
