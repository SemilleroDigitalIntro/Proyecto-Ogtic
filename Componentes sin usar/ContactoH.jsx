import React from 'react';
import './Style/ContactoH.less';

export default function ContactoH() {
  return (
    <section className='SContactoH'>
        <div className='SContactoH__d1'>
            <i class='bx bx-phone'></i>
            <a href=""><span>Servicio al Cliente: </span>+1(809)-789-8098</a>
        </div>
        <div className='SContactoH__d2'>
            {/* <div className='SContactoH__d2_Email'>
                <i class='bx bx-envelope' ></i>
                <a href="mailto:"><span>Email: </span>God@.do</a>
            </div> */}
            <div className='SContactoH__d2_IconoRed'>
                <a href=""><i class='bx bxl-instagram' ></i></a>
                <a href=""><i class='bx bxl-linkedin' ></i></a>
                <a href=""><i class='bx bxl-twitter'></i></a>
            </div>
        </div>
    </section>
  )
}
