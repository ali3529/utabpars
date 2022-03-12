import React from 'react'
import SuggestBG from '../public/img/suggest_bg.svg'
function Suggest() {
    const cardData = [
        {
            title: "پکیج جامع خدمات سئو",
            descrip: " خدماتی که در این پکیج ارائه میشود شامل: مشاوره و آنالیز سئو سایت، تحقیق کلمات کلیدی ، بهینه سازی در ساختار سایت و کدنویسی،استراتژی تولید بک لینک، استراتژی تولید محتوای تخصصی،پیاده سازی و اجرای حرفه ای عملیات و ارائه گزارش تحلیل سئو با استفاده از ابزارهای alexa, gtmetrix, moz, search console و... میباشد."
            , url: '/website',
            img: '/img/pakage_seo.webp ',
        },

        {
            title: "پکیج خدمات مدیریت پیج اینستاگرام",
            descrip: "خدمات این پکیج شامل: طراحی و پیاده سازی اصول برندینگ در اینستاگرام، شناسایی رفتار مخاطب هدف و جذب آن، تدوین استراتژی محتوایی و انتشار آن در زمان پربازده، طراحی هویت بصری پیج متناسب با سلیقه مخاطب، تولید محتوای وایرال پذیر، استوری مارکتینگ، لانچ تبلیغات گسترده و اینفلوئنسر مارکتینگ در رسانه های پر مخاطب اینستاگرام میباشد."
            , url: '/seo',
            img: '/img/pakage_insta.webp',
        },
        {
            title: "پکیج جامع خدمات تولید محتوا",
            descrip: "در پکیج جامع خدمات تولید محتوا پس از آنالیز و تحلیل رقبای کسب و کار شما یک استراتژی منظم و اصولی برای تولید محتوای شما تنظیم میشود و سپس تولید محتوا بر اساس استراتژی طراحی شده در قالب های مختلف محتوای متنی، محتوای صوتی، محتوای تصویری و محتوای ویدیویی متناسب با وبسایت و شبکه های اجتماعی موردنظر، به شما ارائه میشود "
            , url: '/content_product',
            img: '/img/pakage_content.webp',

        },

    ]
    return (
        <div className='sm:mt-28  lg:mt-30'>


            {/* title */}
            <div className=' flex justify-center  '>
                <div className='flex flex-col items-center'>
                    <p className='text-xl font-bold'>پیشنهاد های ویژه</p>
                    <span className=' border-[3px] border-redprimary bg-redmain mt-2 w-14 rounded-xl '></span>
                    <span className=' border-[3px] border-redprimary bg-redmain mt-2 w-24 rounded-xl'></span>
                </div>

            </div>
            <div dir='rtl' className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 mt-10'>
                {
                    cardData.map((item, index) =>
                        <div key={index} className=' shadow-md rounded-[3rem] m-3 bg-ff bg-local bg-top bg-no-repeat'>

                            <diV dir='rtl' className=''>
                                {/* image */}
                                <div className=' rounded-t-xl overflow-hidden '>


                                    <img src={item.img} className='w-30 h-40 m-10 ' width="40%" height="160" alt='suggest' />
                                </div>

                            </diV>
                            {/* title */}
                            <p className='text-center text-lg  font-bold mb-4'>پکیج خدمات مدیریت پیج اینساگرام</p>

                            {/* discrib */}
                            <div className='mx-10 text-justify'>
                                <p dir='rtl' className='text-justify leading-6 text-gray-800 -py-6 mb-4'>خدمات این پکیج شامل: طراحی و پیاده سازی اصول برندینگ در اینستاگرام، شناسایی رفتار مخاطب هدف و جذب آن، تدوین استراتژی محتوایی و انتشار آن در زمان پربازده، طراحی هویت بصری پیج متناسب با سلیقه مخاطب، تولید محتوای وایرال پذیر، استوری مارکتینگ، لانچ تبلیغات گسترده و اینفلوئنسر مارکتینگ در رسانه های پر مخاطب اینستاگرام میباشد. </p>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Suggest