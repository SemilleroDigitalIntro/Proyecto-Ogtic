import React from 'react';
import './Style/ForgetPassword.less';



export default function Forgetpassword() {
  let IDuser;
  let CedulaUser;
  let Check;

  const Validacion_Usuario_No_registrado = async () => {
    const connection = await fetch('http://localhost:4000/api/Users');
    const Data = await connection.json();
    let ErrorInicioSesion;
    let Glogin = document.querySelector('.Glogin');
    const largoArray = Data.data.length;
    for(let x = 0; x < largoArray; x++ ){
      if(Data.data[x].InicioSesion == 1){
        ErrorInicioSesion = true;
      }else{
        continue;
      }
    }



    if(ErrorInicioSesion == true){
      Glogin.remove();
      let dialog = document.createElement('dialog');
      dialog.open = 'true';
      dialog.style.height = '100vh';
      dialog.style.border = 'none';
      let dialogh1 = document.createElement('h1');
      dialogh1.style.color = '#003876';
      let dialogText = document.createTextNode = 'Ya hay una sesión activa. Por favor, ciérrela si desea iniciar sesión con otra cuenta⚠️.';

      let dialogBtn = document.createElement('button');
      dialogBtn.style.height = '1cm';
      dialogBtn.style.width = '3cm';
      dialogBtn.style.border = '1px solid gray';
      dialogBtn.style.borderRadius = '10px';
      dialogBtn.style.fontSize = '16px';
      dialogBtn.style.fontWeight = '600';
      dialogBtn.style.background = '#003876';
      dialogBtn.style.color = 'white';
      dialogBtn.style.cursor = 'pointer';

      dialogBtn.addEventListener('pointerover',()=>{
          dialogBtn.style.opacity = '0.7'
      });
      dialogBtn.addEventListener('pointerleave', ()=>{
          dialogBtn.style.opacity = '1';
      });
      dialogBtn.addEventListener('click',()=>{
          window.location.href = '/Inicio';
      });

      let dialogBtnText = document.createTextNode = 'Ir al Inicio';
      dialogBtn.append(dialogBtnText);
      dialogh1.append(dialogText);
      dialog.append(dialogh1,dialogBtn);
      root.append(dialog);
    }else{

    }
  };
  Validacion_Usuario_No_registrado();

  // const ErrorInicioSesion = () => {
  //   let Glogin = document.querySelector('.Glogin');
  //   Glogin.remove();

  // };




  const Sendform = async () => {
    
    if(Check == undefined){
    const conexion = await fetch('http://localhost:4000/api/Users');
    const Data = await conexion.json();
    const largoArray = Data.data.length;
    for(let x = 0; x < largoArray; x++){
      if(document.getElementById('ID').value == Data.data[x].Cedula){
        Validadacion(
          Data.data[x].Cedula,
          Data.data[x].ID,
          Data.data[x].Gmail,
          Data.data[x].NombreCompleto
        );
      }else{
        
      }
      
    };
    Check = 1;
    }else{
      let Carga;
      document.querySelector('.Form__div3').style.display = 'none';
      document.querySelector('.Form__div1').style.display = 'none';
      document.getElementById('Avisos').innerText = '';

      document.getElementById('Formulario').innerHTML = `
      <div class = 'Form__div4'>
      <span id='Cargando' > verificando<span id='CargandoIn' ></span> </span>
      </div>
      
      `;

      let INt = setInterval(()=>{
       if(Carga == undefined){
        document.getElementById('CargandoIn').innerText = '.';
        Carga = 1;
       }else if(Carga == 1){
        document.getElementById('CargandoIn').innerText = '..';
        Carga = 2;
       }else if( Carga == 2){
        document.getElementById('CargandoIn').innerText = '...';
        Carga = 3;
       }},1000);

      setTimeout(()=>{
        INt = null;
        CambiarPassword()

      },5000)

    }

  };

  const CambiarPassword = () => {
    let Formulario = document.getElementById('Formulario');
    document.getElementById('Avisos').innerText = 'Por favor, ingrese su nueva contraseña.';
    Formulario.innerHTML = `<div class = 'Form__div5'>
    
    <input type="password" name="" id="Password" placeholder='Password' required />
    <input type="password" name="" id="PasswordConfirm" placeholder='confirmar Password' required/>
    <span id='Warnnig'>Las contraseñas no coinciden</span>
    </div>`;

    document.getElementById('Warnnig').style.display = 'none';
    let Form__div5 = document.querySelector('.Form__div5');
    let btn__Send = document.createElement('button');
    btn__Send.innerText = 'Cambiar';
    btn__Send.className ='BtncontinuarF';
    btn__Send.addEventListener('click',()=>{
      if(document.getElementById('Password').value == document.getElementById('PasswordConfirm').value){
        CambiandoContraseña(document.getElementById('Password').value)
        document.getElementById('Warnnig').style.display = 'none';
      }else{
        document.getElementById('Warnnig').style.display = 'flex';
      }
    })
    Form__div5.append(btn__Send);


  };

  const CambiandoContraseña = async (Password) => {
      fetch('http://localhost:4000/api/Password/:ID',{
        method: 'PUT',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify({Password: Password, ID: IDuser })
      }).then((respuesta)=> respuesta.json())
      .then(data => {
        console.log('Usuario agregado',data)
        VolverAllogin()
      }).catch(
        (err)=>{
          console.log('tenemos un error', err)
          Error()
        }
    );
  }
  const Error = () => {
    


  }

  const VolverAllogin = () => {
    if(document.getElementById('Password').value == '' ){
    
      document.getElementById('Avisos').innerText = 'No pudimos cambiar tu contraseña. Por favor, inténtalo de nuevo.';
      document.querySelector('.BtncontinuarF').remove();
      document.getElementById('Password').remove();
      document.getElementById('PasswordConfirm').remove();


      let Form__div5 = document.querySelector('.Form__div5');
      let btn__R = document.createElement('button');
      btn__R.innerText = 'Volver a intentarlo';
      btn__R.className ='BtncontinuarF';
      btn__R.addEventListener('click',()=>{
      window.location.href = '/Forgetpassword';
      })
      Form__div5.append(btn__R);

    }else{
      document.getElementById('Avisos').innerText = 'Su contraseña ha sido cambiada exitosamente.';
      document.querySelector('.BtncontinuarF').remove();
      document.getElementById('Password').remove();
      document.getElementById('PasswordConfirm').remove();


      let Form__div5 = document.querySelector('.Form__div5');
      let btn__R = document.createElement('button');
      btn__R.innerText = 'Volver al login';
      btn__R.className ='BtncontinuarF';
      btn__R.addEventListener('click',()=>{
      window.location.href = '/login';
      })
      Form__div5.append(btn__R);
    }


  }



  const Validadacion = (Cedula,ID,Email,Nombre) => {
    let input = document.getElementById('ID');
    input.value = '';
    input.placeholder = 'Codigo';

    let Link = document.getElementById('Link');
    Link.innerHTML = '';
    let SpanRegreso = document.createElement('a');
    SpanRegreso.innerText = 'Volver al paso anterior';
    SpanRegreso.style.cursor = 'pointer'
    SpanRegreso.addEventListener('click',()=>{
      Check = undefined;
      input.value = '';
      input.placeholder = 'Cedula';
      Avisos.innerText = 'Bienvenido. Continúa con el proceso para recuperar el acceso a tu cuenta.';
      document.getElementById('BtncontinuarF').innerText = 'Continuar';
    })
    Link.append(SpanRegreso);



    document.getElementById('BtncontinuarF').innerText = 'Verificar';
    let Form__div3 = document.getElementById('Form__div3');
    let Formulario = document.getElementById('Formulario');
    let Avisos = document.getElementById('Avisos');

    let Div1 = document.createElement('div');
    Div1.className = 'Form__div2';
    let Div1Span = document.createElement('span');
    Div1Span.innerText = `Hola, ${Nombre}`;
    let Div2Span = document.createElement('span');
    Div2Span.innerHTML = ` se le envio un correo a <span id="Email"> ${Email}</span>`;
    let Div3Span = document.createElement('span');
    Div3Span.innerText = ' con un codigo de verificacion.';

    Avisos.replaceChildren(Div1Span,Div2Span,Div3Span)
    // Div1.append(Div1Span,Div2Span,Div3Span);
    document.getElementById('Email').style.fontWeight = '600';




   
    Formulario.insertBefore(Div1,Form__div3);

    IDuser = ID;
  };

  // const ValidacionPassword = async (confirmacion,ID) => {
  //   const conexion = await fetch('http://localhost:4000/api/Users')
  //   const Data = await conexion.json();
  //   const largoArray = Data.data.length;
  //   for(let x = 0; x < largoArray; x++){
  //     ValidacionP(Data.data[x].Password,ID)
  //   }

  // }

  //

  const Over1 = () => {
    document.getElementById('BtncontinuarF').style.opacity = '0.7';
  };
  const Leave1 = () => {
    document.getElementById('BtncontinuarF').style.opacity = '1';
  };

  

  return (
   <section className='Glogin'>
     <section style={{height: '12cm',width: '10cm'}}className='Login' id='Login'>
        <div  className='Login__div1'>
          <div className='Login__div1_dv1'>
          <img src="nashla/LogoLogin.png" alt="Logo del login" />
          <span id='Avisos' >Bienvenido. Continúa con el proceso para recuperar el acceso a tu cuenta.</span>
        </div>
        <form id='Formulario' onSubmit={(event)=>{event.preventDefault()}}  >
            <div className='Form__div1'>
              
              <input type="text" name="" id="ID" placeholder='Cedula' required />

            </div>
            
            <div className='Form__div3'>
              
              <button onClick={Sendform} onPointerOver={Over1} onPointerLeave={Leave1} style={{cursor: 'pointer'}} id='BtncontinuarF'>Continuar</button>
              <span id='Link'><a href="/login" >Volver al Login</a></span>
            </div>
        </form>
      </div>
    </section>
   </section>
  )
}
