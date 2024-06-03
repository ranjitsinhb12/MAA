import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        persist: localStorage.getItem('persist') === "true" ? true : false,
    },
    reducers:{
        setCredentials: (state, action) => {
            const {user, accessToken, location} = action.payload
            state.user = user
            state.token = accessToken
            state.location = location
        },
        logOut:(state, action)=>{
            state.user = null
            state.token = null
        },
        togglePersist: (state, action)=> {
            state.persist ?
                state.persist = false
                : state.persist = true
            
        },
        setLocation: (state, action) =>{
            const { userLocation } = action.payload
            state.location = userLocation
        }
       
    }
})

export const { setCredentials, logOut, togglePersist, setLocation} = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentPersist = (state) => state.auth.persist
export const selectCurrentLocation = (state) => state.auth.location