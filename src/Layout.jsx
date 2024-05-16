import React from 'react'
import { Footer, Header , TopNav} from './components'
import { Outlet } from 'react-router-dom'
import useTheme from './hooks/useTheme'

function Layout() {
    const {themeMode} = useTheme
    return (
        <>
            <div className="grid grid-cols-12 gap-0 h-svh ">
                <div className=" hidden sm:block sm:col-span-2 px-3 h-screen bg-neutral-200 dark:bg-gray-950 "><Header /></div>
                <div className=' col-span-12 sm:col-span-10 h-screen dark:bg-gray-800 bg-neutral-100 overflow-y-auto' >
                    <div className=' grid grid-cols-1 grid-row-12 grid-flow-row h-screen'>
                        <div className=' row-span-2 row-end-3'><TopNav /></div>
                        <div className=' row-span-8 row-end-11 '><Outlet /></div>
                        <div className=' row-span-1 row-end-12'><Footer /></div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Layout
