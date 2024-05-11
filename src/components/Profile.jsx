import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import axios from "../api/axios"

function Profile() {
    const [currentUser, setCurrentUsers] = useState()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
            try {
                ;(async() => {
                const response = await axios.get('/api/v1/user/current-user', {
                    withCredentials: true
                })
                setCurrentUsers(response?.data?.data.FullName)
                console.log(response?.data?.data?.FullName)
                })()
                
            } catch (error) {
                console.log(error)
                navigate('/', {state: {from: location}, replace: true})
                
            }
    },[])
    return (
        <article>
            <h2>User List</h2>
            {currentUser}
        </article>
    )
}

export default Profile
