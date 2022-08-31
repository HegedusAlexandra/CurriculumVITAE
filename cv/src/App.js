
import './App.css';
import Loading from './components/Loading';
import { Link, Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function App() {


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>    
    {loading ? (<Loading/> ) : (<div className="App">      
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> | {" "}
        <Link to="/experience">Experience</Link> | {" "}
        <Link to="/gallery">Gallery</Link> | {" "}
        <a href='https://techterms.com/definition/frontend'>Frontend</a>
      </nav>
      <Outlet/>
    </div>)}
    </>
  );
}

export default App;
