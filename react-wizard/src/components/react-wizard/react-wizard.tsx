import React, { FunctionComponent, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, ProgressBar, Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './react-wizard.css';
import { Step } from './step';
import Animate from './animate.module.css';

interface IProps {
  stepComplete?: boolean;
  id: number;
  navigateTo?: string;
  startingStep?: number;
}

interface Step {
  id: number;
  stepComplete: boolean;
}

export const ReactWizard: FunctionComponent<IProps> = ({id = 0, stepComplete = false, children, navigateTo = '/home', startingStep = 0}: any) => {
  const [stepCount, setStepCount] = useState<number>(0);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(startingStep);
  const [stepData, setStepData] = useState<Step[]>([]);
  const [classes] = useState({
    enterRight: `${Animate.animated} ${Animate.fadeInRight}`,
    enterLeft: `${Animate.animated} ${Animate.fadeInLeft}`,
    exitRight: `${Animate.animated} ${Animate.fadeOutRight}`,
    exitLeft: `${Animate.animated} ${Animate.fadeOutLeft}`,
  });
  const [transition, setTransition] = useState<string>('');
  const history = useHistory();

  useEffect(() => {
    setCurrentStepIndex(startingStep);
    setTransition(classes.enterRight);
  }, [startingStep]);

  useEffect(() => {
    setStepCount(children.length);
  }, [children.length]);

  useEffect(() => {
    children.forEach((child: any, i: number) => {
      setStepData(stepData => [
        ...stepData,
        {
          id: i,
          stepComplete: false
        }
      ]);
    });
  }, [children]);

  useEffect(() => {
    const getStepData = (stepData: Step[]) => {
      let newStepDataArray = [...stepData];
      if(newStepDataArray && newStepDataArray.length > 0) {
        newStepDataArray[id].stepComplete = stepComplete;
      }

      return newStepDataArray;
    }
    setStepData(data => data = getStepData(data));
  }, [id, stepComplete]);

  const nextStep = () => {
    setTransition(classes.exitLeft);
    history.push('/wizard/' + (currentStepIndex + 1));
  }

  const previousStep = () => {
    setTransition(classes.exitRight);
    history.push('/wizard/' + (currentStepIndex - 1));
  }

  const finalize = () => {
    history.push(navigateTo);
  }

  return (
    <Container fluid>
      <Row>
        <Col>
            <ProgressBar now={currentStepIndex} max={stepCount} />
            <Container className="margin-top-50">
                <Row>
                    <Col className="flex-center">
                      <Step transitions={transition}>
                        {
                          children[currentStepIndex]
                        }
                      </Step>
                    </Col>
                </Row>
            </Container>
            <Navbar fixed="bottom" bg="dark" variant="dark" className="justify-content-between">
                <Nav.Item className="margin-left-quarter">
                {
                    currentStepIndex > 0 &&
                    <Button variant="primary" onClick={() => previousStep()}>Back</Button>
                }
                </Nav.Item>
                <Nav.Item className="margin-right-quarter">
                  {
                    currentStepIndex !== (stepCount - 1) &&
                    <Button disabled={!(stepData && stepData[currentStepIndex] && stepData[currentStepIndex].stepComplete)} variant="primary" onClick={() => nextStep()}>Next</Button>
                  }
                  {
                    currentStepIndex === (stepCount - 1) &&
                    <Button disabled={!(stepData && stepData[currentStepIndex] && stepData[currentStepIndex].stepComplete)} variant="primary" onClick={() => finalize()}>Finalize</Button>
                  }
                </Nav.Item>
            </Navbar>
        </Col>
      </Row>
    </Container>
  );
}


