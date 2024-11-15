import React, { useEffect, useState } from 'react'
import Headings from './Headings'
import { BsArrowRightShort } from 'react-icons/bs'
import manface from '../../assets/images/manface.jpg'

export default function TopCreator() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=creators&apiKey=7306637b9c964930837c77584168b44b')
            .then(res => res.json())
            .then(data => setItems(data.articles))
    }, [])

    if (!items) {
        return null
    }

    let topCreator = []
    for (let i = 0; i <= items.length; i++) {
        if (i === 4) {
            break
        }
        topCreator.push(items[i])
    }
    return (
        <div className='mt-[50px]'>
            <Headings
                headTitle='Top Creator'
                headDes='See all'
                headDesArrow={<BsArrowRightShort className='text-2xl font-bold' />}
            />

            <div className='grid grid-cols-4 gap-10 mt-[30px]'>
                {topCreator.map(item => (
                    <TopItem item={item} />
                ))}
            </div>
        </div>
    )
}


export function TopItem({ item }) {
    return (
        <div className='flex items-center gap-3'>
            <img className='h-16 w-16 rounded-full object-cover' src={item?.urlToImage || manface} alt={item?.source?.name} />
            <div className='flex flex-col gap-[2px]'>
                <h1 className='text-[22px] font-bold'>{item?.source?.name}</h1>
                <p className='text-sm text-red-600 font-semibold'>{item?.source?.name}</p>
            </div>
        </div>

    )
}