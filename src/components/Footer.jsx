import React from 'react'
import {Logo} from './index'
function Footer() {
    return (
        <footer className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between shadow-inner px-4">
                <div className=" sm:inline-flex items-center">               
                    <Logo className="h-20 w-20 justify-start" alt="Footer-Logo" />
                </div>
                <div className='text-sm font-medium text-gray-500 dark:text-sky-300'> Developed by Ranjitsinh Chauhan</div>
                <div className="">
                <p className="text-sm font-medium text-gray-500 dark:text-sky-300">© 2024 Maa. All rights reserved.</p>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
