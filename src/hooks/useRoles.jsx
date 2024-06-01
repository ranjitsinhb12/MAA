import {useEffect} from 'react'
import useAxiosPrivate from './useAxiosPrivate'
import { useDispatch } from 'react-redux'
import { allRoles } from '../features/register/roleSlice'

 const useRoles = async() =>{
    const dispatch = useDispatch()
    const axiosPrivate = useAxiosPrivate()
    useEffect(()=>{
        let isMounted = true
        const controller = new AbortController()
       
        ;(async()=>{
            try {
                const response = await axiosPrivate.get('api/v1/user/all-roles', {
                    signal: controller.signal
                 })
                 isMounted && dispatch(allRoles({roles: response?.data?.data})) 
            } catch (error) {
                console.log(error.message)
            }

        })()
        return ()=>{
            isMounted = false
            controller.abort()
        }
    
    },[])
    return true
}

export default useRoles