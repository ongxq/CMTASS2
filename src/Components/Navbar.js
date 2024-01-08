import React, { useEffect, useRef } from "react";
import Logo from "../assets/new logo.png";
import Home from "../assets/home page.jpg";
import BannerImage from "../assets/background1.jpg";
import Background from "../assets/background2.jpg";
import "../App.css";

const Section = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const currentRef = ref.current;
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

    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className="narbar">
      {children}
    </div>
  );
};

function TypingText() {
  const paragraphRef = useRef();
  let isTyping = false; // Add a flag to indicate whether the typing effect is in progress

  useEffect(() => {
    const paragraph = paragraphRef.current;
    let txt = ["What", "do", "you", "know", "about", "us?"]; /* The text */
    let speed = 200; /* The speed/duration of the effect in milliseconds */
    let isMounted = true;

    async function typeWriter(index) {
      if (index < txt.length && isMounted) {
        let span = document.createElement("span");
        span.textContent = txt[index] + " ";
        span.className = "word" + (index + 1);
        span.onmouseout = function () {
          this.style.color = "";
          this.style.fontSize = "";
        };
        paragraph.appendChild(span);

        // Add a delay before calling the next iteration of typeWriter
        await new Promise((resolve) => setTimeout(resolve, speed));
        typeWriter(index + 1);
      } else {
        isTyping = false; // Set the flag to false when the typing effect completes
      }
    }

    // Create an intersection observer
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isTyping) {
          // Check the flag before starting the typing effect
          // Clear the paragraph's content before starting the typing effect
          paragraph.innerHTML = "";
          // Start the typing effect when the element is visible
          isTyping = true; // Set the flag to true when the typing effect starts
          typeWriter(0);
        }
      });
    });

    // Start observing the paragraph
    observer.observe(paragraph);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="headerContainer">
      <p ref={paragraphRef}></p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="narbar">
      <Section>
        <div className="first-container">
          <div className="logo-container">
            <img src={Logo} className="App-logo" alt="logo" />
          </div>
          <div className="image-container1">
            <img src={Home} className="second-pic" alt="second-pic" />
          </div>
        </div>
      </Section>

      <Section>
        <div
          className="about"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <TypingText />
        </div>
      </Section>

      <Section>
        <div
          className="service"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="Content2">
            <h1>
              <span className="word1">H</span>
              <span className="word2">O</span>
              <span className="word3">L</span>
              <span className="word4">A</span>
            </h1>
            <p className="welcome"> Welcome to Délicieux !!!</p>
            <p>
              A Haven of Western Delights! Our culinary mission is simple: to
              serve you the most delectable Western cuisine that transcends mere
              taste. Each dish is crafted with passion, promising not just a
              meal but a journey of pure joy. Join us as we redefine
              deliciousness, turning every dining moment into a celebration of
              happiness. At Délicieux, your satisfaction is our masterpiece –
              where every flavor tells a story , and every bite is a step into a
              world of culinary bliss!
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Navbar;
