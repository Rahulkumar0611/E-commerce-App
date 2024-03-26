import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [cost, setCost] = useState("")
    const [image_url, setImageUrl] = useState("")

    let navigate=useNavigate()

    let param=useParams()

    useEffect(() => {
        axios.get(`http://localhost:8080/products/find-by-id/${param.id}`)
            .then((res) => {
                const { id, name, brand, category, description, cost, image_url } = res.data.body;
                setId(res.data.body.id);
                setName(res.data.body.name);
                setBrand(res.data.body.brand);
                setCategory(res.data.body.category);
                setDescription(res.data.body.description);
                setCost(res.data.body.cost);
                setImageUrl(res.data.body.image_url);
    
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const editData = (e) => {
        e.preventDefault();
        const data = { id, name, brand, category, description, cost, image_url };
        axios.put(`http://localhost:8080/products`, data)
            .then((res) => {
                console.log(res);
                alert("Data Updated")
                // navigate("")
            })
            .catch((err) => {
                console.log(err);
                alert("Something went wrong")
            })
    }

    return (
        <div className='main'>
            <form onSubmit={editData}>
                <label htmlFor="">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" required placeholder='Enter your name' />
                <label htmlFor="">Brand</label>
                <input value={brand} onChange={(e) => setBrand(e.target.value)} type="text" required placeholder='Enter Brand' />
                <label htmlFor="">Category</label>
                <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" required placeholder='Enter Category ' />
                <label htmlFor="">Description</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" required placeholder='Enter Description' />
                <label htmlFor="">Cost</label>
                <input value={cost} onChange={(e) => setCost(e.target.value)} type="text" required placeholder='Enter cost' />
                <label htmlFor="">image_url</label>
                <input id='input1' value={image_url} onChange={(e) => setImageUrl(e.target.value)} type="text" required placeholder='Enter image url ' />
                <button className="btn btn-outline-info" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdateProduct
