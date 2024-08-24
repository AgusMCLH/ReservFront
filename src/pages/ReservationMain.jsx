import React, { useEffect, useRef, useState } from "react";
import SliderMain from "../components/Slider/SliderMain";
import './css/Style.css'

function SliderFrom() {
  const prevButton = useRef();
  let [step, setStep] = useState(1);
    const decreaseStep = () => { step>1?setStep(step - 1):null; };
    useEffect(() => {
      console.log(step);
    }, [step]);

  useEffect(() => {

    const prevStep = () => {
      document.getElementsByClassName('slick-prev')[0].click();
    }
    prevButton.current.addEventListener('click', prevStep);

        // Cuando desmoto quito los event Listeners para que no se dupliquen
        return () => {
          prevButton.current.removeEventListener('click', prevStep);
        }
  }, [0]);

  
  return (
    <div className="formContainer">
      <div className="sliderWrapper">
        <SliderMain setStep={setStep}  />
        <p ref={prevButton} onClick={()=>{decreaseStep()}} className="previousStepButton">Atras</p>
      </div>
    </div>
  );
}

export default SliderFrom;