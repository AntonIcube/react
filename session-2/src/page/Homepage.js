import React, { useState, Component } from 'react';
import CategoryHomePage from '../component/CategoryHomePage';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../component/img/banner1.png';
import Banner2 from '../component/img/banner2.png';
import Banner3 from '../component/img/banner3.png';

export default class homepage extends Component {
    render() {
        return (
            <div className='home' style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Banner1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Banner2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Banner3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>New Arrival</p>
                    <p style={{ fontSize: "10px", marginLeft: "50px", marginRight: "50px", textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
                </div>

                <CategoryHomePage/>
            </div>
        )
    }
}