import React from 'react'

function Footer() {
    return (
        <footer className="w-full">
            <div className="flex items-center justify-between shadow-inner px-4">
                <div className="inline-flex items-center">
                <img
                className=" h-20 w-20 justify-start"
                src="maa_logo_light.png"
                alt=""
            /> 
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
