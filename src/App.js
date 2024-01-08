
import './App.css';
import Pone from "./Components/pone";
import Ptwo from "./Components/ptwo";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Navbar from "./Components/Navbar";
import About from "./Components/about";
import Menu from "./Components/menu";
import "./Components/Header.css";
import React, { Components, useEffect, useRef } from "react";
import { Element } from "react-scroll";



const Section = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        } else {
          entry.target.classList.remove("fade-in-up");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="App">
      {children}
    </div>
  );
};

function App() {
  
  return (
    
    <div className="App">
      <Header/>
      <Element name ="home">
      <Navbar/>
      </Element>
      <Element name ="menu">
          <Menu/> 
      </Element>
      <Element name ="about">
      <About/>
      </Element>
      <Element name ="team">
      <Section>
      <Pone />
      </Section>
      </Element>
      <Section>
      <Ptwo />
      </Section>
      <Section>
      <Footer />
      </Section>
    </div>
  );
}

export default App;







