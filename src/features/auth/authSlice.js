import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        persist: localStorage.getItem('persist') === "true" ? true : false,
    },
    reducers:{
        setCredentials: (state, action) => {
            const {user, accessToken, location, isDefaultLocation} = action.payload
            state.user = user
            state.token = accessToken
            state.location = location
            state.isLocationMatch = isDefaultLocation
            
        },
        logOut:(state, action)=>{
            state.user = null
            state.token = null
            state.location = null
            state.isLocationMatch = null
        },
        togglePersist: (state, action)=> {
            state.persist ?
                state.persist = false
                : state.persist = true
            
        },
        setLocation: (state, action) =>{
            const { userLocation } = action.payload
            state.location = userLocation
        },
        updateAvatar: (state, action) =>{
            const { avatar } = action.payload
            state.user.Avatar = avatar
        },
        updateCompanyId: (state, action) =>{
            const {companyId} = action.payload
            state.user.CompanyId = Number(companyId)
        },
        locationMatch: (state, action) => {
            const {isLocationMatch} = action.payload
            state.isLocationMatch = isLocationMatch
        }

       
    }
})

export const { setCredentials, logOut, togglePersist, setLocation, updateAvatar, updateCompanyId, locationMatch} = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentPersist = (state) => state.auth.persist
export const selectCurrentLocation = (state) => state.auth.location
export const isLocationMatch = (state) => state.auth.isLocationMatch
//export const selectCurrentCompany = (state) => state.auth.user.CompanyId

