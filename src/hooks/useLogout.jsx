import axios from "../api/axios";
import { setCredentials } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const useLogout = () => {
   
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = async ()=> {
        
        try {
            const response = await axios.post('api/v1/user/logout',{
                withCredentials: true
            })
            dispatch(setCredentials({}))
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return logout
}

export default useLogout