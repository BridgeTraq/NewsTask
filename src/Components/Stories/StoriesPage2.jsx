import React, { useEffect, useState } from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import NewsGrid from './NewsGrid';
import Headings from './Headings';



export default function StoriesPage2() {
    const [items, setItems] = useState([])



    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?category=sports&apiKey=1861173ab41949199cbdc8821ffb10c7')
            .then(res => res.json())
            .then(data => setItems(data.articles))
    }, [])



    return (
        <div className='mt-[40px]'>
            <Headings
                headTitle='Latest News'
                headDes='See all'
                headDesArrow={<BsArrowRightShort className='text-2xl'
                />}
            />

            <div className='mt-[30px]'>
                <NewsGrid
                    items={items}
                />
            </div>
        </div>
    )
}
