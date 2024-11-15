import React, { useEffect, useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import Headings from './Headings'
import NewsItem from './NewsItem'


export default function SportNews() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=ronaldo&apiKey=7306637b9c964930837c77584168b44b')
            .then(res => res.json())
            .then(data => setItems(data.articles))
    }, [])

    if (!items) {
        return null
    }

    let sport = []
    for (let i = 0; i <= items.length; i++) {
        if (i === 2) {
            break
        }
        sport.push(items[i])
    }
    return (
        <div>
            <Headings
                headTitle='Sport News'
                headDesArrow={<BsArrowRightShort className='text-2xl font-bold' />}
            />

            <div className='grid grid-cols-2 gap-5 mt-[30px]'>
                {sport.map(item => (
                    <NewsItem noDes='true' imgHeight='true' item={item} />
                ))}
            </div>
        </div>
    )
}
