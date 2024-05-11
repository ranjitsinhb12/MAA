import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
           <Link to="/register">Register</Link> 
           <br />
           <Link to="/profile">Profile</Link>
           <br />
           <Link to="/admin">Admin</Link>
        </>
    )
}

export default Home
