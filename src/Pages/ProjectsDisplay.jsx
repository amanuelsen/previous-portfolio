import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { Projectlist } from './Helpers/Projectlist'
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Componets/Styles/PeojectDisplay.css"
import { Button, IconButton } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function ProjectsDisplay() {
    const {id}= useParams()
    const project= Projectlist[id]
    const navigate= useNavigate()
  return (
   <div>
    <div className='knappen'>
    <IconButton>
    <Button variant='contained' size='large' sx={{background:"#5B8FB9",  color:"white", position:"relative", top:25, left:20, display:"flex", alignItems:"center", justifyContent:"center"}} onClick={() => {
        navigate("/projects");
      }} > Go Back <ArrowBackIcon  onClick={() => {
        navigate("/projects")}} sx={{paddingLeft:2, color:"white"}}/> </Button> 
    </IconButton>
      
    </div>
     <div className='project'>
       <h1> {project.name}</h1>
       <img src={project.image} alt="" />
       <p>
       <b> Skills: </b> {project.skills}
       </p>
       <div className='länkarna'><IconButton href={project.url}>
       <GitHubIcon/>
       </IconButton>
       <IconButton href={project.url}>
       <RemoveRedEyeIcon/>
       </IconButton>
       </div>
      
      
    </div>
   </div>
  )
}
