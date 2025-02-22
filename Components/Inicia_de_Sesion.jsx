import React from 'react';
import './Style/Modal_iniciarSesion.less';


export default function Inicia_de_Sesion() {
let boleanoV;
let BoleanoD;

  const Sendform = async (event) => {
    event.preventDefault()
    const conexion = await fetch('http://localhost:4000/api/Users')
    const Data = await conexion.json();

    for(let x = 0; x < 5; x++){
      validacion(`${Data.data[x].Cedula}`);
    };

    
  };

  const validacion = (confirmacion) =>{
    if(document.getElementById('ID').value == confirmacion){
      ValidacionPassword()

    }else{
      Sendform();
      
    }
  }

  const ValidacionPassword = async () => {
    const conexion = await fetch('http://localhost:4000/api/Users')
    const Data = await conexion.json();

    for(let x = 0; x < 2; x++){
      ValidacionP(`${Data.data[x].Password}`)
    }

  }

  const ValidacionP = (confirmacion) => {
    if(document.getElementById('Contraseña').value == confirmacion){
      window.location.href ='/Inicio';
    }else{
      ValidacionPassword()
    }
  }


  return (
   <section className='Glogin'>
     <section className='Login' id='Login'>
      <div className='Login__div1'>
        <div className='Login__div1_dv1'>
          <img src="nashla/LogoLogin.png" alt="Logo del login" />
        </div>
        <form action="" onSubmit={Sendform}>
            <div className='Form__div1'>
              <label htmlFor="ID">ID: <span>*</span></label>
              <input type="text" name="" id="ID" />
            </div>
            <div className='Form__div2'>
              <label htmlFor="Contraseña">Contraseña: <span>*</span></label>
              <input type="password" name="" id="Contraseña" />
            </div>
            <div className='Form__div3'>
              <a href="">¿Olvidó su contraseña?</a>
              <button type="submit">Iniciar sesion</button>
              <span>¿No tienes una cuenta?<a href="/Registro"> Registrarse </a></span>
            </div>
        </form>
      </div>
      
      <div className='Login__div2'>
      
        <img src="nashla/pexels-jopwell-2422290.jpg" alt="Grupo de personas" />
      </div>
    </section>
   </section>
  )
}
