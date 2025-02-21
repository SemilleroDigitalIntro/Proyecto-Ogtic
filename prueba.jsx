import React from 'react'




export default function Prueba() {
  
  const btn = async () => {
    const Prueba = document.getElementById('Prueba').value;
    fetch('http://localhost:4000/api/Users',{
      method: 'POST',
      headers: {'content-Type':'application/json'},
      body: JSON.stringify({NombreCompleto: Prueba, Gmail: 'Nashla@gmail.com'})
    }).then((respuesta)=> respuesta.json())
    .then(data => {
      console.log('Usuario agregado',data)
    }).catch(
      (err)=>{
        console.log('tenemos un error', err)
      }
    );
      
    
  }

  return (
    <div>
        <button onClick={btn} >click me</button>
        <input type="text" id='Prueba'/>
    </div>
  )
}
