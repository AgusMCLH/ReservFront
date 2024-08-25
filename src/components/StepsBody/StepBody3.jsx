import React, {useRef} from "react";


function StepBody3({setStep}) {
    let button = useRef();

    const nextStepHandler = () => {
      button.current.classList.contains('disabled') ? null : setStep(4);
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
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
        </div>
        <p className="nextStepButton" ref={button} onClick={ ()=>{nextStepHandler()}}>Siguiente</p>
      </div>
    );
  }

  export default StepBody3;