import { useEffect, useState } from "react";
import "./experience.css";
import me from "./Én.jpg";
import gundel from "./gundel.png";
import gimiregen from "./gimiregen.jpg";

function Experience() {
  const [visib, setVisib] = useState(null);
  const [loc, setLoc] = useState("200");
  const [loc2, setLoc2] = useState("0");

  useEffect(() => {
    const handleScroll = (event) => {
      /* console.log('window.scrollY:', window.scrollY); */
      setVisib(window.scrollY);
      setLoc((loc) => 200 + window.scrollY / 2);
      if (window.scrollY > 800 ) {setLoc2((loc2) => 0 + window.scrollY / 4)};
      
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
      <h1> Experiences </h1>
      {visib>100 && <svg height="100vh" width="100%" id="circleLeft">
        <circle cx="50%" cy="50%" r={loc} fill="#a83b3bd8" />
        {/* <polygon points="" style={{"fill": }} />  */}
      </svg>}
      <p className="year reveal">1990</p>
      <div className="expCard reveal">
        {" "}
        Born in 12 may 1990 in beautiful saturday.
      </div>
      <div className="container reveal">
        <img src={me} alt="me" />
      </div>
      {visib < 100 && <div className="call"> Scroll for more!</div>}

      {visib > 100 && (
        <>
          <p className="year one reveal">1996</p>
          <div className="expCard one reveal">
            {" "}
            I have spent my first years in Móra Ferenc primary school in Miskolc
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
            After that I 've been admitted to Diősgyőri secondary grammar school
            specialized in the subject English.
          </div>
          <p className="year three reveal">2008</p>
          <div className="expCard three reveal">
            {" "}
            In 2008 I have finished and also get the the english type C certificate and the ECDL certificate.
          </div>
        </>
      )}
      {visib>500 && <svg height="100vh" width="100%" id="circleLeft">
        <circle cx="10%" cy="80%" r={loc2} fill="#edede74d" />
        
      </svg>}
      {visib > 1000 && (<>
        <p className="year four reveal">2010</p>
        <div className="expCard four reveal">
          {" "}
          I have studied one and a half year Industrial Design Engineering,unfortunately interrupted because of family reasons. 
        </div>
      </>)}
      {visib > 1200 && (<>
        <p className="year five reveal">2012</p>
        <div className="expCard five reveal">
        
          I have studied to be a cook and spent my practice time in tha famous hungarian traditional restaurant the Gundel.

          
          
        </div>
        <div className="expCard six reveal">
        
        

          After my graduation I was immediately employed and I also started to learn to be a pastry.
          
        </div>
        <img id="gundel" src={gundel} alt="gundel" />
      </>)}
    </div>
  );
}

export default Experience;
