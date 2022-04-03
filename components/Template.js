import React from 'react'
import WhyBack from '../public/img/why_utab_back.svg'
import WhyVector from '../public/img/why_utab_vector.svg'
function Template() {
  return (
    <div className='mt-44' id='template' >
      <div className='  pb-28 sm:-m-5 m-3 '>

        <div className=' rounded-[2.5rem] sm:skew-y-3 sm:-skew-x-3 rotate-[1deg]   bg-redprimary'>
          <div className='grid sm:grid-cols-2 grid-cols-1 bg-white -rotate-[1deg]   py-24     sm:-skew-y-3 sm:skew-x-3 rounded-[2.5rem] 
         lg:mx-[3rem]  lg:px-0 md:px-16  shadow-lg space-x-8  items-center '
          >
            {/* tempate mobilde */}
            <div className='flex sm:hidden sm:flex-row   '>
              <div className=' space-y-6 -mt-36 '>
                <img src='/img/template/tem1.webp  ' className='rounded-[2.5rem] w-[320px] h-[160px] shadow-xl ' alt='template' />
                <img src='/img/template/tem2.webp  ' className='rounded-[2.5rem] w-[320px] h-[160px] shadow-xl' alt='template' />


              </div>

              <div className='m-5 space-y-6 -mt-24'>
                <img src='/img/template/tem3.webp ' className='rounded-[2.5rem] w-[320px] h-[160px] shadow-xl' alt='template' />
                <img src='/img/template/tem4.webp  ' className='rounded-[2.5rem] w-[320px] h-[160px] shadow-xl' alt='template' />

              </div>



            </div>
            {/* text */}
            <div className='flex flex-col p-[20px]  space-y-5  '>
              {/* title */}
              <div className='flex flex-row-reverse space-x-2 space-x-reverse'>
                <p className=' font-bold text-2xl  ' dir='ltr'>نمونه کار</p>
              </div>

              {/* disc */}
              <span className='text-right leading-8 text-md '>
                آژانس دیجیتال مارکتینگ یوتاب پارس نامی آشنا در زمینه راه اندازی کسب و کار آنلاین و ارائه خدمات دیجیتال مارکتینگ هست. کادر مجرب و حرفه ای یوتاب پارس همواره تلاش داشته کیفیت خدمات خود را در سطح بالا و مطابق با استانداردهای روز جهان منطبق کند. به همین سبب با کسب رضایت حداکثری مشتریان , یوتاب پارس به برندی
              </span>
              <button className='bg-redprimary rounded-full w-36  p-3 self-center
          text-white sm:self-end transition-all duration-300 hover:scale-125  ease-out'>لیست کار ها</button>
            </div>


            {/* img */}

            <div className='sm:flex hidden sm:flex-row     '>
              <div className=' space-y-6 -mt-36 '>
              <img src='/img/template/tem1.webp ' className='rounded-[2.5rem] w-[350px] h-[200px] shadow-xl hover:scale-110 cursor-pointer transition-all duration-500 ' alt='template' />
              <img src='/img/template/tem2.webp ' className='rounded-[2.5rem] w-[350px] h-[200px] shadow-xl hover:scale-110 cursor-pointer transition-all duration-500' alt='template' />



              </div>

              <div className='m-5 space-y-6 -mt-24'> 
                <img src='/img/template/tem3.webp ' className='rounded-[2.5rem] w-[350px] h-[200px] shadow-xl hover:scale-110 cursor-pointer transition-all duration-500' alt='template' />
                <img src='/img/template/tem4.webp ' className='rounded-[2.5rem] w-[350px] h-[200px] shadow-xl hover:scale-110 cursor-pointer transition-all duration-500' alt='template' />

              </div>



            </div>
          </div>
        </div>


      </div >
    </div>
  )
}

export default Template