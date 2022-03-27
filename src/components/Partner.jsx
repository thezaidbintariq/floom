import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Partner.css';

const Partner = () => {
  return (
      <section>
          <div className='mv6-m'>
              <div className='container container-full-bleed--only-s'>
                  <div className='row no-gutters'>
                      <div className='col-12 col-md-7'>
                          <div className='row items-center h-100'>
                              <div className='col-12'>
                                  <div className='relative'>
                                  <img src='https://floom.imgix.net/general/Botanique-Video-header-img.jpg?auto=format&crop=focalpoint&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&ixlib=php-1.1.0&q=65&w=600&s=b69deee4b4f24435a9241ba1a1347e30' alt='Partner Logo' className='lazy  w-100 z-1 relative br2-m lazyautosizes ls-is-cached lazyloaded' />
                                  </div>  
                              </div>
                        
                          </div>
                      </div>
                      <div className='col-12 col-md-5'>
                          <div className='row item-center h-100'>
                              <div className='col-12'>
                                  <div className='bg-pink pv3 pv5-m br--right br2-m br0 nl3-m'>
                                      <div className='tc tl-m tl-l mr3-l pl6-m pl7-l'>
                                          <p className='nl4-l mt0-s f3 f2-s f-5-l fw5 mb3 mt2 lh-title w-100 ph3 ph0-m w-70-m'>
										Are you a passionate local florist?
                                          </p>
                                          <div className='mb305 mb4-s w-100 ph3 ph0-m w-90-m typeset'>
                                              <p className='tl-l'>
                                                  We’re always looking for talented independent florists to join the Floom family! 
                                            </p>
                                              <p className='tl-l'>
                                                  As one of our partners you’ll get to keep your independence and identity while reaching more local flower lovers than ever before, thanks to our loyal and ever-growing audience.

                                              </p>                           
                                          </div>
                                          <div className='mb2'>
                                              <a href='/partner-with-floom' className='dib pv205 pv3-s ph4 w-auto br2 fw5 f5 white bg-colour-button hover-bg-colour-button-hover bg-animate no-underline mr-a-l'>Partner with us</a>

                                          </div>

                                      </div>
                                  </div>
                                </div>
                          </div>
                        </div>
                </div>
              </div>
              
          </div>
    </section>
  )
}

export default Partner