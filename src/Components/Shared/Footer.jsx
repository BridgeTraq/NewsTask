import React from 'react'
import { FaArrowUp, FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FooterGrid from './FooterGrid';

export default function Footer() {
    return (
        <div className='grid grid-cols-4 gap-16 relative'>
            <div className='flex flex-col'>
                <div className='flex-1 flex flex-col gap-2'>
                    <h1 className='text-red-600 font-bold text-3xl'>Buletin</h1>
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
                <p className='text-[#40444d] text-sm font-medium'>Copyright &copy; 2023 Buletin.</p>
            </div>

            <div className='col-span-3'>
                <div className='grid grid-cols-4 gap-20'>

                    <FooterGrid
                        header='Business'
                        title1='Startup'
                        title2='Employee'
                        title3='Success'
                        title4='Videos'
                        title5='Markets' />

                    <FooterGrid
                        header='Technology'
                        title1='Innovate'
                        title2='Gadgets'
                        title3='Innovative Cities'
                        title4='Upstarts'
                        title5='Future Tech' />

                    <FooterGrid
                        header='Travel'
                        title1='Destinations'
                        title2='Food & Drink'
                        title3='Stay'
                        title4='News'
                        title5='Videos' />

                    <FooterGrid
                        header='Sports'
                        title1='Football'
                        title2='Tennis'
                        title3='Golf'
                        title4='Motosports'
                        title5='Esports' />

                    <FooterGrid
                        header='Entertainment'
                        title1='Movies'
                        title2='Artist'
                        title3='Television'
                        title4='Influencer'
                        title5='Viral' />

                    <FooterGrid
                        header='Features'
                        title1='As Equals'
                        title2='Call to Earth'
                        title3='Freedom Project'
                        title4='Inside Asia'
                        title5='2 Degrees' />

                    <FooterGrid
                        header='Weather'
                        title1='Climate'
                        title2='Storm Tracker'
                        title3='Wildfire Tracker'
                        title4='Earthquake'
                        title5='Video' />

                    <FooterGrid
                        header='More'
                        title1='Design'
                        title2='Mentorship'
                        title3='Investment'
                        title4='Work for Buletin'
                        title5='Support Us' />
                </div>

                <div className='h-10 w-10 flex justify-center items-center drop-shadow-lg rounded-full bg-white absolute bottom-0 right-0 mr-[-60px]'>
                    <span className='h-6 w-6 text-[12px] text-white bg-red-600 rounded-full flex justify-center items-center font-bold'>
                        <FaArrowUp />
                    </span>
                </div>
            </div>
        </div >
    )
}
