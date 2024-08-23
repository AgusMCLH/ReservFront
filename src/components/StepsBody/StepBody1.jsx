import React from "react";


function StepBody1({setStep}) {
   
    return (
      <div className="Form-step-container">
        <div className="stepBody">
          <h1>1</h1>
        </div>
        <p className="nextStepButton" onClick={ ()=>{setStep(2)}}>Siguiente</p>
      </div>
    );
  }

  export default StepBody1;