import {Link} from 'react-router-dom'
import {Container} from './index'
import Users from './Users'
import Radio from './form/Radio'
import Upload from './form/Upload'
import Checkbox from './form/Checkbox'
import SetLocation from './SetLocation'
import { selectCurrentLocation, selectCurrentUser } from '../features/auth/authSlice'
import { useSelector } from 'react-redux'


function Home() {
     
    return (

        <Container>

<div className="p-4">
  <h1 className="text-2xl font-bold capitalize text-orange-400 lg:text-3xl">
    Welcome to MAA...
  </h1>
  <p className="my-2 text-sky-300">
    Manage Money Like "MAA" with Money Activity Analysis
  </p>
  
  
  <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
    <div className="space-y-3 bg-white dark:bg-gray-500 p-3 text-center ">
      <h1 className="text-xl font-semibold capitalize text-black dark:text-sky-300">
        Jobcard
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-100">
        - Where you can track your all jobs online with many reports available.
      </p>
      

    </div>
    <div className="space-y-3 bg-white dark:bg-gray-500 p-3 text-center ">
      <h1 className="text-xl font-semibold capitalize text-black dark:text-sky-300 ">
        EOD
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-100">
        - This is a End of Day Calculator
      </p>
    </div>
    <div className="space-y-3 bg-white dark:bg-gray-500 p-3 text-center ">
      <h1 className="text-xl font-semibold capitalize text-black dark:text-sky-300">
        Roster
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-100">
        - Make staff roster easily and available to all staff
      </p>
    </div>
    <div className="space-y-3 bg-white dark:bg-gray-500 p-3 text-center ">
      <h1 className="text-xl font-semibold capitalize text-black dark:text-sky-300">
        Timesheet
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-100">
        - Check you Labour and Timesheet.
      </p>
    </div>
    
  </div>
</div>






          Location: {useSelector(selectCurrentLocation)} <br />
           <Link to="/register">Register</Link> 
           <br />
           <Link to="/profile">Profile</Link>
           <br />
           <Link to="/admin">Admin</Link>
           <br />


        <label>Gender</label>
           <Radio 
                label= "Female"
                name="gender"
                id="female"
                value="female"
           />
           <Radio 
                label= "Male"
                name="gender"
                id="male"
                value="male"
           />
    
    <Radio 
                label= "Other"
                name="gender"
                id="Other"
                value="Other"
           />

           <Upload id="avatar" />
           
           <Checkbox id="Location1" value="Location1" name="Location" />
    
    
        </Container>
    )
}

export default Home
