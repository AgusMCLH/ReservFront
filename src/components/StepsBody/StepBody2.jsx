import React, {useRef} from "react";
import Calendar from "../calendar/Calendar";
import HourList from "../calendar/hourList/HourList";


function StepBody2({setStep, data, formInfo, setFormInfo, viewHours, setViewHours}) {
    let button = useRef();
    const nextStepHandler = () => {
      button.current.classList.contains('disabled') ? null : setStep(3);
    }
   
    return (
      <div className="Form-step-container">
        <div className="stepBody">
          <div className="BodyWrapper">
            <div className="BodyHeader">
            </div>
            <div className="ilustrationContainer">
                <img className="ilustration" src="/img/reservNaranja.png" alt="Form ilustration"/>
            </div>
            <div className="ReservationDatePicker">
              <Calendar setViewHours={setViewHours} data={data} formInfo={formInfo} setFormInfo={setFormInfo}/>
              <HourList data={data} setViewHours={setViewHours} viewHours={viewHours} formInfo={formInfo} setFormInfo={setFormInfo}/>
            </div>
          </div>
        </div>
        <p className="nextStepButton" ref={button} onClick={ ()=>{nextStepHandler()}}>Siguiente</p>
      </div>
    );
  }

  export default StepBody2;