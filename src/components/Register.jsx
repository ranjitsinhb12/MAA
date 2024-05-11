import {useRef, useState, useEffect} from 'react'

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
        <section className=' bg-xdarkb overflow-auto min-h-lvh'>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center px-4 pt-10 sm:px-6 sm:pt-16 lg:px-8 lg:pt-24">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
                    {errMsg}
                </p>
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl pb-4">
                    Register User
                    </h2>
                    <div className="space-y-5">
                        <div>
                        <label htmlFor="name" className="text-base font-medium text-white">
                            {" "}
                            Full Name{" "}
                        </label>
                        <div className="mt-2">
                            <input
                            className=" text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
                        <div>
                        <label htmlFor="mobile" className="text-base font-medium text-white">
                            {" "}
                            Mobile{" "}
                        </label>
                        <div className="mt-2">
                            <input
                            className=" text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Mobile"
                            id="mobile"
                            autoComplete='off'
                            onChange={(e)=> setMobile(e.target.value)}
                            required
                            />
                        </div>
                        </div>
                        <div>
                        <label htmlFor="email" className="text-base font-medium text-white">
                            {" "}
                            Email{" "}
                        </label>
                        <div className="mt-2">
                            <input
                            className=" text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            placeholder="Email"
                            id="email"
                            autoComplete='off'
                            onChange={(e)=> setemail(e.target.value)}
                            required
                            />
                        </div>
                        </div>
                        <div>
                        <label htmlFor="username" className="text-base font-medium text-white">
                            {" "}
                            Username{" "}
                        </label>
                        <div className="mt-2">
                            <input
                            className=" text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Username"
                            id="username"
                            autoComplete='off'
                            onChange={(e)=> setUser(e.target.value)}
                            required
                            />
                        </div>
                        </div>
                        <div>
                        <div className="flex items-center justify-between">
                            <label
                            htmlFor="password"
                            className="text-base font-medium text-white"
                            >
                            {" "}
                            Password{" "}
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            className=" text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
                        <label htmlFor="avatar" className="text-base font-medium text-white">
                            {" "}
                            Avatar{" "}
                        </label>
                        <div className="mt-2">
                            <input
                            className=" text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="file"
                            placeholder="Avatar"
                            id="avatar"
                            required
                            />
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="flex items-start justify-center px-4 pt-10 sm:px-6 sm:pt-16 lg:px-8 lg:pt-24">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl pb-4">
                        Locations & Pay
                    </h2>
                    <div className="space-y-0">
                        <div>
                        <label htmlFor="locations" className="text-base font-medium text-white">
                            {" "}
                            Locations{" "}
                        </label>
                        <div className="mt-2 pb-4">
                            <input type="checkbox" id="Location1" name="Locations" value="Location1" />      
                            <label htmlFor="Location1" className='text-white'> {" "}Location 1</label>
                        </div>
                        </div>
                        <div>
                        <label htmlFor="payMethod" className="text-base font-medium text-white">
                            {" "}
                            Pay Method{" "}
                        </label>
                        <div className="mt-2  pb-4">
                            <input type="radio" id="TFN" name="payMethod" value="TFN" />
                            <label htmlFor="TFN" className='text-white'>{" "}TFN</label> <br />
                            <input type="radio" id="ABN" name="payMethod" value="ABN" /> 
                            <label htmlFor="ABN" className='text-white'> {" "}ABN</label><br />
                            <input type="radio" id="Cash" name="payMethod" value="Cash" />
                            <label htmlFor="Cash" className='text-white'>{" "}Cash</label>
                        </div>
                        </div>
                        <div>
                        <label htmlFor="payRates" className="text-base font-medium text-white">
                            {" "}
                            Pay Rate{" "}
                        </label>
                        <div className="mt-2">
                            <input
                            className=" text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Pay Rate"
                            id="payRates"
                            />
                        </div>
                        </div>
                    </div>
                </div>
                </div>  
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-2 lg:px-8 lg:py-2">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                </div>
            </div>
            <div className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-2 lg:px-8 lg:py-2">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <div className="space-y-5">
                        <div>
                        <button
                            type="button"
                            className="inline-flex w-full items-center justify-center rounded-md bg-darkb px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-org"
                        >
                            Create Account{" "}
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2"
                            >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

    )
}

export default Register
