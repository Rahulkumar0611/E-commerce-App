import React, { useEffect, useState } from 'react'
import "../styles/AddContent.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'

const AddContent = () => {


let user=JSON.parse(localStorage.getItem("User"))
let param=useParams()
let[data,setdata]=useState("")
useEffect(()=>{
    axios.get(`http://localhost:8080/products/find-by-id/${param.id}`)
    .then((res)=>{
     console.log(res.data.body);
    })
    .catch((err)=>{
    console.log("Something went wrong");
    })
})


  return (
    <div className='main'>
    <h1>{data.name}</h1>
    </div>
  )
}

export default AddContent