
import {useForm,  useFieldArray} from 'react-hook-form'
import { useRef, useState } from 'react'
import {Button, Container, Input} from './index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTrash, faLocationDot, faPlus} from '@fortawesome/free-solid-svg-icons'
import axios from '../api/axios'


function AddCompany() {

    const {register, handleSubmit, formState: {errors}, control} = useForm()
    const { fields , prepend, remove } = useFieldArray({
        name: 'location',
        control,
        rules:{
            required: "Please fill at least 1 Location!"
        }
    })

    const [successMsg, setSuccessMsg] = useState()

    // const formReset = reset()



    const addCompany = async(data)=>{
      try {
        // console.log(data?.CompanyName)
        // console.log(data?.location)
        const response = await axios.post('api/v1/company/addcompany',
            {
                CompanyName: data?.CompanyName
            },
            {
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
        const companyId = response?.data?.data?.CompanyId
        if(companyId){
            const locationResponse = await axios.post('api/v1/company/addlocation',
                {
                    CompanyId: companyId,
                    locations: data?.location

                },                
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            )
            
            if(locationResponse){
                const userLocationResponse  = await axios.post('api/v1/user/allocate-admin-location',
                 {
                    CompanyId: companyId
                 },
                 {
                     headers: { 'Content-Type': 'application/json'},
                     withCredentials: true
                 }
                )

                userLocationResponse && setSuccessMsg("Successfully, created Company!")
            }
            
            // formReset

        }

      } catch (error) {
        console.log(error)
      }
    }
    return (
        <Container>
        {successMsg && (<p className=' text-green-800 text-sm mt-0 bg-green-200 p-2'>{successMsg}</p>)}
        <form onSubmit={handleSubmit(addCompany)}>
            <p>{errors.loaction?.root?.message}</p>
            <div className=' w-full px-8'>
                <Input autoComplete="off"  label="Company Name" {...register("CompanyName",{
                    required: true
                })} 
                aria-invalid={errors.CompanyName ? "true" : "false"}
                />
                {errors.CompanyName?.type === "required" && (
                    <p className=' text-red-700 text-sm mt-0 bg-red-300 p-2'>Company Name is required!</p>
                )}
            </div>
            <div className=' flex flex-col sm:flex-row mb-4 mt-10 sm:mt-6 px-8 lg:w-1/3 w-full'>
                <button
                type="button" onClick={()=>prepend({LocationABN: "", LocationName: "", LocationAddress: "", LocationContact: "", LocationEmail: "" })}
                className=' bg-sky-300 p-2 text-orange-400 cursor-pointer'
                >
                    <FontAwesomeIcon icon={faPlus}  className=' text-orange-400 mr-2' />
                    Location{" "}
                    <FontAwesomeIcon icon={faLocationDot} bounce  className=' text-orange-400' />
                </button>

                {
                errors?.location?.root?.message &&
                (<p className=' text-red-700 text-sm mt-0 bg-red-300 p-2 ml-4  '>
                    {errors.location?.root?.message}
                </p>)
                }
            </div>
            
            {fields.map((field, i) => {
                return    <div key={field.id} className='p-2 '>
                            <div className='flex gap-4'> 
                                 <div className='flex justify-center ml-8 items-center p-4 bg-sky-300 text-white rounded-full w-4 h-4'>{i + 1}</div>
                                <div className='flex justify-center rounded-full w-4 h-4 bg-transparent border border-sky-300 p-4 items-center'>
                                    <button type="button" onClick={()=> remove(i)}
                                    >
                                        <FontAwesomeIcon icon={faTrash} className=' text-red-700 dark:text-red-500' />
                                    </button>
                                </div>
                            </div>
                            <div   className=' flex flex-col sm:flex-row mb-4 mt-10 sm:mt-6'>
                                <div className=' basis-1/2 px-8'>
                                    <Input autoComplete="off"  label="ABN" {...register(`location.${i}.LocationABN`,{
                                        required: true
                                    })} 
                                    />
                                  
                                    <Input autoComplete="off"  label="Name" {...register(`location.${i}.LocationName`,{
                                        required: true
                                    })} 
                                    
                                    />
                                </div>
                                <div className=' basis-1/2 px-8'>
                                    <Input autoComplete="off"  label="Phone" {...register(`location.${i}.LocationContact`,{
                                        required: true
                                    })} 
                              
                                    />
                                    
                                    <Input autoComplete="off"  type="email" label="Email" {...register(`location.${i}.LocationEmail`,{
                                        required: true
                                    })} 
                                    
                                    />
                                </div>
                                
                            </div>
                            <div className=' w-full px-8'>
                                <Input autoComplete="off"  label="Address" {...register(`location.${i}.LocationAddress`,{
                                    required: true
                                })} 
                                />
                        
                            </div>
                            <div className=' w-full px-8 text-right p-4'>
                                 
                            </div>
                                
                        </div>

            })}
            <div className=' flex flex-col sm:flex-row mb-4 mt-10 sm:mt-6 p-4'>
            <Button
                type="submit"
            >
                Create Company{" "}
                <FontAwesomeIcon icon={faArrowRight} className='ml-4' />
            </Button>
            </div>
            
        </form>
        </Container>
    )
}

export default AddCompany
