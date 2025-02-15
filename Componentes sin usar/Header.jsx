import React from 'react';
import './Style/Header.less';
import { ShowLogin2 } from '../Modal_iniciarSesion';
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


   if(ShowLogin == undefined){
    document.getElementById('Login').style.display = 'flex' ;
    ShowLogin = 1;
   }else if(ShowLogin == 1){
    document.getElementById('Login').style.display = 'none';
    ShowLogin = 2;
   }else if(ShowLogin == 2){
    document.getElementById('Login').style.display = 'flex';
    ShowLogin = 1;
   }else{
    alert('existe un error')
   };
  };

  return (
    <section className='Sheader'>
        <div className='Sheader__logo'>
          <img src="nashla/logoproyecto1.png" alt="logo Web" />
        </div>
        <nav className='Sheader__Nav'>
          <a onClick={Home}>Home</a>
          <a onClick={Servicios}>Servicios</a>
          <a onClick={Novedades}>Novedades</a>
          <a onClick={Sobrenosotros}>Sobre nosotros</a>
          <a>Ubicaciones</a>
        </nav>
        <button onClick={Login} className='BtnHeader'>Agenda tu cita</button>
    </section>
  )
}
