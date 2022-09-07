import { useEffect, useState } from "react";
import "./experience.css";
import me from "./Én.jpg";

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
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

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
      <h1> XPRNC </h1>
      <svg height="3000" width="200">
        <path
          stroke-linecap="round"
          d="M 80 240 s -30 200 50 300 s -50 100 -50 200 t -10 100 50 150 t 10 100 50 150"
          stroke="#10144A"
          stroke-width="6"
          fill="none"
        />

        <g stroke="black" stroke-width="3" fill="black">
          <circle id="pointA" cx="76" cy="350" r="10" />

          <circle id="pointC" cx="124" cy="650" r="12" />
        </g>
      </svg>
      {visib > 50 && (
        <>
          <div className="container reveal">
            <img src={me} alt="me" />
          </div>
        </>
      )}
    </div>
  );
}

export default Experience;
