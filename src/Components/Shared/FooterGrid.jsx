import React from 'react'
import { footerItem } from './footerItem'

export default function FooterGrid() {
    return (
        <div className='grid grid-cols-4 gap-20'>
            {footerItem.map(item => (
                <FooterItem item={item} />
            ))}
        </div>
    )
}



export function FooterItem({ item }) {
    return (
        <div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[#40444d] font-bold text-2xl'>{item.header}</h1>
                <p className='text-[#40444d] text-[15px] font-medium'>{item.title1}</p>
                <p className='text-[#40444d] text-[15px] font-medium'>{item.title2}</p>
                <p className='text-[#40444d] text-[15px] font-medium'>{item.title3}</p>
                <p className='text-[#40444d] text-[15px] font-medium'>{item.title4}</p>
                <p className='text-[#40444d] text-[15px] font-medium'>{item.title5}</p>
            </div>
        </div>
    )
}
