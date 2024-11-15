import React from 'react'
import StoriesHeading from './StoriesHeading';
import StoriesFooter from './StoriesFooter';
import { Link } from 'react-router-dom';
import { fixDate, truncText } from './externalFunctions'

export default function NewsItem({ item, noDes, noImage, imgHeight }) {
    const url = item?.url
    const imageUrl = item?.urlToImage || 'https://img.freepik.com/premium-photo/newscasters-team-talk-about-pilot-protecting-passengers-airplane-flight-by-landing-safely-flying-hero-diverse-tv-journalist-working-daily-headlines-broadcasting-early-talk-show_482257-69787.jpg?w=740'
    const date = item?.publishedAt
    return (
        <div>
            <Link to={url} className='flex flex-col gap-3'>
                {noImage === 'true' ? null : <div>
                    {noDes === 'true' ? <img className={imgHeight === 'true' ? 'rounded-xl object-cover w-full h-[250px] text-sm text-[#40444d] font-semibold' : 'rounded-xl object-cover w-full h-[100px] text-sm text-[#40444d] font-semibold'} src={imageUrl} alt={item?.source?.name} /> : <img className='rounded-xl object-cover w-full h-[250px] text-sm text-[#40444d] font-semibold' src={imageUrl} alt={item?.source?.name} />
                    }
                </div>}

                <StoriesHeading noImage={noImage} imageUrl={imageUrl} date={fixDate(date)} name={item?.source?.name} />

                <div className={noDes === 'true' ? 'flex flex-col justify-between h-[90px]' : `${noImage === 'true' ? 'flex flex-col justify-between h-[150px]' : 'flex flex-col justify-between h-[200px]'}`}>
                    <div className={noDes === 'true' ? 'flex flex-col gap-3' : 'flex flex-col gap-4'}>
                        <h1 className='text-xl font-bold'>{truncText(item?.title)}</h1>
                        {noDes === 'true' ? null : <p className={noImage === 'true' ? 'text-md text-[#acadb1]' : 'text-md text-[#40444d] font-semibold'}>{noImage === 'true' ? `${truncText(item?.description, 30)}` : `${truncText(item?.description, 15)}`}</p>}
                    </div>


                    <StoriesFooter noImage={noImage} date={fixDate(date)} name={truncText(item?.source?.name, 1)} />
                </div>
            </Link>
        </div>
    )
}
