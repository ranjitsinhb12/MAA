import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { selectCurrentUser, selectCurrentToken } from "../features/auth/authSlice"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { UploadAvatar } from './index'


function Avatar() {

    //const {auth} = useAuth()
    const user = useSelector(selectCurrentUser)
    const avatar = user?.Avatar
    //const avatar = useSelector(currentAvatar)
    const fullName = user?.FullName
    const token = useSelector(selectCurrentToken)
    const popUp = document.getElementById('popUp')
    const showPopup = document.getElementById('showPopup')
    const closePopup = document.getElementById('closePopup')
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

    showPopup?.addEventListener('click', ()=>{
        popUp.classList.remove('hidden')
    })

    closePopup?.addEventListener('click', ()=>{
        popUp.classList.add('hidden')
    })



    return (
        <div className="flex flex-col">
            <div id="outer" >
                <div id = "showPopup" className=" text-gray-400 cursor-pointer">
                { avatarImg}
                </div>
                
                <div id = "popUp" 
                className=" absolute text-gray-300 dark:text-gray-900 rounded-lg -mt-96 ml-36 h-96 w-96 overflow-hidden border-2 dark:border-white dark:bg-gray-300 bg-gray-800 border-black hidden" >
                <div id="closePopup" className='flex justify-end'>
                    <button className='bg-orange-400 h-8 w-8 rounded-full border-2 border-black text-white' >
                        x
                    </button>
                </div>
                    <UploadAvatar  />
                </div>
            </div>
            <span className="flex flex-col justify-center">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 text-wrap ">       
                    {fullName}
                </span>
            </span>
        </div>  
    )
}

export default Avatar
