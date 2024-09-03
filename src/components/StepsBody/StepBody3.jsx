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
            <div className="ilustrationContainer">
                <img className="ilustration" src="/img/reservNaranja.png" alt="Form ilustration"/>
            </div>
            <div className="formDetails">
            <div className="floating-form">
              <div className="floating-label">      
                <input className="floating-input" type="text" placeholder=" " required={true}/>
                <span className="highlight"></span>
                <label>Nombre</label>
              </div>

              <div className="floating-label">      
                <input className="floating-input" type="text"  placeholder=" " required={true}/>
                <span className="highlight"></span>
                <label>Email</label>
              </div>

              <div className="floating-label">      
                <input className="floating-input" type="Number"  placeholder=" " required={true}/>
                <span className="highlight"></span>
                <label>Telefono</label>
              </div>
              <div className="floating-label">      
                <input className="floating-input" type="text" placeholder=" " required={true}/>
                <span className="highlight"></span>
                <label>Comensales</label>
              </div>

              <div className="floating-label">      
                <textarea className="floating-input floating-textarea" placeholder=" "></textarea>
                <span className="highlight"></span>
                <label>Tienes Algun Motivo Especial?</label>
              </div>
              <div className="AditionalInfo"><p>Required</p></div>
            </div>
            </div>
          </div>
        </div>
        <p className="nextStepButton" ref={button} onClick={ ()=>{nextStepHandler()}}>Siguiente</p>
      </div>
    );
  }

  export default StepBody3;