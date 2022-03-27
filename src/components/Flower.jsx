import React from 'react'
import { Carousel, Button, Container, Row } from 'react-bootstrap';
import './Flower.css';
import $ from 'jquery';
import { useState } from 'react';


function Flower() {
const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onPrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else if (index === 0) setIndex(2);
  };
  const onNextClick = () => {
    if (index === 2) {
      setIndex(0);
    } else if (index === 0 || index > 0) setIndex(index + 1);
  };



  return (
      <section>

          
          <div className='flex-direction-row'>
              <div className="button-container">
        <Container>
          <Row>
            <Button variant="primary" onClick={onPrevClick}>
              Previous
            </Button>
            <Button variant="primary" onClick={onNextClick}>
              Next
            </Button>
          </Row>
        </Container>
      </div>
          <div className='w-35'>
                  <Carousel fade variant="dark" className='bg-pink'
                    activeIndex={index}
                    onSelect={handleSelect}
                    indicators={false}
                    controls={false}
                  >
  <Carousel.Item>
    
     <div className='tc h-100 pv3 pv4-s padding-100'>
                              <div className='mb3'>
                                  <p className='ttu tracked f6 mt2 mb3 ma0-s'>Tips & tricks</p>
                              </div>
                              <div className='row no-gutters items-center justify-center h-100-s'>
                                  <div className='flex-direction-column'>
                                  <div className='col col-11 col-sm-10 col-l-8'>
                                      <div className='mb4'>
                                          <p className='w-90 center f3 f2-s f5-md f-5-l fw5  lh-title mb3'>Birth Month Flowers 1</p>
                                          <div className='center measure-wide-s w-80 typeset-no-sizes'>Take a look at our month-by-month guide to the different birth flowers – and their symbolism – so you can send a meaningful celebratory bouquet.</div>
                                      </div>
                                  </div>
                                  <a href="#" className='dib pv205 pv3-s ph4 w-auto br2 fw5 f5 white bg-colour-button hover-bg-colour-button-hover bg-animate no-underline'>Shop birth flowers</a>
                             </div>
                              </div>
                          </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className='tc h-100 pv3 pv4-s padding-100'>
                              <div className='mb3'>
                                  <p className='ttu tracked f6 mt2 mb3 ma0-s'>Tips & tricks</p>
                              </div>
                              <div className='row no-gutters items-center justify-center h-100-s'>
                                  <div className='flex-direction-column'>
                                  <div className='col col-11 col-sm-10 col-l-8'>
                                      <div className='mb4'>
                                          <p className='w-90 center f3 f2-s f5-md f-5-l fw5  lh-title mb3'>Birth Month Flowers 2</p>
                                          <div className='center measure-wide-s w-80 typeset-no-sizes'>Take a look at our month-by-month guide to the different birth flowers – and their symbolism – so you can send a meaningful celebratory bouquet.</div>
                                      </div>
                                  </div>
                                  <a href="#" className='dib pv205 pv3-s ph4 w-auto br2 fw5 f5 white bg-colour-button hover-bg-colour-button-hover bg-animate'>Shop birth flowers</a>
                             </div>
                              </div>
                          </div>
  </Carousel.Item>
  <Carousel.Item>
     <div className='tc h-100 pv3 pv4-s padding-100'>
                              <div className='mb3 '>
                                  <p className='ttu tracked f6 mt2 mb3 ma0-s'>Tips & tricks</p>
                              </div>
                              <div className='row no-gutters items-center justify-center h-100-s'>
                                  <div className='flex-direction-column'>
                                  <div className='col col-11 col-sm-10 col-l-8'>
                                      <div className='mb4'>
                                          <p className='w-90 center f3 f2-s f5-md f-5-l fw5  lh-title mb3'>Birth Month Flowers 3</p>
                                          <div className='center measure-wide-s w-80 typeset-no-sizes'>Take a look at our month-by-month guide to the different birth flowers – and their symbolism – so you can send a meaningful celebratory bouquet.</div>
                                      </div>
                                  </div>
                                  <a href="#" className='dib pv205 pv3-s ph4 w-auto br2 fw5 f5 white bg-colour-button hover-bg-colour-button-hover bg-animate '>Shop birth flowers</a>
                             </div>
                              </div>
                          </div>
    </Carousel.Item>
    </Carousel>
          </div>
          <div className='w-65'>
              
                  <Carousel fade variant="dark" className='indicators bg-pink h-400' id='carousel2'
                    activeIndex={index}
                    onSelect={handleSelect}
                    indicators={false}
                    controls={false}
                  >
  <Carousel.Item>
    
      <img
      className="d-block w-100 contain"
      src="https://floom.imgix.net/general/floom-flower-life-hero.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=563&ixlib=php-1.1.0&q=65&w=1000&s=4d67b39c4707088b7015f7e3f9de1be3"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
     <img
      className="d-block w-100 contain"
      src="https://floom.imgix.net/general/floom-flower-life-hero.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=563&ixlib=php-1.1.0&q=65&w=1000&s=4d67b39c4707088b7015f7e3f9de1be3"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
     <img
      className="d-block w-100 contain"
      src="https://floom.imgix.net/general/floom-flower-life-hero.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=563&ixlib=php-1.1.0&q=65&w=1000&s=4d67b39c4707088b7015f7e3f9de1be3"
      alt="Second slide"
    />
    </Carousel.Item>
    </Carousel>
              </div>
              </div>
          
    </section>
  )
}

export default Flower