import { Dashboard } from "./pages/DashBoard"
import { SignInPage } from "./pages/Signin"
import {SignupPage} from "./pages/SignupPage"

import {BrowserRouter ,Routes,Route} from "react-router-dom";


const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path = "/signup" element= {<SignupPage/>}  />
    <Route path = "/signin" element = {<SignInPage/>} />
    <Route path = '/dashboard' element = {<Dashboard/>}/>
    <Route/>
  </Routes>
  </BrowserRouter>
}

export default App
