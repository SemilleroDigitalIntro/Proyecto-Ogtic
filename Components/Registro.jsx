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
        NumeroC_label.style.padding = '0px';


        

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
            Img.id = 'ImgVerificacion';

            let H2Name = document.createElement('h2');
            let TextName = document.createTextNode(`¡Hola,${DataCedula[0].Nombre}!`);
            H2Name.style.fontWeight = '600';
            H2Name.style.color = '#1B3F7E';
            H2Name.id = 'H2Name';
            H2Name.append(TextName);
            let Gregistro_div1_d3 = document.getElementById('Gregistro_div1_d3');
            Gregistro_div1_d3.insertBefore(H2Name,DecripcionValidacion);
            Gregistro_div1_d3.insertBefore(Img,H2Name);

            
            



            document.getElementById('Gregistro_div1').innerHTML +=`<div class='TerminosVerificacion' id = 'TerminosVerificacion'>
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
                <div class='TV_div4' id = 'TV_div4'>
                </div>
            </div>`;

            let formulario = document.createElement('form');
            formulario.className = 'TV_formulario';
            formulario.addEventListener('submit',(e)=>{
                e.preventDefault();
                LanzarCamara();
            });

            let div1 = document.createElement('div');
            let div1_input = document.createElement('input');
            div1_input.required = 'true';
            div1_input.type = 'checkbox';
            div1_input.name = '';
            div1_input.id = '';

            let div1_a = document.createElement('a');
            let div1_aText = document.createTextNode('Aceptar términos y políticas de privacidad');
            div1_a.href = `${LinkTerminos}`;
            div1_a.append(div1_aText);
            div1.append(div1_input);
            div1.append(div1_a);

            let div2 = document.createElement('div');
            let div2_btn = document.createElement('button');
            div2_btn.type = 'submit';
            div2_btn.addEventListener('click',()=>{
                
            })
            let div2_btnText = document.createTextNode('Iniciar Proceso');
            div2_btn.append(div2_btnText);
            div2.append(div2_btn);

            formulario.append(div1);
            formulario.append(div2);

            



            //funcion del boton para volver
            let TV_div4 = document.getElementById('TV_div4');
            let BtnVolver = document.createElement('button');
            BtnVolver.innerHTML = `<i class='bx bx-left-arrow-alt' ></i>Volver al paso anterior`;
            BtnVolver.addEventListener('click',()=>{
                window.location.href = '/';
            });

            TV_div4.append(BtnVolver);

            let TerminosVerificacion = document.getElementById('TerminosVerificacion');
            TerminosVerificacion.insertBefore(formulario,TV_div4);




        }else{
            alert('Error');
        };

    };

    const LanzarCamara = () => {
        let Gregistro_div1 = document.getElementById('Gregistro_div1');
        if(navigator.mediaDevices.getUserMedia){
            navigator.mediaDevices.getUserMedia(
                {video: 'true'}
            ).then((Stream)=>{
                let ContainerCamara = document.createElement('dialog');
                ContainerCamara.className = 'ModalCamara';
                ContainerCamara.open = 'true';
                var Camara = document.createElement('video');
                Camara.id = 'Camara';
                Camara.height = '720';
                Camara.width = '1280';
                
                Camara.autoplay = 'true';
                Camara.srcObject = Stream;

                let ContainerBtns = document.createElement('div');
                ContainerBtns.id = 'ContainerBtns';



                let btnNoTomarF = document.createElement('button');
                btnNoTomarF.className = 'btnNoTomarF';
                let btnNoTomarFtext = document.createTextNode('No escanear');
                btnNoTomarF.append(btnNoTomarFtext);
                btnNoTomarF.addEventListener('click',()=> {
                    Camara.srcObject.getTracks()[0].stop();
                    ContainerCamara.remove();
                })



                let btnTomarFoto = document.createElement('button');
                let btnTomarFtext = document.createTextNode('Escanear Rostro');
                btnTomarFoto.append(btnTomarFtext);

                btnTomarFoto.addEventListener('click', ()=>{
                    TomarFoto()
                })

                ContainerBtns.append(btnNoTomarF);
                ContainerBtns.append(btnTomarFoto);
                
                

                ContainerCamara.append(Camara);
                ContainerCamara.append(ContainerBtns);
                Gregistro_div1.append(ContainerCamara)



            })
            .catch(()=>{
                let modalError = document.createElement('dialog');
                modalError.className = 'ModalError';

            })
        }else{

        };

    };
    
    async function TomarFoto() {
        const Camara1 = document.getElementById('Camara');
        const ModalCamara = document.querySelector('.ModalCamara')
        ModalCamara.id = 'ModalCamara';
        
        setTimeout(()=>{
            N = null;
            let Loanding = document.getElementById('Loanding');
            Loanding.innerHTML = `Verificacion Completada`;
            FormularioRegistro();
        },10000);

        
        let ContainerBtns = document.getElementById('ContainerBtns');
        ContainerBtns.innerHTML = `<h2 id='Loanding'>Escaneando Rostro<span id = 'puntos'></span></h2>`;

        let puntos = document.getElementById('puntos');
        puntos.style.transition = '300ms';

        const Canvas = document.createElement('canvas');
        Canvas.className = 'PhotoEscanear';
        Canvas.height = '380';
        Canvas.width = '600';
        const Context = Canvas.getContext('2d');
        Context.drawImage(Camara1,0,0,);

        ModalCamara.insertBefore(Canvas,ContainerBtns);

        



        let Contador;
        let N = setInterval(()=>{
            if(Contador == undefined){
                puntos.innerText = '.';
                Contador = 1;
            }else if(Contador == 1){
                puntos.innerText = '..';
                Contador = 2;
            }else if(Contador == 2){
                puntos.innerText = '...'
                Contador = undefined;
            }else{
                alert('error');
            };

        },1000);

        Camara.style.display = 'none';
        Camara.srcObject.getTracks()[0].stop();

        

    };

    const FormularioRegistro = () => {
        let ContainerBtns =  document.getElementById('ContainerBtns');
        ContainerBtns.style.flexDirection = 'column';
        ContainerBtns.style.alignItems = 'center';
        ContainerBtns.style.justifyContent = 'center';
        ContainerBtns.style.gap = '10px';

        let ModalCamara = document.getElementById('ModalCamara');
        let btnContinuar = document.createElement('button');
        btnContinuar.addEventListener('click',()=>{
            RegistroUsuario()
        })
        btnContinuar.className = 'btnContinuar';

        let btnContinuarText = document.createTextNode('Continuar');
        btnContinuar.append(btnContinuarText);
        ContainerBtns.append(btnContinuar);





    };
    
    const RegistroUsuario = () => {
        ModalCamara.style.display = 'none';
        let ImgVerificacion = document.getElementById('ImgVerificacion');
        ImgVerificacion.remove();
        let H2Name = document.getElementById('H2Name');
        H2Name.remove();
        let TerminosVerificacion = document.getElementById('TerminosVerificacion');
        TerminosVerificacion.remove();
        let DecripcionValidacion = document.getElementById('DecripcionValidacion');
        DecripcionValidacion.innerText = 'Para finalizar tu registro, completa los siguientes campos:';

        let VerificacionChild = document.getElementById('VerificacionChild');
        VerificacionChild.innerHTML = `<i class='bx bx-check' ></i>`;
        VerificacionChild.style.background = 'rgb(0, 56, 118)';

        let Registro = document.getElementById('Registro');
        Registro.style.background ='rgb(109, 176, 226)';


        let Gregistro = document.getElementById('Gregistro_div1');
        let GFormularioRegistro = document.createElement('div');
        GFormularioRegistro.className = 'GFormularioRegistro';
        GFormularioRegistro.id = 'GFormularioRegistro';

        let FormularioRegistro = document.createElement('form');
        FormularioRegistro.id = 'FormularioRegistro';
        FormularioRegistro.className = ' FormularioRegistro';
        FormularioRegistro.addEventListener('submit',(e)=>{
            e.preventDefault();
            window.location.href = '/Inicio';
        })

        let div1 = document.createElement('div');
        div1.id = 'FormularioRegistro_div1';
        let div1_label = document.createElement('label');
        let div1_labelText = document.createTextNode('Correo Electrónico');
        div1_label.append(div1_labelText);

        div1_label.addEventListener('click',()=>{
            div1_label.style.fontSize = '16px';
            div1_label.style.marginBottom = '60px';
            div1_label.style.background = 'white';
            div1_label.style.marginLeft = '15px';
            div1_label.style.padding = '0px';
        })

        let div1_input = document.createElement('input');
        div1_input.addEventListener('click',()=>{
            div1_label.style.fontSize = '16px';
            div1_label.style.marginBottom = '60px';
            div1_label.style.background = 'white';
            div1_label.style.marginLeft = '15px';
            div1_label.style.padding = '0px';
        });

        div1.append(div1_label);
        div1.append(div1_input);

        let div2 = document.createElement('div');
        div2.id = 'FormularioRegistro_div2';
        let div2_label = document.createElement('label');
        let div2_labelText = document.createTextNode('Confirma tu Correo Electrónico');
        div2_label.append(div2_labelText);
        div2_label.addEventListener('click',()=>{
            div2_label.style.fontSize = '16px';
            div2_label.style.marginBottom = '60px';
            div2_label.style.background = 'white';
            div2_label.style.marginLeft = '15px';
            div2_label.style.padding = '0px';
        })

        let div2_input = document.createElement('input');
        div2_input.addEventListener('click',()=>{
            div2_label.style.fontSize = '16px';
            div2_label.style.marginBottom = '60px';
            div2_label.style.background = 'white';
            div2_label.style.marginLeft = '15px';
            div2_label.style.padding = '0px';
        });
        div2.append(div2_label);
        div2.append(div2_input);


        let div3 = document.createElement('div');
        div3.id = 'FormularioRegistro_div3';
        let div3_label = document.createElement('label');
        let div3_labelText = document.createTextNode('Contraseña');
        div3_label.append(div3_labelText);
        div3_label.addEventListener('click',()=>{
            div3_label.style.fontSize = '16px';
            div3_label.style.marginBottom = '60px';
            div3_label.style.background = 'white';
            div3_label.style.marginLeft = '15px';
            div3_label.style.padding = '0px';
        });

        let div3_input = document.createElement('input');
        div3_input.addEventListener('click',()=>{
            div3_label.style.fontSize = '16px';
            div3_label.style.marginBottom = '60px';
            div3_label.style.background = 'white';
            div3_label.style.marginLeft = '15px';
            div3_label.style.padding = '0px';
        });
        div3_input.type = 'password';
        div3.append(div3_label);
        div3.append(div3_input);

        let div4 = document.createElement('div');
        div4.id = 'FormularioRegistro_div4';
        let div4_label = document.createElement('label');
        let div4_labelText = document.createTextNode('Confirma tu Contraseña');
        div4_label.append(div4_labelText);
        div4_label.addEventListener('click',()=>{
            div4_label.style.fontSize = '16px';
            div4_label.style.marginBottom = '60px';
            div4_label.style.background = 'white';
            div4_label.style.marginLeft = '15px';
            div4_label.style.padding = '0px';
        });

        let div4_input = document.createElement('input');
        div4_input.addEventListener('click',()=>{
            div4_label.style.fontSize = '16px';
            div4_label.style.marginBottom = '60px';
            div4_label.style.background = 'white';
            div4_label.style.marginLeft = '15px';
            div4_label.style.padding = '0px';
        });
        div4_input.type = 'password';
        div4.append(div4_label);
        div4.append(div4_input);

        let BtnCreacuenta = document.createElement('button');
        BtnCreacuenta.className = 'BtnCreacuenta';
        let BtnCreacuentaText = document.createTextNode = 'CREAR CUENTA UNICA';
        BtnCreacuenta.append(BtnCreacuentaText);
        BtnCreacuenta.innerHTML += `<i class='bx bx-check' ></i>`;

        BtnCreacuenta.addEventListener('click',()=>{
        });


        FormularioRegistro.append(div1,div2,div3,div4,BtnCreacuenta);
        GFormularioRegistro.append(FormularioRegistro);
        Gregistro.append(GFormularioRegistro);

        // FormularioRegistro.append(div2)
        // FormularioRegistro.append(div3)
        // FormularioRegistro.append(div4)


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
                    <label onClick={UnlockInput} htmlFor="Cedula" id='NumeroC_label'>Numero de cedula <span>*</span></label>
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
