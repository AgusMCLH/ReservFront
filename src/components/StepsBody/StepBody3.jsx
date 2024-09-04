import React, {useRef} from "react";


function StepBody3({setStep, formInfo, setFormInfo}) {
    let button = useRef();

    const nextStepHandler = () => {
      button.current.classList.contains('disabled') ? null : setStep(4);
    }
    const changeHandeler = (e) => {
      let valor = e.target.value;
      let onlyNumbers = new RegExp('/^\d+$/');
      console.log(e.target.attributes.field.value);
      
      switch (e.target.attributes.field.value) {
          case 'name':
            console.log('Esto es name');
          break;

          case 'email':
            console.log('Esto es email');
          break;

          case 'phone':
            if (valor.length>9) {
              console.log('No es un numero de telefono valido');
              document.getElementById(e.target.attributes.id.value).value = valor.slice(0,9);
              return
            }
            if (valor.length<9) {
              console.log('No es un numero de telefono valido');
              setFormInfo({...formInfo, phone: undefined});
              return
            }
            setFormInfo({...formInfo, phone: document.getElementById(e.target.attributes.id.value).value});
            console.log('Esto es phone');
          break;

          case 'comensales':
            console.log('Esto es comensales');
          break;

          case 'motive':
            console.log('Esto es motive');
          break;
      
        default:
          return
        break;
      }
      
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
                <input className="floating-input" type="text" placeholder=" " field='name' required={true} onChange={changeHandeler}/>
                <span className="highlight"></span>
                <label>Nombre</label>
              </div>

              <div className="floating-label">      
                <input className="floating-input" type="text"  placeholder=" " field='email' required={true} onChange={changeHandeler}/>
                <span className="highlight"></span>
                <label>Email</label>
              </div>

              <div className="floating-label">      
                <input className="floating-input" type="Number" id="phoneInput" maxLength='10' placeholder=" " field='phone' required={true} onChange={changeHandeler}/>
                <span className="highlight"></span>
                <label>Telefono</label>
              </div>
              <div className="floating-label">      
                <input className="floating-input" type="Number" placeholder=" " field='comensales' required={true} onChange={changeHandeler}/>
                <span className="highlight"></span>
                <label>Comensales</label>
              </div>

              <div className="floating-label">      
                <textarea className="floating-input floating-textarea" field='motive' placeholder=" " onChange={changeHandeler}></textarea>
                <span className="highlight"></span>
                <label>Tienes Algun Motivo Especial?</label>
              </div>
              <div className="AditionalInfo"><p>Requerido</p></div>
            </div>
            </div>
          </div>
        </div>
        <p className="nextStepButton" ref={button} onClick={ ()=>{nextStepHandler()}}>Siguiente</p>
      </div>
    );
  }

  export default StepBody3;