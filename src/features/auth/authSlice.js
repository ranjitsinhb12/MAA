import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        persist: localStorage.getItem('persist') === "true" ? true : false,
    },
    reducers:{
        setCredentials: (state, action) => {
            const {user, roles, accessToken} = action.payload
            state.user = user
            state.roles = roles
            state.token = accessToken
        },
        logOut:(state, action)=>{
            state.user = null
            state.roles = null
            state.token = null
        },
        togglePersist: (state, action)=> {
            state.persist ?
                state.persist = false
                : state.persist = true
            
        }
       
    }
})

export const { setCredentials, logOut, togglePersist} = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentRoles = (state) => state.auth.roles
export const selectCurrentPersist = (state) => state.auth.persist