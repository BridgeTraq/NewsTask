import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import john from '../../assets/images/john.jpg'
import { fixDate, truncText } from './externalFunctions'

export default function StoriesPage1() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=john%20wick&apiKey=7306637b9c964930837c77584168b44b')
            .then(res => res.json())
            .then(data => setItems(data.articles))
    }, [])

    if (!items) {
        return <p>Not here</p>
    }


    let newArray = []
    for (let i = 0; i <= items.length; i++) {
        if (i === 1) {
            break
        }
        newArray.push(items[i])
    }


    return (
        <div className='mt-10'>
            <div className='flex flex-col gap-2 items-center bg-[#f4f3f3] rounded-lg p-[30px]'>
                <h1 className='text-[17px] font-medium text-[#40444d]'>WELCOME TO PARADOS NEWS</h1>
                <p className='text-3xl font-bold'>Craft narratives ✍️ that ignites <span className='text-red-600'>inspiration</span>💡,</p>
                <p className='text-3xl font-bold'><span className='text-red-600'>knowledge </span>📙, and <span className='text-red-600'>entertainment</span> 🎬</p>
            </div>

            <div>
                {newArray.map((item) => (

                    <JohnWick item={item} />

                ))}
            </div>
        </div>
    )
}



export function JohnWick({ item }) {
    const url = item?.url
    return (
        <div className='top-[40%] text-white p-5'>
            <Link to={url} className='mt-[40px] grid grid-cols-2 gap-5' >
                <div className='h-[330px]'>
                    <img className='object-cover rounded-lg w-full h-full' src={item?.urlToImage || john} alt={item?.source?.name} />
                </div>

                <div className='flex flex-col justify-between p-5'>
                    <div className='flex items-center gap-2 text-md font-semibold'>
                        <div className='flex items-center gap-2 text-[#40444d]'>
                            <img className='h-5 w-5 rounded-full object-cover' src={item?.urlToImage || john} alt="Netflix" />
                            <p>{item?.source?.name}</p>
                        </div>

                        <div className='h-[3px] w-[3px] rounded-full bg-[#40444d]'></div>

                        <p className='text-[#40444d]'>{fixDate(item?.publishedAt)}</p>
                    </div>

                    <h1 className='text-4xl text-black font-bold'>{truncText(item?.title)}</h1>

                    <p className='text-[#40444d] text-[18px]'>{truncText(item?.description, 20)}</p>

                    <div className='flex items-center gap-2 text-md font-semibold'>
                        <p className='text-red-600'>{item?.source?.name}</p>

                        <div className='h-[3px] w-[3px] rounded-full bg-[#40444d]'></div>

                        <p className='text-[#40444d]'>4 min read</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
