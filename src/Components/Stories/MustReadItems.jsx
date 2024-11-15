import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

export default function MustReadItems() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=dragon&apiKey=7306637b9c964930837c77584168b44b')
            .then(res => res.json())
            .then(data => setData(data.articles))
    }, [])

    console.log('data', data)
    const articles = data;

    if (!articles) {
        return <p>Loading...</p>
    }
    let arrayLimit = []

    for (let i = 0; i <= articles.length; i++) {
        if (i === 1) {
            break
        }
        arrayLimit.push(articles[i])
    }

    console.log(arrayLimit)
    return (
        <div className='h-min-[500px]'>
            {arrayLimit.map((item, i) => (
                <NewsItem item={item} />
            ))}
        </div>
    )
}