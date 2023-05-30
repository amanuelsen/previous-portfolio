import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

export default function Navbar() {
    const [expand, setexpand]=useState(false)
    const location= useLocation()
    useEffect(()=>{
        setexpand(false)
    },[location])
  return (
    <div className='navbar' id={expand ? "open": "close" }>
        <div className='toggleButton'>
            <button onClick={()=> {setexpand((prev => !prev))}  }>
            <ReorderIcon/> 

            </button>
        </div>
        <div className='links'>
            <Link to={"/"}>Home</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/experience"}>Experience</Link>
            <Link to={"/contact"}>Contacts</Link>


        </div>
      
    </div>
  )
}
