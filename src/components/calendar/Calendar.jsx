import { useEffect, useState } from 'react';
import './css/Style.css'
let dateSelected = undefined;

function Calendar({data, formInfo, setFormInfo, setViewHours}) {
    let [_monthNumber, setMonthNumber] = useState(new Date().getMonth());
    let [_setDate, setDate] = useState('');
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
    let actualMonth = new Date().getMonth();
    let actualYear = new Date().getFullYear();
    const limit = 3;
    const days = ['Dom', 'Lun','Mar','Mie','Jue','Vie','Sab'];
    let ClosedDays = [];
    const getClosedDays = () => { //Obtener los dias que el local esta cerrado
        ClosedDays = [];
        for(let i = 0; i<data.locals.length; i++){
            if(data.locals[i]._id === formInfo.local){
                if(data.locals[i].schedule.Lun.length === 0){
                    ClosedDays.push('Lun');
                }
                if(data.locals[i].schedule.Mar.length === 0){
                    ClosedDays.push('Mar');
                }
                if(data.locals[i].schedule.Mie.length === 0){
                    ClosedDays.push('Mie');
                }
                if(data.locals[i].schedule.Jue.length === 0){
                    ClosedDays.push('Jue');
                }
                if(data.locals[i].schedule.Vie.length === 0){
                    ClosedDays.push('Vie');
                }
                if(data.locals[i].schedule.Sab.length === 0){
                    ClosedDays.push('Sab');
                }
                if(data.locals[i].schedule.Dom.length === 0){
                    ClosedDays.push('Dom');
                }
                return ;
            }
        }
        return ;
    }
    
    const getDay = (day) => { //Obtener el dia de la semana de una fecha pasada por parametro
        const dayName =  days[(new Date(currentYear, monthNumber, day).getDay())];
        return dayName;
    }

    const writeMonth = (month) => {//Escribe los dias del mes en el calendario 
        if (actualMonth === monthNumber && actualYear === currentYear) { //Si el mes es el actual
            document.getElementById('prev-month').classList.add('not-allowed'); //Desactivar el boton de mes anterior
        }else{
            document.getElementById('prev-month').classList.remove('not-allowed');
        }
        if (monthNumber - actualMonth >= limit-1 && actualYear === currentYear) { //Si la diferencia de meses es mayor a 3 y el año es el mismo
            document.getElementById('next-month').classList.add('not-allowed'); 
        }else{
            document.getElementById('next-month').classList.remove('not-allowed');
        }

        dates.innerHTML = '';
        
        for(let i = startDay(); i>0;i--){ //Escribe los dias del mes anterior al actual
            dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
                 ${getTotalDays(monthNumber-1)-(i-1)}
            </div>`;
        }

        for(let i=1; i<=getTotalDays(month); i++){ //Escribe los dias del mes actual
            if(i===currentDay&&month === actualMonth&&currentYear === actualYear){
                if(ClosedDays.includes(getDay(i))){
                    dates.innerHTML += ` <div class="calendar__date calendar__today calendar__item calendar__disabled">${i}</div>`;
                }else{
                    dates.innerHTML += ` <div class="calendar__date calendar__today calendar__item selectionable">${i}</div>`;
                }
            }else if(i<currentDay&&month === actualMonth&&currentYear === actualYear){
                dates.innerHTML += ` <div class="calendar__date calendar__item calendar__disabled">${i}</div>`;
            }else{
                if(ClosedDays.includes(getDay(i))){
                    dates.innerHTML += ` <div class="calendar__date calendar__item calendar__disabled">${i}</div>`;
                }else{
                    dates.innerHTML += ` <div class="calendar__date calendar__item selectionable">${i}</div>`;
                }
            }
        }
    }

    const getTotalDays = month => { // Obtiene la cantidad de dias de un mes
        if(month === -1) month = 11;

        if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
            return  31;

        } else if (month == 3 || month == 5 || month == 8 || month == 10) {
            return 30;

        } else {

            return isLeap() ? 29:28;
        }
    }

    const isLeap = () => {//Verifica si el año es bisiesto
        return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
    }

    const startDay = () => { //Obtiene el dia de la semana en el que empieza el mes
        let start = new Date(currentYear, monthNumber, 1);
        return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
    }

    const lastMonth = () => { //Call to Action para el boton de mes anterior
        if (actualMonth === monthNumber && actualYear === currentYear) return;
        if(monthNumber !== 0){
            monthNumber--;
            setMonthNumber(monthNumber);
        }else{
            monthNumber = 11;
            currentYear--;
        }

        setNewDate();
    }

    const nextMonth = () => {//Call to Action para el boton de mes siguiente
        if (currentYear > actualYear) return;
        if (monthNumber - actualMonth >= limit-1 && actualYear === currentYear) return;
        if(monthNumber !== 11){
            monthNumber++;
            setMonthNumber(monthNumber);
        }else{
            monthNumber = 0;
            currentYear++;
        }

        setNewDate();
    }

    const setNewDate = () => {//Setea la nueva fecha en el calendario
        currentDate.setFullYear(currentYear,monthNumber,currentDay);
        month.textContent = monthNames[monthNumber];
        year.textContent = currentYear.toString();
        dates.textContent = '';
        writeMonth(monthNumber);
    }
    
    // useEffect(() => {
    //     console.log('formDate', formInfo);
    // }, [formInfo.date]);
        

    let selectHandeler = (e) => {
        if(e.target.classList.contains('selectionable')){
            if(dateSelected){
                dateSelected.classList.remove('selected');
            }
            let forminfo = {...formInfo};
            forminfo.date = `${e.target.textContent<10?'0':''}${e.target.textContent}/${_monthNumber<9?'0':''}${_monthNumber+1}/${currentYear}`;
            setFormInfo({...forminfo});
            setViewHours(true);
            
            dateSelected = e.target;
            e.target.classList.add('selected');
        }
    }
    
    useEffect(() => {
        let dateSelectors = document.getElementsByClassName('selectionable');        
        for(let i = 0; i<dateSelectors.length; i++){
            dateSelectors[i].addEventListener('click', selectHandeler);
        }
        return () => {            
            for(let i = 0; i<dateSelectors.length; i++){
                dateSelectors[i].removeEventListener('click', selectHandeler);
            }
        }
    }, [_monthNumber, formInfo.local]);
    
    useEffect(() => {
        dates = document.getElementById('dates');
        month = document.getElementById('month');
        year = document.getElementById('year');
        getClosedDays();
        prevMonthDOM = document.getElementById('prev-month');
        nextMonthDOM = document.getElementById('next-month');
        writeMonth(monthNumber);
        prevMonthDOM.addEventListener('click', lastMonth);
        nextMonthDOM.addEventListener('click', nextMonth);
        month.textContent = monthNames[monthNumber];
        year.textContent = currentYear.toString();
        let dateSelectors = document.getElementsByClassName('selectionable');
        for(let i = 0; i<dateSelectors.length; i++){
            dateSelectors[i].addEventListener('click', selectHandeler);
        }
        return () => {
            for(let i = 0; i<dateSelectors.length; i++){
                dateSelectors[i].removeEventListener('click', selectHandeler);
            }
            prevMonthDOM.removeEventListener('click', lastMonth);
            nextMonthDOM.removeEventListener('click', nextMonth);
        }
    }
    ,[formInfo.local]);
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