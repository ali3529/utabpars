import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeadU from '../components/HeadU'


function template(props) {

  // const templateList = [
  //   {
  //     title: 'آنالیز سئو سایت',
  //     discrip: ' آژانس دیجیتال مارکتینگ یوتاب پارس نامی آشنا در زمینه راه اندازی کسب و کار آنلاین و ارائه خدمات دیجیتال مارکتینگ هست. کادر مجرب و حرفه ای یوتاب پارس همواره تلاش داشته کیفیت خدمات خود را در سطح بالا و مطابق با استاندارد های روز جهان منطبق کند. به همین سبب با کسب رضایت حداکثری مشتریان، یوتاب پارس به برندی محبوب و قابل اطمینان تبدیل شده است. ما',
  //     content: '',
  //     img: '/img/tt.webp',
  //   },
  //   {
  //     title: 'آنالیز سئو سایت',
  //     discrip: ' آژانس دیجیتال مارکتینگ یوتاب پارس نامی آشنا در زمینه راه اندازی کسب و کار آنلاین و ارائه خدمات دیجیتال مارکتینگ هست. کادر مجرب و حرفه ای یوتاب پارس همواره تلاش داشته کیفیت خدمات خود را در سطح بالا و مطابق با استاندارد های روز جهان منطبق کند. به همین سبب با کسب رضایت حداکثری مشتریان، یوتاب پارس به برندی محبوب و قابل اطمینان تبدیل شده است. ما',
  //     content: '',
  //     img: '/img/tt.webp',
  //   },
  //   {
  //     title: 'آنالیز سئو سایت',
  //     discrip: ' آژانس دیجیتال مارکتینگ یوتاب پارس نامی آشنا در زمینه راه اندازی کسب و کار آنلاین و ارائه خدمات دیجیتال مارکتینگ هست. کادر مجرب و حرفه ای یوتاب پارس همواره تلاش داشته کیفیت خدمات خود را در سطح بالا و مطابق با استاندارد های روز جهان منطبق کند. به همین سبب با کسب رضایت حداکثری مشتریان، یوتاب پارس به برندی محبوب و قابل اطمینان تبدیل شده است. ما',
  //     content: '',
  //     img: '/img/tt.webp',
  //   },
  // ]
  return (
    <>
      <HeadU />
      <div className='container xl:px-[120px] font-[sans]  '>
        <Header />
        <div className='flex flex-col mt-20'>
          <p className='text-[26px] font-bold text-center  '>نمونه کار</p>

          {/* itms */}
          <div className='grid  sm:grid-cols-3 grid-cols-1  mt-5 '>
            {/* template big */}
            {
              props.templates.map((item, index) =>
                <div key={index} className='text-right shadow-md rounded-[2.5rem]  shadow-gray-300 py-6 px-3 sm:mx-8 mb-12'>
                  {/* img */}
                  <div className='py-2'>
                    <img src={item.image} className='rounded-[2rem] w-full h-[310px] hover:scale-125 transition-all duration-300 cursor-pointer'
                     title={item.meta_title}
                      // alt={item.meta_descriptio}
                       placeholder='/img/tt.webp' alt='blog' width="340px" height="340px" />
                  </div>
                  {/* title */}
                  <a href={item.temurl}>
                    <p className='text-[#030080] text-lg font-semibold mb-3 mt-4 cursor-pointer hover:scale-105 transition-all duration-300' >{item.title}</p>
                  </a>
                  {/* descrip */}
                  <span className='text-gray-800 line-clamp-2 mt-6'> {item.dicription}</span>
                </div>)
            }
          </div>

          {/* see more button */}
          <div className='flex justify-center mt-16'>

            <button className='bg-[#FAE0E0] rounded-lg py-2 px-5 hover:scale-125 transition-all '>مشاهده بیشتر</button>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  let res = await fetch('https://anitaclinic.ir/api/v1/templates', {
    headers: new Headers({
      'x-api-key': '6ARP7J0Vb9PahXabw9jIZzn1Jzcx7XojEkuqYdWL'
    }),
  });

  let templates = await res.json()
  return {
    props: {
      templates: templates.result.data
    }
  }
}
export default template