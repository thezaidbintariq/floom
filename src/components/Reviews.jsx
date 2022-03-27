import React from 'react'
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import { useState } from 'react';
import ReactDOM from "react-dom";
import './Flower.css';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';


const Reviews = () => {
  return (
      <section className='padding-100'>
          <Container>
              <Row>
                  <Col xl={6} sm={12} xs={12} md={6}>
                      <h3>Hear what our happy customers have to say</h3>
                  </Col>
                  <Col xl={6} sm={12} xs={12} md={6}>
                            <MDBCarousel showControls interval={10000}>
                                <MDBCarouselInner>
                              <MDBCarouselItem className='active'>
                                  <div className='padding-100'>
                                  <h1 className='mb-3'>Flower delivery from independent florists in the U.K3</h1>
                                    <p className="fw-light">"Floom has been really helpful in making a couple of changes to this order. I would definitely recommend them to friends and family. Thanks very much"</p>
                              </div>      
                              </MDBCarouselItem>
                              <MDBCarouselItem>
                                  <div className='padding-100'>
                                  <h1 className='mb-3'>Flower delivery from independent florists in the U.K3</h1>
                                    <p className="fw-light">"Floom has been really helpful in making a couple of changes to this order. I would definitely recommend them to friends and family. Thanks very much"</p>
                                  </div>
                              </MDBCarouselItem>
                              <MDBCarouselItem>
                                 <div className='padding-100'>
                                  <h1 className='mb-3'>Flower delivery from independent florists in the U.K3</h1>
                                    <p className="fw-light">"Floom has been really helpful in making a couple of changes to this order. I would definitely recommend them to friends and family. Thanks very much"</p>
                                  </div>
                              </MDBCarouselItem>
                                </MDBCarouselInner>
                                </MDBCarousel>
                  </Col>
              </Row>
            </Container>
    </section>
  )
}

export default Reviews