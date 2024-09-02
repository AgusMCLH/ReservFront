import { useEffect, useRef } from "react";
import HourCard from "./HourCard/HourCard";
import './css/style.css';
let hourSelected = undefined;
const HourList = ({ hoursUnavailable, setViewHours, viewHours, formInfo, setFormInfo}) => {
    
    useEffect(() => {
        if (viewHours) {
            function getHeight(element){
                return element.offsetHeight;
            }
            let hourList = document.getElementById("hour-list");
            let hourListContainer = document.getElementById("hour-card__container");
            hourListContainer.style.height = getHeight(hourList) + "px";
        }else{
            let hourListContainer = document.getElementById("hour-card__container");
            hourListContainer.style.height = "0px";
        }
    }, [formInfo.date]);

    useEffect(() => {
        console.log('formHour', formInfo);
    }, [formInfo.hour]);
        
    useEffect(() => {
        let selectHandeler = (e) => {
            if(hourSelected){
                hourSelected.classList.remove('selected');
            }
      
            hourSelected = e.target.parentNode;
            let forminfo = {...formInfo};
            forminfo.hour = `${hourSelected.innerText}`
            
            setFormInfo({...forminfo});       
    
            hourSelected.classList.add('selected');
        }
        let hourSelectors = document.getElementsByClassName('hour-list__Card__Toggler');        
        for(let i = 0; i<hourSelectors.length; i++){
            hourSelectors[i].addEventListener('click', selectHandeler);
        }
        return () => {            
            for(let i = 0; i<hourSelectors.length; i++){
                hourSelectors[i].removeEventListener('click', selectHandeler);
            }
        }
    }, [formInfo, hourSelected]);
        
    const hours = [

        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "00:00",
        "01:00",
        "02:00",
    ];
    return (
        <div className="hour-list__container" id="hour-card__container">
            <div className="hour-list" id="hour-list">
            {hours.map((hour, index) => (
                <HourCard key={index} hour={hour} />
            ))}
            </div>
        </div>
        
    );
}

export default HourList;