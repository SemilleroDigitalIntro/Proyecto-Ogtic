import React from 'react';
import './Style/Registro.less';
import DataCedula from './Data/DataCedula';

export default function Registro() {

    let ResetInput;
    const UnlockInput = () =>{

        let NumeroC_label = document.getElementById('NumeroC_label');
        let Formulario = document.getElementById('Formulario');
        let Input = document.getElementById('Cedula');
        Input.style.marginBottom = '-60px';
        Formulario.style.gap = '50px';
        NumeroC_label.style.fontSize = '16px';

        

    };

    const Reset = () =>{
        let Gregistro = document.getElementById('Gregistro');
        let Formulario = document.getElementById('Formulario');
        let Input = document.getElementById('Cedula');
        let NumeroC_label = document.getElementById('NumeroC_label');



    };

    const VerificandoCedula = (e) => {
        e.preventDefault();
        let LinkTerminos;
        let formularioDNI = document.getElementById('Formulario');
        let Gregistro = document.getElementById('Gregistro');

        if(DataCedula[0].Cedula == document.getElementById('Cedula').value){

            Gregistro.style.paddingTop = '150px';
            Gregistro.style.paddingBottom = '150px';

            let Identificación = document.getElementById('Identificación');
            Identificación.innerHTML = `<i class='bx bx-check'></i>`;
            Identificación.style.background = '#003876';

            let Verificacionclass = document.getElementById('Verificacion');
            Verificacionclass.style.opacity = '1';
            let VerificacionChild = document.getElementById('VerificacionChild');
            VerificacionChild.style.background = '#6DB0E2';


            formularioDNI.style.display = 'none';
            let DecripcionValidacion = document.getElementById('DecripcionValidacion');
            let NuevoText = document.createTextNode('A continuación validaremos tu identidad mediante una verificación facial y prueba de vida. Asegúrate de cumplir con las siguientes condiciones:');
            DecripcionValidacion.innerHTML = ``;
            DecripcionValidacion.append(NuevoText)

            let Img = document.createElement('img');
            Img.src = 'https://registro.cuentaunica.gob.do/_next/static/media/verification.ef12b2b5.svg';

            let H2Name = document.createElement('h2');
            let TextName = document.createTextNode(`¡Hola,${DataCedula[0].Nombre}!`);
            H2Name.style.fontWeight = '600';
            H2Name.append(TextName);
            let Gregistro_div1_d3 = document.getElementById('Gregistro_div1_d3');
            Gregistro_div1_d3.insertBefore(H2Name,DecripcionValidacion);
            Gregistro_div1_d3.insertBefore(Img,H2Name);

            



            document.getElementById('Gregistro_div1').innerHTML +=`<div class='TerminosVerificacion'>
                <div class='TV_div1'>
                    <i class='bx bx-camera' ></i>
                    <p>Utilizar un dispositivo que posea <span>cámara frontal</span> integrada.</p>
                </div>
                <div class='TV_div2'>
                    <i class='bx bx-face'></i>
                    <p>Permitir que tomemos capturas de tu <span>rostro</span>.</p>
                </div>
                <div class='TV_div3'>
                    <i class='bx bx-error-alt'></i>
                    <p>Esta verificación muestra <span>luces de colores.</span> Tenga cuidado si es fotosensible.</p>
                </div>
                <form action="" class='TV_formulario'>
                    <div>
                        <input type="checkbox" name="" id="" required/>
                        <a href=${LinkTerminos}>Aceptar términos y políticas de privacidad</a>
                    </div>
                    <div>
                        <button type="submit">Iniciar Proceso</button>
                    </div>
                </form>
                <div class='TV_div4' id = 'TV_div4'>
                </div>
            </div>`;

            let TV_div4 = document.getElementById('TV_div4');
            let BtnVolver = document.createElement('button');
            BtnVolver.innerHTML = `<i class='bx bx-left-arrow-alt' ></i>Volver al paso anterior`;
            BtnVolver.addEventListener('click',()=>{
                alert('funciona');
            });

            TV_div4.append(BtnVolver);




        }else{
            alert('Error');
        };

    };





  return (
    <section className='Gregistro'id='Gregistro' onClick={Reset}>
        <div className='Gregistro_div1' id='Gregistro_div1'>
            <div className='Gregistro_div1_d1'>
                <img src="https://registro.cuentaunica.gob.do/_next/static/media/smallLogo.bf9e6436.svg" alt="" />
                <h2>Cuenta Única Ciudadana</h2>
            </div>

            <div className='Gregistro_div1_d2'>

               <div className='Confirmaciones Identificación'>
                    <span id='Identificación'>1</span>
                    <div>
                        <h3>Identificación</h3>
                        <span>DNI del usuario</span>
                    </div>
               </div>

               <span className='Arrows'></span>

               <div className='Confirmaciones Verificacion' id='Verificacion'>
                <span id='VerificacionChild'>2</span>
                    <div>
                        <h3>Verificacion</h3>
                        <span>Prueba de vida</span>
                    </div>
               </div>

               <span className='Arrows'></span>

               <div className='Confirmaciones Registro'>
                <span id='Registro'>3</span>
                    <div>
                        <h3>Registro</h3>
                        <span>Cuenta de usuario</span>
                    </div>
               </div>

            </div>

            <div className='Gregistro_div1_d3' id='Gregistro_div1_d3'>
                
                <span id='DecripcionValidacion'>Este es el primer paso para poder verificar tu identidad y crear tu cuenta ciudadana.</span>
            </div>

            <form onSubmit={VerificandoCedula} action="" className='Formulario' id='Formulario'>
                <div className='Formulario_div1'>
                    <label htmlFor="" id='NumeroC_label'>Numero de cedula <span>*</span></label>
                    <input onClick={UnlockInput} type="text" id='Cedula' required/>
                </div>

                <div className='Formulario_div2'>
                    <button type="submit">Confirmar<i class='bx bx-right-arrow-alt' ></i></button>
                    <span>¿Ya tienes una cuenta? <a href="/">Inicia sesión aquí.</a></span>
                </div>
            </form>
            


        </div>

    </section>
  )
};
