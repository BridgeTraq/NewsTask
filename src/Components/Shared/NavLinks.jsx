import React from 'react'
import { Link } from 'react-router-dom'
import { GiNotebook } from "react-icons/gi";
import { GoBell } from "react-icons/go";
import NavImg from '../../assets/images/career.jpg'
import { navLinks } from './navs';



export default function NavLinks() {
    return (
        <div className='flex justify-between items-center text-[16px] font-medium'>
            <nav className='flex items-center gap-10'>
                <div className='border-r-[2px] border-r-[#b1b2b5] pr-10 text-red-600 text-2xl font-bold'>
                    <h1>Buletin</h1>
                </div>

                {navLinks.map((item) => (
                    <Links key={item.label} item={item} />
                ))}

            </nav>

            <nav className='flex items-center gap-12'>
                <div className='flex items-center gap-4'>
                    <GiNotebook className='text-xl' />
                    <span>Write</span>
                </div>

                <div className='relative w-fit'>
                    <GoBell className='text-xl' />
                    <span className='absolute h-[8px] w-[8px] block bg-red-600 rounded-full right-0 top-0 mr-[2px]'></span>
                </div>

                <div>
                    <img className='h-9 w-9 rounded-full object-cover grayscale' src={NavImg} alt="Nav Image" />
                </div>
            </nav>
        </div>
    )
}

export const Links = ({ item }) => {
    return (
        <ul className='flex items-center gap-12'>
            <li><Link to={item.path}>{item.label}</Link></li>
        </ul>
    )
}
