import React from 'react';
import './Style/Header.less';
import { useState } from 'react';


export let ShowLogin;
export let InicioConfirmado;

export default function Header() {
  
  const ValidacionInicioSesion = async () =>{
    const connection = await fetch('http://localhost:4000/api/Users');
    const Data = await connection.json();
    let Inicio = document.querySelector('.Inicio');
    let root = document.getElementById('root');
    const largoArray = Data.data.length;
    for(let x=0;x < largoArray; x++){
        if(Data.data[x].InicioSesion == 1){
            InicioSesion(Data.data[x].NombreCompleto , Data.data[x].Cedula, Data.data[x].Gmail)
            Noexiste = true;
        }else{
            continue;
        }
    }
  };
  ValidacionInicioSesion();

  const InicioSesion = (Nombre,Cedula) => {
    InicioConfirmado = true;
    // let nombre = Nombre.split(" ", 1)
    let BtnHeaders = document.getElementById('BtnHeaders');
    BtnHeaders.innerHTML = '';

    let Btnperfil = document.createElement('span');
    Btnperfil.className = 'Btn1';
    Btnperfil.style.fontSize = '20px';
    Btnperfil.style.width = '6cm';
    Btnperfil.style.marginTop = '10px';
    // Btnperfil.style.textTransform = 'lowercase';
    Btnperfil.style.display = 'flex';
    Btnperfil.style.justifyContent = 'center';
    Btnperfil.style.alignContent = 'center';
    Btnperfil.style.gap = '5px';
    Btnperfil.style.padding = '0'
    Btnperfil.innerHTML = `<i class='bx bx-user' id='btnperfilchild' ></i> <span>${Nombre}</span> `;
    Btnperfil.addEventListener('click',()=>{
      if(InicioConfirmado == true){
        window.location.href = '/Inicio';
      }
    })

    BtnHeaders.append(Btnperfil);

    let btnperfilchild = document.getElementById('btnperfilchild');
    // btnperfilchild.style.border = '3px solid #003876';
    // btnperfilchild.style.borderRadius = '100%';
    btnperfilchild.style.display = 'flex';
    btnperfilchild.style.justifyContent = 'center';
    btnperfilchild.style.alignItems = 'center';
    btnperfilchild.style.marginTop = '1.3px'
    btnperfilchild.style.height = '0.7cm';
    btnperfilchild.style.width = '0.7cm';
    btnperfilchild.style.fontSize = '20px';



  };

  const [openlogin,SetOpenlogin] = useState(true)

  const Servicios = () =>{
    scroll(0,1100)
  };
  const Novedades = () =>{
    scroll(0,3350)
  };

  const PuntosGob = () => {
    scroll(0,2550)
  };



  const Login = () =>{
    window.location.href = '/login';
  };

  const Registrar = () => {
    window.location.href = '/Registro';
  };

  return (
    <section className='Sheader'>
        <div className='Sheader__logo'>
          <img src="Components/Img/LogoOffSimbolo1.png" alt="logo Web" />
        </div>
        <nav className='Sheader__Nav'>
          {/* <a onClick={Home}>Home</a> */}
          <a onClick={Servicios}>Servicios</a>
          <a onClick={Novedades}>Novedades</a>
          {/* <a onClick={Sobrenosotros}>Sobre nosotros</a> */}
          <a onClick={PuntosGob} >Puntos GOB</a>
        </nav>
       <div className='BtnHeaders' id='BtnHeaders'>
       <button className='Btn1' onClick={Login} >Iniciar Sesion</button>
       <button className='Btn2' onClick={Registrar} ><i class='bx bx-user' ></i>Registrase</button>
       </div>
    </section>
  )
}
