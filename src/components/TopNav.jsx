import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import {Container} from "./index"
import { useSelector, useDispatch } from "react-redux"
import { darkTheme, lightTheme } from "../features/theme/themeSlice"

function TopNav() {
    ///const {themeMode, setThemeMode } = useTheme()

    const themeMode = useSelector((state) => state.theme.themeMode)
    const dispatch = useDispatch()


    useEffect(()=>{
        localStorage.setItem("themeMode", themeMode)

        const selector = document.querySelector('html').classList
        selector.remove('light', 'dark')
        selector.add(themeMode)

    },[themeMode])



    const handleTheme = (e)=>{
       const darkModeStatus = e.currentTarget.checked
       darkModeStatus ? 
        dispatch(darkTheme())
         : dispatch(lightTheme())

    }

    return (
        <nav className="w-full shadow-md">
            <Container>
                <div className="flex flex-row p-4 ">
                    <div className=" sm:basis-1/2 dark:text-gray-300 text-gray-600"> Adelaide </div>
                    <div className=" justify-between hidden sm:block sm:basis-1/2 text-right items-center">
                    <span className=" mr-2 font-medium text-gray-800 dark:text-gray-400 relative inline-flex items-center" >{themeMode == 'dark' && <FontAwesomeIcon icon={faLightbulb} size="lg" className=" text-yellow-200" />}
                    </span>
                    
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            onChange={handleTheme}
                            checked={themeMode === "dark"}
                        />
                        <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-neutral-200"></div> 
                    </label>
                    <span className=" ml-2 font-medium text-gray-800 dark:text-gray-400 relative inline-flex items-center" >{themeMode != 'dark' && <FontAwesomeIcon icon={faMoon} size="lg"/>}</span>
                    </div>  
                </div>
            </Container>
        </nav>
    )
}

export default TopNav