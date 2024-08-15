
import { useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { locationMatch, selectCurrentLocation, selectCurrentUser, setLocation } from "../features/auth/authSlice"
import {Button} from './index'
import { useNavigate, useLocation } from "react-router-dom"
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import axios from '../api/axios'

function LocationToSelect() {
    
    const [location, setLocations] = useState([])
    const axiosPrivate = useAxiosPrivate()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentLocation = useSelector(selectCurrentLocation)
    const currentUser = useSelector(selectCurrentUser)
    const currentCompanyId = currentUser?.CompanyId
    

    useEffect(()=>{
        let isMounted = true
        const controller = new AbortController()
        ;(async()=>{
            try {
                const response = await axiosPrivate.get('/api/v1/user/all-locations',{
                    signal: controller.signal
                })
                const locations = response?.data?.data
                const userLocations = locations[0].Locations
                
                let defaultLocation = false;
                for (let i = 0; i < userLocations.length; i++) {
                    if(userLocations[i].UserLocation.DefaultLocation === true){
                        defaultLocation = userLocations[i].UserLocation.DefaultLocation
                        dispatch(locationMatch({isLocationMatch: defaultLocation}))
                        dispatch(setLocation({userLocation: userLocations[i].LocationId }))
                        break;
                    }
                }
                
                isMounted && setLocations(userLocations)
            } catch (error) {
                console.log(error?.message)
            }
        }
        )()
        return ()=>{
            isMounted = false
            controller.abort()
        }
    },[currentCompanyId, currentLocation])

  

    const setDefault = async(e) =>{
        const LocationId = e.target.value
        if(!LocationId){
            setErrMsg("Please select One Location!")
        }
        try {
            const response = await axios.post('/api/v1/user/set-user-location',
            {   loginLocation : LocationId,
                companyId: currentCompanyId,
            },
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
                
            })
            const activeLocation = response?.data?.data?.LocationId
            response && dispatch(setLocation({userLocation: activeLocation}))
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            {           
                    
                    location?.length ?
                        <select className=' p-2 text-orange-400 bg-gray-100 dark:bg-gray-800'
                            name = "loginLocation" 
                            value={currentLocation} 
                            onChange={setDefault}
                            >
                            <option value="">--Select Location--</option>
                            {location?.map((location, i) =>(
                                <option key={i} value ={location.LocationId}   
                                > 
                                {location.LocationName}
                                </option>                              

                            ))}
                        </select>
                     :  <p> No Locaion Found! </p>
                        
            }
        </>
    )
}

export default LocationToSelect
