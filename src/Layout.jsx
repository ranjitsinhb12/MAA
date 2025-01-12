import React, { useState } from 'react'
import { Footer, Header , TopNav} from './components'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Layout() {
    const themeMode = useSelector((state) => state.theme.themeMode)
    const [open, setOpen] = useState('close')
    const handleMenu = (e)=>{
        if(open){
            setOpen('close')
        }else{
            setOpen('open')
        }
    }
    return (
        <>
            {/* <div className="grid grid-cols-12 sm:grid-rows-12 gap-0 h-screen w-screen border-collapse overflow-hidden text-gray-600 dark:text-white ">
                <div className=" hidden sm:shrink-0 sm:block sm:col-span-3 sm:row-span-12 h-screen bg-neutral-200 dark:bg-gray-950 overflow-auto"><Header /></div>
                <div className=' col-span-12 sm:col-span-9 sm:row-span-1 bg-gray-100 dark:bg-gray-800'><TopNav /></div>
                <div className=' bg-gray-100 dark:bg-gray-800 col-span-12 sm:col-span-9 sm:row-span-10 sm:overflow-auto'><Outlet /></div>
                <div className=' bg-gray-100 dark:bg-gray-800 col-span-12 sm:col-span-9 sm:row-span-1 content-center'><Footer /></div>
            </div>  */}
            <div className='flex flex-col bg-neutral-200 dark:bg-gray-950 h-screen border-collapse overflow-auto'>
                <div className='bg-neutral-200 dark:bg-gray-950'><TopNav /></div>
                
                <div className='flex flex-col lg:flex-row'>
                        <Header />
                        <Outlet />
                </div>
                <div><Footer /></div>
                
            </div>
        </>
    )
}

export default Layout
