import React from 'react'
import useLogout from '../hooks/useLogout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightFromBracket, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

function Logout() {
    const logout = useLogout()
    
    const signOut = async ()=>{
        await logout()
      
    }
    return (
        <>
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
            <div
                className="flex transform items-center px-3 py-2 text-gray-600 dark:text-gray-300 transition-colors duration-200 " onClick={signOut}
                >
                    <FontAwesomeIcon icon={faPowerOff} className='text-orange-400 text-3xl hover:text-red-500 cursor-pointer' />
            </div>
            </TooltipTrigger>
            <TooltipContent>
            <p>Logout</p>
            </TooltipContent>
        </Tooltip>
        </TooltipProvider>
        </>
    )
}

export default Logout
