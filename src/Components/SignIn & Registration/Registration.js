import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Registration = () => {
    const navigate = useNavigate();
    const gotoSignIn = event => {
        navigate('/signin')
    }
    return (
        <div className=' w-50 h-74 mt-5 mx-auto d-flex align-items-start'>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <div className='text-light'>
                            <h1 className='text-center'>Please Registration</h1>
                            <p className='text-center'>If you have a account <Link to="/signin" className='text-info text-decoration-none' onClick={gotoSignIn}>Goto Sign in</Link></p>
                            <Form>
                                <Form.Group className="mb-4" controlId="formBasicName">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="name" placeholder="User Name" className='border bg-transparent text-light' required />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formBasicName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="name" placeholder="First Name" className='border bg-transparent text-light' required />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formBasicName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="name" placeholder="Last Name" className='border bg-transparent text-light' required />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" className='border bg-transparent text-light' required />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicName">
                                    <Form.Label>Mobile No.</Form.Label>
                                    <Form.Control type="number" placeholder="Mobile No." className='border bg-transparent text-light' required />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" className='border bg-transparent text-light' required />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" className='border bg-transparent text-light' required />
                                </Form.Group>
                                <Button variant="outline-info w-50 mx-auto d-block mb-2" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Registration;