import React from 'react'

function Blog() {
    const numbers = [1, 2, 3, 4, 5];
    return (
        <div id='blog' className='mt-12 py-12 sm:px-12 px-3'>

            {/* title */}
            <div className='flex flex-row-reverse space-x-2 space-x-reverse justify-center'>
                <p className='font-bold text-2xl'> بلاگ </p>
                <p className='text-redprimary font-bold text-2xl  ' dir='ltr'>یوتاب پارس</p>
            </div>

            <div className='grid  sm:grid-cols-2 grid-cols-1  mt-5 sm:space-x-6'>
                {/* blog big */}
                <div className='text-right shadow-md rounded-[2.5rem]  shadow-gray-300 py-6 px-5 sm:mx-8'>
                    {/* img */}
                    <div className='py-2'>
                        <img src='/img/tt.webp' className='rounded-[2rem] 'alt='blog' width="100%" height="100%"  />
                    </div>
                    {/* title */}
                    <p className='text-[#030080] text-lg font-semibold mb-3 mt-4'>آنالیز سئو سایت</p>
                    {/* descrip */}
                    <span className='text-gray-800'>
                        آژانس دیجیتال مارکتینگ یوتاب پارس نامی آشنا در زمینه راه اندازی کسب و کار آنلاین و ارائه خدمات دیجیتال مارکتینگ هست. کادر مجرب و حرفه ای یوتاب پارس همواره تلاش داشته کیفیت خدمات خود را در سطح بالا و مطابق با استاندارد های روز جهان منطبق کند. به همین سبب با کسب رضایت حداکثری مشتریان، یوتاب پارس به برندی محبوب و قابل اطمینان تبدیل شده است. ما
                    </span>
                </div>

                {/* blog list */}
                <div>
                    {
                        numbers.map((item,index) =>
                            <div key={index} className='shadow-md text-right rounded-[2.3rem] shadow-gray-200 p-5 mb-1 '>
                                {/* title */}
                                <p className='text-[#030080] text-lg font-semibold mb-3'>آنالیز سئو سایت</p>
                                {/* date */}
                               <div className='flex flex-row-reverse justify-between'>
                               <span className='text-gray-400 text-lg'> 1400/03/05 13:32/02</span>
                                <img src='/img/ic_arrow.svg'  width="33px" height="25px" alt='arrow' className='transition-all hover:-translate-x-3 hover:scale-125 sm:cursor-pointer mx-3'/>
                               </div>
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    )
}

export default Blog