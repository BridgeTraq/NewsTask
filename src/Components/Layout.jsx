import React from 'react'
import { Outlet } from 'react-router-dom'
import NavLinks from './Shared/NavLinks'
import Footer from './Shared/Footer'

export default function Layout() {
    return (
        <div className='py-12 px-24'>
            <NavLinks />
            <Outlet />
            <Footer />
        </div>
    )
}
