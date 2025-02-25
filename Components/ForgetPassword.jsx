import React from 'react';
import './Style/ForgetPassword.less';


export default function Forgetpassword() {
  let boleanoV;
  let BoleanoD;

  const Validacion_Usuario_No_registrado = async () => {
    const connection = await fetch('http://localhost:4000/api/Users');
    const Data = await connection.json();
    let ErrorInicioSesion;
    let Glogin = document.querySelector('.Glogin');
    const largoArray = Data.data.length;
    for(let x = 0; x < largoArray; x++ ){
      if(Data.data[x].InicioSesion == 1){
        ErrorInicioSesion = true;
      }else{
        continue;
      }
    }



    if(ErrorInicioSesion == true){
      Glogin.remove();
      let dialog = document.createElement('dialog');
      dialog.open = 'true';
      dialog.style.height = '100vh';
      dialog.style.border = 'none';
      let dialogh1 = document.createElement('h1');
      dialogh1.style.color = '#003876';
      let dialogText = document.createTextNode = 'Ya hay una sesión activa. Por favor, ciérrela si desea iniciar sesión con otra cuenta⚠️.';

      let dialogBtn = document.createElement('button');
      dialogBtn.style.height = '1cm';
      dialogBtn.style.width = '3cm';
      dialogBtn.style.border = '1px solid gray';
      dialogBtn.style.borderRadius = '10px';
      dialogBtn.style.fontSize = '16px';
      dialogBtn.style.fontWeight = '600';
      dialogBtn.style.background = '#003876';
      dialogBtn.style.color = 'white';
      dialogBtn.style.cursor = 'pointer';

      dialogBtn.addEventListener('pointerover',()=>{
          dialogBtn.style.opacity = '0.7'
      });
      dialogBtn.addEventListener('pointerleave', ()=>{
          dialogBtn.style.opacity = '1';
      });
      dialogBtn.addEventListener('click',()=>{
          window.location.href = '/Inicio';
      });

      let dialogBtnText = document.createTextNode = 'Ir al Inicio';
      dialogBtn.append(dialogBtnText);
      dialogh1.append(dialogText);
      dialog.append(dialogh1,dialogBtn);
      root.append(dialog);
    }else{

    }
  };
  Validacion_Usuario_No_registrado();

  // const ErrorInicioSesion = () => {
  //   let Glogin = document.querySelector('.Glogin');
  //   Glogin.remove();

  // };




  const Sendform = async () => {
    let Check;
    const conexion = await fetch('http://localhost:4000/api/Users');
    const Data = await conexion.json();
    const largoArray = Data.data.length;
    for(let x = 0; x < largoArray; x++){
      if(document.getElementById('ID').value == Data.data[x].Cedula){
        Validadacion(
          Data.data[x].Cedula,
          Data.data[x].ID,
          Data.data[x].Gmail,
          Data.data[x].NombreCompleto
        );
      }else{
        
      }
      
    };

    
    
  };

  const Validadacion = (Cedula,ID,Email,Nombre) => {
    document.querySelector('.Form__div1').style.display = 'none';
    let Form__div3 = document.getElementById('Form__div3');
    let Formulario = document.getElementById('Formulario');
    let Avisos = document.getElementById('Avisos');

    let Div1 = document.createElement('div');
    Div1.className = 'Form__div2';
    let Div1Span = document.createElement('span');
    Div1Span.innerText = `Hola, ${Nombre}`;
    let Div2Span = document.createElement('span');
    Div2Span.innerText = ` Se le envio un correo a ${Email}`;
    let Div3Span = document.createElement('span');
    Div3Span.innerText = ' con un codigo de verificacion';

    Avisos.replaceChildren(Div1Span,Div2Span,Div3Span)
    // Div1.append(Div1Span,Div2Span,Div3Span);




   
    Formulario.insertBefore(Div1,Form__div3)
  };

  // const ValidacionPassword = async (confirmacion,ID) => {
  //   const conexion = await fetch('http://localhost:4000/api/Users')
  //   const Data = await conexion.json();
  //   const largoArray = Data.data.length;
  //   for(let x = 0; x < largoArray; x++){
  //     ValidacionP(Data.data[x].Password,ID)
  //   }

  // }

  // const ValidacionP = (confirmacion,ID) => {
  //   if(document.getElementById('Contraseña').value == confirmacion){
  //     fetch('http://localhost:4000/api/Users/:ID',{
  //       method: 'PUT',
  //       headers: {'content-Type':'application/json'},
  //       body: JSON.stringify({InicioSesion: 1, ID: ID })
  //     }).then((respuesta)=> respuesta.json())
  //     .then(data => {
  //       console.log('Usuario agregado',data)
  //       window.location.href = '/Inicio';
  //     }).catch(
  //       (err)=>{
  //         console.log('tenemos un error', err)
  //       }
  //   );
  //   }else{
  //     ValidacionPassword()
  //   }
  // }

  const Over1 = () => {
    document.getElementById('BtncontinuarF').style.opacity = '0.7';
  };
  const Leave1 = () => {
    document.getElementById('BtncontinuarF').style.opacity = '1';
  };


  return (
   <section className='Glogin'>
     <section style={{height: '12cm',width: '10cm'}}className='Login' id='Login'>
        <div  className='Login__div1'>
          <div className='Login__div1_dv1'>
          <img src="nashla/LogoLogin.png" alt="Logo del login" />
          <span id='Avisos' >Bienvenido. Continúa con el proceso para recuperar el acceso a tu cuenta.</span>
        </div>
        <form id='Formulario'onSubmit={(event)=>{event.preventDefault()}}  >
            <div className='Form__div1'>
              {/* <label htmlFor="ID">ID <span>*</span></label> */}
              <input type="text" name="" id="ID" placeholder='Cedula' required />
            </div>
            
            <div className='Form__div3'>
              {/* <a href="">¿Olvidó su contraseña?</a> */}
              <button onClick={Sendform} onPointerOver={Over1} onPointerLeave={Leave1} style={{cursor: 'pointer'}} id='BtncontinuarF'>Continuar</button>
              <span><a href="/login">Volver al Login</a></span>
            </div>
        </form>
      </div>
    </section>
   </section>
  )
}
