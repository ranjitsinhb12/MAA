import {useRef, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {Container, Radio, Input, Upload, Button} from './index';
import {useForm} from 'react-hook-form'
import Checkbox from './form/Checkbox';
import axios from '../api/axios';



const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,21}$/;
const PWD_REGEX = /^(?=.[a-z])(?=.*[0-9])(?=.*[!@#%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function Register() {
    const userRef = useRef()
    const errRef = useRef()

    const[errMsg, setErrMsg] = useState('')
    
    const {register, handleSubmit} = useForm()
    
    const signup = async(data, e)=>{
        e.preventDefault()
        setErrMsg('')
        console.log(data)
        try {
            const response = await axios.post('api/v1/user/register',
                JSON.stringify({data}),{
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            )
            console.log(response.data)

        } catch (error) {
            setErrMsg(error.message)
        }
    }

    return (
       <Container>
        <form onSubmit={handleSubmit(signup)}>
            <div className=' flex flex-col sm:flex-row mb-4 mt-10 sm:mt-6'>
                <div className=' basis-1/2 px-8'>
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
                        {errMsg}
                    </p>
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
                        />

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
                        />

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
                        />  

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
                        />

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
                        /> 

                        <Upload
                            label="Avatar"
                            id="avatar"
                            {
                                ...register("Avatar", {
                                    required: true
                                })
                            }

                        />

                </div>
                <div className=' basis-1/2 px-8 pt-4'> 
                    <h2 className="text-xl font-bold leading-tigh text-gray-600 dark:text-gray-300 sm:text-xl">
                        Locations & Pay
                    </h2>
                        <label htmlFor="locations" className="text-base font-medium text-gray-600 dark: dark:text-gray-300">
                            {" "}
                            Locations:{" "}
                        </label>
                        <Checkbox 
                            label="Location 1" 
                            id="location1" 
                            name="Location" 
                            value="location1"
                            {
                                ...register("Location[]")
                            }
                        />
                        <Checkbox 
                        
                            label="Location 2" 
                            id="location2" 
                            name="Location" 
                            value="location2"
                            {
                                ...register("Location[]")
                            }
                            />
                    
                        
                        <label htmlFor="payMethod" className="text-base font-medium text-gray-600 dark:text-gray-300">
                            {" "}
                            Pay Method{" "}
                        </label>

                        <Radio 
                            label="TFN" 
                            id="TFN" 
                            name="payMethod" 
                            value="TFN"
                            {
                                ...register("PayMethod")
                            }
                        />
                        <Radio 
                            label="ABN" 
                            id="ABN" 
                            name="payMethod" 
                            value="ABN"
                            {
                                ...register("PayMethod")
                            }
                            />
                        <Radio 
                            label="Cash" 
                            id="Cash" 
                            name="payMethod" 
                            value="Cash" 
                            {
                                ...register("PayMethod")
                            }
                            />

                        <Input label="Pay Rate" placeholder="Pay Rate" id="payRates" />
                    
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
