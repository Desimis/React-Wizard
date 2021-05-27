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

export const Step1 = ({callBack}: IProps) => {
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');

    useEffect(() => {
        const handleStepComplete = (): void => {
            const stepComplete = IsStepComplete([name, surname]);
            if(stepComplete) {
                callBack({id: 0, stepComplete: true});
            } else {
                callBack({id: 0, stepComplete: false});
            }
        }

        handleStepComplete();
    }, [name, surname]);

    const handleName = (event: any) => {
        setName(event.target.value);
    }

    const handleSurname = (event: any) => {
        setSurname(event.target.value);
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Step 1</Card.Title>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={handleName}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control value={surname} onChange={handleSurname}></Form.Control>
                </Form.Group>
            </Card.Body>
        </Card>
    );
}
