import axios from 'axios'
import React, { useState } from 'react'
import "../styles/addProduct.css"

const Addproducts = () => {

    let [id,setid]=useState("")
    let [name,setname]=useState("")
    let [brand,setbrand]=useState("")
    let [category,setcategory]=useState("")
    let [description,setdesc]=useState("")
    let [cost,setcost]=useState("")
    let [image_url,setimageurl]=useState("")

    let data={id,name,brand,category,description,cost,image_url}
    let admin=JSON.parse(localStorage.getItem("Merchant"))

    let addData = (e) => {
        e.preventDefault();
        axios
          .post(`http://localhost:8080/products/${admin.id}`, data)
          .then((res) => {
            console.log(res);
            alert("Product Added successfully");
          })
          .catch((err) => {
            console.log(err);
            alert("Something Went Wrong");
          });
      };

  return (
    <div className='main'>
        <form onSubmit={addData} action="">
        <label htmlFor="">Name</label>
        <input value={name}  onChange={(e) => setname(e.target.value)} type="text" required placeholder='Enter your name' />
        <label htmlFor="">Brand</label>
        <input value={brand} onChange={(e) => setbrand(e.target.value)} type="text" required placeholder='Enter Brand' />
        <label htmlFor="">Category</label>
        <input value={category} onChange={(e) => setcategory(e.target.value)} type="text" required placeholder='Enter Category ' />
        <label htmlFor="">Description</label>
        <input value={description} onChange={(e) => setdesc(e.target.value)} type="text" required placeholder='Enter Description' />
        <label htmlFor="">Cost</label>
        <input value={cost} onChange={(e) => setcost(e.target.value)} type="text" required placeholder='Enter cost' />
        <label htmlFor="">image_url</label>
        <input value={image_url} onChange={(e) => setimageurl(e.target.value)} type="text" required placeholder='Enter image url ' />
        <button className="btn btn-outline-info">Submit</button>
        </form>
    </div>
    
  )
}

export default Addproducts