import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dropdown from 'react-bootstrap/Dropdown';
import   "../styles/Usernavbar.css"


const Usersnavbar = () => {
  return (
    <nav>
    <div className='navbar'>
        
    <div className="logo">
        <h1>SHOPPERSCART<ShoppingCartIcon/></h1>
    </div>
    <div className="option">
        <Link to="/userhomepage/userview">View User</Link>
    </div>
    <div className="account">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
               <AccountCircleIcon/> Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/userhomepage/updateuser">Edit User</Dropdown.Item>
                <Dropdown.Item href="/userhomepage/address">Address</Dropdown.Item>
                <Dropdown.Item href="/">logout</Dropdown.Item>
            </Dropdown.Menu>
            
        </Dropdown>
    </div>
    </div>
</nav>
  )
}

export default Usersnavbar