import axios from 'axios';
import React, { useState } from 'react'
import "../styles/usersignup.css"
const Usersignup = () => {

    let [name, setname] = useState("");
    let [phone, setphone] = useState("");
    let [email, setemail] = useState("");
    let [gender, setgender] = useState("");
    let [password, setpasssword] = useState("");
    let [age, setage] = useState("");

    
  let data = { name, email,phone, gender, password,age };

  let addMerchant = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/User", data)
      .then((res) => {
        console.log(res);
        alert(" User Sign up successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Data Not found");
      });
  };


  return (
    <div className="usersignup">
 <form onSubmit={addMerchant} action="">
   
        <label htmlFor="">Name</label>
        <input
          required
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Enter your name"
        />
        <label htmlFor="">Gender</label>
        <input
          required
          value={gender}
          onChange={(e) => setgender(e.target.value)}
          type="text"
          placeholder="Enter your gender"
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
         <label htmlFor="">age</label>
        <input
          required
          value={age}
          onChange={(e) => setage(e.target.value)}
          type="text"
          placeholder="Enter your age"
        />


        <button className="btn btn-outline-info">Submit</button>
      </form>
   
    </div>
  )
}

export default Usersignup