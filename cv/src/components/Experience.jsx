import { useEffect, useState } from "react";
import "./experience.css";
import me from "./pictures/Én.jpg";
import gundel from "./pictures/gundel.png";
import gimiregen from "./pictures/gimiregen.jpg";
import rock from "./pictures/rock.png";
import oyster from "./pictures/oyster.png"
import matterhorn from "./pictures/matterhorn.png"
import me2 from "./pictures/Me.jpeg"

function Experience() {
  const [visib, setVisib] = useState(null);
  const [loc, setLoc] = useState("200");
  const [loc2, setLoc2] = useState("0");

  useEffect(() => {
    const handleScroll = (event) => {
      /* console.log('window.scrollY:', window.scrollY); */
      setVisib(window.scrollY);
      setLoc((loc) => 200 + window.scrollY / 2);
      if (window.scrollY > 800) {
        setLoc2((loc2) => 0 + window.scrollY / 4);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div className="expBack">
      <img
        id="rock"
        src={rock}
        alt="rock"
        style={{
          transform: `rotateZ(-${visib/5}deg)`,
          height: `${150 - visib / 20}vh`,
          top:`${10 + visib/16}%`
        }}
      />
      {visib > 80 && (
        <svg height="100vh" width="100%" id="circleLeft">
          <circle cx="50%" cy="50%" r={loc} fill="#a83b3bd8" />
        </svg>
      )}      
      {visib < 100 && (
        <div className="call">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>Scroll down!
        </div>
      )}
      {visib > 100 && (
        <>
        <p className="year reveal" style={{color:"#7b7b7b"}}>1990</p>
      <div className="expCard reveal">
        {" "}
        Born on 12th May 1990 in beautiful saturday.
      </div>
      <div className="container reveal">
        <img src={me} alt="me" />
      </div>
          <p className="year one reveal">1996</p>
          <div className="expCard one reveal">
            I spent my first years in <p>Móra Ferenc primary school</p> in
            Miskolc
          </div>
        </>
      )}
      {visib > 200 && (
        <>
          <p className="year two reveal">2002</p>
          {visib > 600 && (
            <img
              src={gimiregen}
              className="reveal"
              id="gimiregen"
              alt="gimiregen"
            />
          )}

          <div className="expCard two reveal">
            {" "}
            After that I attended
            <p>Diősgyőri secondary grammar school</p>where my 
            specialized subject was English.
          </div>
          <p className="year three reveal">2008</p>
          <div className="expCard three reveal">
            {" "}
            In 2008 I completed my secondary education obtaining the highest possible certificate in <p>English</p>  and the <p> ECDL certificate</p>(basic information sience and windows office knowledge).
          </div>
        </>
      )}
      {visib > 500 && (
        <svg height="100vh" width="100%" id="circleLeft">
          <circle cx="10%" cy="80%" r={loc2} fill={"#edede74d"} />
        </svg>
      )}
      {visib > 800 && (
        <>
          <p className="year four reveal">2010</p>
          <div className="expCard four reveal">
            In 2010 I commenced studies in <p>Industrial Design Engineering</p>.However this was interrupted after 18 month due to family circumstances.
          </div>
        </>
      )}
      {visib > 1000 && (
        <>
          <p className="year five reveal">2012</p>
          <div className="expCard five reveal">
            I started my training and become a chef and was accepted in the famous traditional hungarian restaurant called <p>Gundel</p>.
          </div>
          <div className="expCard six reveal">
            In 2012 I graduated as a chef and opted to specialise in Patisserie.I was choosen to go to Zurich and represented Gundel's gastronomy in the 4star
           Hotel St.Gotthard in the centre of the city.
          </div>
          <img id="gundel" className="reveal" src={gundel} alt="gundel" />
          <img id="oyster" className="reveal" src={oyster} alt="oyster" />
          <p className="year six reveal">2013</p>
        </>
      )}
      {visib > 1200 && (
        <>
        <div id="zugspitze" className="reveal">
         
          <p className="year seven reveal">2014</p>
          <div className="expCard seven reveal">I worked as a Commis Pastry Chef in the <p>Hotel Mohr 4*</p></div> near the Zugspitze.
           
        </div>
          
          <img id="matterhorn" className="reveal" src={matterhorn} alt="matterhorn" />
          <p className="year eight reveal">2016</p>
          <div className="expCard eight reveal">
            I learned from Kocsis Zsolt Master Patissier and in 2015  followed him to the 
         <p> Swiss,Zermatt to Hotel Alpenhof 4* </p> where I was employed as a Demi Pastry Chef.
          <br/>
          Also I had working <p> Sweden,Trosa,Hotel Boman </p> helping out a friend.
          </div>
          
        </>
      )}
      {visib > 1400 && (
        <>          
          <p className="year nine reveal">2017</p>
          <div className="expCard nine reveal">
          In 2017 I accepted a position as a Commercial Manager with Auchan Retail I had 30 employees (Bakers and Patissiers) under my control,I was responsible for their conduct, training, HR issues,paperwork HACCP and documentation.
          </div>          
        </>
      )}
      {visib > 1600 && (
        <>
          <p className="year ten reveal">2018</p>
          <div className="expCard ten reveal">2018 Saw me working in two places at the same time.<p>Kacsa Étterem</p> and  <p>Holiday Beach Hotel</p>.Both in Budapest and both 4* where I worked as a Patissier.
          </div>        
        <div id="corsica" className="reveal">         
          <p className="year eleven reveal">2019</p>
          <div className="expCard eleven reveal">
          In 2019 I secured a summer position in Corsica at the <p>Langley Napoleon Bonaparte Hotel</p> again as a Patissier.
          </div>           
        </div> 
        <p className="year twelve reveal">2020</p>
          <div className="expCard twelve reveal">
            <p>Hotel Kristall 4*,Pertisau as a chef de partie patissier</p> and at the end of the year <p>Arlberg Hospiz 5*,St.Cristoph as a pastry chef</p> .
            I had to leave when the first news about COVID reached us in the beggining of 2021.
          </div>        
        </>
      )}
      {visib > 1800 && (
        <>          
          <p className="year thirteen reveal">2021</p>
          <div className="expCard thirteen reveal">
         During the epidemic I obtained a position in <p>Duna Garden 4*,Budapest as a Patissier Chef</p> and helped for <p>Cake & More by Garannikova</p>
          </div>
          <p className="year fourteen reveal">2022</p>
          <div className="expCard fourteen reveal">
          After receiving my vaccination I headed to Austria and worked at <p>Almfamilyhotel 4*s,Obertilliach as a pastry chef</p>
          </div> 
          <img id="me2" src={me2} alt="me" /> 
          {/* It may appear that I have moved around quite a lot however this is perfectly normal in the restaurant business where people move to gain knowledge and experience */}         
        </>
      )}
    
    </div>
)}

export default Experience;
