import React from 'react';
import { Button, Navbar, Nav, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

export const Header = () => {
    const history = useHistory();

    return (
        <Navbar fixed="top" bg="primary" expand="lg">
            <Navbar.Brand onClick={() => history.push('/home')} className="text-light hover-cursor">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Profile</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}
