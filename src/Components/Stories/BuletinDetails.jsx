import React from 'react'
import { truncText } from './externalFunctions';

export default function BuletinDetails({ items, error, loading }) {
    if (!items) {
        return null
    }
    let allItems = []
    for (let i = 0; i <= items.length; i++) {
        if (i === 10) {
            break;
        }

        allItems.push(items[i])
    }

    return (
        <div className='grid grid-cols-10 gap-3'>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {allItems.map((item) => (
                <BuletinItem item={item} />
            ))}
        </div>
    )
}

export function BuletinItem({ item }) {
    if (!item) {
        return null
    }
    return (
        <div className='flex flex-col items-center gap-1'>
            <div className='h-[90px] w-[90px] rounded-full border-[3px] border-red-600'>
                <img className='h-full w-full object-cover rounded-full' src={item?.urlToImage || 'https://img.freepik.com/free-photo/african-couple-cinema_7502-8359.jpg?ga=GA1.1.726459028.1725731682&semt=ais_hybrid'} alt={item?.source?.name} />
            </div>
            <p className='text-[#40444d] text-sm font-medium'>{truncText(item?.source?.name, 1)}</p>
        </div>
    )
}