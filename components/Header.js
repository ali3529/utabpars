import React, { useState, useEffect } from 'react'
import { Transition } from '@tailwindui/react'
function Header() {
    const [collapseMenu, setcollapseMenu] = useState(false)
    const item = [
        {
            title: "صفحه نخست",
            url: "/test",
            img: <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.028"
                height="23.829"
                viewBox="0 0 24.028 23.829"
            >
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7.04 22.821l10 .007-11-.123a5.863 5.863 0 01-3.018-1.049 3.894 3.894 0 01-1.272-2.348 30.521 30.521 0 01-.513-10 1.838 1.838 0 01.128-.181 8.216 8.216 0 01.675-.736c.6-.6 1.445-1.33 2.4-2.124 1.923-1.576 4.244-3.344 5.937-4.604a2.869 2.869 0 013.427-.008c1.706 1.259 4.048 3.025 5.967 4.61.962.795 1.8 1.529 2.394 2.123a7.282 7.282 0 01.653.725c.048.064.079.111.1.144a38.532 38.532 0 01-.5 10.072 3.707 3.707 0 01-1.244 2.334 5.939 5.939 0 01-3.039 1.042q-.547.068-1.089.125v-6.625a3.147 3.147 0 00-3-3H10.04a3.147 3.147 0 00-3 3v6.575l-1.3-.111zM1.22 9.344v-.006zm21.72-.042v-.007z"
                ></path>
            </svg>
        },
        {
            title: "نمونه کار ها",
            url: "https://utabpars.com/portfolio.php",
            img: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>

        },
        {
            title: "بلاگ",
            url: "https://utabpars.com/blog/",
            img: <svg className="dark:text-white text-gray-800  h-6 w-6" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11C1 13.2418 1.12143 14.975 1.42108 16.3234C1.71821 17.6603 2.17712 18.5568 2.81017 19.1898C3.44322 19.8229 4.33967 20.2818 5.67664 20.5789C7.02497 20.8786 8.7582 21 11 21C13.2418 21 14.975 20.8786 16.3234 20.5789C17.6603 20.2818 18.5568 19.8229 19.1898 19.1898C19.8229 18.5568 20.2818 17.6603 20.5789 16.3234C20.8786 14.975 21 13.2418 21 11C21 8.7582 20.8786 7.02497 20.5789 5.67664C20.2818 4.33967 19.8229 3.44322 19.1898 2.81017C18.5568 2.17712 17.6603 1.71821 16.3234 1.42108C14.975 1.12143 13.2418 1 11 1C8.7582 1 7.02497 1.12143 5.67664 1.42108C4.33967 1.71821 3.44322 2.17712 2.81017 2.81017C2.17712 3.44322 1.71821 4.33967 1.42108 5.67664C1.12143 7.02497 1 8.7582 1 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9.16699 6.41666H12.8337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M6.41699 11H15.5837" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9.16699 15.5833L12.8337 15.5833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        },
        {
            title: "خدمات",
            url: "#",
            img: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        },
        {
            title: "تماس با ما",
            url: "https://utabpars.com/contact.php",
            img: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        },
        {
            title: "درباره ما",
            url: "https://utabpars.com/about-us.php",
            img: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        },
    ]
    return (
        <div>
            <div className='sm:flex hidden sticky top-0 z-50 flex-row-reverse mx-3 justify-between px-3  bg-primary'>
                {/* items */}
                <div className='flex items-center  '>
                    <div>
                        <ul className='flex flex-row-reverse  m-5'>
                            {item.map((item, index) =>
                                <li key={index} className='hover:text-redprimary text-graytext cursor-pointer mx-4 font-bold'>
                                    <a key={index} href={item.url} >
                                        {item.title}

                                    </a>
                                </li>)}

                        </ul>
                    </div>
                    <img src='/img/utabpars.svg ' alt='utabpars' width="98" height="98" />
                </div>
                {/* phone */}
                <div className='flex flex-row items-center space-x-2'>
                    <a href='tel:09378451002'> <img src='/img/ic_phone.svg' alt='phone' width="38.004" height="38.004" className='hover:rotate-45  hover:scale-125 transition-all cursor-pointer' />
                    </a>
                    <a href='tel:09378451002' className='transition-all duration-200 hover:-translate-y-2 hover:scale-105'><span className='text-graytext hover:text-redutab font-bold  '>09378451002</span></a>

                </div>
            </div>
            {/* mobile responsive */}


            <div className='shadow-lg bg-white sm:hidden   flex flex-row-reverse justify-between 
                items-center m-4  p-4 rounded-2xl '>
                {/* item */}

                <div>

                    <svg onClick={(e) => setcollapseMenu(!collapseMenu)} width="32" className="text-biscay-700 dark:text-white  ring-redutab " height="36" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2.5H21.5M2 9H21.5M2 15.5H21.5" stroke="currentColor" strokeWidth="2.65625" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                {/* logo */}
                <img src='/img/utabpars.svg ' alt='utabpars' width="50" height="40" />
                {/* tell */}
                <a href='tel:09378451002'>

                    <img src='/img/ic_phone.svg' alt='phone' width="35.004" height="38.004" className='hover:rotate-45 hover:scale-125 transition-all cursor-pointer' />

                </a>
            </div>

            {/* respons menu */}


            <Transition
                show={collapseMenu}

            >
                <Transition.Child
                    enter="transition ease-out duration-900 transform"
                    enterFrom="translate-x-full"
                    enterTo="-translate-x-0"
                    leave="transition ease-in-out duration-8000 transform"
                    leaveFrom="-translate-x-0"
                    leaveTo="translate-x-full">
                    <div className=''>
                        <div className='fixed  right-2 h-full top-0 z-50 w-full sm:hidden flex flex-col bg-[#00000060]'>
                            <div className='w-2/3 self-end  bg-[#FFFFFF] h-full  flex flex-col' >
                                <div className='m-2 mx-3 '>
                                    <svg onClick={(e) => setcollapseMenu(!collapseMenu)} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8  " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                </div>
                                {/* log */}
                                <div className='flex flex-row  mt-2 self-center '>
                                    <img src='/img/logo_fa.jpg' alt='utabpars' width="100%" height="100%" className='  w-40  ' />

                                </div>
                                {/* search */}
                                <div className='m-5 flex flex-row  py-2 justify-between bg-[#ECEEEF] rounded-xl px-4'>
                                    <svg className='h-10' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7.82495" cy="7.82492" r="6.74142" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                        <path d="M12.5137 12.8638L15.1568 15.4999" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <input className='outline-none bg-[#ECEEEF] px-5 text-gray-600 text-sm rounded-xl w-full h-10 text-right' placeholder='دنبال چی میکردی' />

                                </div>
                                <span className='border-b-2 mx-8'></span>
                                {/* items */}
                                <div>
                                    <div>
                                        <ul className='flex flex-col items-end  m-5'>
                                            {item.map((item, index) =>
                                                <li key={index} className='hover:text-redprimary  flex flex-row text-gray-800 space-x-5 bg   mx-4 my-2'>
                                                    <a key={index} href={item.url} >
                                                        {item.title}

                                                    </a>
                                                    {item.img}
                                                </li>)}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/3 bg-black'></div>
                    </div>
                </Transition.Child>

                {/* Will fade in and out */}
            </Transition>




        </div>
    )
}

export default Header