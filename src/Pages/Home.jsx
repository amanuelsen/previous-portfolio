import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../Componets/Styles/Home.css";
import bild from "../Pages/Helpers/s.jpg";
import { Button, IconButton } from "@mui/material";

function handleEmailClick() {
  window.location.href = "Amanuelsenai@gmail.com";
}
function Call() {
  window.location.href = "tel:+ 0736506637";
}

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="parent">
          <img className="bild" src={bild} alt="" />
        </div>{" "}
        <h2>Hi, my name is Senai</h2>
        <div className="prompt">
          <p>
            {" "}
            A junior Fullstack developer with a passion for learing and creating
          </p>
          <IconButton href="https://www.linkedin.com/in/senai-amanuel-769016273/">
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, MaterialUI, StyledComponets, Responisve
              Webdesign
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span> NodeJS, Java, ExpressJS, MongoDB, API</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span> Java, Typescript</span>
          </li>
        </ol>
      </div>
      <div className="me">
        <h2><bold> About me</bold></h2>
        <p>
          Jag är en passionerad fullstack-utvecklare med expertis inom React,
          MongoDB, Node och Javascript. Programvaruutveckling är min passion,
          och jag trivs i att skapa kraftfulla, användarvänliga och säkra
          applikationer. Jag har också djupgående kunskap i MongoDB, vilket gör
          att jag kan skapa effektiva databaslösningar som möjliggör snabba
          åtkomsttider och skalbarhet.
          <br>
          </br> <br>
          </br> Med min expertis inom Node kan jag
          integrera applikationen med tredjeparts-API:er och andra verktyg som
          är nödvändiga för att skapa en robust och säker plattform. Utöver min
          passion för programvaruutveckling är jag en person som värdesätter en
          hälsosam livsstil. Jag tränar regelbundet och ser till att ta hand om
          min kropp och själ för att vara på topp form både fysiskt och mentalt.
          <br>
          </br><br></br>
          <h3>Hobby</h3>
          Jag tror att en hälsosam livsstil är nyckeln till att uppnå framgång
          och prestation i alla aspekter av livet, inklusive arbete. Förutom min
          passion för programvaruutveckling och en hälsosam livsstil, ägnar jag
          också mycket av min fritid åt att utveckla mina kodning färdigheter.
          Att koda är en hobby som jag älskar och som ger mig en möjlighet att
          utforska nya tekniker och verktyg för att skapa spännande projekt.
          Sammanfattningsvis är jag en komplett fullstack-utvecklare som har en
          passion för programvaruutveckling, en hälsosam livsstil och en kärlek
          till att koda på min fritid. 
          <br></br>
          <br>
          </br>
          <h4>Expertis</h4>
          Min expertis inom React, MongoDB, Node
          och Javascript gör mig kapabel att skapa högkvalitativa och innovativa
          applikationer. Jag är fast besluten att göra mitt bästa för att
          leverera högkvalitativa och innovativa lösningar som tillgodoser mina
          kunders behov. Jag trivs också i att bygga starka relationer med mina
          kunder och samarbeta med dem för att skapa en plattform som
          överträffar deras förväntningar. Jag är alltid angelägen om att lära
          mig och utvecklas, och jag tror att det är en viktig del av att vara
          en duktig utvecklare. 
          <br></br>
          Genom att hålla mig uppdaterad med den senaste
          tekniken och utveckla mina färdigheter, kan jag fortsätta att leverera
          innovativa och kraftfulla lösningar. Med min passion för
          programvaruutveckling, en hälsosam livsstil, en kärlek till kodning
          och ett engagemang för att bygga relationer och utvecklas, är jag
          säker på att jag kan bli en ovärderlig tillgång för vilken
          organisation som helst.
        </p>
        <div className="more">
        <IconButton href="https://www.linkedin.com/in/senai-amanuel-769016273/">
                <Button variant="contained">More</Button>
              </IconButton> 

        </div>
      </div>
    </div>
  );
}
