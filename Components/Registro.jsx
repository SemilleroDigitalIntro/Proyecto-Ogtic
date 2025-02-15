import React from 'react';
import './Style/Registro.less';

export default function Registro() {

    const UnlockInput = () =>{

        let NumeroC_label = document.getElementById('NumeroC_label');
        let Formulario = document.getElementById('Formulario');
        let Input = document.getElementById('Cedula');
        Input.style.marginBottom = '-60px';
        Formulario.style.gap = '50px';
        NumeroC_label.style.fontSize = '16px'
        

    };





  return (
    <section className='Gregistro'>
        <div className='Gregistro_div1'>
            <div className='Gregistro_div1_d1'>
                <img src="https://registro.cuentaunica.gob.do/_next/static/media/smallLogo.bf9e6436.svg" alt="" />
                <h2>Cuenta Única Ciudadana</h2>
            </div>

            <div className='Gregistro_div1_d2'>

               <div className='Confirmaciones Identificación'>
                    <span>1</span>
                    <div>
                        <h3>Identificación</h3>
                        <span>DNI del usuario</span>
                    </div>
               </div>
               <span className='Arrows'></span>
               <div className='Confirmaciones Verificacion'>
                <span>2</span>
                    <div>
                        <h3>Verificacion</h3>
                        <span>Prueba de vida</span>
                    </div>
               </div>
               <span className='Arrows'></span>
               <div className='Confirmaciones Registro'>
                <span>3</span>
                    <div>
                        <h3>Registro</h3>
                        <span>Cuenta de usuario</span>
                    </div>
               </div>

            </div>

            <div className='Gregistro_div1_d3'>
                <span>Este es el primer paso para poder verificar tu identidad y crear tu cuenta ciudadana.</span>
            </div>

            <form action="" className='Formulario' id='Formulario'>
                <div className='Formulario_div1'>
                    <label htmlFor="" id='NumeroC_label'>Numero de cedula <span>*</span></label>
                    <input onClick={UnlockInput} type="text" id='Cedula'/>
                </div>

                <div className='Formulario_div2'>
                    <button type="submit">Confirmar<i class='bx bx-right-arrow-alt' ></i></button>
                    <span>¿Ya tienes una cuenta? <a href="">Inicia sesión aquí.</a></span>
                </div>
            </form>


        </div>

    </section>
  )
};
