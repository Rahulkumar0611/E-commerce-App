import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../styles/MerchantLogin.css"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const MerchantLogin = () => {

  let navigate=useNavigate("")

let [phone,setphone]=useState("")
let [password,setpassword]=useState("")

  
function verifyMerchant(e){
  e.preventDefault(); 
  axios.post(`http://localhost:8080/merchant/verify?phone=${phone}&password=${password}`)
 
  .then((res)=>{
    console.log(res);
    console.log(res.data);
    localStorage.setItem("Merchant",JSON.stringify(res.data.body))

    navigate("/merchanthomepage");
    alert("Login Successfully");
  }) 
  .catch((err)=>{
    alert("Invalid credentials");
  })
 }

  return (
    <div className="merchantlogin">
      <Form>
        <h1>Merchant Login</h1>
        <Form.Group className="mb-3" controlId="fromGroupEmail">
          <Form.Label>Phone no</Form.Label>
          <Form.Control value={phone}  onChange={(e)=>setphone(e.target.value)}  type="tel" placeholder="Enter phone no" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fromGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password}  onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Enter your password" />
        </Form.Group>
        <Form.Group>
            <button onClick={verifyMerchant} className="btn btn-success mx-5">Sign in</button>
            <button className="btn btn-danger mx-5"><Link to="/merchantsignup">Sign up</Link></button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default MerchantLogin;
