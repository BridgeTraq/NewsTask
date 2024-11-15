import React, { useEffect, useState } from 'react'
import Headings from './Headings'
import { BsArrowRightShort } from 'react-icons/bs'
import iPhone from '../../assets/images/iphone1.jpg'
import NewsItem from './NewsItem'

export default function EditorsPick() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=messi&apiKey=7306637b9c964930837c77584168b44b')
            .then(res => res.json())
            .then(data => setItems(data.articles))
    }, [])

    if (!items) {
        return <p>Not here</p>
    }

    let editor = []
    for (let i = 0; i <= items.length; i++) {
        if (i === 1) {
            break
        }
        editor.push(items[i])
    }
    return (
        <div className='mt-[40px]'>
            <Headings
                headTitle='Editors Pick'
                headDes='See all'
                headDesArrow={<BsArrowRightShort className='text-2xl' />} />

            <div className='mt-[30px] relative'>
                {editor.map(item => (
                    <img item={item} className='w-full h-[470px] rounded-xl object-cover brightness-50' src={item?.urlToImage || iPhone} alt={item?.source?.name} />
                ))}

                <div className='absolute text-white p-5 top-[55%]'>
                    {editor.map((item) => (
                        <NewsItem noImage='true' item={item} />
                    ))}
                </div>
            </div>

            <div className='grid grid-cols-4 gap-5 mt-5'>
            </div>
        </div>
    )
}
