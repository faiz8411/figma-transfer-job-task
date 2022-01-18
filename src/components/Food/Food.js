import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Food.css'

const Food = () => {
    return (
        <div>
            <div className='d-flex'>
                <div className='circle'>

                </div>
                <div className='circle-1'>

                </div>
            </div>
            <div>
                <Row>
                    <Col xs={12} md={4}>
                        <img className='food-image' src="https://i.ibb.co/4N6Nx84/fish-2.png" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img className='food-image' src="https://i.ibb.co/7SpdBBY/Bratwurst-Sampler-Platter-1.png" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img className='food-image' src="https://i.ibb.co/WKWr9V5/Die-perfekte-vegane-Pizza-Eat-this-Foodblog-Vegane-Rezepte-Stories-1.png" alt="" />
                    </Col>

                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <img className='food-image' src="https://i.ibb.co/xz8mgZm/20-min-Chicken-Fried-Rice.png" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img className='food-image' src="https://i.ibb.co/Fx5ZGg6/4ed188a3-8cae-4bac-a0dd-785231cf01a5.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img className='food-image' src="https://i.ibb.co/BZh51TS/Easy-Vegan-Egg-Rolls-Full-of-Plants.png" alt="" />

                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Food;