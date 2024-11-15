import React, { useEffect, useState } from 'react'
import Headings from './Headings'
import { BsArrowRightShort } from "react-icons/bs";
import MustReadItems from './MustReadItems';
import MustReadItemsR from './MustReadItemsR';
import { Link } from 'react-router-dom';
import NewsItem from './NewsItem';



export default function MustRead() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7306637b9c964930837c77584168b44b')
            .then(res => res.json())
            .then(data => setItems(data.articles))
    }, [])

    if (!items) {
        return <p>Not here</p>
    }


    let middleArray = []
    for (let i = 0; i <= items.length; i++) {
        if (i === 1) {
            break
        }
        middleArray.push(items[i])
    }


    return (
        <div className='mt-[40px]'>
            <Headings
                headTitle='Must Read'
                headDes='See all'
                headDesArrow={<BsArrowRightShort className='text-2xl' />} />

            <div className='grid grid-cols-4 gap-4 mt-[40px]'>
                <MustReadItems />

                <div className='col-span-2 relative'>
                    {middleArray.map((item) => (
                        <img className='h-full w-full object-cover rounded-xl brightness-50' src={item?.urlToImage || 'https://img.freepik.com/premium-photo/newscasters-team-talk-about-pilot-protecting-passengers-airplane-flight-by-landing-safely-flying-hero-diverse-tv-journalist-working-daily-headlines-broadcasting-early-talk-show_482257-69787.jpg?w=740'} alt={item?.source?.name} />
                    ))}
                    {middleArray.map((item) => (
                        <div className='absolute top-[57%] text-white p-5'>
                            <NewsItem item={item} noImage='true' />
                        </div>
                    ))}
                </div>

                <MustReadItemsR />


            </div>


        </div >
    )
}