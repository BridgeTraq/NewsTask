import React from 'react'



export default function StoriesHeading({ name, date, imageUrl, noImage }) {
    return (
        <div className={noImage === 'true' ? 'flex items-center gap-2 text-[11px] font-bold text-[#acadb1]' : 'flex items-center gap-2 text-[11px] font-bold text-[#40444d]'}>
            <div className='flex items-center gap-2'>
                <img className='h-5 w-5 rounded-full object-cover' src={imageUrl} alt="Netflix" />
                <p>{name}</p>
            </div>

            <div className='h-[3px] w-[3px] rounded-full bg-[#40444d]'></div>

            <p>{date}</p>
        </div>
    )
}
