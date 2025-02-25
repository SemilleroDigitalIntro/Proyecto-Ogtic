import React from 'react';
import './Style/IniciarSesion.less';


export default function Inicia_de_Sesion() {
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




  const Sendform = async (event) => {
    event.preventDefault()
    const conexion = await fetch('http://localhost:4000/api/Users')
    const Data = await conexion.json();
    const largoArray = Data.data.length;
    for(let x = 0; x < largoArray; x++){
      validacion(Data.data[x].Cedula,Data.data[x].ID);
    };

    
  };

  const validacion = (confirmacion,ID) =>{
    if(document.getElementById('ID').value == confirmacion){
      ValidacionPassword(confirmacion,ID)

    }else{
      Sendform();
      
    }
  }

  const ValidacionPassword = async (confirmacion,ID) => {
    const conexion = await fetch('http://localhost:4000/api/Users')
    const Data = await conexion.json();
    const largoArray = Data.data.length;
    for(let x = 0; x < largoArray; x++){
      ValidacionP(Data.data[x].Password,ID)
    }

  }

  const ValidacionP = (confirmacion,ID) => {
    if(document.getElementById('Contraseña').value == confirmacion){
      fetch('http://localhost:4000/api/Users/:ID',{
        method: 'PUT',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify({InicioSesion: 1, ID: ID })
      }).then((respuesta)=> respuesta.json())
      .then(data => {
        console.log('Usuario agregado',data)
        window.location.href = '/Inicio';
      }).catch(
        (err)=>{
          console.log('tenemos un error', err)
        }
    );
    }else{
      ValidacionPassword()
    }
  }


  return (
   <section className='Gloginn'>
     <section className='Loginn' id='Loginn'>
      <div className='Login__div11'>
        <div className='Login__div1_dv11'>
          <img src="nashla/LogoLogin.png" id='img' alt="Logo del login" />
        </div>
        <form action="" onSubmit={Sendform}>
            <div className='Form__div11'>
              <label htmlFor="ID">ID: <span>*</span></label>
              <input type="text" name="" id="ID" />
            </div>
            <div className='Form__div22'>
              <label htmlFor="Contraseña">Contraseña: <span>*</span></label>
              <input type="password" name="" id="Contraseña" />
            </div>
            <div className='Form__div33'>
              <a href="/Forgetpassword">¿Olvidó su contraseña?</a>
              <button type="submit">Iniciar sesion</button>
              <span>¿No tienes una cuenta?<a href="/Registro"> Registrarse </a></span>
            </div>
        </form>
      </div>
      
      <div className='Login__div22'>
      
        <img src="nashla/pexels-jopwell-2422290.jpg" id='img1' alt="Grupo de personas" />
      </div>
    </section>
   </section>
  )
}
