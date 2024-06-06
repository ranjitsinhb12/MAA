import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import Button from './form/Button'
import { selectCurrentUser, updateAvatar} from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../api/axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'


function UploadAvatar() {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const profileName = useSelector((state) => state?.auth?.user?.FullName)
    const { handleSubmit, register} = useForm()
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const profileImg = useSelector((state) => state?.auth?.user?.Avatar)
    const [isLoading, setIsLoading] = useState(false)
    const [loadingImg, setLoadingImg] = useState('')

    useEffect(()=>{
        !isLoading ? 
            setLoadingImg("Upload"): 
            setLoadingImg(<FontAwesomeIcon icon={faSpinner} beatFade  className='ml-2' />)
    },[isLoading])
    const uploadAvatar = async (data)=>{
        setErrorMsg("")
        setSuccessMsg("")
        setIsLoading(true)
        if(!data.Avatar){
            setErrorMsg('Please Uploade an image!')
            setIsLoading(false)
        }
        const formData = new FormData()
        formData.append("Avatar", data.Avatar[0])
        try {
            const response = await axios.patch('api/v1/user/update-avatar',
                formData, 
                {
                    headers: { "Content-Type": "multipart/form-data"}
                }
            )
            const updatedImg = response?.data?.data?.Avatar
                if(!response){
                    setErrorMsg('Can not Upload, Image Please try later!')
                    setIsLoading(false)
                }else{
                    const updateAvatarState = dispatch(updateAvatar({avatar: updatedImg }))
                    setSuccessMsg("You have updated your Avatar Image!")
                    setIsLoading(false)
                }

        } catch (error) {
            setErrorMsg('Error: Can not Upload, Image Please try later!')
            setIsLoading(false)
        }
        
    }
    
    return (
        <> 
            <div className='flex flex-col items-center mb-7'>
                <img
                    className="inline-block h-20 w-20 rounded-full border-4 border-double border-orange-400 "
                    src={profileImg}
                    alt="Profile Photo"
                />
                {profileName}
            </div>
            <div className='px-6'>
            <p className={errorMsg ? ' border-2 border-red-700 bg-red-300 p-1 text-red-800' : 'offscreen'} aria-live='assertive'>
                {errorMsg}
            </p>
            <p className={successMsg ? ' border-2 border-green-900 bg-green-200 p-1 text-green-900 text-sm' : 'offscreen'} aria-live='assertive'>
                {successMsg}
            </p>
            <h2 className='mb-2 text-orange-400'> Upload Avatar: </h2>
            <form onSubmit={handleSubmit(uploadAvatar)} >
                <input className='mb-4' type='file' id="avatar" {...register("Avatar",{
                    required: "Avatar is required" 
                })} />
            
                <Button type="submit">
                {loadingImg}
                </Button>
                
        
                
            </form>
            </div>
        </>
    )
}

export default UploadAvatar
