import React, {useEffect} from "react";
import Slider from "react-slick";
import StepBody1 from "../StepsBody/StepBody1";
import StepBody2 from "../StepsBody/StepBody2";
import StepBody3 from "../StepsBody/StepBody3";


function SliderMain({ setStep, data}) {
    let [formInfo, setFormInfo] = React.useState({});
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
      console.log(data);
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
            <StepBody1 setStep={setStep} formInfo={formInfo} setFormInfo={setFormInfo} data={data}/>
            <StepBody2 setStep={setStep}/>
            <StepBody3 setStep={setStep}/>
          </Slider>
    );
  }

  export default SliderMain;