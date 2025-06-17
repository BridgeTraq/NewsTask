import React from 'react'
import { FaArrowUp, FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FooterGrid from './FooterGrid';

export default function Footer() {
    return (
        <div className='grid grid-cols-4 gap-16 relative mt-[60px]'>
            <div className='flex flex-col'>
                <div className='flex-1 flex flex-col gap-2'>
                    <h1 className='text-red-600 font-bold text-3xl'>Parados News</h1>
                    <p className='text-[#40444d] text-md font-medium'>Craft narratives that ignites inspiration, knowledge, and entertainment.</p>
                    <div className='flex items-center gap-2 mt-5'>
                        <div className='h-10 w-10 flex justify-center items-center drop-shadow-lg rounded-full bg-white'>
                            <span className='h-6 w-6 text-[12px] text-white bg-red-600 rounded-full flex justify-center items-center font-bold'>
                                <FaFacebookF />
                            </span>
                        </div>
                        <div className='h-10 w-10 flex justify-center items-center drop-shadow-lg rounded-full bg-white'>
                            <span className='h-6 w-6 text-[12px] text-white bg-red-600 rounded-full flex justify-center items-center font-bold'>
                                <FaLinkedinIn />
                            </span>
                        </div>
                        <div className='h-10 w-10 flex justify-center items-center drop-shadow-lg rounded-full bg-white'>
                            <span className='h-6 w-6 text-[12px] text-white bg-red-600 rounded-full flex justify-center items-center font-bold'>
                                <FaTwitter />
                            </span>
                        </div>
                        <div className='h-10 w-10 flex justify-center items-center drop-shadow-lg rounded-full bg-white'>
                            <span className='h-6 w-6 text-[12px] text-white bg-red-600 rounded-full flex justify-center items-center font-bold'>
                                <FaInstagram />
                            </span>
                        </div>
                    </div>
                </div>
                <p className='text-[#40444d] text-sm font-medium'>Copyright &copy; {new Date().getFullYear()} Parados News.</p>
            </div>

            <div className='col-span-3'>
                <FooterGrid />

                <div className='h-10 w-10 flex justify-center items-center drop-shadow-lg rounded-full bg-white absolute bottom-0 right-0 mr-[-60px]'>
                    <span className='h-6 w-6 text-[12px] text-white bg-red-600 rounded-full flex justify-center items-center font-bold'>
                        <FaArrowUp />
                    </span>
                </div>
            </div>
        </div >
    )
}
