import React from 'react'
import { Footer, Header , TopNav} from './components'
import { Outlet } from 'react-router-dom'
import useAuth from './hooks/useAuth'

function Layout() {
    const {themeMode} = useAuth()
    return (
        <>
            <div className="grid grid-cols-12 gap-0 h-svh ">
                <div className=" hidden sm:block sm:col-span-2 px-3 h-screen  bg-darkb"><Header /></div>
                <div className=' col-span-12 sm:col-span-10 h-screen bg-xdarkb overflow-y-auto' >
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
