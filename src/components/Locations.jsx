import React from 'react'
import { Button, Container, Row,Col } from 'react-bootstrap';
import './Flower.css';
import $ from 'jquery';
import { useState } from 'react';


const Locations = () => {
  return (
    <section className='padding-100'>
      <div className='container'>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col className='tc' md="auto" lg={true} ><span className='pd-x'>FLOWER DELIVERY IN THE UNITED KINGDOM</span></Col>
          </Row>
              <Row className="justify-content-md-center">
                    <Col className='tc' md="auto" lg={true} >
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
            </Col>
            <Col className='tc' md="auto" lg={true} >
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
            </Col>
            <Col className='tc' md="auto" lg={true} >
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
            </Col>
            <Col className='tc' md="auto" lg={true} >
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
            </Col>
            <Col className='tc' md="auto" lg={true} >
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
                            <Row className="justify-content-md-center"><p>London</p></Row>
                    </Col>
               </Row>   
        </Container>
        </div>
    </section>
  )
}

export default Locations