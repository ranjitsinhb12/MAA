
import { useEffect } from "react"
import useAuth from "../hooks/useAuth"


function Avatar() {
    const {auth} = useAuth()
    const avatar = auth?.user?.Avatar
    const fullName = auth?.user?.FullName
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
