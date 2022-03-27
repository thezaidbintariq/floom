import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap';
import './Flower.css';

const Services = () => {
  return (
      <section>
          <div className='container'>
              <Container fluid>
                  <Row className="justify-content-md-center">
                      <Col className='tc' md="auto" lg={true} ><span className='pd-x'>Why send flowers with Floom?</span></Col>
                  </Row>
                  <Row className="justify-content-md-center">
                      <Col className='tc' md="auto" lg={true} >
                          <Card style={{ width: '18rem'}} className='border-0 margin-auto'>
                            <Card.Img variant="top" src="https://d3c3go6eq7r80g.cloudfront.net/products/200px-Flower-eye_180126_141515.gif" className='size'/>
                            <Card.Body>
                                <Card.Title>What you see is what you get</Card.Title>
                                <Card.Text>
                                Love the bouquet on your screen? That’s exactly what our local florist will prepare freshly for your order… or your money back!
                                </Card.Text>
                                
                            </Card.Body>
                            </Card>
                      </Col>
                      <Col className='tc' md="auto" lg={true} >
                          <Card style={{ width: '18rem' }} className='border-0 margin-auto'>
                            <Card.Img variant="top" src="https://d3c3go6eq7r80g.cloudfront.net/products/200px-Florist_180126_141526.gif" />
                            <Card.Body>
                                <Card.Title>Always unique, never generic</Card.Title>
                                <Card.Text>
                                We only work with the most talented and unique artisans, and we’re passionate about supporting our skilled family of florists.
                                </Card.Text>
                                
                            </Card.Body>
                            </Card>
                      </Col>
                      <Col className='tc' md="auto" lg={true} >
                          <Card style={{ width: '18rem' }} className='border-0 margin-auto'>
                            <Card.Img variant="top" src="https://d3c3go6eq7r80g.cloudfront.net/products/200px-Hands_180126_141541.gif" />
                            <Card.Body>
                                <Card.Title>Hand-delivered with care and attention</Card.Title>
                                <Card.Text>
                                Each of our orders is professionally arranged, wrapped and safely delivered with a hand-written card… on the exact day that you need it.
                                </Card.Text>
                                
                            </Card.Body>
                            </Card>
                      </Col>
                  </Row>
              </Container>
            </div>
</section>
  )
}

export default Services
