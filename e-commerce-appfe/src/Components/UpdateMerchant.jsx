import React, { useEffect, useState } from 'react'
import "../styles/UpdateMerchant.css"
import axios from 'axios';
const UpdateMerchant = () => {

  let [name, setname] = useState("");
  let [gst_number, setgstno] = useState("");
  let [phone, setphone] = useState("");
  let [email, setemail] = useState("");
  let [password, setpasssword] = useState("");
  let[id,setid]=useState("");
 

  let data = { name, gst_number, phone, email, password,id};
  
  let merchant=JSON.parse(localStorage.getItem("Merchant"))

  console.log(merchant.name);

  useEffect(()=>{
     setname(merchant.name)
     setemail(merchant.email)
     setgstno(merchant.gst_number)
     setphone(merchant.phone)
     setpasssword(merchant.password)
     setid(merchant.id)
  },[])

  function updateData(e){
    e.preventDefault();
    axios
      .put(`http://localhost:8080/merchant`, data)
      .then((res) => {
        console.log(res);
        alert("Data Updated successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Data Not found");
      });
   
  }

  return (
   
     <div className="merchantsignup">
      <form onSubmit={updateData} action="">
      <label htmlFor="">Id</label>
        <input
          required
          value={id}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Enter your Merchant id"
        />
        <label htmlFor="">Name</label>
        <input
          required
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Enter your name"
        />
        <label htmlFor="">Gst_number</label>
        <input
          required
          value={gst_number}
          onChange={(e) => setgstno(e.target.value)}
          type="text"
          placeholder="Enter your gstno"
        />
        <label htmlFor="">Phone no</label>
        <input
          required
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          type="tel"
          pattern="[0-9]{10}"
          placeholder="Enter your phone"
        />
        <label htmlFor="">Email</label>
        <input
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="text"
          placeholder="Enter your password"
        />
        <label htmlFor="">Password</label>
        <input
          required
          value={password}
          onChange={(e) => setpasssword(e.target.value)}
          type="text"
          placeholder="Enter your password"
        />
        <button className="btn btn-outline-info">Update</button>
      </form>

    </div>
  )
}

export default UpdateMerchant