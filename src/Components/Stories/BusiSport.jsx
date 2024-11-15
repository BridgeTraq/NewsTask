import React from 'react'
import Business from './Business'
import SportNews from './SportNews'

export default function BusiSport() {
    return (
        <div className='grid grid-cols-2 gap-5 mt-[60px]'>
            <Business />
            <SportNews />
        </div>
    )
}
