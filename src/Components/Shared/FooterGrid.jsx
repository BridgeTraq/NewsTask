import React from 'react'

export default function FooterGrid({ header, title1, title2, title3, title4, title5 }) {
    return (
        <div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[#40444d] font-bold text-2xl'>{header}</h1>
                <p className='text-[#40444d] text-[15px] font-medium'>{title1}</p>
                <p className='text-[#40444d] text-[15px] font-medium'>{title2}</p>
                <p className='text-[#40444d] text-[15px] font-medium'>{title3}</p>
                <p className='text-[#40444d] text-[15px] font-medium'>{title4}</p>
                <p className='text-[#40444d] text-[15px] font-medium'>{title5}</p>
            </div>
        </div>
    )
}
