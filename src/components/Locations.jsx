// import React, {useState, useEffect} from 'react'
// import useAxiosPrivate from '../hooks/useAxiosPrivate'
// import { useNavigate, useLocation } from 'react-router-dom'
// import {Checkbox} from './index'
// import {useForm} from 'react-hook-form'


// function Locations() {
//     const [locations, setLocations] = useState()
//     const axiosPrivate = useAxiosPrivate()
//     const navigate = useNavigate()
//     const location = useLocation()
//     const {register} = useForm()

//     useEffect(()=>{
//         let isMounted = true
//         const controller = new AbortController()

//         ;(async()=>{
//             try {
//                 const response = await axiosPrivate.post('api/v1/company/get-location-by-company', 
//                 {
//                     signal: controller.signal
//                 })
//                 isMounted && setLocations(response?.data?.data)

//             } catch (error) {
//                 console.log(error)
//                navigate('/', {state:{ from: location}, replace: true})
//             }
//         })()

//         return ()=>{
//            isMounted = false
//            controller.abort()

//         }
     
//     },[])
    
//     return (
//         <>
//             <label htmlFor="locations" className="text-base font-medium text-gray-600 dark: dark:text-gray-300">
//                 {" "}
//                 Locations {" "}
//             </label>

//             {
//                 locations?.length?
                
//                     locations?.map((location, i) => (
//                             <Checkbox
//                                 type="checkbox"
//                                 key={i}
//                                 label={location?.LocationName}
//                                 id={i} 
//                                 value = {location?.LocationId}
//                                 name="Location"
//                                 { ...register("LocationId")}
//                             />
                        
//                     )): <p> No Location to display </p>
                    
//             }
//         </>
//     )
// }

// export default Locations
