import { useEffect, useState } from "react";
import "./motivation.css";
import fish from "./pictures/darkpinkfish.jpg";
import concrete from "./pictures/redconcrete.jpg";
import creamy from "./pictures/creamypink.jpg";

function Motivation() {
  const about = {
    zIndex: "0",
  };

  const skills = {
    zIndex: "1",
    backgroundImage: `url(${creamy})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const studies = {
    zIndex: "2",
    backgroundImage: `url(${concrete})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const aims = {
    zIndex: "3",
    backgroundImage: `url(${fish})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="motivMain">
      <div className="motivBox" style={about}>
        <h3 style={{ backgroundColor: "rgba(0, 0, 0, 0.205)" }}> About Me</h3>
        <h4 style={{ backgroundColor: "rgba(0, 0, 0, 0.205)" }}>
          I have choosen to be a patissier because I love to cheer up people.To give an experience that they will remember back with a 10 miles wide smile on their faces.My first memories as a child related to my godmother's restaurant and her enthusiasm about hospitality and the neverending joy from the guests.
          I was also always interested in creative subjects and I also like to draw and the organization part totally fit my logical type of a thinking.
          I would like to find stability and creativity in my work,where with my knowledge I could serve the company's my surrounding's and my own prosperity.</h4>
      </div>
      <div className="motivBox" style={skills}>
        <h3> Skills</h3>
        <h4 style={{letterSpacing:"6px"}}>
          Honest. Loyal. Trustworthy. Dependable. Open-Minded. Responsible and
          Kind. Courageous. Wholehearted. Clean. Initiative and Motivated.
          Professional Attitude. Analytical. Industrial. Practical. Realistic. Teamplayer.
          Adaptable and Flexible. Dependable. Creative and
          Intelligent. Organized. Problem solving. Not afraid to give help and
          ask for help.Passionate about work.Agile.Empathetic.
        </h4>
      </div>
      <div className="motivBox" style={studies}>
        <h3> Studies</h3>
        <h4 style={{color:"white"}}>
          <ul>Languages:
            <li>Hungarian - Native</li>
            <li>English - Advanced(type C certificate)</li>
            <li>German - Beginner</li>
            <li>Italian - Beginner</li>
          </ul>
          <ul>Finished school and certificates:
            <li> Pastry certificate</li>
            <li> Cook certificate</li>
            <li> ECDL certificate(basic knowledge about computers and windows office)</li>
            <li> Frontend Developer certificate(website design)</li>
            <li> Driving licence</li>
          </ul>
          <ul>Not yet finished universities:
            <li> Industrial Design Engineering </li>
            <li> Business Administration and Management</li>
          </ul>
        </h4>
      </div>
      <div className="motivBox" style={aims}>
        <h3> Freetime</h3>
        <h4>
          I intend to continue my understanding of German and Italian to highly advanced level.I enjoy cycling,listening to music(all kind).I can play the violin and bass,to a degree,and continue to practice.I read a lot and have an eclectic tastes.I enjoy socializing with my friend and co-workers.I am interested in website design and what you are currently reading is my own work .
        </h4>
      </div>
    </div>
  );
}

export default Motivation;
