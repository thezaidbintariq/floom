import React from 'react'
import './About.css'

const About = () => {
  return (
      <section>
          <div className='mv4 mv6-m'>
              <div className='container'>
                  <div className='f3 f2-xl measure-wide center tc'>
                        <p className='ttu tracked fw5 f5 mb3 mb5-s'>A little about us</p>
                  </div>
                  <div className='f3 f2-xl measure-wide center lh-copy typeset tc'>
                      <p>At Floom we’re proud to be bringing the local florist experience online, reminding people just how special it is to both send flowers and have flowers delivered to you.</p>
                      <p>We aim to combine a beautiful to look at, easy-to-use and flexible flower delivery service with the spark and magic that only the most passionate and skilled local florists can bring to a bouquet. We handpick every florist that we work with to ensure they share our values and our commitment to providing amazing online flower delivery experiences.</p>
                      <p>When you order flowers online, we don’t believe you should simply be a last-minute gift choice (though our same-day flower delivery option does help with that!). Flowers at their best can truly excite the senses, whatever the occasion, whatever the location: from Mother’s Day flowers in Bristol to Valentine’s Day flowers in London.</p>
                      <p>Every item that you see on our site is utterly unique to the local florist who crafts it, which means it will also be unique to the sender and loved one who receives it. We don’t believe in providing our florists with generic guidelines, instead, we let them create bouquets based on nature’s seasonality and their own creative instincts.</p>
                      <p>We’re truly ambitious in our aims to build a global community of flower lovers, and spreading floral joy is what we’re all about! We try to give our community as many opportunities to send flowers with the majority of our florists offering same day flower delivery, perfect for those last-minute gifts.</p>
                  </div>
                </div>
          </div>
          <div className='pv3 bg-white'>
              <div className='container'>
                  <div className='items-center'>
                      <div className='order-2 center tc col-12'>
                          <div className='items-center'>
                              <div className='center center-m flex  flex-row-s items-center'>
                                  <p className='order-2 order-1-s db dib-s f4 f3-s fw5 margin-top-bottom-auto '>Find out more about us here:</p>
                                  <div className='order-3 order-2-s db dib-s ml4-s mt3 mt0-s'>
                                      <a href='https://www.floom.com/pages/about-us' className='no-underline dib pv205 pv3-s ph4 w-auto br2 fw5 f5 white bg-colour-button hover-bg-colour-button-hover bg-animate'>Discover our story</a>
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

export default About