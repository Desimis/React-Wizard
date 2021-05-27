import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, NavLink } from 'react-router-dom';

export const Home = () => {
    const history = useHistory();

    const navigateTo = (value: string) => {
        history.push(value);
    }

    return (
        <Container className="margin-top-66">
            <Row>
                <Col className="flex-center">
                    <Card>
                        <Card.Body className="text-center">
                            <Card.Title>Choose your path</Card.Title>
                            <div className="flex-center justify-content-between">
                                <Button variant="primary" onClick={() => navigateTo('/wizard/0')}>Wizard</Button>
                                <Button variant="warning" onClick={() => navigateTo('/home')}> Home</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
