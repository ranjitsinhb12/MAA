import {  Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RequireAuth = ({allowedRoles})=>{
    const {auth} = useAuth()
    const location = useLocation()
    let authRole  = auth?.roles
    return (
        authRole && authRole <= allowedRoles ?
            <Outlet /> :
            auth?.user && !allowedRoles ?
                <Navigate to="/home" /> :
                auth?.user ?
                <Navigate to="/unauthorised" state = {{from: location}} replace /> :
                <Navigate to="/" /> 
            
    )
}

export default RequireAuth
