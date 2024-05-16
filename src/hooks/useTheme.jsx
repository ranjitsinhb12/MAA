import {useContext} from 'react'
import ThemeContext from '../contexts/ThemeProvider.jsx'

const useTheme = ()=> {
    return useContext(ThemeContext)
}

export default useTheme
