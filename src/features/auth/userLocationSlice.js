import { createSlice } from "@reduxjs/toolkit";

const userLocationSlice = createSlice({
    name: 'userAllLocation',
    initialState: {},
    reducers:{
        userLocation: (state, action) => {
            const {userLocation} = action.payload
            state.userLocation = userLocation
        },
      
    }
})

export const {userLocation} = userLocationSlice.actions

export default userLocationSlice.reducer

export const allLocations = (state) => state.userAllLocation.userLocation

