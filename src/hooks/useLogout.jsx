import axios from "../api/axios";
import { setCredentials } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";


const useLogout = () => {
   
    const dispatch = useDispatch()

    const logout = async ()=> {
        dispatch(setCredentials({}))
        try {
            const response = await axios.post('api/v1/user/logout',{
                withCredentials: true
            })
        } catch (error) {
            console.log(error)
        }
    }

    return logout
}

export default useLogout