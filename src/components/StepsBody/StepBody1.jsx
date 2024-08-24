import React, { useRef } from "react";


function StepBody1({setStep}) {
    let button = useRef();

    const nextStepHandler = () => {
      button.current.classList.contains('disabled') ? null : setStep(2);
    }
   
    return (
      <div className="Form-step-container">
        <div className="stepBody">
          <h1>1</h1>
        </div>
        <p className="nextStepButton" ref={button} onClick={ ()=>{nextStepHandler()}}>Siguiente</p>
      </div>
    );
  }

  export default StepBody1;