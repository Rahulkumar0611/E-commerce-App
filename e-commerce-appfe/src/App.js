import { BrowserRouter,Routes,Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import MerchantLogin from "./Components/MerchantLogin";
import UserLogin from "./Components/UserLogin";
import 'bootstrap/dist/css/bootstrap.min.css';
import Merchantsignup from "./Components/Merchantsignup";
import Merchanthomepage from "./Components/Merchanthomepage";
import Userhomepage from "./Components/Userhomepage";
import ErrorPage from "./Components/ErrorPage";

import Usersignup from "./Components/Usersignup";
import Protect from "./Components/Protect";
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ErrorPage/>}></Route>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/merchant" element={<MerchantLogin/>}></Route>
        <Route path="/user" element={<UserLogin/>}></Route>
        <Route path="/merchantsignup" element={<Merchantsignup/>}></Route>
        <Route path="/merchanthomepage/*" element={<Protect Child={Merchanthomepage}/>}></Route>
        <Route path="/userhomepage/*" element={<Userhomepage/>}></Route>
        <Route path="usersignup" element={<Usersignup/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
