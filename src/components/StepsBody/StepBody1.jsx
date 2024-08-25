import React, { useRef } from "react";


function StepBody1({setStep}) {
    let button = useRef();

    const nextStepHandler = () => {
      button.current.classList.contains('disabled') ? null : setStep(2);
    }
   
    return (
      <div className="Form-step-container">
        <div className="stepBody">
          <div className="BodyWrapper">
            <div className="BodyHeader">
            </div>
            <div className="ilustrationContainer">
                <img className="ilustration" src="/img/forks.svg" alt="Fork ilustration"/>
            </div>
            <div className="Form">
              <div className="inputWrapper">
                <img className='inputIcon' src="/img/map.svg" alt="Location Selected Icon" />
                <select name="restaurantSelection" id="restaurantSelection">
                  <option value="01">Local 1</option>
                  <option value="02">Local 2</option>
                  <option value="03">Local 3</option>
                </select>
              </div>
              <div className="inputWrapper">
                <img className='inputIcon' src="/img/date.svg" alt="Date Selected Icon" />
                <input type="text" id="dateSelection"/>
              </div>
              <div className="inputWrapper">
                <img className='inputIcon' src="/img/people.svg" alt="People Number Selected Icon" />
                <input type="text" id="clientNumber"/>
              </div>
            </div>
          </div>
        </div>
        <p className="nextStepButton" ref={button} onClick={ ()=>{nextStepHandler()}}>Siguiente</p>
      </div>
    );
  }

  export default StepBody1;