import {Link, useNavigate} from 'react-router-dom'
import useLogout from '../hooks/useLogout'
import {Header, Footer, TopNav} from './'

function Home() {
    const logout = useLogout()
    const navigate = useNavigate()

    const signOut = async ()=>{
        await logout()
      
    }
    return (
        <>
           <Link to="/register">Register</Link> 
           <br />
           <Link to="/profile">Profile</Link>
           <br />
           <Link to="/admin">Admin</Link>
           <br />
            <button onClick={signOut}>Sign Out</button>
            

        </>
    )
}

export default Home
