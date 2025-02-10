import React from 'react';
import './Style/Header.less';


let Nav;
export default function Header() {


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

  return (
    <section className='Sheader'>
        <div className='Sheader__logo'>

        </div>
        <nav className='Sheader__Nav'>
          <a onClick={Home}>Home</a>
          <a onClick={Servicios}>Servicios</a>
          <a onClick={Novedades}>Novedades</a>
          <a onClick={Sobrenosotros}>Sobre nosotros</a>
          <a href="">Ubicaciones</a>
        </nav>
        <button className='BtnHeader'>Iniciar sesion</button>
    </section>
  )
}
