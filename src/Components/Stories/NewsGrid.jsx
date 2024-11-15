import React from 'react'
import NewsItem from './NewsItem'


export default function NewsGrid({ items }) {
    if (!items) {
        return null
    }
    let latestNews = []

    for (let i = 0; i <= items.length; i++) {
        if (i === 4) {
            break
        }
        latestNews.push(items[i])
    }
    return (
        <div className='grid grid-cols-4 gap-5'>
            {latestNews.map((item) => (
                <NewsItem item={item} />
            ))}
        </div>
    )
}

