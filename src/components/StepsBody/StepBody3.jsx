import React, {useRef} from "react";


function StepBody3({setStep}) {
    let button = useRef();

    const nextStepHandler = () => {
      button.current.classList.contains('disabled') ? null : setStep(4);
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

  export default StepBody3;