import { useEffect,useState } from 'react';
import './experience.css';
import me from "./Én.jpg"

function Experience() {

  const[visib,setVisib] = useState(null)

  useEffect(() => {
    const handleScroll = event => {
      /* console.log('window.scrollY:', window.scrollY); */
      setVisib(window.scrollY)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    <div className='expBack' >
      <h1> XPRNC </h1>
      {visib>50 && 
      <>              
        <div className="container reveal">          
          <img src={me} alt="me"/>
        </div>        
      </>}
    </div>
  );
}

export default Experience;