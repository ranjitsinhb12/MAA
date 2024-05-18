import axios from "../api/axios"
import useAuth from "./useAuth"

function useRefreshToken() {
    const { setAuth } = useAuth()
    
     const refresh = async()=>{
         const response = await axios.get('/api/v1/user/refresh-token',{
             withCredentials: true,
         })
         setAuth(prev => {
            console.log(JSON.stringify(prev))
            console.log(response.data?.data.user)
    
            return {
                ...prev,
                user: response?.data?.data?.user,
                roles: response?.data?.data?.roles,
                accessToken : response?.data?.data?.accessToken}
        })
        return response.data.data.accessToken
        
         
     }
     return refresh
   
}

export default useRefreshToken