import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pexels4 from '../assets/pexels4.jpg';
import pexels3 from '../assets/pexels3.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ pexels3 }
                        alt="Workplace"
                    />
                    <Carousel.Caption>
                        <h3>It's all about KUDOS</h3>
                        {/* <p>Some paragraph</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ pexels4 }
                        alt="Technology"
                    />
                    <Carousel.Caption>
                        <h3>Technology image</h3>
                        <p>Some paragraph</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
