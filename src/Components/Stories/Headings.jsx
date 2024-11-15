import React from 'react'

export default function Headings({ headTitle, headDes, headDesArrow }) {
    return (

        <div className='flex justify-between items-center cursor-pointer'>
            <h1 className='text-4xl font-bold'>{headTitle}</h1>
            <div className='flex items-center gap-1 text-[16px] text-red-600 font-bold'>
                <p>{headDes}</p>
                {headDesArrow}
            </div>
        </div>

    )
}
