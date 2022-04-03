import React from 'react'

function ServiceInfo() {
    const cardData = [
        {
            title: "طراحی وب ",
            descrip: "تیم مجرب و حرفه ای یوتاب پارس با استفاده از به روزترین تکنولوژی ها و زبان های مختلف برنامه نویسی در بالاترین سطح کیفیت، طراحی کاملا اختصاصی و خلاقانه و متناسب بافضای کسب وکار شما یک سایت کاملا حرفه ای را برایتان به ارمغان می آورد."
            , url: '/website',
            img: '/img/serviceinfo/ic_web.svg',
        },

        {
            title: "سئو و بهینه سازی",
            descrip: "طراحی سایت حرفه ای بدون انجام بهینه سازی و سئو مانند مغازه ایست که همیشه تعطیل هست و تابلویی ندارد! با اجرای تکنیک های سئو و بهینه سازی توسط کارشناسان سئوی یوتاب پارس، رسیدن به رتبه برتر گوگل را تجربه کنید."
            , url: '/seo',
            img: '/img/serviceinfo/ic_seo.svg',
        },
        {
            title: "تولید محتوا",
            descrip: "برای دیده شدن و جذب مخاطب هدف، نیازمند تولید محتوای سئو شده و حرفه ای متناسب با کسب و کار خودتان هستید. تیم یوتاب پارس انواع مختلف محتوای متنی، صوتی، تصویری و ویدیویی را با بالاترین کیفیت برای وبسایت و صفحات مجازی شما تولید میکند."
            , url: '/content_product',
            img: '/img/serviceinfo/ic_content.svg',

        },
        {
            title: "مدیریت پیچ اینستاگرام",
            descrip: "بخش زیادی از مخاطبان هدف شما، کاربران شبکه های اجتماعی مثل اینستاگرام هستند. در نتیجه بیشترین نیازکسب و کار شما بازاریابی اینستاگرامی میباشد. تیم سوشال مدیای یوتاب پارس با برنامه ریزی دقیق بر اساس الگوریتم های به روز اینستاگرام برای افزایش فالوور و   ."
            , url: '/manage_insta'
            , img: '/img/serviceinfo/ic_instagram.svg',
        },
        {
            title: "دیجیتال مارکتینگ",
            descrip: "بازایابی دیجیتال شامل طیف گسترده ای از تکنیک ها و روشهای بازاریابی و همچنین تکنولوژی های مورد استفاده برای ارتباط گرفتن با مشتریان بلقوه و گرم نگه داشتن مشتریان فعلی است. تیم دیجیتال مارکتینگ یوتاب پارس با موفق در همین زمینه."
            , url: '/digital_marketing',
            img: '/img/serviceinfo/ic_digital.svg',
        },
        {
            title: "طراحی اپلیکیشن",
            descrip: "با داشتن یک اپلیکیشن کاربردی میتوانید ارتباط نزدیک تر و قوی تری با مشتریان و کاربران خود برقرار کنید. همچنین با طراحی یک اپلیکیشن اختصاصی میتوانید از رقبای خود پیشی بگیرید. تیم مجرب برنامه نویسی یوتاب پارس اپلیکیشن مورد نیاز شما را به شکل حرفه ای و         ."
            , url: '/app_design',
            img: '/img/serviceinfo/ic_app.svg',
        }
    ]

    return (
        <div id='service' className='sm:mb-32 mb-0 ' >
            {/* title */}
            <div className=' flex justify-center mt-10 mb-5 sm:mb-0'>
                <div className='flex flex-col items-center'>
                    <p className='text-2xl font-bold'>خدمات یوتاب پارس</p>
                    <span className=' border-[3px] border-redprimary bg-redmain mt-2 w-16 rounded-xl '></span>
                    <span className=' border-[3px] border-redprimary bg-redmain mt-2 w-28 rounded-xl'></span>
                </div>

            </div>

            <div dir='rtl' className=' grid lg:grid-cols-3 grid-cols-2 '>
                {

                    cardData.map((item, index) =>
                        <div key={index} className='cursor-pointer hover:-translate-y-7 ease-in-out duration-500 scale-100 
                        hover:scale-105  
                        transition-all   justify-center sm:my-10 xl:mb-16 xl:mt-8 '
                        >
                            <img className='-z-50 absolute' src='/img/serviceinfo/card_bg.webp ' alt='card' />
                            <div className='flex flex-col items-center   p-5 sm:mt-5 space-y-5 '>
                                {/* img */}
                                <img className='w-[87px] h-[87px] ' src={item.img} alt='serviceinfo' />
                                <div className='flex flex-col  space-y-3 items-center '>
                                    {/* title */}
                                    <div className='sm:text-lg text-md font-bold text-darkblue line-clamp-1'>{item.title}</div>
                                    {/* title */}
                                    <div dir='rtl' className='text-right text-sm leading-2 invisible sm:visible line-clamp-3 lg:leading-loose mx-3 sm:line-clamp-4 text-graytext '>{item.descrip}</div>
                                </div>
                            </div>

                        </div>)
                }
            </div>
        </div>
    )
}

export default ServiceInfo