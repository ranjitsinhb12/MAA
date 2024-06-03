import useAxiosPrivate from "./useAxiosPrivate";
import { setCredentials } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { userLocation } from "../features/auth/userLocationSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const useSelectLocation = async() => {
    const dispatch = useDispatch()
    const axiosPrivate = useAxiosPrivate()
    const navigate = useNavigate()

    useEffect(()=>{
        let isMounted = true
        const controller = new AbortController()
        
        ;(async()=>{
            try {
                const response = await axiosPrivate.get('/api/v1/user/all-locations',{
                    signal: controller.signal
                })
                isMounted && dispatch(userLocation({userLocation: response?.data?.data}))
            } catch (err) {
                navigate('/')
            }
        })()
        
        return ()=>{
            isMounted = false
            controller.abort()
        }
    },[])


    return true
}

export default useSelectLocation
