import React, {useEffect, useRef} from "react";


function StepBody3({setStep, formInfo, setFormInfo}) {
    let button = useRef();
    let [validationState, setValidationState] = React.useState({
      name: false,
      email: false,
      phone: false,
      comensales: false,
    });

    const nextStepHandler = () => {
      button.current.classList.contains('disabled') ? null : setStep(4);
    }
    const changeHandeler = (e) => {
      let valor = e.target.value;
      let onlyNumbers = new RegExp('/^\d+$/');
      console.log(e.target.attributes.field.value);
      
      switch (e.target.attributes.field.value) {
          case 'name':
            setValidationState({...validationState, name: false});
            if (valor.trim().length<3 ) {
              setFormInfo({...formInfo, name: undefined});
              return
            }
            setValidationState({...validationState, name: true});
            setFormInfo({...formInfo, name: document.getElementById(e.target.attributes.id.value).value});
          break;

          case 'email':
            setValidationState({...validationState, email: false});
            if (valor.trim().length<5 ) { //El valor minimo de un mail seria 'a@a.a' por lo que el minimo largo aceptable es 5
              setFormInfo({...formInfo, name: undefined});
              return
            }
            if (!valor.includes('@') || !valor.includes('.')) { //Si no tiene '@' o '.' no es un mail
              setFormInfo({...formInfo, email: undefined});
              return
            }
            let mail = valor.split('@');
            let extension = mail[1].split('.');
            mail = mail[0];
            console.log('mail ',extension);
            let regex = new RegExp('^[a-zA-Z0-9]+$'); //Genero una expresion regular para validar que el extension solo tenga letras y numeros
            if (!regex.test(extension[0].trim()) || !regex.test(extension[1].trim()) || !regex.test(mail.trim())) {//Si las tres secciones tienen caracteres extraños no es un mail
              setFormInfo({...formInfo, email: undefined});
              return
            }
            setValidationState({...validationState, email: true});
            setFormInfo({...formInfo, email: document.getElementById(e.target.attributes.id.value).value});
          break;

          case 'phone':
            setValidationState({...validationState, phone: false});
            if (valor.length<9 ) {
              setFormInfo({...formInfo, phone: undefined});
              return
            }
            valor.length>9?document.getElementById(e.target.attributes.id.value).value = valor.slice(0,9):null;
            setValidationState({...validationState, phone: true});
            setFormInfo({...formInfo, phone: document.getElementById(e.target.attributes.id.value).value});
          break;

          case 'comensales':
            console.log('Esto es comensales');
          break;

          case 'motive':
            console.log('Esto es motive');
          break;
      
        default:
          return

      }
    }
    useEffect(() => {
      console.log('Validation State:', validationState);
    }, [validationState])
      
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
                <input className="floating-input" type="text" id="nameInput" placeholder=" " field='name' required={true} onChange={changeHandeler}/>
                <span className="highlight"></span>
                <label>Nombre</label>
              </div>

              <div className="floating-label">      
                <input className="floating-input" type="email" id="emailInput" placeholder=" " field='email' required={true} onChange={changeHandeler}/>
                <span className="highlight"></span>
                <label>Email</label>
              </div>

              <div className="floating-label">      
                <input className="floating-input" type="Number" id="phoneInput" maxLength='10' placeholder=" " field='phone' required={true} onChange={changeHandeler}/>
                <span className="highlight"></span>
                <label>Telefono</label>
              </div>
              <div className="floating-label">      
                <input className="floating-input" type="Number" id="comensalesInput" placeholder=" " field='comensales' required={true} onChange={changeHandeler}/>
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