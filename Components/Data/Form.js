const datepicker = document.querySelector('.datepicker');
const cancelBtn = document.querySelector('.cancel');
const dateInput = document.querySelector('.--date-input');
const okBtn = document.querySelector('.ok');
const dates = document.querySelector('.dates');
const nextBtn = document.querySelector('.siguiente');
const prevBtn = document.querySelector('.antes');
const yearInput = document.querySelector('.year-input');
const monthInput = document.querySelector('.month-input');


let selectedDate = new Date();
let year = selectedDate.getFullYear();
let month = selectedDate.getMonth();




    //manejo del boton del siguiente mes
nextBtn.addEventListener("click", () => {
    if (month === 11) year++;
    month = (month + 1) % 12;
    displayDates();
});


//manejo del boton del pasado mes
prevBtn.addEventListener("click", () => {
    if (month === 0) year--;
    month = (month - 1 + 12) % 12;
    displayDates();
});


//manejo del cambio de mes
monthInput.addEventListener('change', () => {
    month = monthInput.selectedIndex;
    displayDates();
});

//manejo del cambio de año
yearInput.addEventListener('change', () => {
    year = yearInput.value;
    displayDates();
});


//funcion de aplicar fecha
okBtn.addEventListener('click', () => {
    dateInput.value = selectedDate.toLocaleDateString();
    ('es -  RD', {
        year: 'numeric',
        day: '2-digit',
        month: '2-digit',
        
    })
});





const updateYearMonth = () => {
    monthInput.selectedIndex = month;
    yearInput.value = year;
}


//handle apply button click
const handleDateClick = (e) => {
    const button = e.target;



    //remover la clase selected de otras fechas
    const selected = dates.querySelector('.selected');
    selected && selected.classList.remove('selected');



    //agregar la clase selected a la fecha seleccionada
    button.classList.add('selected');

    //actualizar la fecha seleccionada
    selectedDate = new Date(year, month, parseInt(button.textContent));
};



//renderizar fechas en el interfaz del calendario
const displayDates = () => {
    //actualizar year y mes 
    updateYearMonth();




    dates.innerHTML = "";

    //mostrar la ultima semana del mes anterior ultimo dia del mes anterior
    const lastOfPrevMonth = new Date(year, month, 0);

    for(let i = 0; i <= lastOfPrevMonth.getDay(); i++) {
        const text = lastOfPrevMonth.getDate() - lastOfPrevMonth.getDay() + i;
        const button = createButton(text, true, false);
        dates.appendChild(button);
    }

    //*mostrar el mes actual

    const lastOfMonth = new Date(year, month + 1, 0);
    
    for(let i = 1; i <= lastOfMonth.getDate(); i++) {

        const isToday = 
        selectedDate.getDate() === i &&
        selectedDate.getFullYear() === year && 
        selectedDate.getMonth() === month;

        const button = createButton(i, false, false);
        button.addEventListener('click', handleDateClick);

        dates.appendChild(button);
    };


    //mostrar la primera semana del mes siguiente

    const firstOfNextMonth = new Date(year, month + 1, 1);
    for (let i = firstOfNextMonth.getDay(); i < 7; i++){
        const text = firstOfNextMonth.getDate() -
        firstOfNextMonth.getDay() + i;


        const button = createButton(text, true, false);
        dates.appendChild(button);
    }

}

const createButton = (text, isDisabled = false, isToday) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.disabled = isDisabled;
    button.classList.toggle('today', isToday);
    return button;


};

displayDates();