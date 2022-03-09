import React from 'react'
import FooterBG from '../public/img/footer_bg.svg'
function Footer() {
    return (
        <div>
            <div className='mt-24 h-[450px] w-full ' >
                <FooterBG className='absolute -z-40 w-full' />
                <div className='overflow-hidden h-full relative'>
                    <div dir='rtl' className=' h-[80%] px-32 py-32 p-12'>
                        {/* items */}
                        <div className=' grid  grid-cols-3  text-white '>
                            <div className='mx-4 px-4 flex flex-col justify-center '>
                                <div className='flex flex-row space-x-2 space-x-reverse mb-3'>
                                    <p className='font-bold text-2xl text-darkblue'> یوتاب </p>
                                    <p className='text-redprimary font-bold text-2xl  ' dir='ltr'> پارس</p>
                                </div>
                                <div className='space-y-3 text-black cursor-pointer text-lg '>
                                    <p className='hover:text-black'> خدمات این پکیج شامل : طراحی و پیاده سازی اصول جذب آن  تدوین استراتژی محتوایی و انتشار  آن در زمان</p>
                                    <img src='/img/ic_insta.svg' alt='instagram' width="35" height="35" className='text-darkblue' />
                                    <div className='flex flex-row space-x-3 space-x-reverse'>
                                        <span className='font-bold '>آدرس :</span>
                                        <p className='hover:text-black'>   شیراز ، خیابان اردیبهشت شرقی ، برجIT ، طبقه دوم ، واحد26 ، یوتاب پارس</p>

                                    </div>
                                    <div className='flex flex-row space-x-3 space-x-reverse'>
                                        <span className='font-bold '>ایمیل :</span>
                                        <p className='hover:text-black'>info@utabpars.com</p>
                                    </div>

                                    <div className='flex flex-row space-x-3 space-x-reverse'>
                                        <span className='font-bold '>تلفن :</span>
                                        <ul className='flex flex-row space-x-5 space-x-reverse '>
                                            <li className='hover:text-black'>07191013320</li>
                                            <li className='hover:text-black' >09378451002</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className='flex flex-col justify-center text-lg items-center' >
                                <p className='text-black font-bold text-2xl mb-5 '>خدمات یوتاب پارس</p>
                                <ul className='space-y-3 select-none  text-gray-700 sm:cursor-pointer '>
                                    <li className='hover:text-black'>طراحی وبسایت</li>
                                    <li className='hover:text-black'>طراحی اپلیکیشن موبایل</li>
                                    <li className='hover:text-black'>سئو بهینه سازی</li>
                                    <li className='hover:text-black'>دیجیتال مارکتینگ</li>
                                    <li className='hover:text-black'>گرافیک و مولتی مدیا</li>
                                </ul>
                            </div>

                            <div className='flex flex-col justify-center text-lg items-center'>
                                <p className='text-black font-bold text-2xl mb-5 '>لینک های مهم</p>
                                <ul className='space-y-3 select-none   text-gray-700 sm:cursor-pointer '>
                                    <li className='hover:text-black'>پروژه ها</li>
                                    <li className='hover:text-black'>تیم ما</li>
                                    <li className='hover:text-black'>کارها</li>
                                    <li className='hover:text-black'>مشتریان</li>
                                </ul>
                            </div>


                        </div>

                    </div>
                    
                    {/* <div className=' mx-28 -my-24  absolute'> */}
                    <div className=' mx-32 -my-24  absolute'>
                        <img src='/img/utabpars.svg' alt='utabpars' width="100%" height="100%" className='scale-[5]  rotate-[18deg] opacity-[0.1]' />
                    </div>
                </div>
                <div >
                <div className="flex-grow border-t border-dashed border-gray-400 mb-5 "></div>
                     
                    <div className='text-center text-sm '><p> کپی رایت © 1400. همه حقوق محفوظ است<a className="mx-1 text-redutab" href="https://www.utabpars.com">یوتاب پارس</a></p></div>
                </div>

              

            </div>

        </div>
    )
}

export default Footer