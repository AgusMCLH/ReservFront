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
        <div ref={prevButton} onClick={()=>{decreaseStep()}} className="previousStepButton"></div>
        <div className="ShopLogo"></div>
        <div className="footer">
          <div><p><span className="linkalike">Reserv</span> is powered by <span className="linkalike">Orbit</span></p></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default SliderFrom;