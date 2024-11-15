import React, { useEffect, useState } from 'react'
import Headings from './Headings'
import { BsArrowRightShort } from "react-icons/bs";
import NewsItem from './NewsItem';

export default function Business() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=politics&apiKey=7306637b9c964930837c77584168b44b')
            .then(res => res.json())
            .then(data => setItems(data.articles))
    }, [])

    if (!items) {
        return <p>Not here</p>
    }

    let business = []
    for (let i = 0; i <= items.length; i++) {
        if (i === 2) {
            break
        }
        business.push(items[i])
    }
    return (
        <div>
            <Headings
                headTitle='Business'
                headDesArrow={<BsArrowRightShort className='text-2xl font-bold' />} />

            <div className='grid grid-cols-2 gap-5 mt-[30px]'>
                {business.map(item => (
                    <NewsItem noDes='true' imgHeight='true' item={item} />
                ))}

            </div>

        </div>
    )
}
