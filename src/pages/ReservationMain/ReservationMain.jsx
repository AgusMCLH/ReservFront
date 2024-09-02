import React, { useEffect, useRef, useState } from "react";
import SliderMain from "./../../components/Slider/SliderMain";

import './css/Style.css'

function SliderFrom({data}) {
  const prevButton = useRef();
  let [step, setStep] = useState(1);
  let [viewHours, setViewHours] = React.useState(false);
  let [formInfo, setFormInfo] = React.useState({
    motive: undefined,
    comensales: undefined,
    local: undefined,
    date: undefined,
    hour: undefined,
    name: undefined,
    phone: undefined,
    email: undefined,
});
  

  const decreaseStep = () => { step>1?setStep(step - 1):null; };
  useEffect(() => {
    const progressionBar = document.getElementById('progressBar__progression')
    const finalStep = 3;
    const stepPorcentage = 100/finalStep*(step-1);
    progressionBar.style.width=`${stepPorcentage}%`
  }, [step]);
  
  useEffect(() => {
    const prevStep = () => {
      let dateSelectors = document.getElementsByClassName('selectionable');   
      if (step===2) {
        console.log('clase Borrada');
        for(let i = 0; i<dateSelectors.length; i++){
          if (dateSelectors[i].classList.contains('selected')) {
              dateSelectors[i].classList.remove('selected');
          }
        }
        
      }     
      step===2?setFormInfo({...formInfo, date: undefined}):null;
      step===2?setViewHours(false):null;
      step===3?setViewHours(true):null;
  
      document.getElementsByClassName('slick-prev')[0].click();
    }
    prevButton.current.addEventListener('click', prevStep);

    // Cuando desmoto quito los event Listeners para que no se dupliquen
    return () => {
      prevButton.current.removeEventListener('click', prevStep);
    }
  }, [formInfo,step]);

 

 
  return (
    <div className="formContainer">
      <div className="progressBar">
        <div className="progressBar__progression" id="progressBar__progression"></div>
      </div>
      <div className="sliderWrapper">
        <SliderMain step={step} formInfo={formInfo} viewHours={viewHours} setViewHours={setViewHours} setFormInfo={setFormInfo} data={data} setStep={setStep}  />
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