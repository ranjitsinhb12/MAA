import { Outlet } from "react-router-dom"
import { useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectCurrentLocation, setLocation, selectCurrentUser } from "../features/auth/authSlice"
import useSelectLocation from "../hooks/useSelectLocation"
import {Radio, Container, Button, AllCompany} from './index'
import { allLocations } from "../features/auth/userLocationSlice"
import {useForm} from 'react-hook-form'
import { useNavigate, useLocation } from "react-router-dom"
import axios from "../api/axios"

function SetLocation() {
    
    const userCurrentLocation = useSelector(selectCurrentLocation)
    const currentlyLogin = useSelector(selectCurrentUser)
    const allLocations = useSelectLocation()
    const locations = useSelector((state) => state.userAllLocation.userLocation)
    const locationArray = locations?.Locations
    const { handleSubmit, register, formState: { errors }} = useForm()
    const persist = useSelector((state) => state.auth.persist)
    const navigate = useNavigate()
    const[errMsg, setErrMsg] = useState('')
    const errRef = useRef()
    const dispatch = useDispatch()

    useEffect(()=>{
        if(!currentlyLogin){
            navigate('/')
        }
    }, [currentlyLogin])

    const user = useSelector(selectCurrentUser)
    const roleId = user?.RoleId

    const locationRadio = locationArray?.map((location, i) =>(                     
        <div key={i} className=" px-12">
            <input   type = "radio" value = {location.LocationId} {...register("loginLocation")} /> {location.LocationName}
        </div>                               

    ))

    const setDefault = async(data) =>{
        setErrMsg('')
        const LocationId = data?.loginLocation
        if(!LocationId){
            setErrMsg("Please select One Location!")
        }
        try {
            const response = await axios.post('/api/v1/user/set-user-location',
                data,
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
                    !userCurrentLocation ?
                        locationArray?.length ?
                            (<div className=" w-full p-4">
                            <p ref={errRef} className={errMsg ? ' border-2 border-red-700 bg-red-300 p-3 text-red-800' : 'offscreen'} aria-live='assertive'>
                                {errMsg}
                            </p>
                            <h2 className="px-8"> Location to Login:</h2>
                            <form>
                            {(roleId === 1) && <AllCompany />}
                            {locationRadio}
                        
                            <div className=' flex flex-col sm:flex-row mb-4 mt-10 sm:mt-6'>
                               
                                <div className=' basis-1/2 px-8'>
                                <Button
                                    type="submit"
                                    onClick={handleSubmit(setDefault)}
                                >
                                    Set Default
                                </Button>
                                </div>
                            </div>
                            </form>
                            </div>
                            ) :  (<p> No Locaion Found! </p>)
                        : <Outlet />
                    }
        </>
    )
}

export default SetLocation
