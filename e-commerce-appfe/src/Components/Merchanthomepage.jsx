import React from 'react'
import Merchantsnavbar from './Merchantsnavbar'
import { Routes,Route } from "react-router-dom";
import Productview from './Productview';
import UpdateMerchant from "./UpdateMerchant"

const Merchanthomepage = () => {
  return (
    <div className='mhp'>
   <Merchantsnavbar/>
   <Routes>
    <Route path="/productview" element={<Productview/>}></Route>
   <Route path="/updatemerchant" element={<UpdateMerchant/>}></Route>
   </Routes>
    </div>
  )
}

export default Merchanthomepage