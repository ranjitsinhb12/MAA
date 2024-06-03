import {  Navigate, Outlet, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../features/auth/authSlice"

const RequireAuth = ({allowedRoles})=>{
  ///  const {auth} = useAuth()
    const location = useLocation()
   /// let authRole  = auth?.roles

    const token = useSelector(selectCurrentToken)
    const role = useSelector((state) => state?.auth?.user?.RoleId)
    return (
        role && role <= allowedRoles ?
            <Outlet /> :
            token && !allowedRoles ?
                <Navigate to="/home" /> :
                 token ?
                <Navigate to="/unauthorised" state = {{from: location}} replace /> :
                <Navigate to="/" /> 
            
    )
}

export default RequireAuth
