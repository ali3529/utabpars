import React from 'react'

function Comment() {
    return (
        <div className='mt-14'>
            <h1 className='text-center text-[26px] font-bold'>نظرات شما</h1>
            <div className='flex sm:flex-row flex-col justify-center md:mt-8  '>
                {/* img */}
                <div className='w-1/2 -ml-20 lg:flex hidden'> <img src='/img/about/comment.webp' /></div>
                {/* comment */}
                <div className='lg:w-96 lg:m-0 m-4 bg-[#F2F2F2] rounded-2xl shadow-xl  p-5  text-right  '>
                    {/* title */}
                    <div className='flex flex-row items-end justify-end space-x-3'>
                        <p className='text-gray-500 '>شرکت بازرگانی نویدی</p>
                        <p className='text-lg font-medium'>احسان منصوری</p>
                    </div>
                    {/* discrip */}
                    <div className='mt-6 text-gray-600'> 
                        <span>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
                            با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن
                            صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نا
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment