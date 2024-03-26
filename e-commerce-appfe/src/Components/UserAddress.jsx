import React, { useEffect, useState } from 'react'
import "../styles/UserAddress.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserAddress = () => {
  let [content,setContent]=useState([])
    let admin=JSON.parse(localStorage.getItem("User"))

  
    useEffect(()=>{
        axios
        .get(`http://localhost:8080/address/${admin.id}`)
        .then((response)=>{
          console.log(response);
          setContent(response.data.body)
          localStorage.setItem("addressData", JSON.stringify(response.data.body));
      })
        .catch(()=>{console.log("Something went wrong");})
            
       },[])
      
  return (
    <div className='address'>
    {content.map((x)=>{
    return(<div className='adddiv'>
      
    
    <p> Address type : {x.addresstype}</p>
    <p> Building name : {x.buildingname}</p>
    <p> City : {x.city}</p>
    <p> Country : {x.country}</p>
    <p> House no : {x.housenumber}</p>
    <p> Landmark : {x.landmark}</p>
    <p> Pincode : {x.pincode}</p>
    <p> State : {x.state}</p>
    <button  className="btn btn-outline-info"><Link to="editaddress">Edit</Link></button>
    <button  className="btn btn-outline-danger">Delete</button>
    <button className="btn btn-outline-success"><Link to="addAddress"> Add Address</Link></button>
    </div>
     )
  })}
  </div>
  )
}

export default UserAddress

{/* <label htmlFor="">landmark</label>
      <input required value={landmark} onChange={(e) => setlandmark(e.target.value)} type="text" placeholder="landmark" />
      <label htmlFor="">buildingname</label>
      <input required value={buildingname} onChange={(e) => setbname(e.target.value)} type="text" placeholder="buildingname" />
      <label htmlFor="">housenumber</label>
      <input required value={housenumber} onChange={(e) => sethno(e.target.value)} type="number" placeholder=" housenumber" />
      <label htmlFor="">addresstype</label>
      <input required value={addresstype} onChange={(e) => setAtype(e.target.value)} type="text" placeholder="addresstype" />
      <label htmlFor="">city</label>
      <input required value={city} onChange={(e) => setcity(e.target.value)} type="text" placeholder="city" />
      <label htmlFor="">state</label>
      <input required value={state} onChange={(e) => setstate(e.target.value)} type="text" placeholder="state" />
      <label htmlFor="">country</label>
      <input required value={country} onChange={(e) => setcountry(e.target.value)} type="text" placeholder="country" />
      <label htmlFor="">pincode</label>
      <input required value={pincode} onChange={(e) => setpin(e.target.value)} type="text" placeholder="pincode" />
      <button className='btn btn-outline-info'>Update</button>
      <button className='btn btn-outline-danger'>Delete</button> */}