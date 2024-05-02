import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../styles/ViewProduct.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  let [content, setContent] = useState([]);
  let admin = JSON.parse(localStorage.getItem("Merchant"));

let navigate=useNavigate()



  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${admin.id}`)
      .then((response) => {
        console.log(response);
        setContent(response.data.body);
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  }, []);





  let searchByBrand=(brand)=>{
    axios.get(`http://localhost:8080/products/find-by-brand/${brand}`)
    .then((res)=>{
      console.log(res.data.body);
      setContent(res.data.body)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  let searchByCategory=(category)=>{
    axios.get(`http://localhost:8080/products/find-by-category/${category}`)
    .then((res)=>{
      console.log(res.data.body)
      setContent(res.data.body)
    })
  }
  let readData = (id) =>{
    navigate(`/userhomepage/readData/${id}`)
   
  }

//   let editData=(id)=>{
//     navigate(`/merchanthomepage/updateproduct/${id}`)
//   }

  return (
    <div className="disp">
      {content.map((x) => {
        return (
          <div>
            <div className="search">
            <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
           search
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item onClick={()=>{searchByBrand(x.brand)}}>By Brand</Dropdown.Item>
            <Dropdown.Item onClick={()=>{searchByCategory(x.category)}}>By Category</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
              </div>
           
            <div className="productview">
            <div className="image">
              <span id='category'>{x.category}</span>
              <img src={x.image_url} alt="" />
            </div>
            <div className="desc">
              <h4 id='name'onClick={()=>{readData(x.id)}}>{x.name} || {x.brand}</h4>
              <span id='cost'><sup><b>₹</b></sup>{x.cost}</span>
              <br />
            </div>
            <span id='desc'>{x.description}</span>
           
            </div>
            
          </div>
       
        );

      })}
    </div>
  );
};

export default AllProduct;
