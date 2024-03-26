import axios from 'axios'
import React, { useState } from 'react'

const AddAddress = () => {
    const [landmark, setLandmark] = useState("");
    const [buildingname, setBname] = useState("");
    const [housenumber, setHno] = useState("");
    const [addresstype, setAtype] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPin] = useState("");

    const admin = JSON.parse(localStorage.getItem("User"));

    const addAddress = (e) => {
        e.preventDefault();
        const addressData = {
            landmark,
            buildingname,
            housenumber,
            addresstype,
            city,
            state,
            country,
            pincode
        };
        axios.post(`http://localhost:8080/address/${admin.id}`, addressData)
            .then((res) => {
                console.log(res);
                alert("Address Added successfully");
            })
            .catch((err) => {
                console.log(err);
                alert("Something Went Wrong");
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/address/${admin.id}`)
            .then(response => {
                console.log(response);
                // Handle success, such as updating UI or showing a message
                alert('Resource deleted successfully');
            })
            .catch(error => {
                console.error(error);
                // Handle errors, such as displaying an error message
                alert('Failed to delete resource');
            });
    };


    return (
        <div>
           
            <form onSubmit={addAddress}>
                <label htmlFor="landmark">Landmark</label>
                <input required value={landmark} onChange={(e) => setLandmark(e.target.value)} type="text" id="landmark" placeholder="Landmark" />
                <label htmlFor="buildingname">Building Name</label>
                <input required value={buildingname} onChange={(e) => setBname(e.target.value)} type="text" id="buildingname" placeholder="Building Name" />
                <label htmlFor="housenumber">House Number</label>
                <input required value={housenumber} onChange={(e) => setHno(e.target.value)} type="number" id="housenumber" placeholder="House Number" />
                <label htmlFor="addresstype">Address Type</label>
                <input required value={addresstype} onChange={(e) => setAtype(e.target.value)} type="text" id="addresstype" placeholder="Address Type" />
                <label htmlFor="city">City</label>
                <input required value={city} onChange={(e) => setCity(e.target.value)} type="text" id="city" placeholder="City" />
                <label htmlFor="state">State</label>
                <input required value={state} onChange={(e) => setState(e.target.value)} type="text" id="state" placeholder="State" />
                <label htmlFor="country">Country</label>
                <input required value={country} onChange={(e) => setCountry(e.target.value)} type="text" id="country" placeholder="Country" />
                <label htmlFor="pincode">Pincode</label>
                <input required value={pincode} onChange={(e) => setPin(e.target.value)} type="text" id="pincode" placeholder="Pincode" />
                <button type="submit" className='btn btn-outline-info'>Add</button>
                <button type="button" onClick={handleDelete} className='btn btn-outline-danger'>Delete</button> 
         
            </form>
        </div>
    );
};

export default AddAddress;
