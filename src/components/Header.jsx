import React from 'react'
import './Header.css';

const Header = () => {
	return (
	<section className='relative'>
	  <div className='js-promotional-banner bg-green'>
		 	 <div className='container text-center'>
					<p>
						This site uses cookies. By continuing to browse the site you are agreeing to our <a href='#' className='is-anchor'>cookies policy</a>
					</p>
					<a href='#' className='absolute top-0 right-0 is-cross'>
						<img className='cross' src='../cross.png' alt='cross'/>
					</a>
					
		 	 </div>  
			</div>
	</section>
  )
}

export default Header
