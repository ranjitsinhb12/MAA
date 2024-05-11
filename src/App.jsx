import {Login, Layout, Register, Missing, RequireAuth, Home, Unauthorised, Profile, Admin} from "./components/index"
import {Routes, Route} from 'react-router-dom'

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
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Login />} />
            
            <Route element={<RequireAuth allowedRoles={ROLES[1008]}  />}>
              <Route path="home" element={<Home />} />
              <Route path="profile" element={<Profile />} />
            </Route>
              <Route element={<RequireAuth allowedRoles={ROLES[1003]} />}>
                <Route path="register" element={<Register />} />
                <Route path="admin" element={<Admin />} />
              </Route>
           
            <Route path="unauthorised" element={< Unauthorised />} />
            <Route path="*" element={<Missing />} />
        </Route> 
      </Routes>
    </>
  )
}

export default App
