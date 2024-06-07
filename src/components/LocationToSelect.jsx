
import { useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectCurrentLocation, setLocation, selectCurrentToken } from "../features/auth/authSlice"
import useSelectLocation from "../hooks/useSelectLocation"
import {Button} from './index'
import { allLocations } from "../features/auth/userLocationSlice"
import { useNavigate, useLocation } from "react-router-dom"
import axios from "../api/axios"

function LocationToSelect() {
    
    const userCurrentLocation = useSelector(selectCurrentLocation)
    const allLocations = useSelectLocation()
    const locations = useSelector((state) => state?.userAllLocation?.userLocation)
    const locationArray = locations?.Locations
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentLocation = useSelector(selectCurrentLocation)

    const setDefault = async(e) =>{
        console.log(e.target.value)
        const LocationId = e.target.value
        if(!LocationId){
            setErrMsg("Please select One Location!")
        }
        try {
            const response = await axios.post('/api/v1/user/set-user-location',
                {loginLocation : LocationId},
            {
                headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                
            })
            response && dispatch(setLocation({userLocation: LocationId}))
        } catch (error) {
            console.log(error)
            navigate('/')
            return false
        }

    }

    return (
        <>
            {           
                    
                locationArray?.length ?
                        <select className=" text-green-700" 
                            name = "loginLocation" 
                            value={currentLocation} 
                            onChange={setDefault}
                            >
                            {locationArray?.map((location, i) =>(
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
