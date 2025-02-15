const datepicker = document.querySelector('.datepicker');
const cancelBtn = document.querySelector('.cancel');
const okBtn = document.querySelector('.ok');
const dates = document.querySelector('.dates');


let selectedDate = new Date();
let year = selectedDate.getFullYear();
let month = selectedDate.getMonth();



//renderizar fechas en el interfaz del calendario
const displayDates = () => {

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

        
        const button = createButton(i, false, false);
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