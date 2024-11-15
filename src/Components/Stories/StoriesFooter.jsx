import React from 'react'

export default function StoriesFooter({ name, date, noImage }) {
    return (
        <div className='flex items-center gap-2 text-md font-semibold'>
            <p className={noImage === 'true' ? 'text-[#acadb1]' : 'text-red-600'}>{name}</p>

            <div className='h-[3px] w-[3px] rounded-full bg-[#40444d]'></div>

            <p className={noImage === 'true' ? 'text-[#acadb1] text-sm' : 'text-[#40444d] text-sm'}>{date}</p>
        </div>
    )
}
