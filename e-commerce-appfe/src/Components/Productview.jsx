import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../styles/ViewProduct.css"

const Productview = () => {

  let [content,setContent]=useState([])
  let admin=JSON.parse(localStorage.getItem("Merchant"))
  
  
  useEffect(()=>{
    axios
    .get(`http://localhost:8080/products/${admin.id}`)
    .then((response)=>{
      console.log(response);
      setContent(response.data.body)
  })
    .catch(()=>{console.log("Something went wrong");})

   },[])



  return (
    <div>
     {content.map((x)=>{
      return(
        <div className='maindiv'>
        
        <img src={x.image_url} alt="" />
        <h1>{x.name}</h1>
        <h2>{x.brand}</h2>
        <h3>{x.category}</h3>
        <p>{x.description}</p>
        <h1 id='cost1'>{x.cost}</h1>
        <button  className="btn btn-outline-info">Edit</button>
        <button className="btn btn-outline-danger">Delete</button>
        </div>
      )
     })}
    </div>
  )
}

export default Productview