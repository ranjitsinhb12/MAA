import {useContext} from 'react'
import ThemeContext from '../contexts/themeProvider'

const useTheme = ()=> {
    return useContext(ThemeContext)
}

export default useTheme
