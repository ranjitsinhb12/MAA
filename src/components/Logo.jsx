import React from 'react'
import useTheme from '../hooks/useTheme'

function Logo({
    className="",
    ...props
}, ref) {
   const {themeMode} = useTheme()
   let imageSource
   if(themeMode == 'dark'){
        imageSource = '/maa_logo_dark.png'
   }else{
        imageSource='/maa_logo_light.png'
   }
    return (
        <>
        <img
            {...props}
              className={`${className}`} 
              src={`${imageSource}`}
              alt="Logo"
            />
          
        </>
    )
}

export default Logo
