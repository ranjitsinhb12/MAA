import { Outlet } from "react-router-dom"
import { useState, useEffect, useRef} from 'react'
import useRefreshToken from "../hooks/useRefreshToken"
import { useSelector, useDispatch } from "react-redux"
import { selectCurrentLocation, setLocation } from "../features/auth/authSlice"
import useSelectLocation from "../hooks/useSelectLocation"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import {Radio, Container, Button, SetLocation} from './index'

function PersistLogin() {
    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefreshToken()
    const accessToken = useSelector((state) => state.auth.accessToken)
    const persist = useSelector((state) => state.auth.persist)
    const userCurrentLocation = useSelector(selectCurrentLocation)
    const allLocations = useSelectLocation()
    const locations = useSelector((state) => state.userAllLocation.userLocation)
    const locationArray = locations?.Locations
    const { handleSubmit, register, formState: { errors }} = useForm()
    const navigate = useNavigate()
    const[errMsg, setErrMsg] = useState('')
    const errRef = useRef()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        let isMounted = true
        const verifyRefreshToken = async () => {
            try {
                await refresh();   
            } catch (error) {
                console.log(error)
            }
            finally{
                isMounted && setIsLoading(false)
            }
        }

        !accessToken ? verifyRefreshToken() : setIsLoading(false)
    
        return ()=> isMounted = false;
    }, [])


    return (
        <>
            {                        
                !persist ?
                    <Outlet />
                    :
                        isLoading ?
                            <p> Loading... </p> : <Outlet />
                        
            }
        </>
    )
}

export default PersistLogin
