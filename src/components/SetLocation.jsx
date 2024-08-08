import { Outlet } from "react-router-dom"
import { useEffect} from 'react'
import { useSelector } from "react-redux"
import { selectCurrentLocation, selectCurrentUser, isLocationMatch } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnUp} from '@fortawesome/free-solid-svg-icons'


function SetLocation() {
    const userCurrentLocation = useSelector(selectCurrentLocation)
    const currentlyLogin = useSelector(selectCurrentUser)
    const locationMatch = useSelector(isLocationMatch)
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(!currentlyLogin){
            navigate('/')
        }
    }, [currentlyLogin])

    return (
        <>
           
            {     
                !locationMatch ?
              
                (<div className=" flex  justify-center h-full items-center px-8">
                <p className="animate-pulse text-sky-300 border border-sky-300 p-4">Please Select Company and Location</p> 
                <FontAwesomeIcon icon={faArrowTurnUp} beat size="xl"  className='ml-4 text-orange-400' />  </div>)
                
                : <Outlet />
            }
        </>
    )
}

export default SetLocation
