import React from 'react'
import Merchantsnavbar from './Merchantsnavbar'
import { Routes,Route } from "react-router-dom";
import Productview from './Productview';
import UpdateMerchant from "./UpdateMerchant"
import Addproducts from './Addproducts';
import UpdateProduct from './UpdateProduct';
import ReadContent from './ReadContent';


const Merchanthomepage = () => {
  return (
    <div className='mhp'>
   <Merchantsnavbar/>
   <Routes>
    <Route path="/productview" element={<Productview/>}></Route>
   <Route path="/updatemerchant" element={<UpdateMerchant/>}></Route>
   <Route path='/addproduct' element={<Addproducts/>}></Route>
   <Route path="/updateproduct/:id" element={<UpdateProduct />}></Route>
   
   </Routes>
    </div>
  )
}

export default Merchanthomepage