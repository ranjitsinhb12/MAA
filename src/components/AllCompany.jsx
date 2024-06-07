import React, { useEffect, useState } from 'react'
import { selectCurrentUser, updateCompanyId } from '../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import axios from '../api/axios'

function AllCompany() {

    //const [isLogedIn, setIsLogedIn] = useState()
    const [company, setCompany] = useState()
    const axiosPrivate = useAxiosPrivate()
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     setIsLogedIn(useSelector(selectCurrentUser))
        
    // },[isLogedIn])
    const isLogedIn = useSelector(selectCurrentUser)
    if(!isLogedIn){
        return false
    }

    const currentCompany = isLogedIn.CompanyId
    
    useEffect(()=>{
        let isMounted = true
        const controller = new AbortController()
        ;(async()=>{
            try {
                const response = await axiosPrivate.get('/api/v1/company/all-companies',{
                    signal: controller.signal
                })
                isMounted && setCompany(response?.data?.data)
            } catch (error) {
                console.log("No Company Found!")
            }
        }
        )()

        return ()=>{
            isMounted = false
            controller.abort()
            
        }
    },[isLogedIn])



    const companyOption = company?.length ?
            company.map((company, i)=>(
                <option key={i} value={company.CompanyId}>{company.CompanyName}</option>
            )): <option value = "">No Company Found</option>

    const changeCompany = async (e)=>{
        const selectedCompanyId = e.target.value
        if(selectedCompanyId){
            try {
                const response = await axios.post('api/v1/user/update-company',
                     {companyId: selectedCompanyId},
                        {
                            headers: {'Content-Type': 'application/json'},
                                withCredentials: true
                            
                        })
                response && dispatch(updateCompanyId({companyId: selectedCompanyId}))
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <select 
            name="selectedCompany"
            onChange={changeCompany}
            defaultValue={currentCompany}
            className=' p-2 text-orange-400 bg-gray-100 dark:bg-gray-800'
        >
           
            {companyOption}
        </select>
    )
}

export default AllCompany