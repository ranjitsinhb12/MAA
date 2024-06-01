import { useSelector } from "react-redux"

function Logo({
    className="",
    ...props
}, ref) {
    const themeMode = useSelector((state) => state.theme.themeMode)
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
