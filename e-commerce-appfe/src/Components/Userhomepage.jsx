import React from 'react'
import UpdateUser from './UpdateUser'
import Usersnavbar from './Usersnavbar'
import { Routes,Route } from "react-router-dom";
import ViewUser from './ViewUser';
import UserAddress from './UserAddress';

const Userhomepage = () => {
  return (
       <div className='mhp'>
   <Usersnavbar/>
   <Routes>
    <Route path='/viewuser' element={<ViewUser/>}></Route>
    <Route path='/updateuser' element={<UpdateUser/>}></Route>
    <Route path='/address' element={<UserAddress/>}></Route>
   </Routes>
    </div>
  )
}

export default Userhomepage