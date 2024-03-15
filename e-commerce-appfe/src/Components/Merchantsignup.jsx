import React, { useState } from "react";
import "../styles/Merchantsignup.css";
import axios from "axios";

const Merchantsignup = () => {
  let [name, setname] = useState("");
  let [gst_number, setgstno] = useState("");
  let [phone, setphone] = useState("");
  let [email, setemail] = useState("");
  let [password, setpasssword] = useState("");

  let data = { name, gst_number, phone, email, password };

  let addMerchant = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/merchant", data)
      .then((res) => {
        console.log(res);
        alert("Sign up successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Data Not found");
      });
  };

  return (
    <div className="merchantsignup">
      <form onSubmit={addMerchant} action="">
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
        <button className="btn btn-outline-info">Submit</button>
      </form>
    </div>
  );
};

export default Merchantsignup;
