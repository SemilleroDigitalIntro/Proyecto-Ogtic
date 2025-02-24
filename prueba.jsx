import React from 'react';





export default function Prueba() {
  
  const btn = (event) => {
    event.preventDefault()

    let btn = document.getElementById('button');

    btn.value = 'Sending...';
 
    const serviceID = 'default_service';
    const templateID = 'template_9m5c6k3';

    setTimeout(() => {
      console.log('funciona')
    }, 5000);
 
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
       btn.value = 'Send Email';
       alert('Sent!');
     }, (err) => {
       btn.value = 'Send Email';
       alert(JSON.stringify(err));
     });
  }

  return (
    <div>
       <form action="https://formsubmit.co/Urpiriojunior2@gmail.com" method="POST">
  <div class="field">
    <label for="First_name">First_name</label>
    <input type="text" name="First_name" id="First_name"/>
  </div>
  <div class="field">
    <label for="Last_name">Last_name</label>
    <input type="text" name="Last_name" id="Last_name"/>
  </div>
  <div class="field">
    <label for="Email_address">Email_address</label>
    <input type="text" name="Email_address" id="Email_address"/>
  </div>
  <div class="field">
    <label for="message">message</label>
    <input type="text" name="message" id="message"/>
  </div>
  <div class="field">
    <label for="Phone_number">Phone_number</label>
    <input type="text" name="Phone_number" id="Phone_number"/>
  </div>
  <div class="field">
    <label for="reply_to">reply_to</label>
    <input type="text" name="reply_to" id="reply_to"/>
  </div>

  <input type="submit" id="button" value="Send Email"/>
</form>
    </div>
  )
}
