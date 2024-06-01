import { createSlice } from "@reduxjs/toolkit";


const roleSlice = createSlice({
    name: "roles",
    initialState:{},
    reducers:{
        allRoles: (state, action) =>{
           const {roles} = action.payload
            state.roles = roles
        }
    }
})

export const {allRoles} = roleSlice.actions

export default roleSlice.reducer
export const selectAllRoles = (state) => state.roles.roles