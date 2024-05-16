import {useRef, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,21}$/;
const PWD_REGEX = /^(?=.[a-z])(?=.*[0-9])(?=.*[!@#%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function Register() {
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setemail] = useState('')
    const[errMsg, setErrMsg] = useState('')
    const[success, setSuccess] = useState(false)

    

    return (
        <section className='mb-8'>
            <div className=' flex flex-col sm:flex-row mb-4 mt-10 sm:mt-6'>
                <div className=' basis-1/2 px-8'>
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
                        {errMsg}
                    </p>
                    <h2 className="text-xl font-bold leading-tight text-orange-400 sm:text-2xl pb-4 pt-4">
                     Register User
                    </h2>
                    <div className='mb-4'>
                        <label htmlFor="name" className="text-base font-medium text-gray-600 dark:text-gray-300">
                            {" "}
                            Full Name{" "}
                        </label>
                        <div className="mt-2">
                            <input
                            className=" text-gray-600 dark:text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Full Name"
                            id="name"
                            autoComplete='off'
                            onChange={(e)=> setFullName(e.target.value)}
                            required
                            />
                            <p id="fullNameNote">
            
                            </p>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="mobile" className="text-base font-medium text-gray-600 dark:text-gray-300">
                            {" "}
                            Mobile{" "}
                        </label>
                        <div className="mt-2">
                            <input
                            className=" text-gray-600 dark:text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Mobile"
                            id="mobile"
                            autoComplete='off'
                            onChange={(e)=> setMobile(e.target.value)}
                            required
                            />
                        </div>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="email" className=" text-gray-600 dark:text-gray-300 font-medium ">
                            {" "}
                            Email{" "}
                        </label>
                        <div className="mt-2">
                            <input
                            className=" text-gray-600 dark:text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            placeholder="Email"
                            id="email"
                            autoComplete='off'
                            onChange={(e)=> setemail(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="username" className="text-gray-600 dark:text-gray-300 font-medium">
                            {" "}
                            Username{" "}
                        </label>
                        <div className="mt-2">
                            <input
                            className=" text-gray-600 dark:text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Username"
                            id="username"
                            autoComplete='off'
                            onChange={(e)=> setUser(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <div className="flex items-center justify-between">
                            <label
                            htmlFor="password"
                            className="text-base font-medium dark:text-gray-300 text-gray-600"
                            >
                            {" "}
                            Password{" "}
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            className=" text-gray-600 dark:text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="password"
                            placeholder="Password"
                            id="password"
                            onChange={(e)=> setPassword(e.target.value)}
                            required
                            />
                            <p id="passErr">  </p>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="avatar" className="text-base font-medium text-gray-600 dark:text-gray-300">
                            {" "}
                            Avatar{" "}
                        </label>
                        <div className="mt-2">
                            <input
                            className=" text-gray-600 dark:text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="file"
                            placeholder="Avatar"
                            id="avatar"
                            required
                            />
                        </div>
                    </div>
                </div>
                <div className=' basis-1/2 px-8 pt-4'> 
                    <h2 className="text-xl font-bold leading-tigh text-gray-600 dark:text-gray-300 sm:text-xl">
                        Locations & Pay
                    </h2>
                    <div>
                        <label htmlFor="locations" className="text-base font-medium text-gray-600 dark: dark:text-gray-300">
                            {" "}
                            Locations:{" "}
                        </label>
                        <div className="pl-4 pb-4">
                            <input type="checkbox" id="Location1" name="Locations" value="Location1"  className=' accent-sky-300' />      
                            <label htmlFor="Location1" className='text-gray-600 dark:text-gray-300'> {" "}Location 1</label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="payMethod" className="text-base font-medium text-gray-600 dark:text-gray-300">
                            {" "}
                            Pay Method{" "}
                        </label>
                        <div className=" pl-4  pb-4">
                            <input type="radio" id="TFN" name="payMethod" value="TFN" className=' accent-sky-300' />
                            <label htmlFor="TFN" className='text-gray-600 dark:text-gray-300'>{" "}TFN</label> <br />
                            <input type="radio" id="ABN" name="payMethod" value="ABN" className=' accent-sky-300' /> 
                            <label htmlFor="ABN" className='text-gray-600 dark:text-gray-300'> {" "}ABN</label><br />
                            <input type="radio" id="Cash" name="payMethod" value="Cash" className=' accent-sky-300' />
                            <label htmlFor="Cash" className='text-gray-600 dark:text-gray-300'>{" "}Cash</label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="payRates" className="text-base font-medium text-gray-600 dark:text-gray-300">
                            {" "}
                            Pay Rate{" "}
                        </label>
                        <div className="mt-2">
                            <input
                            className=" text-gray-600 dark:text-gray-300 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Pay Rate"
                            id="payRates"
                            />
                        </div>
                    </div>
                
                    
                </div>
                
            </div>
            <div className='px-8'>
                <div>
                    <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-sky-300 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-400"
                    >
                        Create Account{" "}
                        <FontAwesomeIcon icon={faArrowRight} className='ml-4' />
                    </button>
                </div>
            </div>
                
        </section>

    )
}

export default Register
