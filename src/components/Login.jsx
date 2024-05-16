import {useRef, useState, useEffect} from 'react'
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'


function Login() {
  const {setAuth, persist, setPersist} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || "/home"
   const userRef = useRef()
   const errRef = useRef()

   const [user, setUserName] = useState('')
   const [password, setPassword] = useState('')
   const [errMsg, setErrMsg] = useState('')

   useEffect(() => {
    userRef.current;
  }, [])
   useEffect(()=>{
    setErrMsg('')
   }, [user, password])

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const response = await axios.post('/api/v1/user/login',
        {
        UserName: user,
        UserPassword: password
      },
      {
        header:
        {'Content-Type' : 'application/json'},
        withCredentials: true
      })
      console.log(JSON.stringify(response?.data?.data))
      const accessToken = response?.data?.data?.accessToken
      const roles = response?.data?.data?.user?.RoleId
      setAuth({user, roles, accessToken})
      setUserName('')
      setPassword('')
      navigate(from, {replace: true})
    } catch (err) {
      if(!err?.response){
        setErrMsg(' No server response ')
      }else if(err.response?.status === 400){
        setErrMsg(' Username and password is required! ')
      }
      else if(err.response?.status === 404){
        setErrMsg(' No Account found for this user! ')
      }else if(err.response?.status === 401){
        setErrMsg(' Invalid user credentials! ')
      }else if(err.response?.status === 402){
        setErrMsg(' Unauthorised request! ')
      }else{
        setErrMsg(' Login Failed! ')
      }
      errRef.current;
    }
  }

    const togglePersist = ()=> {
      setPersist(prev => !prev)
    }

    useEffect(()=>{
      localStorage.setItem("persist", persist)
    },[persist])

    return (
       
        <section className=" bg-neutral-200 dark:bg-gray-950 overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <p  className={ `${ errMsg ? ' bg-pink-200 p-4 text-red-500 m-2' : 'offscreen'} `} aria-live="assertive">{errMsg}</p>
              <h2 className="text-3xl font-bold leading-tight text-orange-400 sm:text-2xl">
                Sign in
              </h2>
              
              <form onSubmit={handleSubmit}  className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="userName" className="text-base font-medium text-gray-600 dark:text-white">
                      {" "}
                      Username{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 text-gray-600 dark:text-white disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="userName"
                        autoComplete='off'
                        onChange={(e)=>setUserName(e.target.value)}
                        required
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-base font-medium dark:text-white text-gray-600">
                        {" "}
                        Password{" "}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 text-gray-600 dark:text-white w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        id='password'
                        onChange={e=>setPassword(e.target.value)}
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  <div>

                    <div className="mt-2">
                      <input
                        className=" accent-sky-300"
                        type="checkbox"
                        id='persist'
                        onChange={togglePersist}
                        checked={persist}
                      />
                      <label htmlFor="persist" className="text-base font-medium text-gray-600 dark:text-white">
                        {" "}
                        Trust This Device?{" "}
                      </label>
                    </div>
                  </div>
                  <div>
                    <button
                      className="inline-flex w-full items-center justify-center rounded-md bg-sky-300 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-400 hover:text-white"
                    >
                      Sign In{" "}
                      <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="h-full w-full">
            <img
              className="mx-auto h-svh w-full rounded-md object-contain dark:block hidden" 
              src="/maa_logo_dark.png"
              alt=""
            />
            <img
              className="mx-auto h-svh w-full rounded-md object-contain dark:hidden" 
              src="/maa_logo_light.png"
              alt=""
            />
          </div>
        </div>
      </section>
        
      
    )
}

export default Login
