import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Landingpage.css';

const LandingPage = () => {
  return (
    <div className='div1'>
      <div><h1>Welcome to e-commerce website</h1></div>
    <div className='landingpage'>
        <Link to="/merchant">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgYH1ojUccuNjEZoqcHCZNqRaN3rW9pl9vQ&usqp=CAU" alt="" /> Merchant
        </Link>
        <Link to="/user">
            <img src="https://cdn-icons-png.flaticon.com/128/236/236832.png" alt="" /> User
        </Link>
    </div>
    </div>
  )
}

export default LandingPage