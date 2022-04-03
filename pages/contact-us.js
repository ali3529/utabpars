import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeadU from '../components/HeadU'

function ContactUs() {
    return (
        <>
            <HeadU />

            <div className='container xl:px-[120px] font-[sans]  '>

                <Header />
                {/* img slider */}
                {/* <div className='flex flex-col items-center mt-12   brightness-75 lg:scale-100 md:scale-90 h-14 md:h-full '> */}
                <div className='flex flex-col items-center mt-12 '>
                  
                    <img className=' ' src='/img/contact-us/contact-us-img.webp' alt='contactslider' />
                  
                 
                </div>

                {/* write for us */}

                {/* input */}
                <div className='mt-32 lg:px-14 px-2'>
                    <div className='flex flex-col lg:flex-row  ' >
                        {/* field */}
                        <div className='flex flex-col  lg:p-6 p-2   '>
                            {/* field */}
                            <div dir='rtl' className='bg-white mt-5  rounded-3xl flex flex-col p-5  '>
                                <div className='flex lg:flex-row flex-col  py-5'>
                                    <div className='  text-xl flex flex-col  space-y-3 '>
                                        <label className='px-8 text-[16px] ' >نام و نام خانوادگی</label>
                                        <input className=' outline-none px-2 bg-[#f9f9f9] text-[20px] rounded-xl pb-8 md:mx-4 text-right   text-gray-400 border-none' />
                                    </div>
                                    <div className=' text-xl flex flex-col space-y-3 '>
                                        <label className='px-8 text-[16px]' >تلفن</label>
                                        <input type={'number'} className='outline-none text-[20px] px-2  bg-[#f9f9f9] rounded-xl pb-8  text-right  text-gray-400 border-none' />
                                    </div>
                                </div>

                                <div className='flex lg:flex-row flex-col   py-5'>
                                    <div className='  text-xl flex flex-col  space-y-3 '>
                                        <label className='px-8 text-[16px] ' >ایمیل</label>
                                        <input className=' outline-none px-2  bg-[#f9f9f9] text-[20px] rounded-xl pb-8  md:mx-4 text-right   text-gray-400 border-none' />
                                    </div>
                                    <div className=' text-xl flex flex-col space-y-3 '>
                                        <label className='px-8 text-[16px]' >موضوع</label>
                                        <input type={'number'} className='outline-none text-[20px] px-2   m-0 bg-[#f9f9f9] rounded-xl pb-8  text-right  text-gray-400 border-none' />
                                    </div>
                                </div>
                                <div className='flex-1 '>
                                    <div className='  text-xl flex flex-col  space-y-3 mx-4   '>
                                        <label className='px-8 text-[16px] ' >متن پیام</label>
                                        <textarea className=' outline-none p-2  bg-[#f9f9f9] text-[16px] rounded-xl pb-[4rem] text-top fix text-gray-400 border-none' />
                                    </div>
                                </div>

                                <div className='flex flex-row justify-between mt-8 px-5'>
                                    <button className='border-[3px]  border-dashed border-redprimary sm:px-10 rounded-xl 
                                        text-redprimary p-3 transition-all ease-out hover:scale-110'> افزودن فایل </button>

                                    <button className='bg-redprimary sm:px-10 rounded-xl 
                                        text-white p-3 transition-all ease-out hover:scale-110'>ثبت مشاوره</button>
                                </div>

                            </div>
                        </div>

                        {/* img */}

                        <div className='mb-12 hidden lg:flex'>
                            {/* <WhyVector /> */}
                            <div className='p-10'>
                                <h1 className='font-bold text-[26px] text-right 2xl:mx-10  '> برای ما بنویسید</h1>
                                <img src='/img/contact-us/tellpic.webp' className='mt-60 w-96 xl:mx-24 ' alt='leadership' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* map */}
                <div className='flex justify-center rounded-2xl mt-5'>
                    <iframe className='rounded-3xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.239259640881!2d52.52900018449009!3d29.625793445181674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb212169c11af55%3A0xd5fe286237e52865!2z2LTYsdqp2Kog24zZiNiq2KfYqCDZvtin2LHYsw!5e0!3m2!1sfa!2s!4v1648983084379!5m2!1sfa!2s"
                        width={1116} height={463} style={{ border: 0 }}
                        allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>



            <Footer />

        </>
    )
}

export default ContactUs