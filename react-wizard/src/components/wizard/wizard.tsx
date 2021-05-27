import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactWizard } from '../react-wizard/react-wizard';
import { Step1 } from '../step1/step1';
import { Step2 } from '../step2/step2';
import { useParams } from 'react-router-dom';

interface Step {
  id: number;
  stepComplete: boolean;
}

interface ParamType {
    id: string;
}

export const Wizard = () => {
  const { id } = useParams<ParamType>();
  const [stepComplete, setStepComplete] = useState<Step>({id: 0, stepComplete: false});

  const callBack = (step: Step) => {
    setStepComplete(step);
  }
  

  return (
    <ReactWizard startingStep={Number(id)} id={stepComplete.id} stepComplete={stepComplete.stepComplete}>
      <Step1 callBack={callBack} />
      <Step2 callBack={callBack} />
    </ReactWizard>
  );
}
