import React from 'react'

export default function FirstUpdate() {
    return (
        <div className='bg-[#f5f5f5] rounded-xl p-14 flex justify-between items-center mt-[90px]'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#a4a4a6] text-xl font-medium'>GET FIRST UPDATE</h1>
                <p className='font-bold text-3xl'>Get the news in front line by</p>
                <p className='font-bold text-3xl'><span className='text-red-600'>subscribe</span> ✍️ our latest update</p>
            </div>

            <div className='flex gap-2'>
                <input className='px-[14px] py-[10px] rounded-lg text-[#40444d] w-[300px] font-semibold border border-[#a1a1a3]' type="text" placeholder='Your Email' />
                <button className='text-white bg-[#e50914] px-[14px] py-[10px] rounded-lg '>Subscribe</button>
            </div>
        </div>
    )
}
