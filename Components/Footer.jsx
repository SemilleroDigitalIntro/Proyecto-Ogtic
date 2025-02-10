import React from 'react';
import './Style/FooterD.less';

export default function Footer() {
  return (
    <section className='FooterD'>
        <div className='FooterD__div1'>
            <span>© 2025 Todos los Derechos Reservados. Desarrollado por</span><img src="https://ogtic.gob.do/_next/image?url=https%3A%2F%2Fwp.ogtic.gob.do%2Fwp-content%2Fuploads%2F2024%2F01%2Flogo.png&w=1920&q=75" alt="logo Ogtic" />
        </div>
        <div className='FooterD__div2'>
            <span>SIGUENOS</span>
            <div>
            <i class='bx bxl-facebook-square' ></i>
            <i class='bx bxl-linkedin-square' ></i>
            <i class='bx bxl-instagram-alt' ></i>
            <i class='bx bxl-youtube' ></i>
            </div>
        </div>
    </section>
  )
}
