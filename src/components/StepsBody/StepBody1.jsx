import React, { useRef } from "react";
import LocalsList from "../LocalsList/LocalsList";


function StepBody1({setStep, data, formInfo, setFormInfo}) {
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
                <img className="ilustration" src="/img/reservNaranja.png" alt="Fork ilustration"/>
            </div>
            <div>
              <LocalsList locals={data.locals} setFormInfo={setFormInfo}/>
            </div>
          </div>
        </div>
        <p className="nextStepButton" ref={button} onClick={ ()=>{nextStepHandler()}}>Siguiente</p>
      </div>
    );
  }

  export default StepBody1;