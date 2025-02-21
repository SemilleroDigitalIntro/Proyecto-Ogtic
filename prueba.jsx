import React from 'react'
import { data } from 'react-router';




export default function Prueba() {
  const btn = async ()=>{
    try{
      const conection = await fetch('http://localhost:4000/api/Users');
      const Data = await conection.json();
      console.log(Data)
      console.log(Data.data[0])
      console.log(Data.data[0].Nombre)
      const F = Data.data[0].Nombre;
      Inprimir(Data)
     
    }
    catch (err){
      console.log(err);
    }
  }
  const Inprimir = (Datos) => {
    let lista = document.getElementById('lista');
    lista.innerHTML += `${Datos.data[0].Nombre}`;
  };

  return (
    <div>
        <button onClick={btn}>click me</button>
        <div id='lista'>

        </div>
    </div>
  )
}
