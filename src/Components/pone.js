import React, { useEffect } from "react";
import Page1bg from "../assets/p1bg.jpg";
import Sample from "../assets/profile.jpg";
import Team from "../assets/teamPhoto.jpg";

const pone = () => {
  return (
    <div className="pone-section-container ">
      <div className="pone-section-image-container">
        <img className="pone-section-image" src={Team} alt="" />
      </div>

      <div className="about-section-text-container">
        <p className="primary-subheading  ">Team Introduction</p>
        <h1 className="primary-heading">
          Welcome to our culinary haven! Our talented team at DELICIEUX is a
          fusion of passion and expertise, dedicated to crafting unforgettable
          dining experiences. From our skilled chefs creating mouthwatering
          dishes to our warm and attentive staff, we unite to bring you
          exceptional flavors and hospitality that linger long after your last
          bite.
        </h1>
      </div>
    </div>
  );
};

export default pone;
