import React, { useEffect, useRef } from "react";

import background from "../assets/background.jpg";
import mission from "../assets/mission.jpg";
import vision from "../assets/vision.jpg";

const FadeInSection = ({ children }) => {
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

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};

function App() {
  return (
    <body>
      <div className="about-container">
        <FadeInSection>
          <div className="container">
            <div className="image-container">
              <img className="image" src={background} alt="Background"></img>

              <div className="text-container">
                <h1 className="header1">Our History</h1>
                <p className="content">
                  Délicieux, a culinary haven since 1993, takes pride in
                  curating an exquisite menu that celebrates the rich and savory
                  flavors of Western cuisine. With a legacy of nearly three
                  decades, we continue to serve mouthwatering dishes, inviting
                  our guests to indulge in a timeless dining experience filled
                  with warmth and culinary delight.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="second-container">
            <div className="mission-vision-img-container">
              <img className="pic" src={mission} alt="Mission"></img>
              <div className="mission-vision-text">
                <h1 className="header1">Our Mission</h1>
                <p className="content">
                  Bringing joy to every meal by serving delicious Western
                  cuisine with a side of warm hospitality, creating memorable
                  dining experiences for our valued guests.
                </p>
              </div>
            </div>

            <div className="mission-vision-img-container">
              <img className="pic" src={vision} alt="Vision"></img>
              <div className="mission-vision-text">
                <h1 className="header1">Our Vision</h1>
                <p className="content">
                  To be the preferred gathering place for those seeking hearty
                  and satisfying meals, where every bite is a journey of flavors
                  and every visit feels like coming home.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </body>
  );
}

export default App;
