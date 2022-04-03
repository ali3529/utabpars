import React from 'react'

function SocialMedia() {
    const socialItem = [
        {
            socialname: 'instagram',
            img: '/img/social/ic_instagram2.svg',
            id: 'Utabpars_Com',
            color: '#9903D3',
            bg_color:'#FFE9F1'
        },

        {
            socialname: 'whatsapp',
            img: '/img/social/ic_whatsapp.svg',
            id: '09332258674',
            color: '#1BD741',
            bg_color:'#E7FBEB'
        },
        {
            socialname: 'telegram',
            img: '/img/social/ic_telegram.svg',
            id: '@Utabpars_Com',
            color: '#24B4E9',
            bg_color:'#E9F7FD'
        },
        {
            socialname: 'facebook',
            img: '/img/social/ic_facebook.svg',
            id: 'Utabpars_Com',
            color: '#3A559F',
            bg_color:'#EBEDF5'
           
        },


        {
            socialname: 'twitter',
            img: '/img/social/ic_twitter.svg',
            id: 'Utabpars_Com',
            color: '#4CA6F2',
            bg_color:'#E9F7FD'
        },

    ]
    return (
        <div className='mt-8'>
            {/* title */}
            <p className='text-xl text-center'>ما را در شبکه های اجتماعی دنبال کنید</p>
            {/* content */}
            <div className='flex flex-row justify-between'>
                {/* social item */}
                <div className='grid grid-cols-2 justify-center   m-10 py-16'>
                    {
                        socialItem.map((item, index) =>
                            <div key={index} className=' mx-2 '>
                                <div className={`flex flex-row border-[1.5px] rounded-2xl py-3 px-7  border-[${item.color}] space-x-4`}>
                                    {/* icon */}
                                    <div className={`bg-[${item.bg_color}] rounded-xl p-1 `}>
                                        <img className='' src={item.img} />
                                    </div>

                                    <div className='flex flex-col'>
                                        {/* id */}
                                        <p className=''>{item.id}</p>
                                        {/* socialname */}
                                        <p className={`text-sm text-[${item.color}]`}>{item.socialname}</p>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                {/* img */}
                <img src='/img/about/social-media.webp' />

            </div>
        </div>
    )
}

export default SocialMedia