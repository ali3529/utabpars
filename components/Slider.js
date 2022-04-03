

import React from 'react'
import Imageeee from '../public/img/slider_back.svg'
import Imageeee2 from '../public/img/banner1.svg'
import Imageeee3 from '../public/img/img2.svg'
import Imageeee4 from '../public/img/img3.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const sliderImage = [
  <img key={1} src='/img/banner/slider1.webp' width="100%" height="100%" alt='skider' />,
  <img key={1} src='/img/banner/slider1.webp' width="100%" height="100%" alt='skider' />,
  // <img key={1} src='/img/banner/banner2.webp' width="100%" height="100%" alt='skider' />,
  // <img key={1} src='/img/banner/banner3.webp' width="100%" height="100%" alt='skider' />,

  // <Imageeee3 key={2} className='  w-[100%] h-[100%]' />,
  // <Imageeee4 key={3} className=' w-[100%] h-[100%]' />,

]
function Slider() {
  return (


    <div className='flex flex-col justify-center'>
      {/* <Imageeee2 className=' m-14'/> */}
      {/* <div className='py-8 px-8  w-[100%] sm:flex hidden   '> */}
      <div className='py-8 px-8  w-[100%] sm:flex hidden   '>
   
        <div   >
          {/* <div className='border-[10px] border-white rounded-[2rem] overflow-hidden  '> */}
          <div className='rounded-[2rem] overflow-hidden  '>
            <Carousel emulateTouch={true} showStatus={false}
              showArrows={false} autoPlay={true}
              showIndicators={false} showThumbs={false} infiniteLoop={true} interval={2000}


            >

              {
                sliderImage.map((slide, index) => <>{<div key={index} className=' rounded-3xl '>{slide}</div>}</>)
              }


            </Carousel>
          </div>
        </div>

      </div>

      {/* mobile */}
      <div className='py-2  flex sm:hidden   '>
        <div   >
          <div className='  '>
            <Carousel emulateTouch={true} showStatus={false}
              showArrows={false} autoPlay={true}



            >

              {
                sliderImage.map((slide, index) => <>{<div key={index} className=' rounded-3xl '>{slide}</div>}</>)
              }


            </Carousel>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Slider

