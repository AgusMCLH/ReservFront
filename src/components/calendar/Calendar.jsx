import { useEffect } from 'react';
import './css/Style.css'

function Calendar() {
    let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let monthNumber = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let dates = undefined;
    let month = undefined;
    let year = undefined;
    let prevMonthDOM = undefined;
    let nextMonthDOM = undefined;

    const writeMonth = (month) => {
        dates.innerHTML = '';
        let actualMonth = new Date().getMonth();
        let actualYear = new Date().getFullYear();
        
        for(let i = startDay(); i>0;i--){
            dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
                 ${getTotalDays(monthNumber-1)-(i-1)}
            </div>`;
        }

        for(let i=1; i<=getTotalDays(month); i++){
            if(i===currentDay&&month === actualMonth&&currentYear === actualYear){
                dates.innerHTML += ` <div class="calendar__date calendar__item calendar__today">${i}</div>`;
            }else{
                dates.innerHTML += ` <div class="calendar__date calendar__item">${i}</div>`;
            }
        }
    }

    const getTotalDays = month => {
        if(month === -1) month = 11;

        if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
            return  31;

        } else if (month == 3 || month == 5 || month == 8 || month == 10) {
            return 30;

        } else {

            return isLeap() ? 29:28;
        }
    }

    const isLeap = () => {
        return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
    }

    const startDay = () => {
        let start = new Date(currentYear, monthNumber, 1);
        return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
    }

    const lastMonth = () => {
        if(monthNumber !== 0){
            monthNumber--;
        }else{
            monthNumber = 11;
            currentYear--;
        }

        setNewDate();
    }

    const nextMonth = () => {
        if(monthNumber !== 11){
            monthNumber++;
        }else{
            monthNumber = 0;
            currentYear++;
        }

        setNewDate();
    }

    const setNewDate = () => {
        currentDate.setFullYear(currentYear,monthNumber,currentDay);
        month.textContent = monthNames[monthNumber];
        year.textContent = currentYear.toString();
        dates.textContent = '';
        writeMonth(monthNumber);
    }

    useEffect(() => {
        dates = document.getElementById('dates');
        month = document.getElementById('month');
        year = document.getElementById('year');
        
        prevMonthDOM = document.getElementById('prev-month');
        nextMonthDOM = document.getElementById('next-month');
        writeMonth(monthNumber);
        prevMonthDOM.addEventListener('click', lastMonth);
        nextMonthDOM.addEventListener('click', nextMonth);
        month.textContent = monthNames[monthNumber];
        year.textContent = currentYear.toString();
        return () => {
            prevMonthDOM.removeEventListener('click', lastMonth);
            nextMonthDOM.removeEventListener('click', nextMonth);
        }
    }
    ,[]);
    return (
        <div className="calendar">
            <div className="calendar__info">
                <div className="calendar__prev" id="prev-month"><img src="/img/icons/arrow-left.svg" alt="Prev Icon" /></div>
                <div className="calendar__month" id="month"></div>
                <div className="calendar__year" id="year"></div>
                <div className="calendar__next" id="next-month"><img src="/img/icons/arrow-left.svg" alt="Prev Icon" /></div>
            </div>

            <div className="calendar__week">
                <div className="calendar__day calendar__item">Lun</div>
                <div className="calendar__day calendar__item">Mar</div>
                <div className="calendar__day calendar__item">Mie</div>
                <div className="calendar__day calendar__item">Jue</div>
                <div className="calendar__day calendar__item">Vie</div>
                <div className="calendar__day calendar__item">Sab</div>
                <div className="calendar__day calendar__item">Dom</div>
            </div>

            <div className="calendar__dates" id="dates"></div>
        </div>
    )
}


export default Calendar;