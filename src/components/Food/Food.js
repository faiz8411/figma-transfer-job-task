import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Food.css'

const Food = () => {
    return (
        <div>
            <Row>
                <Col xs={12} md={4}>
                    <img className='food-image' src="https://i.ibb.co/g3Km7t5/joshua-ryder-I51a7-Yy7m-QA-unsplash-2.jpg" alt="" />
                </Col>
                <Col xs={12} md={4}>
                    <img className='food-image' src="https://i.ibb.co/g3Km7t5/joshua-ryder-I51a7-Yy7m-QA-unsplash-2.jpg" alt="" />
                </Col>
                <Col xs={12} md={4}>
                    <img className='food-image' src="https://i.ibb.co/g3Km7t5/joshua-ryder-I51a7-Yy7m-QA-unsplash-2.jpg" alt="" />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <img className='food-image' src="https://i.ibb.co/g3Km7t5/joshua-ryder-I51a7-Yy7m-QA-unsplash-2.jpg" alt="" />
                </Col>
                <Col xs={12} md={4}>
                    <img className='food-image' src="https://i.ibb.co/g3Km7t5/joshua-ryder-I51a7-Yy7m-QA-unsplash-2.jpg" alt="" />
                </Col>
                <Col xs={12} md={4}>
                    <img className='food-image' src="https://i.ibb.co/g3Km7t5/joshua-ryder-I51a7-Yy7m-QA-unsplash-2.jpg" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Food;