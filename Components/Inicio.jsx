import React from 'react';
import './Style/Inicio.less';

export default function Inicio() {
  return (
    <section className='Inicio'>
        <aside className='Aside'>
            <div className='Aside__div1'>
                <img src="nashla/logoproyecto1.png" alt="" />
            </div>
            <div className='Aside__div2'>
                <span><i class='bx bx-left-arrow-alt' ></i>Regresar</span>
                <span><i class='bx bxs-user' ></i>Perfil</span>
                <span><i class='bx bx-mail-send'></i>Notificaciones</span>
                <span><i class='bx bxs-calendar-alt'></i>Agendar Citas</span>
                <span><i class='bx bxs-calendar' ></i>Citas Agendadas</span>
            </div>

        </aside>
        <main className='Main1' >
            <header className='Main1__header'>
                <div>
                    <h1>Perfil</h1>
                </div>
            </header>
            <section className='Main1__section' >
                {/* <div className='Main1__section_div1'>
                    <span>Opcion 1 </span>
                    <span>Opcion 2</span>
                    <span>Opcion 3</span>
                </div> */}
                <div className='Main1__section_div2'>
                    <div className='Main1__section_div2_d1'>
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">ID</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className='Main1__section_div2_d2'>
                        
                        <div>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name="" id="" />
                        </div>

                    </div>
                    <div className='Ms_div2_d3_d3'>
                            <button>Actualizar</button>
                    </div>
                    
                    
                </div>
                <div className='Main1__section_div2_d3'>
                        <div className='Ms_div2_d3_d1'>
                            <h3>Cambiar contrasena actual</h3>
                        </div>
                        <div className='Ms_div2_d3_d2'>
                            <div>
                                <label htmlFor="">Contrasena actual</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Nueva contrasena</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Confirmar nueva contrasena</label>
                                <input type="text" name="" id="" />
                            </div>

                        </div>
                        <div className='Ms_div2_d3_d3'>
                            <button>Cambiar</button>
                        </div>
                    </div>
            </section>
        </main>
        <main className='Main2' style={{display: 'none'}}>
            <header className='Main2__header'>
                <div>
                    <h1>Notificaciones</h1>
                </div>
            </header>
            <section className='Container_notificaciones'>

            </section>
        </main>
        <main className='Main3' style={{display: 'none'}}>
            <header className='Main3__header'>
                <div>
                    <h1>Agendar Cita</h1>
                </div>
            </header>
            <section className='Main3__section1'>
            <div className='Main3__section_div2'>
                    <div className='Main3__section_div2_d1'>
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">ID</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className='Main3__section_div2_d2'>
                        
                        <div>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name="" id="" />
                        </div>

                    </div>
                </div>

            </section>
        </main>
    </section>
  );
};
