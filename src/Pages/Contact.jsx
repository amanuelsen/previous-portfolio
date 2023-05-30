import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Componets/Styles/Contact.css";
import { IconButton } from "@mui/material";
import WestIcon from "@mui/icons-material/West";

function handleEmailClick() {
  window.location.href = "Amanuelsenai@gmail.com";
}
function Call() {
  window.location.href = "tel:+ 0736506637";
}
export default function Contact() {
  return (
    <div className="contact">
      <h1> Contatac mig </h1>
      <div className="contact-s">
        <div className="inne">
          <p>Email</p>
          <div>
            {
              <IconButton onClick={handleEmailClick}>
                <EmailIcon></EmailIcon>
              </IconButton>
            }
            
          </div>
        </div>
        <div className="inne">
          <p>Tel:</p>
          <div>
            {
              <IconButton onClick={Call}>
                <LocalPhoneIcon />
              </IconButton>
            }
           
          </div>
        </div>
        <div className="inne">
          <p>Linkedin</p>
          <div>
            {
              <IconButton href="https://www.linkedin.com/in/senai-amanuel-769016273/">
                <LinkedInIcon />
              </IconButton>
            }
           
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
