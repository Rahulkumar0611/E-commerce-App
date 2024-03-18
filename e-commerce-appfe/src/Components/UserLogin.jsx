import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../styles/UserLogin.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
  let navigate=useNavigate("")


  let [phone, setphone] = useState("");
  let [password, setpassword] = useState("");

  function verifyMerchant(e) {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/User/verify?phone=${phone}&password=${password}`
      )

      .then((res) => {
        console.log(res);
        navigate("/userhomepage")
        localStorage.setItem("User",JSON.stringify(res.data.body))
        alert("User Login Successfully");
      })
      .catch((err) => {
        alert("Invalid credentials");
      });
  }

  return (
    <div className="userLogin">
      <Form>
        <h2>User login form</h2>
        <Form.Group className="mb-3" controlId="fromGroupEmail">
          <Form.Label>Phone no</Form.Label>
          <Form.Control
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fromGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />
        </Form.Group>
        <Form.Group>
          <button onClick={verifyMerchant} className="btn btn-success mx-5">
            Sign in
          </button>
          <button className="btn btn-danger mx-5"><Link to="/usersignup"> Sign up</Link></button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserLogin;
