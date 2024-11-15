import React, { useEffect, useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import Headings from './Headings'
import BuletinDetails from './BuletinDetails'

export default function BuletinStories() {
    const [items, setItems] = useState([])
    const [loading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=1861173ab41949199cbdc8821ffb10c7')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch news')
                }
                return res.json()
            })
            .then(data => {
                setItems(data.articles)
                setIsLoading(false)
            })
            .catch(error => {
                setError(error.message)
                setIsLoading(false)
            });
    }, [])
    return (
        <div className='mt-[40px]'>
            <Headings
                headTitle='Buletin Story'
                headDes='See all'
                headDesArrow={<BsArrowRightShort className='text-2xl' />}
            />

            <div className='mt-[30px]'>
                <BuletinDetails
                    items={items}
                    error={error}
                    loading={loading}
                />
            </div>

        </div>
    )
}
