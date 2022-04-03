import React from 'react'

function AboutItem() {
    return (
        <div>

            <div className='lg:px-20 px-10 lg:mt-12 mt-64 md:mt-0'>
                {/* frist */}
                <div>
                    <div>
                        <p className='text-center text-[26px] font-bold md:mb-3 mb-8'>درباره ما</p>
                    </div>
                    <div className='flex lg:flex-row flex-col justify-between '>
                        <div className='text-right lg:w-2/4 lg:-ml-16 '>
                            <p className='mb-4 lg:text-[1rem] lg:font-normal text-xl font-medium'>تاریخچه یوتاب پارس </p>
                            <span className='md:leading-loose '>
                                .فعالیت یوتاب پارس از سال ۸۹ در زمینه طراحی وبسایت و اپلیکیشن آغاز شد
                                و با گسترش استارت آپ ها پا در عرصه دیجیتال مارکتینگ گذاشت. و با کلید
                                خوردن بیش از ۵۰۰ پروژه موفق به جرات می توان گفت در این عرصه حرفی برای
                                گفتن داریم.
                                تک تک اغضای تیم ما با دقت خاص انتخاب شدند روزانه در حال دنبال کردن متدها
                                .و شیوه های بین المللی هستند تا کیفیت خدمات را در سطح بین المللی نگه داریم
                                تیم ما بیش از ده سال تجربه در زمینه طراحی سایت و راه اندازی کسب و کار آنلاین
                                انواع خدمات را در زمینه سئو و بهینه سازی سایت تولید محتوای حرفه ای
                                مشاوره کسب و کار ، مدیریت شبکه های اجتماعی طراحی اپلیکیشن را در
                                سطح حرفه ای به شما مشتریان عزیز ارائه میدهیم
                            </span>
                        </div>
                        <img src='/img/about/border_about.svg ' className=' lg:-ml-[35rem] lg:flex hidden ' alt='utabpars' />

                        <div className=' lg:w-[35%]'>
                            <img src='/img/success.webp' alt='whyutab' className='lg:-ml-16' />
                        </div>
                    </div>
                </div>
                {/* second */}
                <div className='flex lg:flex-row flex-col-reverse justify-between lg:mt-4 lg:mx-14 mx-0 mt-12 '>
                    <div className=' lg:w-[30%] '>
                        <img src='/img/success.webp' alt='whyutab' className='' />
                    </div>
                    <div className='lg:w-1/2 leading-loose text-right'>
                        <p className='lg:text-[1rem] lg:font-normal text-xl font-medium mb-4' >یوتاب پارس، اعتماد و نوآوری </p>
                        <span>
                            آژانس دیجیتال مارکتینگ یوتاب پارس نامی آشنا در عرصه طراحی سایت
                            طراحی اپلیکیشن ،سئو و بهینه سازی ، تولید محتوا ،... و خدمات
                            دیجیتال مارکتینگ است. یوتاب پارس افتخار همکاری با برند های معتبر و موفق
                            .و کسب رضایت ایشان را دارد
                            تیم مجرب وحرفه ای یوتاب پارس همواره تلاش داشته که سطح کیفیت خدمات
                            خود را استانداردهای روز جهان نگه دارد از این رو یوتاب پارس تبدیل به یک برند
                            .قابل اعتماد و پیشرو در این زمینه تبدیل شده است
                        </span>
                    </div>
                </div>

                {/* threeed */}
                <div>
                    <div className='flex lg:flex-row flex-col justify-between mt-24 '>
                        <div className='text-right lg:w-2/4 lg:-ml-16 '>
                            <p className='mb-4 lg:text-[1rem] lg:font-normal text-xl font-medium '>تاریخچه یوتاب پارس </p>
                            <span className='leading-loose'>
                                .فعالیت یوتاب پارس از سال ۸۹ در زمینه طراحی وبسایت و اپلیکیشن آغاز شد
                                و با گسترش استارت آپ ها پا در عرصه دیجیتال مارکتینگ گذاشت. و با کلید
                                خوردن بیش از ۵۰۰ پروژه موفق به جرات می توان گفت در این عرصه حرفی برای
                                گفتن داریم.
                                تک تک اغضای تیم ما با دقت خاص انتخاب شدند روزانه در حال دنبال کردن متدها
                                .و شیوه های بین المللی هستند تا کیفیت خدمات را در سطح بین المللی نگه داریم
                                تیم ما بیش از ده سال تجربه در زمینه طراحی سایت و راه اندازی کسب و کار آنلاین
                                انواع خدمات را در زمینه سئو و بهینه سازی سایت تولید محتوای حرفه ای
                                مشاوره کسب و کار ، مدیریت شبکه های اجتماعی طراحی اپلیکیشن را در
                                سطح حرفه ای به شما مشتریان عزیز ارائه میدهیم
                            </span>
                        </div>

                        <img src='/img/about/border_about.svg ' className=' -mr-[20rem]  rotate-180 -mt-24 lg:flex hidden' alt='utabpars' />
                        <div className=' lg:w-[35%]'>
                            <img src='/img/success.webp' alt='whyutab' className='lg:-ml-12 lg:mb-0 mb-6' />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutItem