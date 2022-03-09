import React from 'react'
import WhyBack from '../public/img/why_utab_back.svg'
import WhyVector from '../public/img/why_utab_vector.svg'
function Why() {
  return (
    <div className=' '>
      <div className='grid sm:grid-cols-2 grid-cols-1 bg-white rounded-[2.5rem] xl:mx-[14rem] lg:mx-[3rem] my-12 right-6 shadow-lg space-x-12 absolute'
      >


        {/* text */}
        <div className='flex flex-col p-[24px]  space-y-5'>
          {/* title */}
          <div className='flex flex-row-reverse space-x-2 space-x-reverse'>
            <p className='font-bold text-2xl'> چرا </p>
            <p className='text-redprimary font-bold text-2xl  ' dir='ltr'>یوتاب پارس</p>
          </div>

          {/* disc */}
          <span dir='rtl' className='text-justify leading-8 text-md '>
            آژانس دیجیتال مارکتینگ یوتاب پارس نامی آشنا در زمینه راه اندازی کسب و کار آنلاین و ارائه خدمات دیجیتال مارکتینگ هست. کادر مجرب و حرفه ای یوتاب پارس همواره تلاش داشته کیفیت خدمات خود را در سطح بالا و مطابق با استاندارد های روز جهان منطبق کند. به همین سبب با کسب رضایت حداکثری مشتریان، یوتاب پارس به برندی محبوب و قابل اطمینان تبدیل شده است. ما فعالیت حرفه ای خود را از سال 1389 آغاز کرده ایم و تا به امروز توانسته ایم با ارائه خدمات در بهترین سطح کیفیت ممکن، بیش از 500 پروژه موفق را رقم بزنیم. پس قبل از راه اندازی و گسترش کسب و کار آنلاین ابتدا تحقیق کنید و اگر نیاز به یک سایت زیبا و استاندارد، کاملا ریسپانسیو و بهینه برای موتورهای جست و جو و تولیدمحتوای اصولی و متناسب با کسب و کار خودتان داشتید با کارشناسان ما تماس بگیرید تا در رسیدن به مسیر موفقیت شما عزیزان را راهنمایی کنند.
          </span>
        </div>
        {/* img */}

        <div className='mb-12 overflow-hidden'> 
        {/* <WhyVector /> */}
        <img src='/img/why_utab_vector.webp' width="369.964" height="486.497" alt='whyutab'/>
        </div>
      </div>
      <div className='px-8 '>
        <WhyBack />
      
      </div >
      {/* why */}

    </div>
  )
}

export default Why