import axios from "../api/axios"
import { setCredentials } from "../features/auth/authSlice"
import { useDispatch } from "react-redux"

function useRefreshToken() {
    const dispatch = useDispatch()
    
     const refresh = async()=>{
         const response = await axios.get('api/v1/user/refresh-token',{
             withCredentials: true,
         })
         const logInUser = response?.data?.data?.user
         const roles = response?.data?.data?.roles
         const accessToken = response?.data?.data?.accessToken
         dispatch(setCredentials({user: logInUser, roles, accessToken}))

         
        return response.data.data.accessToken
        
         
     }
     return refresh
   
}

export default useRefreshToken