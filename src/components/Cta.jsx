import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import './Flower.css';


const Cta = () => {
  return (
      <section className=' bg-green'>
          <div className='container pd-20'>
              <Container fluid>
                  <Row className="justify-content-md-center">
                      <Col className='tc' md="auto" lg={true} ><span className='pd-x'>Want to speak to us about flower delivery in your area? Call us: +44 (0) 20 8068 7498</span></Col>
                  </Row>
              </Container>
          </div>
        </section>
  )
}

export default Cta