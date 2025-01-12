import {useRef, useState, useEffect} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import{Logo, SetLocation} from './index'
import { useDispatch } from 'react-redux';
import { setCredentials,  togglePersist, locationMatch
} from '../features/auth/authSlice';
import { useSelector } from 'react-redux';


function Login() {
  
  const themeMode = useSelector((state) => state.theme.themeMode)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || "/home"
   const userRef = useRef()
   const errRef = useRef()
   const [user, setUserName] = useState('')
   const [password, setPassword] = useState('')
   const [errMsg, setErrMsg] = useState('')
   const persist = useSelector((state) => state.auth.persist)
    const dispatch = useDispatch()


   useEffect(() => {
    userRef.current;
  }, [])
   useEffect(()=>{
    setErrMsg('')
   }, [user, password])

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const response = await axios.post('api/v1/user/login',
        {
        UserName: user,
        UserPassword: password
      },
      {
        header:
        {'Content-Type' : 'application/json'},
        withCredentials: true
      })
      
      
      const accessToken = response?.data?.data?.accessToken
      const logInUser = response?.data?.data?.user
      const locationId = response?.data?.data?.location

      let defaultLocation = false
      if(locationId){
        defaultLocation = true
      }
      dispatch(setCredentials({user: logInUser, accessToken, location: locationId, isDefaultLocation: defaultLocation }))
      
      
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

    

    useEffect(()=>{
     localStorage.setItem("persist", persist)
    },[persist])

    useEffect(()=>{
      const selector = document.querySelector('html').classList
        selector.remove('light', 'dark')
        selector.add(themeMode)
    },[themeMode])

    const handlePersist = (e)=>{
       dispatch(togglePersist())
    }
    let imageSource
    if(themeMode == 'dark'){
          imageSource = '/maa_logo_dark.png'
    }else{
          imageSource='/maa_logo_light.png'
    }
    return (
       
        <section className=" bg-neutral-200 dark:bg-gray-950 h-screen border-collapse overflow-auto">
        <div className="flex flex-col h-screen lg:items-center lg:justify-center lg:flex-row gap-0">
        <div className="flex mt-5 items-center lg:order-2 justify-center">
        <img
              className='items-center justify-center' 
              src={`${imageSource}`}
              alt="Logo"
        />
          </div>
          <div className="flex flex-col p-8">
            <div className="w-full">
              <p  className={ `${ errMsg ? ' bg-pink-200 p-4 text-red-500 m-2' : 'offscreen'} `} aria-live="assertive">{errMsg}</p>
              <h2 className="font-bold leading-tight text-orange-400 text-2xl md:text-5xl text-center">
                Sign in
              </h2>
            </div>
            <div className="space-y-5">
                <form onSubmit={handleSubmit}  className="mt-8">
                  <div className='flex flex-col'>
                  <div className='w-full mt-2'>
                    <label htmlFor="userName" className="text-base md:text-2xl font-medium text-gray-600 dark:text-white">
                      {" "}
                      Username{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 md:h-16 w-full rounded-md border border-gray-300 bg-transparent text-sm md:text-3xl px-4 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 text-gray-600 dark:text-white disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="userName"
                        autoComplete='off'
                        onChange={(e)=>setUserName(e.target.value)}
                        required
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className='mt-5'>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-base md:text-2xl font-medium dark:text-white text-gray-600">
                        {" "}
                        Password{" "}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 md:h-16 text-gray-600 dark:text-white w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm md:text-3xl placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        id='password'
                        onChange={e=>setPassword(e.target.value)}
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  <div className='mt-5'>

                    <div className="mt-2">
                      <input
                        className=" accent-sky-300 md:h-7 md:w-7"
                        type="checkbox"
                        id='persist'
                        onChange={handlePersist}
                        checked={persist}

                      />
                      <label htmlFor="persist" className="text-base md:text-3xl ml-2 font-medium text-gray-600 dark:text-white">
                        {" "}
                        Trust This Device?{" "}
                      </label>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <button
                      className="inline-flex w-full md:h-16 md:text-3xl items-center justify-center rounded-md bg-sky-300 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-400 hover:text-white"
                    >
                      Sign In{" "}
                      <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                    </button>
                  </div>
                  </div>
              </form>
            </div>
          </div>
          
        </div>
      </section>
        
      
    )
}

export default Login