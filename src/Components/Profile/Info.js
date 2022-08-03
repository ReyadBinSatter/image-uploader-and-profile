import React from 'react';
import { Row, Col } from 'react-bootstrap';
import pic from '../../Images/bg/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';

const Info = ({data}) => {
    return (
        <div>
            <Row>
                <Col sm={4}>
                    <img src={pic} className="w-100"/>
                    <h1 className=' d-flex justify-content-center my-5'>{data.user_name}</h1>
                </Col>
                <Col sm={8}>
                    <h2 className=' border-bottom '>Profile Information</h2>
                    <div className='d-flex mt-4'>
                        <span className='fs-5 fw-semibold me-2'>First Name:</span>
                        <span className='fs-5 fw-light'>{data.first_name}</span>
                    </div>
                    <div className='d-flex mt-3'>
                        <span className='fs-5 fw-semibold me-2'>Last Name:</span>
                        <span className='fs-5 fw-light'>{data.last_name}</span>
                    </div>
                    <div className='d-flex mt-3'>
                        <span className='fs-5 fw-semibold me-2'>Email:</span>
                        <span className='fs-5 fw-light'>{data.email}</span>
                    </div>
                    <div className='d-flex mt-3'>
                        <span className='fs-5 fw-semibold me-2'>Phone No.:</span>
                        <span className='fs-5 fw-light'>{data.phone}</span>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Info;