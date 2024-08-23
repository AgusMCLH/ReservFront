import React, {useEffect} from "react";
import Slider from "react-slick";
import StepBody1 from "../StepsBody/StepBody1";


function SliderMain({step, setStep}) {
    let settings = {
      dots: false,
      infinite: false,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      swipe: false,
    };
    useEffect(() => {
      const nextStep = (e) => {
        if (e.target.classList.contains('disabled')) {
          return;
        }
        document.getElementsByClassName('slick-next')[0].click();
      };
        // Agrego los event Listeners
        let nextButtons = document.getElementsByClassName('nextStepButton');
        for (let i = 0; i < nextButtons.length; i++) {
          nextButtons[i].addEventListener('click', nextStep);
  
        }
  
          // Cuando desmoto quito los event Listeners para que no se dupliquen
          return () => {
            let nextButtons = document.getElementsByClassName('nextStepButton');
            for (let i = 0; i < nextButtons.length; i++) {
              nextButtons[i].removeEventListener('click', nextStep);
            }
          }
    }, []);
    
      

    
    return (
          <Slider {...settings} style={{width:'100vw'}}>
            <StepBody1 setStep={setStep}/>
            <div className="Form-step-container">
              <div className="stepBody">
                <h1>2</h1>
              </div>
              <p className="nextStepButton disabled">Siguiente</p>
            </div>
            <div className="Form-step-container">
              <div className="stepBody">
                <h1>3</h1>
              </div>
              <p className="nextStepButton">Siguiente</p>
            </div>
          </Slider>
    );
  }

  export default SliderMain;