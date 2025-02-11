import React from 'react';
import './Style/Modal_iniciarSesion.less';
import { ShowLogin } from './Header';

export default function Modal_iniciarSesion() {



  const CloseLogin = () =>{
    if(ShowLogin == 1){
      document.getElementById('Login').style.display = 'none';
    }else if(ShowLogin == 2){
      document.getElementById('Login').style.display = 'none';
    }else{
      alert('tenemos un error con el login');
    };

  };


  return (
    <dialog className='Login' id='Login' open>
      <div className='Login__div1'>
      <div className='Login__div1_dv1'>
        <img src="nashla/LogoLogin.png" alt="Logo del login" />
      </div>
        <form action="">
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
              <span>¿No tienes una cuenta?<a href=""> Registrarse </a></span>
            </div>
        </form>
      </div>
      
      <div className='Login__div2'>
      <div className='Login_X'>
        <button onClick={CloseLogin}><i class='bx bx-x'></i></button>
      </div>
        <img src="nashla/pexels-jopwell-2422290.jpg" alt="Grupo de personas" />
      </div>
    </dialog>
  )
}
