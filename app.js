import React, { Component } from 'react';
import './App.scss';
import Stepper from "./stepper/Stepper"




class App extends Component {
  constructor() {
    super()
    this.state = {
      currentStep: 1
    }
  }
  
  render() {
    const stepsArray = [
      {
        name: "Create an appilication",
        value: "create"
      },
      {
        name: "Add personal data",
        value: "adddata",
      },
      {
        name: "Add payment",
        value: "addpayment",
      },
      {
        name: "Submit application",
        value: "Submit"
      }
    ]
    const { currentStep } = this.state
    return (
      <>
        {/* <div className="stepper-container-vertical">
          <Stepper
            direction="vertical"
            currentStepNumber={currentStep - 1}
            steps={stepsArray}
            stepColor="#ee5253"
          />
        </div> */}

        <div className="stepper-container-horizontal">
          <Stepper
            direction="horizontal"
            currentStepNumber={currentStep - 1}
            steps={stepsArray}
            stepColor="green"
          />

          
        </div>

      </>
    )
  }




}

export default App;
