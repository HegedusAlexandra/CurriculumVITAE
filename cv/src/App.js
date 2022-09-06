
import './App.css';
import Loading from './components/Loading';
import { Link,Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function App() {


  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState("middle");
  const [navStyle,setNavStyle] = useState("navMiddle");
  const [lineStyle,setLineStyle] = useState("lineMiddle");
  const [sphereStyle,setsphereStyle] = useState("sphereMiddle")

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  function floatLeft(){
    setStyle("left");
    setNavStyle("navLeft");
    setLineStyle("lineLeft");
    setsphereStyle("sphereLeft")
  }

  return (
    <>    
    {loading ? (<Loading/> ) : (<div>
      <div className={style}>      
        <div className='line1'>
          <div id="line"></div>
          <div id="sphere1"></div>
        </div>
        <nav  className={navStyle} onClick={floatLeft}>
          <Link to="/">Motivation</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/message">Contact</Link>
          <a href='https://techterms.com/definition/frontend'>Frontend</a>
        </nav>
        
        <div className={lineStyle}>
          <div className={sphereStyle}></div>
          <div id="line"></div>          
        </div>        
      </div>
      <Outlet />
    </div>)}
    </>
  );
}

export default App;
