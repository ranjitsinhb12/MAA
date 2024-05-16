import { createContext, useState, useContext} from "react";

const ThemeContext = createContext({})

export const ThemeProvider = ({children})=>{
    const [themeMode, setThemeMode] = useState(localStorage.getItem('themeMode') || 'light')
    return(
        <ThemeContext.Provider value = {{ themeMode, setThemeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext