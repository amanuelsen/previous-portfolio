import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import "../Componets/Styles/Experience.css";
import WorkIcon from "@mui/icons-material/Work";

export default function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019- 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />} 
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Klar Västra Gymnasium, Stockholm
          </h3>
          <p>Gymasium Utbilding i Ekonomi</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022- 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Techover Academy</h3>
          <p>Under din tid på utbildningen för fullstack-utveckling lärde du dig en rad olika teknologier och verktyg som är relevanta för att bygga moderna webbapplikationer. Bland de viktigaste verktygen var JavaScript, som används för att skapa interaktivitet och dynamiska användargränssnitt på webben. Du lärde dig också om de senaste funktionerna i ECMAScript 6 (ES6) som hjälper till att skriva mer effektiv och lättläst kod.

Du fick också en grundlig förståelse för HTML och CSS, inklusive responsive webbdesign, som används för att strukturera och styla webbsidor. Du lärde dig hur man bygger webbsidor som ser bra ut och fungerar på alla enheter och skärmstorlekar.

Utöver front-end-tekniker lärde du dig också om olika teknologier för att hantera data och kommunikation mellan klient och server. Till exempel studerade du MongoDB, en NoSQL-databas som är populär för sin skalbarhet och flexibilitet. Du fick också en grundlig förståelse för att skapa och använda API:er, som används för att tillhandahålla data och funktionalitet för externa applikationer.

På serversidan lärde du dig hur man skapar applikationer med Node.js, en populär plattform för att bygga serverapplikationer med JavaScript. Du fick också en grundlig förståelse för att använda ramverket Express.js för att skapa robusta och skalbara webbapplikationer.

Slutligen lärde du dig också om React, ett populärt JavaScript-bibliotek som används för att bygga avancerade och interaktiva användargränssnitt på webben. Med alla dessa verktyg och teknologier är du nu väl förberedd att börja bygga professionella webbapplikationer som fullstack-utvecklare.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022- 2023"
          iconStyle={{ background: "yellow", color: "black" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Post nord chaufför{" "}
          </h3>
          <p>
            Under din tid som chaufför på Postnord presterade jag utmärkt genom
            att leverera paket på ett vänligt sätt och se till att kunderna var
            nöjda med servicen. Jag var också försiktig och noggrann när jag
            körde och prioriterade alltid säkerheten. Tack vare min
            professionella inställning och engagemang var du en värdefull medlem
            i teamet på Posten.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020- 2022"
          iconStyle={{ background: "yellow", color: "Black" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Telfon försäljning
          </h3>
          <p>
            {" "}
            Jag har tidigare erfarenheter av telefonförsäljning där jag har sålt
            elevantal och även testat på att sälja TV-kanaler. Genom dessa
            erfarenheter har jag utvecklat mina säljkunskaper och lärt mig hur
            man övertygar kunder att köpa produkter eller tjänster.{" "}
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019- 2020"
          iconStyle={{ background: "yellow", color: "black" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Restaurang </h3>
          <p>
            Jag har också arbetat på en thailändsk restaurang i Barkaby under
            flera veckor och har skaffat mig goda kunskaper och erfarenheter
            inom service. Genom mina erfarenheter har jag fått en överblick över
            hur man på ett professionellt sätt bemöter kunderna, samt erfarenhet
            av att servera mat och jobba i köket.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020- 2021"
          iconStyle={{ background: "yellow", color: "black" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Utesäljare för företaget Face 2 Face
          </h3>
          <p>
            Jag jobbade som utesäljare för företaget 2 Face där jag sålde deras
            tjänster till potentiella kunder. Det var en spännande tid där jag
            fick lära mig mycket om försäljning och hur man interagerar med
            främlingar på ett professionellt och vänligt sätt. Under min tid på
            2 Face fick jag möjligheten att träffa och prata med många olika
            människor från olika bakgrunder och kulturer. Genom att lyssna på
            deras behov och önskemål kunde jag anpassa mina säljstrategier för
            att övertyga dem om att 2 Face var rätt val för dem. Att arbeta som
            utesäljare var en utmaning, men jag lärde mig mycket om att hantera
            avslag och att fortsätta vara positiv och motiverad trots
            svårigheter. Att arbeta för 2 Face gav mig också en unik erfarenhet
            av att samarbeta med kollegor och att driva försäljning tillsammans.
            Allt som allt var min tid på 2 Face en värdefull erfarenhet där jag
            utvecklade mina försäljningsförmågor och lärde mig att behandla alla
            kunder på ett vänligt och professionellt sätt.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
