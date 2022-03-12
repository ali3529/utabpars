import React, { useState } from 'react'

function LeaderShip() {
    const [first, setfirst] = useState(false)
    return (
        <div className=' transition-all duration-200 ease-linear'>
            <div className='mt-16 cursor-pointer ' onClick={(e)=>setfirst(!first)}>
                <img src='/img/banner/banner.webp' />

            </div>

        </div>
    )
}

export default LeaderShip