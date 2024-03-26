import React from 'react'
import UpdateUser from './UpdateUser'
import Usersnavbar from './Usersnavbar'
import { Routes,Route } from "react-router-dom";
import ViewUser from './ViewUser';
import UserAddress from './UserAddress';
import EditAddress from './EditAddress';
import AddAddress from './AddAddress';
import AllProduct from './AllProduct';

const Userhomepage = () => {
  return (
       <div className='mhp'>
   <Usersnavbar/>
   <Routes>
    <Route path='/viewuser' element={<ViewUser/>}></Route>
    <Route path='/updateuser' element={<UpdateUser/>}></Route>
    <Route path='/address' element={<UserAddress/>}></Route>
    <Route path="/address/editaddress" element={<EditAddress/>}></Route>
    <Route path="/address/addAddress" element={<AddAddress/>}></Route>
    <Route path="/" element={<AllProduct/>}></Route>
    
   </Routes>
    </div>
  )
}

export default Userhomepage