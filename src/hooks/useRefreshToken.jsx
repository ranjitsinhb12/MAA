import axios from "../api/axios"
import { setCredentials } from "../features/auth/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate, useLocation } from "react-router-dom"

function useRefreshToken() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
     const refresh = async()=>{
         try {
            const response = await axios.get('api/v1/user/refresh-token',{
                withCredentials: true,
            })
            const logInUser = response?.data?.data?.user
            const accessToken = response?.data?.data?.accessToken
            const locationId = response?.data?.data?.location
            
            dispatch(setCredentials({user: logInUser, accessToken, location: locationId}))
   
           return response.data.data.accessToken
         } catch (error) {
            navigate('/', {state: {from: location}, replace: true})
         }
        
         
     }
     return refresh
   
}

export default useRefreshToken