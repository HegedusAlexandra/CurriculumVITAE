import { useEffect, useState } from "react";
import "./experience.css";
import me from "./Én.jpg";
import gimimost from "./gimimost.jpg";
import gimiregen from "./gimiregen.jpg";

function Experience() {
  const [visib, setVisib] = useState(null);

  useEffect(() => {
    const handleScroll = (event) => {
      /* console.log('window.scrollY:', window.scrollY); */
      setVisib(window.scrollY);
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
          {visib < 600 ? 
            <img
              src={gimiregen}
              className="reveal"
              id="gimiregen"
              alt="gimiregen"
            />
           : 
            <img
              src={gimimost}
              className="reveal"
              id="gimimost"
              alt="gimimost"
            />
          }
          <svg height="100vh" width="100%" id="triangelLeft">
            <polygon points="0,10 2300,60 0,210" style={{"fill": "#942c3125"}} />
            <polygon points="10,0 60,0 30,4000" style={{"fill": "#942c31f5"}} />
          </svg>
          <div className="expCard two reveal">
            {" "}
            After that I 've been admitted to Diősgyőri secondary grammar school
            specialized in the subject English.
          </div>
          <p className="year three reveal">2008</p>
        </>
      )}
    </div>
  );
}

export default Experience;
