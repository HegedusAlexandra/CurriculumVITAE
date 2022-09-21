import { useEffect, useState } from "react";
import "./experience.css";
import me from "./Én.jpg";
import gundel from "./gundel.png";
import gimiregen from "./gimiregen.jpg";
import rock from "./rock.png";
import oyster from "./oyster.png"

import matterhorn from "./matterhorn.png"

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
      <p className="year reveal" style={{color:"#2b2b2b"}}>1990</p>
      <div className="expCard reveal">
        {" "}
        Born in 12 may 1990 in beautiful saturday.
      </div>
      <div className="container reveal">
        <img src={me} alt="me" />
      </div>
      {visib < 100 && (
        <div className="call">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>Scroll down!
        </div>
      )}

      {visib > 100 && (
        <>
          <p className="year one reveal">1996</p>
          <div className="expCard one reveal">
            I have spent my first years in <p>Móra Ferenc primary school</p> in
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
            After that I 've been admitted to{" "}
            <p>Diősgyőri secondary grammar school</p>
            specialized in the subject English.
          </div>
          <p className="year three reveal">2008</p>
          <div className="expCard three reveal">
            {" "}
            In 2008 I have finished and also get the the{" "}
            <p>english type C certificate </p> and the <p> ECDL certificate</p>.
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
            {" "}
            I have studied one and a half year{" "}
            <p>Industrial Design Engineering</p>,unfortunately interrupted
            because of family reasons.
          </div>
        </>
      )}
      {visib > 1000 && (
        <>
          <p className="year five reveal">2012</p>
          <div className="expCard five reveal">
            I have studied to be a cook and spent my practice time in tha famous
            hungarian traditional restaurant the <p>Gundel</p>.
          </div>
          <div className="expCard six reveal">
            After my graduation I was immediately employed and I also started to
            learn to be a pastry.
            I had been choosen to go to Zürich and represent Gundel's gastronomy in Hotel St.Gotthard.
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
          <div className="expCard seven reveal">I have spent almost two beautiful years nearby the Zugspitze in <p>Hotel Mohr 4* as a commis pastry</p></div>
           
        </div>
          
          <img id="matterhorn" className="reveal" src={matterhorn} alt="matterhorn" />
          <p className="year eight reveal">2015</p>
          <div className="expCard eight reveal">
          Already learnt the basics from Kocsis Zsolt master patissier and headed with him to Swiss,Zermatt to Hotel Alpenhof 4* where I worked as a demi pastry chef.
          <br/>
          Also I have worked only three month in Sweden,Trosa,Hotel Boman as a demi pastry and gardemanger chef helping out a swedish friend.
          </div>
          
        </>
      )}
    </div>
  );
}

export default Experience;
