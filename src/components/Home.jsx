import {Link} from 'react-router-dom'
import {Container} from './index'
import Users from './Users'
import Radio from './form/Radio'
import Upload from './form/Upload'
import Checkbox from './form/Checkbox'


function Home() {
    return (

        <Container>
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
