import React from 'react';
import './Style/Header.less';

export default function Header() {
  return (
    <section className='Sheader'>
        <div className='Sheader__logo'>

        </div>
        <nav className='Sheader__Nav'>
          <a href="">Home</a>
          <a href="">Sobre nosotros</a>
          <a href="">Servicios</a>
          <a href="">Novedades</a>
          <a href="">Ubicaciones</a>
        </nav>
        <button className='BtnHeader'>Iniciar sesion</button>
    </section>
  )
}
