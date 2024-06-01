import React, {useEffect} from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { useDispatch, useSelector } from 'react-redux'
import { allLocations } from '../features/register/locationSlice'


function useLocations() {
    const axiosPrivate = useAxiosPrivate()
    const dispatch = useDispatch()

    useEffect(()=>{
        let isMounted = true
        const controller = new AbortController()

        ;(async()=>{
            try {
                const response = await axiosPrivate.post('api/v1/company/get-location-by-company', 
                {
                    signal: controller.signal
                })
                isMounted && dispatch(allLocations({locations: response?.data?.data}))
            } catch (error) {
                console.log(error)
            }
        })()

        return ()=>{
           isMounted = false
           controller.abort()

        }
     
    },[])

    return true
}

export default useLocations
