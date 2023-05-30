import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import "./Styles/Footer.css"
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { IconButton } from '@mui/material';

function handleEmailClick() {
  window.location.href = 'Amanuelsenai@gmail.com';
}
function Call() {
  window.location.href = 'tel:+ 0736506637';
}
export default function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
       
      <IconButton onClick={handleEmailClick}>
                <EmailIcon />
              </IconButton>
      
              <IconButton onClick={Call}>
                <LocalPhoneIcon/>
              </IconButton>
    
              <IconButton href='https://www.linkedin.com/in/senai-amanuel-769016273/'>
                <LinkedInIcon/>
              </IconButton>

      </div>
      <p>&copy; 2023 Senai.amanuel.com</p>
    </div>
  )
}
