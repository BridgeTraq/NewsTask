import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

export default function MustReadItemsR() {
    const [rightItems, setRightItems] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1861173ab41949199cbdc8821ffb10c7')
            .then(res => res.json())
            .then(data => setRightItems(data.articles))
    }, [])
    if (!rightItems) {
        return <p>Not working</p>
    }
    let rightItemsArray = []

    for (let i = 0; i <= rightItems.length; i++) {
        if (i === 2) {
            break
        }
        rightItemsArray.push(rightItems[i])
    }

    return (
        <div className='grid grid-cols-1 gap-2'>
            {rightItemsArray.map((item, i) => (
                <NewsItem item={item} noDes='true' />
            ))}
        </div>
    )
}