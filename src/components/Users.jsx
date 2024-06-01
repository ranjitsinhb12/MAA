import { useState, useEffect} from "react"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate, useLocation } from "react-router-dom"

function Users() {
    const [users, setUsers] = useState()
    const axiosPrivate = useAxiosPrivate()
    const navigate = useNavigate()
    const location = useLocation()
    
    useEffect(()=>{
        let isMounted = true
        const controller = new AbortController()
        
        ;(async()=>{
            try {
                const response = await axiosPrivate.get('api/v1/user/all-users',{
                    signal: controller.signal
                })
                isMounted && setUsers(response?.data?.data)
            } catch (err) {
                navigate('/', {state: {from: location}, replace: true})
            }
        })()
        
        return ()=>{
            isMounted = false
            controller.abort()
            
        }
    },[])

    return (
        <article>
            <h2> Users List</h2>
            
                {users?.length ?
                (
                    <ul>
                        {users?.map((user, i)=> <li key={i}>{user?.FullName}</li>)}
                    </ul>
                ): <p>No User to display</p>}

        </article>
    
)
}

export default Users
