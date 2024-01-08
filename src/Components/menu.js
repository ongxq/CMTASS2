import React, { Component, useEffect, useRef } from "react";

import foodPic1 from "../assets/food1.png";
import foodPic2 from "../assets/food2.png";
import foodPic3 from "../assets/food3.png";
import foodPic4 from "../assets/food4.png";
import foodPic5 from "../assets/food5.png";
import foodPic6 from "../assets/food6.png";
import foodPic7 from "../assets/food7.png";
import foodPic8 from "../assets/food8.png";
import "../App.css";

const FoodSection = ({ children }) => {
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
    <div ref={ref} className="food-container">
      {children}
    </div>
  );
};

class Food extends Component {
  render() {
    return (
      <body>
        <div className="food-part-container">
          <div class="food-header">
            <h3 class="food-header1">What we offer</h3>
            <h1 class="food-header2">Our Special</h1>
          </div>

          <FoodSection>
            <div class="first-food-container">
              <div class="first-food-img">
                <img className="foodpic1" src={foodPic1} alt="food" />
              </div>
              <div class="first-food-content">
                <p class="food-name">Creamy Herb-infused Chicken Alfredo</p>
                <p class="food-description">
                  A savory pasta creation, complete with a luscious creamy
                  sauce, mouthwatering chicken, and a hint of aromatic herbs for
                  that perfect flavor balance.
                </p>
              </div>
            </div>
          </FoodSection>

          <FoodSection>
            <div class="food-right-container">
              <div class="food-content">
                <p class="food-name">Grilled Rosemary-Crusted Steak</p>
                <p class="food-description">
                  The beef, cooked to juicy perfection, boasts a savory richness
                  that pairs seamlessly with the aromatic herb infusion.
                </p>

                <div class="rating-container">
                  <div class="rating-info-container">
                    <p class="rating-text">5.0</p>
                    <span class="star">★★★★★</span>
                    <p class="rating-comment">(15)</p>
                  </div>

                  <div class="view-comment-container">
                    <p class="read-reviews">READ REVIEWS</p>
                    <div class="triangle-down"></div>
                  </div>
                </div>
              </div>
              <div class="pic-right-container">
                <img class="pic-right" src={foodPic2}></img>
              </div>
            </div>
          </FoodSection>

          <FoodSection>
            <div class="food-left-container">
              <div class="pic-left-container">
                <img class="pic-left" src={foodPic3}></img>
              </div>
              <div class="food-content">
                <p class="food-name">Homestyle Pumpkin Soup</p>
                <p class="food-description">
                  Savor the simplicity of our pumpkin soup, crafted with roasted
                  pumpkin and a touch of nutmeg and cinnamon. Topped with a
                  dollop of cream and a sprinkle of toasted pumpkin seeds .
                </p>

                <div class="rating-container">
                  <div class="rating-info-container">
                    <p class="rating-text">4.0</p>
                    <span class="star">★★★★☆</span>
                    <p class="rating-comment">(5)</p>
                  </div>

                  <div class="view-comment-container">
                    <p class="read-reviews">READ REVIEWS</p>
                    <div class="triangle-down"></div>
                  </div>
                </div>
              </div>
            </div>
          </FoodSection>

          <FoodSection>
            <div class="food-right-container">
              <div class="food-content">
                <p class="food-name">Chicken Caesar Wrap</p>
                <p class="food-description">
                  Where tender grilled chicken meets crisp romaine lettuce,
                  tossed in Caesar dressing, all snugly wrapped in a soft
                  tortilla.
                </p>
                <div class="rating-container">
                  <div class="rating-info-container">
                    <p class="rating-text">4.0</p>
                    <span class="star">★★★★☆</span>
                    <p class="rating-comment">(8)</p>
                  </div>

                  <div class="view-comment-container">
                    <p class="read-reviews">READ REVIEWS</p>
                    <div class="triangle-down"></div>
                  </div>
                </div>
              </div>
              <div class="pic-right-container">
                <img class="pic-right" src={foodPic4}></img>
              </div>
            </div>
          </FoodSection>

          <FoodSection>
            <div class="food-left-container">
              <div class="pic-left-container">
                <img class="pic-left" src={foodPic5}></img>
              </div>
              <div class="food-content">
                <p class="food-name">Sunrise Chicken Burger</p>
                <p class="food-description">
                  Grilled chicken, a sun-kissed hot spring egg, savory ham, and
                  melted cheese come together in this delightful Sunrise Chicken
                  Burger. Satisfy your cravings with a burst of flavors in every
                  bite.
                </p>
                <div class="rating-container">
                  <div class="rating-info-container">
                    <p class="rating-text">3.0</p>
                    <span class="star">★★★☆☆</span>
                    <p class="rating-comment">(7)</p>
                  </div>

                  <div class="view-comment-container">
                    <p class="read-reviews">READ REVIEWS</p>
                    <div class="triangle-down"></div>
                  </div>
                </div>
              </div>
            </div>
          </FoodSection>

          <FoodSection>
            <div class="food-right-container">
              <div class="food-content">
                <p class="food-name">Caramel Brownie Sundae</p>
                <p class="food-description">
                  A dense brownie topped with a generous scoop of melting
                  vanilla ice cream. The dessert is garnished with crunchy
                  rolled wafer sticks and finished with a glossy caramel sauce
                  drizzle.
                </p>
                <div class="rating-container">
                  <div class="rating-info-container">
                    <p class="rating-text">4.0</p>
                    <span class="star">★★★★☆</span>
                    <p class="rating-comment">(3)</p>
                  </div>

                  <div class="view-comment-container">
                    <p class="read-reviews">READ REVIEWS</p>
                    <div class="triangle-down"></div>
                  </div>
                </div>
              </div>
              <div class="pic-right-container">
                <img class="pic-right" src={foodPic6}></img>
              </div>
            </div>
          </FoodSection>

          <FoodSection>
            <div class="food-left-container">
              <div class="pic-left-container">
                <img class="pic-left" src={foodPic7}></img>
              </div>
              <div class="food-content">
                <p class="food-name">Golden Morning Pancake Stack</p>
                <p class="food-description">
                  Start your day with our towering stack of perfectly fluffy,
                  golden-brown pancakes, layered with slices of fresh bananas.
                  Served with a generous drizzle of rich maple syrup cascading
                  down each layer. bite.
                </p>
                <div class="rating-container">
                  <div class="rating-info-container">
                    <p class="rating-text">4.0</p>
                    <span class="star">★★★★☆</span>
                    <p class="rating-comment">(9)</p>
                  </div>

                  <div class="view-comment-container">
                    <p class="read-reviews">READ REVIEWS</p>
                    <div class="triangle-down"></div>
                  </div>
                </div>
              </div>
            </div>
          </FoodSection>

          <FoodSection>
            <div class="food-right-container">
              <div class="food-content">
                <p class="food-name">Chocolate Mint Bliss</p>
                <p class="food-description">
                  A creamy chocolate beverage adorned with a generous swirl of
                  whipped cream on top.
                </p>
                <div class="rating-container">
                  <div class="rating-info-container">
                    <p class="rating-text">4.0</p>
                    <span class="star">★★★★☆</span>
                    <p class="rating-comment">(12)</p>
                  </div>

                  <div class="view-comment-container">
                    <p class="read-reviews">READ REVIEWS</p>
                    <div class="triangle-down"></div>
                  </div>
                </div>
              </div>
              <div class="pic-right-container">
                <img class="pic-right" src={foodPic8}></img>
              </div>
            </div>
          </FoodSection>
        </div>
      </body>
    );
  }
}

export default Food;
