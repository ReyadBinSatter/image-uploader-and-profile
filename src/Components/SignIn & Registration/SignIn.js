import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import '../Common.css';

const SignIn = () => {
    const navigate = useNavigate();
    const gotoRegistration = event => {
        navigate('/registration')
    }
    return (
        <div className=' w-50 h-75 mx-auto d-flex align-items-center'>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <div className='text-light'>
                            <h1 className='text-center'>Please Login</h1>
                            <Form>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" className='border bg-transparent text-light' required />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" className='border bg-transparent text-light' required />
                                </Form.Group>
                                <div className='d-flex justify-content-between mb-3'>
                                <Button variant="outline-info " type="submit" className='btn-size'>
                                    Sign In
                                </Button>
                                <Button variant="outline-info " className='btn-size'>Reset password</Button>
                                </div>
                            </Form>
                            <p className='text-center'>If you are a new user <Link to="/registration" className='text-info text-decoration-none' onClick={gotoRegistration}>Please Registration</Link></p>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignIn;