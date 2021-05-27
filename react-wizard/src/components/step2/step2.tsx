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

export const Step2 = ({callBack}: IProps) => {
    const [country, setCountry] = useState<string>('');
    const [address, setAddress] = useState<string>('');

    useEffect(() => {
        const handleStepComplete = (): void => {
            const stepComplete = IsStepComplete([country, address]);
            if(stepComplete) {
                callBack({id: 1, stepComplete: true});
            } else {
                callBack({id: 1, stepComplete: false});
            }
        }

        handleStepComplete();
    }, [country, address]);

    const handleCountry = (event: any) => {
        setCountry(event.target.value);
    }

    const handleAddress = (event: any) => {
        setAddress(event.target.value);
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Step 2</Card.Title>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control value={country} onChange={handleCountry}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={address} onChange={handleAddress}></Form.Control>
                </Form.Group>
            </Card.Body>
        </Card>
    );
}
