import React from 'react'
import { Carousel } from 'react-bootstrap';
import './Sliders.css';

const Sliders = () => {
  return (
   <section>
          <div className='carousel-cell w-100 is-selected'>
              <div className='w-100'>
                  <div className='row no-gutters bg-pink flex-grow-1'>
                      <div className='col-12 col-md-8 order-md-12'>
                          <div className='aspect-ratio--16x9 cover bg-center w-100 h-100'>
                              <img src='https://floom.imgix.net/general/floom-fotm-zinnia-hero_180831_145657.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=563&ixlib=php-1.1.0&q=65&w=1000&s=243c91f88dc23113b30c05ee92c202a5' alt='Slider 1' />
                          </div>
                      </div>
                      <div className='col-12 col-md-4'>
                          <div className='tc h-100 pv3 pv4-s'>
                              <div className='mb3'>
                                  <p className='ttu tracked f6 mt2 mb3 ma0-s'>Tips & tricks</p>
                              </div>
                              <div className='row no-gutters items-center justify-center h-100-s'>
                                  <div className='flex-direction-column'>
                                  <div className='col col-11 col-sm-10 col-l-8'>
                                      <div className='mb4'>
                                          <p className='w-90 center f3 f2-s f5-md f-5-l fw5  lh-title mb3'>Birth Month Flowers</p>
                                          <div className='center measure-wide-s w-80 typeset-no-sizes'>Take a look at our month-by-month guide to the different birth flowers – and their symbolism – so you can send a meaningful celebratory bouquet.</div>
                                      </div>
                                  </div>
                                  <a href="#" className='dib pv205 pv3-s ph4 w-auto br2 fw5 f5 white bg-colour-button hover-bg-colour-button-hover bg-animate'>Shop birth flowers</a>
                             </div>
                              </div>
                          </div>
                          <div className='h-100 absolute top-0 bottom-0 left-0 flex items-center'>
                              <button aria-label='View previous' className='bg-center bg-animate w4 h4 z-999 pointer arrow-image'></button>
                          </div>
                          <div className='h-100 absolute top-0 bottom-0 left-0 flex items-center'>
                              <button aria-label='View previous' className='bg-center bg-animate w4 h4 z-999 pointer arrow-image'></button>
                          </div>
                      </div>
                  </div>
            </div>
          </div> 
   </section>
  )
}

export default Sliders
