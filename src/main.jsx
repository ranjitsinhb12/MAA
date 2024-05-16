import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './contexts/AuthProvider.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <ThemeProvider>
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AuthProvider>
    </ThemeProvider>
    </BrowserRouter>

)
