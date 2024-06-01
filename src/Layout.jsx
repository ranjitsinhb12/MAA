import React from 'react'
import { Footer, Header , TopNav} from './components'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Layout() {
    const themeMode = useSelector((state) => state.theme.themeMode)
    return (
        <>
            <div className="grid grid-cols-12 sm:grid-rows-12 gap-0 h-screen ">
                <div className=" hidden sm:block sm:col-span-2 sm:row-span-12 px-3 h-screen bg-neutral-200 dark:bg-gray-950 "><Header /></div>
                <div className=' col-span-12 sm:col-span-10 sm:row-span-1 bg-gray-100 dark:bg-gray-800'><TopNav /></div>
                <div className=' bg-gray-100 dark:bg-gray-800 col-span-12 sm:col-span-10 sm:row-span-10 sm:overflow-auto'><Outlet /></div>
                <div className=' bg-gray-100 dark:bg-gray-800 col-span-12 sm:col-span-10 sm:row-span-1 '><Footer /></div>
            </div> 
        </>
    )
}

export default Layout
