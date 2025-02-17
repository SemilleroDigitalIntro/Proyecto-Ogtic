import React from 'react';
import './Style/Header.less';
import { ShowLogin2 } from '../Components/Inicia_de_Sesion';
import { useState } from 'react';

export let ShowLogin;
export default function Header() {


  const [openlogin,SetOpenlogin] = useState(true)

  const Servicios = () =>{
    scroll(0,600)
  };
  const Novedades = () =>{
    scroll(0,1000)
  };


  const Sobrenosotros = () =>{
    scroll(0,1500)
  };

  const Home = () =>{
    scroll(0,0)
  };
  
  const Login = () =>{
    window.location.href = '/';
  };

  const Registrar = () => {
    window.location.href = '/Registro';
  };

  return (
    <section className='Sheader'>
        <div className='Sheader__logo'>
          <img src="Components/Img/LogoOffSimbolo.png" alt="logo Web" />
        </div>
        <nav className='Sheader__Nav'>
          <a onClick={Home}>Home</a>
          <a onClick={Servicios}>Servicios</a>
          <a onClick={Novedades}>Novedades</a>
          <a onClick={Sobrenosotros}>Sobre nosotros</a>
          <a>Ubicaciones</a>
        </nav>
       <div className='BtnHeaders'>
       <button className='Btn1' onClick={Login} >Iniciar Sesion</button>
       <button className='Btn2' onClick={Registrar} ><i class='bx bx-user' ></i>Registrase</button>
       </div>
    </section>
  )
}
