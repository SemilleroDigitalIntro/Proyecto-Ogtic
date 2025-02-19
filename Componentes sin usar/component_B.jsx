import React from 'react';
import './Style/Component_B.less';
import { useState } from 'react';

export default function Component_B() {

    const [ShowCategoria, SetshowCategoria] = useState(true);

    const Categoria = () => {
        SetshowCategoria(!ShowCategoria);
        ShowCategoria ? document.getElementById('Buscador_categorias').style.display = 'flex' 
        : document.getElementById('Buscador_categorias').style.display = 'none'
    };

  return (
    <form className='Buscador'>
        <div className='InBuscador'>
        <div className='Buscador_div1'>
            <button onClick={Categoria}>Categoria<i class='bx bx-chevron-right'></i></button>
            <div className='Buscador_categorias' id='Buscador_categorias'>
                
            </div>
        </div>
        <div className='Buscador_div2'>
            <input type="text" name="" id="Buscador" placeholder='Buscar Ej.: Solicitud de Pasaporte por primera vez' required/>
        </div>
        <div className='Buscador_div3'>
            <button type="submit"><i class='bx bx-search-alt-2' ></i></button>
        </div>
        </div>
    </form>
  )
};
