import { configureStore } from "@reduxjs/toolkit";
///import { apiSlice } from "./api/apiSlice";
import authReducer from '../features/auth/authSlice'
import themeReducer from '../features/theme/themeSlice'
import rolesReducer from '../features/register/roleSlice'
import locationsReducer from '../features/register/locationSlice'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
        roles: rolesReducer,
        locations: locationsReducer
    },
   
    devTools: true
})