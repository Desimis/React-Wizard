import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IsStepComplete } from '../../utils/Validation';

interface IProps {
    callBack: ({id: number, stepComplete: boolean}: Step) => void,
    title?: string;
}

interface Step {
    id: number;
    stepComplete: boolean;
}

export const Step3 = ({callBack}: IProps) => {
    const [features, setFeatures] = useState<string[]>([]);
    const [test, setTest] = useState<string>('');

    useEffect(() => {
        const handleStepComplete = (): void => {
            if(features.length > 0) {
                callBack({id: 2, stepComplete: true});
            } else {
                callBack({id: 2, stepComplete: false});
            }
        }

        handleStepComplete();
    }, [features]);

    const handleFeature = (value: string) => {
        setTest(value);
        console.log(test);
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Step 2</Card.Title>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Check value={11} onChange={() => handleFeature('11')}></Form.Check>
                </Form.Group>
            </Card.Body>
        </Card>
    );
}
