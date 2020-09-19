import React, { Component } from 'react'
import PropTypes from "prop-types";
import "../stepper/Stepper.scss";

export default class Stepper extends Component {
     state={
            activeIndex: 0
        }
    

    
    
      updateStep(stepNumber, steps) {
        const newSteps = [...steps];
        let stepCounter = 0;
    
        
    
        while (stepCounter < newSteps.length) {
          // Current step
          if (stepCounter === stepNumber) {
            newSteps[stepCounter] = {
              ...newSteps[stepCounter],
              highlighted: true,
              selected: true,
              completed: false
            };
            stepCounter++;
          }
          // Past step
          else if (stepCounter < stepNumber) {
            newSteps[stepCounter] = {
              ...newSteps[stepCounter],
              highlighted: false,
              selected: true,
              completed: true
            };
            stepCounter++;
          }
          // Future step
          else {
            newSteps[stepCounter] = {
              ...newSteps[stepCounter],
              highlighted: false,
              selected: false,
              completed: false
            };
            stepCounter++;
          }
        }
    
        return newSteps;
      } 

      onClickStep = i => {
        this.setState({
          activeIndex: i
        })
      }



    render() {
        const { direction, stepColor } = this.props;
    const { steps } = this.props;
    const stepsJSX = steps.map((step, index) => {
      const isActive = this.state.activeIndex > index;
      return (
        <div className="step-wrapper" key={index} onClick={()=> this.setState({activeIndex: index})}>
        
          <div
            className={`step-number ${
              isActive ? "step-number-selected" : "step-number-disabled"
            }`}
            style={{ background: `${ this.state.activeIndex >= index ? stepColor : "none"}` }}
          >
            {isActive ? <span>&#10003;</span> : index + 1}
          </div>
          <div
            className={`step-description ${isActive &&
              "step-description-active"}`}
          >
            {step.name}
          </div>
          {index !== steps.length - 1 && (
            <div className={`divider-line divider-line-${steps.length}`} />
          )}
        </div>
      );
    });

    return <div className={`stepper-wrapper-${direction}`}>{stepsJSX}</div>;
  }
}

Stepper.propTypes = {
    direction: PropTypes.string.isRequired,
    currentStepNumber: PropTypes.number.isRequired,
    steps: PropTypes.array.isRequired,
    stepColor: PropTypes.string.isRequired
  };
