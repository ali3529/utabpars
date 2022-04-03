import React from 'react'

function IntroTeam() {
    const team = [
        {
            name: 'علیرضا عباسی',
            skill: 'برنامه نویس',
            image: '/img/about/avatart.png'
        },
        {
            name: 'فاطمه زمانی',
            skill: 'متخصص Seo ',
            image: '/img/about/avatart.png'
        },
        {
            name: 'اسماعیل ایلانی',
            skill: 'مدیر عامل  ',
            image: '/img/about/avatart.png'
        },
        {
            name: 'محمدرضا تهمک',
            skill: 'Ui & Ux Designer',
            image: '/img/about/avatart.png'
        },
    ]
    return (
        <div className='mt-12 lg:px-8  lg:mx-24 md:mx-12 mx-24 '>
            <p className='text-center text-[24px] font-bold'>معرفی تیم یوتاب پارس</p>
            {/* team */}
            <div className='flex md:flex-row flex-col justify-between lg:mt-16 mt-8 '>
               {
                   team.map((team,index)=>
                    <div key={index} className='flex flex-col mt-4'>
                    <div className=' rounded-[2.5rem] sm:-skew-y-3 sm:skew-x-3 -rotate-[3deg] md:mx-3     bg-redprimary'>
                        <div className='grid  grid-cols-1 rotate-[3deg] 
                      sm:skew-y-3 sm:-skew-x-3 rounded-[2.5rem] 
                         items-center  -m-3 ' >
                            <img className='' src={team.image} />

                        </div>
                       
                    </div>
                    <p className='text-center mt-4'>{team.name}</p>
                    <p className='text-center text-gray-400 lg:mb-0 mb-5'>{team.skill}</p>
                </div> 
                   )
               }
               
            </div>
        </div>
    )
}

export default IntroTeam