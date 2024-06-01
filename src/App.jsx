import {Login,
   Register,
    Missing, 
    RequireAuth, 
    Home, 
    Unauthorised, 
    Profile, 
    Admin, 
    PersistLogin
} from "./components/index"
import {Routes, Route} from 'react-router-dom'
import Layout from "./Layout"



function App() {
  const ROLES = {
    '1001': 1,
    '1002': 2,
    '1003': 3,
    '1004' : 4,
    '1005': 5,
    '1006' : 6,
    '1007': 7,
    '1008' : 1000,
    

  }
  return (
    <>
      <Routes>
        
      
        {/* Public Route */}
      <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
            {/* All User Loging Route */}
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth allowedRoles={ROLES[1008]}  />}>
                <Route path="home" element={<Home />} />
                <Route path="profile" element={<Profile />} />
              </Route>

              {/* Only Admin User Routes */}
              <Route element={<RequireAuth allowedRoles={ROLES[1001]} />}>
                <Route path="admin" element={<Admin />} />
              </Route>
              { /* Manager and Above user Route */}
              <Route element={<RequireAuth allowedRoles={ROLES[1003]} />}>
                <Route path="register" element={<Register />} />
              </Route>
            
              {/* Unauthorised Route */}
              <Route path="unauthorised" element={< Unauthorised />} />
            </Route>
            {/* Catch All ROute */}
            <Route path="*" element={<Missing />} />
        </Route> 
   
      </Routes>
    </>
  )
}

export default App
