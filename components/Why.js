import React from 'react'
import WhyBack from '../public/img/why_utab_back.svg'
function Why() {
  return (
    <div className='' >
      {/* <div className='lg:bg-why bg-no-repeat bg-center  pb-28 -m-5'> */}
      <div className='  pb-28 sm:-m-5 m-3 '>
        {/* <img src='/img/why_utab_back.webp' className='absolute -z-40 w-screen p-28  -left-1 -mt-36' /> */}
        <div className=' rounded-[2.5rem] sm:skew-y-3 sm:-skew-x-3 rotate-[1deg]    bg-redprimary'>
          <div className='grid sm:grid-cols-2 grid-cols-1 bg-white -rotate-[1deg]   sm:-skew-y-3 sm:skew-x-3 rounded-[2.5rem] lg:mx-[3rem]
    lg:px-0 md:px-16  shadow-lg space-x-4   sm:m-0 items-center '
          >
            {/* inmg responsive */}
            <div className='mb-12 sm:hidden flex '>
              {/* <WhyVector /> */}
              {/* <img src='/img/why_utab_vector.webp' width="369.964" height="486.497" alt='whyutab' /> */}
              <img src='/img/success.webp' className='p-6 -mb-10' alt='whyutab' />
              {/* title */}
            </div>
            {/* text */}
            <div className='flex flex-col p-[24px]     space-y-5'>
              {/* title */}
              <div className='flex flex-row-reverse space-x-2 space-x-reverse'>
                <p className='font-bold text-2xl'> چرا </p>
                <p className='text-redprimary font-bold text-2xl  ' dir='ltr'>یوتاب پارس</p>
              </div>

              {/* disc */}
              <span dir='rtl' className='text-justify leading-8 text-md lg:line-clamp-6 xl:line-clamp-none  md:line-clamp-6 sm:line-clamp-none'>
                آژانس دیجیتال مارکتینگ یوتاب پارس نامی آشنا در زمینه راه اندازی کسب و کار آنلاین و ارائه خدمات دیجیتال مارکتینگ هست. کادر مجرب و حرفه ای یوتاب پارس همواره تلاش داشته کیفیت خدمات خود را در سطح بالا و مطابق با استاندارد های روز جهان منطبق کند. به همین سبب با کسب رضایت حداکثری مشتریان، یوتاب پارس به برندی محبوب و قابل اطمینان تبدیل شده است. ما فعالیت حرفه ای خود را از سال 1389 آغاز کرده ایم و تا به امروز توانسته ایم با ارائه خدمات در بهترین سطح کیفیت ممکن، بیش از 500 پروژه موفق را رقم بزنیم. پس قبل از راه اندازی و گسترش کسب و کار آنلاین ابتدا تحقیق کنید و اگر نیاز به یک سایت زیبا و استاندارد، کاملا ریسپانسیو و بهینه برای موتورهای جست و جو و تولیدمحتوای اصولی و متناسب با کسب و کار خودتان داشتید با کارشناسان ما تماس بگیرید تا در رسیدن به مسیر موفقیت شما عزیزان را راهنمایی کنند.
              </span>
            </div>
            {/* img */}

            <div className='mb-12 hidden sm:flex '>
              {/* <WhyVector /> */}
              {/* <img src='/img/why_utab_vector.webp' width="369.964" height="486.497" alt='whyutab' /> */}
              <img src='/img/success.webp' className='p-16' alt='whyutab' />
            </div>
          </div>
        </div>

        {/* why */}

        {/* <div className='grid sm:grid-cols-2 grid-cols-1 bg-white rounded-[2.5rem] xl:mx-[14rem] lg:mx-[3rem]
    lg:px-0 md:px-16  shadow-lg space-x-12  m-3 sm:m-0 items-center '
      >   */}

      </div >
    </div>
  )
}

export default Why