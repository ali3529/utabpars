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

                    <a href='tel:09358451002'><span className='text-graytext font-bold '>09358451002</span></a>
                    <img src='/img/ic_phone.svg' alt='phone' width="38.004" height="38.004" className='hover:rotate-45 hover:scale-125 transition-all cursor-pointer' />

                </div>
            </div>
            {/* mobile responsive */}
            <div className=' flex sm:hidden  flex-row justify-between px-2 '>
                <img src='/img/utabpars.svg ' alt='utabpars' width="50" height="50" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            </div>
        </div>
    )
}

export default Header