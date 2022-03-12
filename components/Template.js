import React from 'react'
import WhyBack from '../public/img/why_utab_back.svg'
import WhyVector from '../public/img/why_utab_vector.svg'
function Template() {
  return (
    <div className='mt-44  '>
      <div className='grid sm:grid-cols-2 grid-cols-1 bg-white rounded-[2.5rem]
       xl:mx-[14rem] lg:mx-[3rem] my-12 right-6 shadow-lg space-x-12 absolute lg:py-24'
      >


        {/* text */}
        <div className='flex flex-col p-[20px]  space-y-5 '>
          {/* title */}
          <div className='flex flex-row-reverse space-x-2 space-x-reverse'>
            <p className=' font-bold text-2xl  ' dir='ltr'>نمونه کار</p>
          </div>

          {/* disc */}
          <span className='text-right leading-8 text-md '>
            آژانس دیجیتال مارکتینگ یوتاب پارس نامی آشنا در زمینه راه اندازی کسب و کار آنلاین و ارائه خدمات دیجیتال مارکتینگ هست. کادر مجرب و حرفه ای یوتاب پارس همواره تلاش داشته کیفیت خدمات خود را در سطح بالا و مطابق با استانداردهای روز جهان منطبق کند. به همین سبب با کسب رضایت حداکثری مشتریان , یوتاب پارس به برندی
          </span>
          <button className='bg-redprimary rounded-full w-36  p-3 
          text-white self-end transition-all duration-500 hover:scale-125 hover:text-darkblue'>لیست کار ها</button>
        </div>
        {/* img */}

        <div className='grid grid-flow-col  '>
          <div className=' space-y-6 -mt-36 '>
            <img src='/img/tt.webp ' className='rounded-[2.5rem] w-[350px] h-[200px] shadow-xl' alt='template' />
            <img src='/img/tt.webp ' className='rounded-[2.5rem] w-[350px] h-[200px] shadow-xl' alt='template' />


          </div>

          <div className='m-5 space-y-6 -mt-24'>
            <img src='/img/tt.webp ' className='rounded-[2.5rem] w-[350px] h-[200px] shadow-xl' alt='template' />
            <img src='/img/tt.webp ' className='rounded-[2.5rem] w-[350px] h-[200px] shadow-xl' alt='template' />

          </div>



        </div>
      </div>
      <div className='px-8 '>
        <WhyBack />
      </div >
      {/* why */}

    </div>
  )
}

export default Template