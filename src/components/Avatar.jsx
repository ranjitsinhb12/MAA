
import { useEffect } from "react"
//import useAuth from "../hooks/useAuth"

import { selectCurrentUser, selectCurrentToken, selectCurrentRoles } from "../features/auth/authSlice"
import { useSelector } from "react-redux"


function Avatar() {
    //const {auth} = useAuth()
    const user = useSelector(selectCurrentUser)
    const avatar = user?.Avatar
    const fullName = user?.FullName
    const token = useSelector(selectCurrentToken)
    const role = useSelector(selectCurrentRoles)
    return (
        <div className="flex flex-col">
            <img
            className="inline-block h-16 w-16 rounded-full border-4 border-double border-orange-400"
            src={avatar}
            alt=""
            />
            <span className="flex flex-col">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 text-wrap">{fullName}</span>
            </span>
        </div>  
    )
}

export default Avatar
