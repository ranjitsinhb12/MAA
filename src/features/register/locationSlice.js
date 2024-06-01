import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: "locations",
    initialState:{},
    reducers:{
        allLocations: (state, action) =>{
            const {locations} = action.payload
            state.locations = locations
        }
    }
})

export const { allLocations} = locationSlice.actions

export default locationSlice.reducer