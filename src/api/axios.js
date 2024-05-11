import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export default axios.create({
    baseUrl: BASE_URL
})

export const axiosPrivate =  axios.create({
    baseUrl: BASE_URL,
    headers:{
        "Content-Type": "application/json"
    },
    withCredentials: true
})
