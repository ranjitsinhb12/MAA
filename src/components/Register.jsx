import {useRef, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {Container, Radio, Input, Upload, Button, Select} from './index';
import {useForm} from 'react-hook-form'
import Checkbox from './form/Checkbox';
import axios from '../api/axios';
import useRoles from '../hooks/useRoles';
import { useSelector } from 'react-redux';
import useLocations from '../hooks/useLocations';









const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,21}$/;
const PWD_REGEX = /^(?=.[a-z])(?=.*[0-9])(?=.*[!@#%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function Register({user}) {
    const userRef = useRef()
    const errRef = useRef()
    const logedInUser = useSelector((state) => state.auth.user)
    const allRoles = useRoles()
    const roles = useSelector((state) => state.roles.roles)
    const allLocation = useLocations()
    const locations = useSelector((state) => state.locations.locations)
    const[errMsg, setErrMsg] = useState('')
    const[successMsg, setSuccessMsg] = useState('')
    const company = logedInUser?.CompanyId
    const [locationError, setLocationError] = useState('')

    const roleDrowpdown = roles?.length ?
                                roles?.map((role, i)=>(
                                ( <option className=' bg-sky-300 text-white p-8 border-2 border-red-500 cursor-pointer' value ={role.RoleId} key={i}>{role.RoleName.toUpperCase()}</option> )
                                )) : <option>No Role</option>

    
    const {register, handleSubmit, setValue, reset, control, getValues, formState: { errors },} = useForm({
        defaultValues:{
            FullName: user?.FullName || '',
            UserMobile: user?.UserMobile || '',
            UserEmail: user?.UserEmail || '',
            UserName: user?.UserName || '',
            UserPassword: '',
            PayMethod: user?.PayMethod || '',
            PayRates: user?.PayRates || '',
            CompanyId: company ,
        }
    })

    const signup = async(data)=>{
        setErrMsg('')
        setLocationError('')
        setSuccessMsg('')
        const locationSubmited = data?.LocationId
        if(!locationSubmited){
            setLocationError("Please Select Atleast One location")
            return false
        }

        try {
            const response = await axios.post('/api/v1/user/register',
                    data,
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            )
            if(response){
                setSuccessMsg("User created Successfully")
                
            }
            

        } catch (error) {
            if(!error.response){
                setErrMsg(error)
            }else if(error.response.status == 400){
                setErrMsg("All field are required!")
            }else if(error.response.status == 409){
                setErrMsg("User already exist!")
            }else if(error.response.status == 404){
                setErrMsg("Location not Found!")
            }else if(error.response.status == 500){
                setErrMsg("Contact Admin: Something went wrong while creating user!")
            }else{
                setErrMsg(error.message)
            }
        }
    }
    
    return (
       <Container>
        <p ref={errRef} className={errMsg ? ' border-2 border-red-700 bg-red-300 p-3 text-red-800' : 'offscreen'} aria-live='assertive'>
            {errMsg}
        </p>
        <p className={successMsg ? ' border-2 border-green-900 bg-green-200 text-green-950' : 'offscreen'} aria-live='assertive'>
            {successMsg}
        </p>
        <form onSubmit={handleSubmit(signup)}>
            <div className=' flex flex-col sm:flex-row '>
                <div className=' basis-1/2 px-8'>
                    
                    <h2 className="text-xl font-bold leading-tight text-orange-400 sm:text-2xl pb-4 pt-4">
                     Register User
                    </h2>
                    
                        <Input 
                            label="Full Name" 
                            type="text" 
                            placeholder="Full Name" 
                            id="name" 
                            autoComplete="off" 
                            {
                                ...register("FullName", {
                                    required: true
                                })
                            }
                            aria-invalid={errors.FullName ? "true" : "false"}
                        />
                        {errors.FullName?.type === "required" && (
                            <p className=' text-red-700 text-sm mt-0 '>Full Name is required!</p>
                        )}
                        <Input 
                            label="Mobile" 
                            type="text" 
                            placeholder="Mobile" 
                            id="mobile" 
                            autoComplete="off" 
                            {
                                ...register("UserMobile", {
                                    required: true,
                                    maxLength: 10
                                })
                            }
                            aria-invalid={errors.UserMobile ? "true" : "false"}
                        />
                        {errors.UserMobile?.type === "required" && (
                            <p className=' text-red-700 text-sm mt-0 '>Mobile number is required!</p>
                        )}
                        <Input 
                            label="Email" 
                            type="email" 
                            placeholder="Email" 
                            id="email" 
                            autoComplete="off" 
                            {
                                ...register("UserEmail", {
                                    required: true,
                                    validate: {
                                        matchPatern: value => EMAIL_REGEX.test(value)
                                    }
                                })
                            }
                            aria-invalid={errors.UserEmail ? "true" : "false"}
                        />  
                        {errors.UserEmail?.type === "required" && (
                            <p className=' text-red-700 text-sm mt-0 '>Email address is required!</p>
                        )}

                        <Input 
                            label="UserName" 
                            type="text" 
                            placeholder="Username" 
                            id="username" 
                            autoComplete="off" 
                            {
                                ...register("UserName", {
                                    required: true
                                })
                            }
                            aria-invalid={errors.UserName ? "true" : "false"}
                        />
                        {errors.UserName?.type === "required" && (
                            <p className=' text-red-700 text-sm mt-0 '>Username is required!</p>
                        )}
                        <Input 
                            label="Password" 
                            type="password" 
                            placeholder="Password" 
                            id="password" 
                            autoComplete="off" 
                            {
                                ...register("UserPassword", {
                                    required: true,
                                    validate: {
                                        matchPatern: value => PWD_REGEX.test(value)
                                    }
                                })
                            }
                            aria-invalid={errors.UserPassword ? "true" : "false"}
                        /> 
                        {errors.UserPassword?.type === "required" && (
                            <p className=' text-red-700 text-sm mt-0 '>Password is required!</p>
                        )}
                        <div className='mb-4'>
                        <label htmlFor="locations" className="text-base font-medium text-gray-600 dark: dark:text-gray-300">
                            {" "}
                            Locations {" "}
                        </label>

                        {
                            locations?.length?
                            
                                locations?.map((location, i) => (
                                        <Checkbox
                                            type="checkbox"
                                            key={i}
                                            label={location?.LocationName}
                                            id={i} 
                                            value = {location?.LocationId}
                                            { ...register("LocationId[]")}
                                            
                                        />
                                    
                                )): <p className="text-base font-medium text-gray-600 dark: dark:text-gray-300"> No Location to display </p>
                                
                        }
                        {locationError ? (
                            <p className=' text-red-700 text-sm mt-0 '>Please select at least one location!</p>
                        ): ""}
                        </div>


                </div>
                <div className=' basis-1/2 px-8'> 
                    <h2 className="text-xl font-bold leading-tigh text-gray-600 dark:text-gray-300 sm:text-xl pb-4 pt-4">
                        Pay Details:
                    </h2>
                        
                        <Select placeholder="Pay Method" label="Pay Method" name="PayMethod" options={["TFN", "ABN", "CASH", "Other"]} 
                            {
                                ...register("PayMethod", {
                                    required: true
                                })
                            }
                            aria-invalid={errors.PayMethod ? "true" : "false"}
                        />
                        {errors.PayMethod?.type === "required" && (
                            <p className=' text-red-700 text-sm mt-0 '>Please select payment method!</p>
                        )}

                        <Input label="Pay Rate" placeholder="Pay Rate" id="payRates"
                            {
                                ...register("PayRates", {
                                    required: true
                                })
                            }
                            aria-invalid={errors.PayRates ? "true" : "false"}
                        />
                        {errors.PayRates?.type === "required" && (
                            <p className=' text-red-700 text-sm mt-0 '>Pay rates is required!</p>
                        )}

                        <Input label="Company" labelclassName = "hidden" type="text" value = {company} placeholder="Comapny" className=" hidden" id="companyId"
                            {
                                ...register("CompanyId")
                            }
                        />
                        <div className='mb-4'>
                            <label htmlFor="role" className="text-base font-medium text-gray-600 dark:text-gray-300">
                                {" "}
                                Role {" "}
                            </label>
                            <select id= "role" className={`text-gray-600 dark:text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
                            {...register("RoleId", {
                                required: true
                            })}
                            aria-invalid={errors.RoleId ? "true" : "false"}
                            >
                                <option value= "" className=' bg-sky-300 text-white p-8 border-2 border-red-500 cursor-pointer'>-- Select Role --</option>
                                {
                                    roleDrowpdown     
                                }
                            </select>
                            {errors.RoleId?.type === "required" && (
                            <p className=' text-red-700 text-sm mt-0 '>Please select Role!</p>
                            )}
                        </div>
                        
                    
                </div>
                
            </div>
            <div className='px-8'>
                <div>
                    <Button
                        type="submit"
                        onClick={handleSubmit(signup)}
                    >
                        Create Account{" "}
                        <FontAwesomeIcon icon={faArrowRight} className='ml-4' />
                    </Button>
                </div>
        
            </div>
            </form>
           
            </Container>
        
    )
}

export default Register
