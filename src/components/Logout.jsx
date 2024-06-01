import React from 'react'
import useLogout from '../hooks/useLogout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Logout() {
    const logout = useLogout()
    
    const signOut = async ()=>{
        await logout()
      
    }
    return (
        <>
        <div
            className="flex transform items-center px-3 py-2 text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:bg-orange-400 hover:white cursor-pointer" onClick={signOut}
            >
                <FontAwesomeIcon icon={faRightFromBracket} />
            <span className="mx-2 text-sm font-medium">Logout</span>
        </div>
        </>
    )
}

export default Logout
