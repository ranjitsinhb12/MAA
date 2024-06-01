import { Outlet } from "react-router-dom"
import { useState, useEffect} from 'react'
import useRefreshToken from "../hooks/useRefreshToken"
import { useSelector } from "react-redux"

function PersistLogin() {
    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefreshToken()
   /// const { auth, persist} = useAuth()
    const accessToken = useSelector((state) => state.auth.accessToken)
    const persist = useSelector((state) => state.auth.persist)

    useEffect(()=>{
        let isMounted = true
        const verifyRefreshToken = async () => {
            try {
                await refresh();   
            } catch (error) {
                console.log(error)
            }
            finally{
                isMounted && setIsLoading(false)
            }
        }

        !accessToken ? verifyRefreshToken() : setIsLoading(false)

        return ()=> isMounted = false;
    }, [])

    

    return (
        <>
            {
            !persist ?
                <Outlet />:
                isLoading ?
                    <p> Loading... </p> :
                    <Outlet />
            }
        </>
    )
}

export default PersistLogin
