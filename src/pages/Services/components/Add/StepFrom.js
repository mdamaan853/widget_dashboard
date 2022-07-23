import React, { useState } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { Steps, StepsProvider, useSteps } from "react-step-builder"
import "./services.scss"

import Step1 from "./step1"
import StepPreview from "./stepPreview"
import { isBoolean } from "lodash"

const MySteps = (props) => {
  const { next, prev, current, total } = useSteps();
  const {formState} = props;

  const [serviceData,setServiceData]=useState({
    serviceName:'',
    websiteUrl:'',
    widgetName:"",
    company:"",
    technology:'',
    widgetType:"",
    isIndiaNo:true,
    devEmail:"",
    widgetHeader:"Hii there , Welcome !",
    widgetDesc:"we usually reply with in 5min",
    widgetAvatar:[],
    widgetColor:'',
    greetingMsg:'Hello Thanks for visiting us. How May I assist you.',
    endingMsg:"Thank you so much for your query. Someone from our team will connect with you."
  })

  const handleChange = (e) => {
    let name=e.target.name;
    let value=e.target.value;
    
    console.log(name)
    console.log(e.target)
if(name == "widgetAvatar"){
    setServiceData(previousState => {
    return { ...previousState,widgetAvatar:URL.createObjectURL(e.target.files[0])}
  });
}

    if(name == "isIndianNo"){
        setServiceData(previousState => {
          return { ...previousState,isIndianNo:value?false:true }
        });
    }
    console.log(name)
    console.log(value)
    setServiceData(previousState => {
        return { ...previousState,[name]:value }
      });
      console.log(serviceData)
}

  return (
    <>
      <div className="step-wrapper mx-5">
        {/* <p className="text-end">step {current} of {total}</p> */}
        <Steps>
          <div className="step">
            <Step1 data={serviceData} handleChange={handleChange} next={next}/>
          </div>
          <div className="step">
          <StepPreview data={serviceData} handleChange={handleChange} next={next} prev={prev}/>
          </div>
        </Steps>
      </div>
    </>
  )
}

function StepForm(props) {
  const handleSubmit = () => {}
  return (
    <>
      <StepsProvider>
        <MySteps />
      </StepsProvider>
    </>
  )
}



export default StepForm
