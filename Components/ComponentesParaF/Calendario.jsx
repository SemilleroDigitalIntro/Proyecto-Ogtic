import React, {useEffect} from 'react';
import './Style/Calendario.less';

export let DiaSeleccionado;
export default function Calendario(){


    const ChangeHour = () => {
        DiaSeleccionado = document.getElementById('DatePicker').value
    };


    return(
        <div className='Calendario'> 
            <h1 className="title --fecha"><i class='bx bxs-calendar'></i>Fecha</h1>
            <input onChange={ChangeHour} type="date" className='DatePicker' id='DatePicker' />
        </div>
    )
    
}


// const datepicker = document.querySelector('.datepicker');
// const cancelBtn = document.querySelector('.cancel');
// const dateInput = document.querySelector('.--date-input');

// const dates = document.querySelector('.dates');

// const yearInput = document.querySelector('.year-input');
// const monthInput = document.querySelector('.month-input');



// let selectedDate = new Date();
// let year = selectedDate.getFullYear();
// var month = selectedDate.getMonth();




//     //manejo del boton del siguiente mes
// const NextBtn = () => {
//     if (month === 11) year++;
//     month = (month + 1) % 12;
//     displayDates();
// };


// //manejo del boton del pasado mes
// const PrevBtn = () => {
//     if (month === 0) year--;
//     month = (month - 1 + 12) % 12;
//     displayDates();
// };


// //manejo del cambio de mes
// const MonthInput = () => {
//     month = monthInput.selectedIndex;
//     displayDates();
// };

// //manejo del cambio de año
// const YearInput = () => {
//     year = yearInput.value;
//     displayDates();
// };


// //funcion de aplicar fecha
// const Ok = () => {
//     dateInput.value = selectedDate.toLocaleDateString();
//     ('es -  RD', {
//         year: 'numeric',
//         day: '2-digit',
//         month: '2-digit',
        
//     })
// };





// const updateYearMonth = () => {
//     monthInput.selectedIndex = month;
//     yearInput.value = year;
// };


// const handleHourClick = (e) => {
//     const button = e.target;
//     const selected = dates.querySelector('.selected');
//     selected && selected.classList.remove('selected');
//     button.classList.add('selected');
// }


// //handle apply button click
// const handleDateClick = (e) => {
//     const button = e.target;



//     //remover la clase selected de otras fechas
//     const selected = dates.querySelector('.selected');
//     selected && selected.classList.remove('selected');



//     //agregar la clase selected a la fecha seleccionada
//     button.classList.add('selected');

//     //actualizar la fecha seleccionada
//     selectedDate = new Date(year, month, parseInt(button.textContent));
// };



// //renderizar fechas en el interfaz del calendario
// const displayDates = () => {
//     //actualizar year y mes 
//     updateYearMonth();




//     dates.innerHTML = "";

//     //mostrar la ultima semana del mes anterior ultimo dia del mes anterior
//     const lastOfPrevMonth = new Date(year, month, 0);

//     for(let i = 0; i <= lastOfPrevMonth.getDay(); i++) {
//         const text = lastOfPrevMonth.getDate() - lastOfPrevMonth.getDay() + i;
//         const button = createButton(text, true, false);
//         dates.appendChild(button);
//     }

//     //*mostrar el mes actual

//     const lastOfMonth = new Date(year, month + 1, 0);
    
//     for(let i = 1; i <= lastOfMonth.getDate(); i++) {

//         const isToday = 
//         selectedDate.getDate() === i &&
//         selectedDate.getFullYear() === year && 
//         selectedDate.getMonth() === month;

//         const button = createButton(i, false, false);
//         button.addEventListener('click', handleDateClick);

//         dates.appendChild(button);
//     };


//     //mostrar la primera semana del mes siguiente

//     const firstOfNextMonth = new Date(year, month + 1, 1);
//     for (let i = firstOfNextMonth.getDay(); i < 7; i++){
//         const text = firstOfNextMonth.getDate() -
//         firstOfNextMonth.getDay() + i;


//         const button = createButton(text, true, false);
//         dates.appendChild(button);
//     }

// }

// const createButton = (text, isDisabled = false, isToday) => {
//     const button = document.createElement('button');
//     button.textContent = text;
//     button.disabled = isDisabled;
//     button.classList.toggle('today', isToday);
//     return button;


// };

// displayDates();

//   return (
//     <div className="container__datepicker">


//                     <div className="titulos --fecha">
//                         <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
//                                 <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
//                                 <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg>
//                         </div>
//                         <div>
//                             <h1 className="title --fecha">Fecha</h1>
//                         </div>
//                         <form action="">
//                             <label for="">
//                                 <input type="text" className="input --date-input" placeholder="Fecha seleccionada" readonly />
//                             </label>
//                         </form>
//                     </div>
        
        
        
        
//                     <div class="datepicker-container">
                        
        
        
//                         <header>
//                             <button  className="antes">
//                             {/* onClick={PrevBtn} */}
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
//                                     <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
//                                 </svg>
//                             </button>
        
//                             <div>
//                                 <select  className="month-input">
//                                 {/* onChange={MonthInput} */}
//                                     <option value="">Enero</option>
//                                     <option value="">Febrero</option>
//                                     <option value="">Marzo</option>
//                                     <option value="">Abril</option>
//                                     <option value="">Mayo</option>
//                                     <option value="">Junio</option>
//                                     <option value="">Julio</option>
//                                     <option value="">Agosto</option>
//                                     <option value="">Septiembre</option>
//                                     <option value="">Octubre</option>
//                                     <option value="">Noviembre</option>
//                                     <option value="">Diciembre</option>
//                                 </select>
//                                 <input type="number"  class="year-input" value="2025" />
//                                 {/* onChange={YearInput} */}
//                             </div>
        
//                             <button  className="siguiente">
//                             {/* onClick={NextBtn} */}
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
//                                     <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                 </svg>
//                             </button>
//                         </header>
        
        
        
//                         <div className="datepicker">
//                             <div className="days">
//                                 <span>Dom</span>
//                                 <span>Lun</span>
//                                 <span>Mar</span>
//                                 <span>Mie</span>
//                                 <span>Jue</span>
//                                 <span>Vie</span>
//                                 <span>Sab</span>
//                             </div>
        
        
                            
//                             <div className="dates">
//                             </div>
        
//                             <div className="datepicker-footer">
//                                 <button className="cancel">Cancelar</button>
//                                 <button className="ok">Aceptar</button>
//                                 {/* onAbort={Ok}  */}
//                             </div>
        
//                         </div>
//                     </div>
//                 </div>
//   )
// };
