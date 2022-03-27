import React from 'react'
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import './Flower.css';
import $ from 'jquery';
import { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

const Hero = () => {
  return (
    <section>
      <Container fluid>
        <Row>
          <Col xl={8} sm={12} xs={12} md={12}>
            <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://floom.imgix.net/general/Mothers-Day-Landscape-2_190524_160331.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&ixlib=php-1.1.0&q=70&w=2400&s=d4712ce3f2f88c28346854d8d7a1a551')", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
                  <div className='text-black'>
                    <p className="fw-light">Collection</p>
              <h1 className='mb-3'>Flower delivery from independent florists in the U.K.</h1>
              
      
            </div>
          </div>
        </div>
      </div>
          </Col>
          <Col xl={4} sm={12} xs={12} md={12}>
            <Row className='h-50'>
              <Col xl={12} sm={12} xs={12} md={12}> <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://floom.imgix.net/general/Mothers-Day-Landscape-2_190524_160331.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&ixlib=php-1.1.0&q=70&w=2400&s=d4712ce3f2f88c28346854d8d7a1a551')", height: 200 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-black'>
                      <p className="fw-light">Collection</p>
                      <h1 className='mb-3 fs-5 text'>Flower delivery from independent florists in the U.K.</h1>
                      <a href="#" className="text-decoration-underline black">SEND FLOWERS</a>
              
      
            </div>
          </div>
        </div>
              </div>
              </Col>
            </Row>
             <Row>
              <Col xl={12} sm={12} xs={12} md={12}> <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://floom.imgix.net/general/Mothers-Day-Landscape-2_190524_160331.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&ixlib=php-1.1.0&q=70&w=2400&s=d4712ce3f2f88c28346854d8d7a1a551')", height: 200 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-black'>
                      <p className="fw-light">Collection</p>
                      <h1 className='mb-3 fs-5 text'>Flower delivery from independent florists in the U.K.</h1>
                      <a href="#" className="text-decoration-underline black">SEND FLOWERS</a>
              
      
            </div>
          </div>
        </div>
              </div>
              </Col>
            </Row>

          </Col>
        </Row>
        </Container>
      </section>
  )
}

export default Hero
