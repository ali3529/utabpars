import React, { useState } from 'react'

function LeaderShip() {
    return (
        <div id='advice' className=' transition-all duration-200 ease-linear mt-10'>
            <div className='grid sm:grid-cols-2 grid-cols-1 lg:mx-[3rem]
                  lg:px-0 md:px-16  space-x-4   sm:m-0 items-center '
            >
                {/* field */}
                <div className='flex flex-col items-center p-6   '>
                    {/* title */}
                    <h2 className='font-bold text-2xl'>مشاوره و راهنمایی</h2>
                    {/* field */}
                    <div dir='rtl' className='bg-white mt-5 w-full rounded-3xl flex flex-col  '>
                        <div className='mx-5 my-1 text-xl flex flex-col p-3 space-y-3 space-x-reverse mt-4'>
                            <label className='px-8 text-[16px] ' >نام و نام خانوادگی</label>
                            <input className=' outline-none bg-[#f9f9f9] text-[20px] rounded-xl h-[4.1rem] mx-4 text-right p-3  text-gray-400 border-none' />
                        </div>
                        <div className='mx-5 my-1 text-xl flex flex-col p-3 space-y-3 space-x-reverse'>
                            <label className='px-8 text-[16px]' >شماره تماس</label>
                            <input type={'number'} className='outline-none text-[20px]  mx-4 m-0 bg-[#f9f9f9] rounded-xl h-[4.1rem] text-right p-3 text-gray-400 border-none' />
                        </div>
                        <div className='mx-5 my-1 text-xl flex flex-col p-3 space-y-3   space-x-reverse'>
                        
                                <label className='px-8 text-[16px]' >نوع سفارش</label>
                           
                            <select name="cars" id="cars" className='outline-none mx-4 bg-[#f9f9f9] rounded-xl h-[4.1rem] text-right 
                             p-3 text-gray-500 border-none cursor-pointer text-[20px] -px-4 '>
                                <option className='text-sm ' value="1">طراحی وبسایت</option>
                                <option className='text-sm ' value="2">سئو و بهینه سازی سایت</option>
                                <option className='text-sm ' value="3">طراحی اپلیکیشن</option>
                                <option className='text-sm ' value="4">تواید محتوا</option>
                            </select>
                            {/* <input className=' bg-white rounded-xl h-[4.5rem] text-right p-3 text-gray-500 border-none' /> */}
                        </div>
                        <div className='mx-5 my-1 text-xl flex flex-col p-3 space-y-4 space-x-reverse'>
                            <button className='bg-redprimary rounded-2xl w-60 self-center text-white p-3 transition-all ease-out hover:scale-110'>ثبت مشاوره</button>
                        </div>

                    </div>
                </div>

                {/* img */}

                <div className='mb-12 hidden md:flex'>
                    {/* <WhyVector /> */}
                    {/* <img src='/img/why_utab_vector.webp' width="369.964" height="486.497" alt='whyutab' /> */}
                    <img src='/img/advice_pic-min.webp' className='p-28 mt-20' alt='leadership' />
                    <img src='/img/1.png' className='p-20 mt-20 absolute w-96 -z-50' alt='leadership' />
                </div>
            </div>

        </div>
    )
}

export default LeaderShip