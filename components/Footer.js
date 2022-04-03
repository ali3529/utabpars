import React from 'react'
import FooterBG from '../public/img/footer_bg.svg'
function Footer() {
    const socialItem = [
        // '/img/ic_instagram.svg',
        // '/img/ic_linkedin.svg',
        // '/img/ic_facebook.svg',
        '/img/social/ic_facebook.svg',
        '/img/social/ic_linkedin.svg',
        '/img/social/ic_instagram2.svg',
        '/img/social/ic_telegram.svg',
        '/img/social/ic_whatsapp.svg',
        '/img/social/ic_twitter.svg'
    ]
    return (
        <div id='footer'>
            <div className='mt-24  md:flex hidden flex-col  bg-[#EBEBEB] font-[sans] ' >
                <div className='bg-redprimary w-full py-2 flex '>

                </div>
                <div className=' overflow-hidden relative '>

                    <div dir='rtl' className=' xl:px-16   '>
                        {/* items */}
                        <div className=' grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1  text-white mt-7  '>
                            <div className='flex flex-col justify-center lg:mt-12 lg:m-3'>
                                <div className='flex flex-row space-x-2 space-x-reverse '>
                                    <p className='font-bold xl:text-2xl lg:text-xl text-darkblue'> یوتاب </p>
                                    <p className='text-redprimary font-bold xl:text-2xl lg:text-xl  ' dir='ltr'> پارس</p>
                                </div>
                                <div className=' text-black cursor-pointer xl:text-lg '>
                                    <p className='hover:text-black mb-3'> خدمات این پکیج شامل : طراحی و پیاده سازی اصول جذب آن  تدوین استراتژی محتوایی و انتشار  آن در زمان</p>

                                    <div className='flex flex-row space-x-1 space-x-reverse mb-3'>
                                        <span className='font-bold  '>آدرس :</span>
                                        <p className='hover:text-black'>   شیراز ، خیابان اردیبهشت شرقی ، برجIT ، طبقه دوم ، واحد26 ، یوتاب پارس</p>

                                    </div>
                                    <div className='flex flex-row space-x-3 space-x-reverse'>
                                        <span className='font-bold '>ایمیل :</span>
                                        {/* <p className='hover:text-black'>info@utabpars.com</p> */}
                                        <a href='mailto:info@utabpars.com'><span className='hover:text-redprimary'>info@utabpars.com</span></a>

                                    </div>

                                    <div className='flex flex-row space-x-3 space-x-reverse'>
                                        <span className='font-bold '>تلفن :</span>
                                        <ul className='flex flex-row space-x-5 space-x-reverse '>
                                            <a href='tel:07191013320'><li className='hover:text-redprimary '>07191013320</li></a>
                                            <a href='tel:07191013320'><li className='hover:text-redprimary'>09378451002</li></a>
                                            {/* <li className='hover:text-black'>07191013320</li> */}
                                            {/* <li className='hover:text-black' >09378451002</li> */}
                                        </ul>
                                    </div>
                                    <div className=' py-2 flex space-x-5 space-x-reverse justify-start mt-3 '>
                                        {
                                            socialItem.map((item, index) =>
                                                <img key={index} src={item} alt='instagram' width={'100%'} height={'100%'} className=' text-darkblue w-[35px]
                                                      cursor-pointer transition-all duration-500
                                                      hover:-translate-y-4  hover:scale-125 ' />
                                            )
                                        }

                                    </div>

                                    <div className=' py-2 flex space-x-5 space-x-reverse justify-start mt-3 '>
                                        <div className='flex flex-col'>
                                            <label className='text-sm mb-2'>برای  دریافت تخفیف های جدید ایمیل خود را وارد کنید</label>
                                            <input placeholder='عضویت خبرنامه' className=' text-sm  bg-white rounded-xl h-[2.5rem] text-right p-3 text-gray-500 border-none' />

                                        </div>
                                        <button className='bg-gray-500 text-sm rounded-xl w-20 mt-8 self-center text-white p-2 transition-all ease-out hover:scale-110'>عضویت</button>

                                    </div>


                                </div>
                            </div>
                            <div className='flex flex-col justify-center text-lg items-center' >
                                <p className='text-black font-bold text-2xl lg:mb-5 mb-1 '>خدمات یوتاب پارس</p>
                                <ul className='lg:space-y-3 md:space-y-0 select-none  text-gray-700 sm:cursor-pointer '>
                                    <li className='hover:text-black'>طراحی وبسایت</li>
                                    <li className='hover:text-black'>طراحی اپلیکیشن موبایل</li>
                                    <li className='hover:text-black'>سئو بهینه سازی</li>
                                    <li className='hover:text-black'>دیجیتال مارکتینگ</li>
                                    <li className='hover:text-black'>گرافیک و مولتی مدیا</li>
                                </ul>
                            </div>

                            <div className='lg:flex flex-col justify-center text-lg items-center hidden'>
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
                    <div className=' mx-32 -my-24  absolute sm:invisible lg:visible '>
                        <img src='/img/utabpars.svg' alt='utabpars' width="100%" height="100%" className='scale-[5]  rotate-[18deg] opacity-[0.1]' />
                    </div>
                    <div className='mb-3'  >
                        <div className=''></div>

                        <div className='text-center flex flex-row-reverse  justify-center text-sm space-x-1 space-x-reverse' >
                            <p> کپی رایت © 1400. همه حقوق محفوظ است</p>
                            <a className="mx-1 text-redutab" href="https://www.utabpars.com">یوتاب پارس</a>
                        </div>
                    </div>
                </div>


                {/* <FooterBG className='w-full h-full ' /> */}
            </div>











            {/* mobilde respnsive */}
            <div className='flex flex-col md:hidden '>
                <div className=' py-1 flex bg-redprimary'></div>
                <div className='bg-[#EBEBEB] w-screen flex flex-col items-center'>
                    <img src='/img/utabpars.svg' alt='utabpars' width='100%' height='100%' className='w-36 ' />
                    <div className='flex flex-col items-center '>
                        <div className='flex flex-row  space-x-reverse '>
                            <p className='text-redprimary font-bold text-3xl m-1 ' dir='ltr'> پارس</p>
                            <p className='font-bold text-3xl m-1  text-darkblue'> یوتاب </p>

                        </div>
                        {/* utabpars */}
                        <div dir='rtl' className=' text-black r text-justify m-3 text-lg '>
                            <p className='hover:text-black mb-3 mt-3'> خدمات این پکیج شامل : طراحی و پیاده سازی اصول جذب آن  تدوین استراتژی محتوایی و انتشار  آن در زمان</p>
                            <div>
                                <div className='flex flex-col mb-3 items-center mt-10'>
                                    <span className='font-bold  '>آدرس </span>
                                    <p className='hover:text-black'>   شیراز ، خیابان اردیبهشت شرقی ، برجIT ، طبقه دوم ، واحد26 ، یوتاب پارس</p>

                                </div>
                                <div className='flex flex-col items-center mt-4'>
                                    <span className='font-bold '>ایمیل </span>
                                    <p className='hover:text-black'>info@utabpars.com</p>
                                </div>

                                <div className='flex flex-col items-center mt-8'>
                                    <span className='font-bold '>تلفن :</span>
                                    <ul className='flex flex-col'>
                                        <a href='tel:07191013320'><li className='hover:text-redprimary '>07191013320</li></a>
                                        <a href='tel:07191013320'><li className='hover:text-redprimary'>09378451002</li></a>
                                        {/* <li className='hover:text-black'>07191013320</li>
                                        <li className='hover:text-black' >09378451002</li> */}
                                    </ul>
                                </div>
                                <div className=' py-2 flex space-x-5 space-x-reverse justify-center mt-3 '>
                                    {
                                        socialItem.map((item, index) =>
                                            <img key={index} src={item} alt='social' className=' text-darkblue w-[40px]
                                                       transition-all duration-500
                                                      hover:-translate-y-4  hover:scale-125' />
                                        )
                                    }

                                </div>
                            </div>

                        </div>
                        {/* service */}
                        <div className='flex flex-col  text-lg items-center ' >
                            <p className='text-black font-bold text-3xl mt-6 '>خدمات یوتاب پارس</p>
                            <ul dir='rtl' className='space-y-3 mt-3 select-none sm:cursor-pointer text-center '>
                                <li className='hover:text-black'>طراحی وبسایت</li>
                                <li className='hover:text-black'>طراحی اپلیکیشن موبایل</li>
                                <li className='hover:text-black'>سئو بهینه سازی</li>
                                <li className='hover:text-black'>دیجیتال مارکتینگ</li>
                                <li className='hover:text-black'>گرافیک و مولتی مدیا</li>
                            </ul>
                        </div>
                        {/* importent link */}
                        <div dir='rtl' className='flex flex-col  text-lg items-center mt-6 '>
                            <p className='text-black font-bold text-3xl mb-3 '>لینک های مهم</p>
                            <ul className='space-y-3 select-none   text-gray-700 sm:cursor-pointer '>
                                <li className='hover:text-black'>پروژه ها</li>
                                <li className='hover:text-black'>تیم ما</li>
                                <li className='hover:text-black'>کارها</li>
                                <li className='hover:text-black'>مشتریان</li>
                            </ul>
                        </div>

                        {/* copy right */}
                        <div  >
                            <div className=' border-t-2 border-dashed  mt-6 border-gray-400'></div>

                            <div className='text-center text-sm  flex flex-col mt-6'>
                                <p> کپی رایت © 1400. همه حقوق محفوظ است

                                </p>
                                <a className="mx-1 text-redutab" href="https://www.utabpars.com">یوتاب پارس</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer