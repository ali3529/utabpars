import React, { useState, useEffect } from 'react'

function Header() {
    const item = [
        {
            title: "صفحه نخست",
            url: "/test"
        },
        {
            title: "نمونه کار ها",
            url: "https://utabpars.com/portfolio.php"
        },
        {
            title: "بلاگ",
            url: "https://utabpars.com/blog/"
        },
        {
            title: "خدمات",
            url: "#"
        },
        {
            title: "تماس با ما",
            url: "https://utabpars.com/contact.php"
        },
        {
            title: "درباره ما",
            url: "https://utabpars.com/about-us.php"
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
                <a href='tel:09358451002'> <img src='/img/ic_phone.svg' alt='phone' width="38.004" height="38.004" className='hover:rotate-45  hover:scale-125 transition-all cursor-pointer' />
                    </a>
                    <a href='tel:09358451002' className='transition-all duration-200 hover:-translate-y-2 hover:scale-105'><span className='text-graytext hover:text-redutab font-bold  '>09358451002</span></a>
                    
                </div>
            </div>
            {/* mobile responsive */}

            <div>
                <div className='shadow-lg bg-white sm:hidden   flex flex-row-reverse justify-between items-center m-4  p-4 rounded-2xl '>
                    {/* item */}

                    <svg width="32" className="text-biscay-700 dark:text-white  ring-redutab " height="36" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2.5H21.5M2 9H21.5M2 15.5H21.5" stroke="currentColor" strokeWidth="2.65625" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    {/* logo */}
                    <img src='/img/utabpars.svg ' alt='utabpars' width="50" height="40" />
                    {/* tell */}
                    <a href='tel:09358451002'>

                        <img src='/img/ic_phone.svg' alt='phone' width="35.004" height="38.004" className='hover:rotate-45 hover:scale-125 transition-all cursor-pointer' />

                    </a>
                </div>
            </div>
            {/* <div className=' flex sm:hidden  flex-row justify-between px-2 '>
                <img src='/img/utabpars.svg ' alt='utabpars' width="50" height="50" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            </div> */}
        </div>
    )
}

export default Header