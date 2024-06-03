import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { selectCurrentUser, selectCurrentToken } from "../features/auth/authSlice"
import { useSelector } from "react-redux"


function Avatar() {
    //const {auth} = useAuth()
    const user = useSelector(selectCurrentUser)
    const avatar = user?.Avatar
    const fullName = user?.FullName
    const token = useSelector(selectCurrentToken)
    let avatarImg
    if(!avatar){
        avatarImg = <FontAwesomeIcon icon={faCircleUser} className=' h-16 w-16 rounded-full border-4 border-double border-orange-400 overflow-hidden' />
    }else{
        avatarImg = <img
        className="inline-block h-20 w-20 rounded-full border-4 border-double border-orange-400 "
        src={avatar}
        alt=""
        />
    }
    return (
        <div className="flex flex-col">
            <div className=" text-gray-400">
            { avatarImg}
            </div>
            
            <span className="flex flex-col justify-center">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 text-wrap ">       {fullName}
                </span>
            </span>
        </div>  
    )
}

export default Avatar
