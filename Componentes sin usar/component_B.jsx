import React from 'react';
import './Style/Component_B.less';
import { useState } from 'react';
import DataCategoria from './Data/DataCategoria';

export default function Component_B() {

    const [ShowCategoria, SetshowCategoria] = useState(true);

    const Categoria = () => {
        let Buscador_categorias = document.getElementById('Buscador_categorias');
        SetshowCategoria(!ShowCategoria);
        ShowCategoria ? document.getElementById('Buscador_categorias').style.display = 'flex' 
        : document.getElementById('Buscador_categorias').style.display = 'none';
        ShowCategoria ? document.getElementById('Buscador_categorias').innerHTML = '' :
        document.getElementById('Buscador_categorias');

        ShowCategoria ? document.getElementById('IconArrow').style.rotate = '90deg' : 
        document.getElementById('IconArrow').style.rotate = '0deg';

        for(var x =0; x<4; x++){
            let opcion = document.createElement('span');
            opcion.className = `N${x}`;
            opcion.innerText = `${DataCategoria[x].Categoria}`;
            Buscador_categorias.append(opcion);
        };

        


        
    };

  return (
    <form className='Buscador'>
        <div className='InBuscador'>
        <div className='Buscador_div1'>
            <button onClick={Categoria}>Categoria<i id='IconArrow' class='bx bx-chevron-right'></i></button>
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
