import React from "react";
import ycpic from "../assets/yc.jpg";
import swpic from "../assets/sw.jpg";
import kspic from "../assets/ks.jpeg";
import xqpic from "../assets/xq.jpg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const ptwo = () => {
  const workInfoData = [
    {
      image: swpic,
      title: "H`ng Sook Wern Head Chef ",
      text: " Sook Wern, our head chef, orchestrates a symphony of Western flavors. Her wealth experience and commitment to quality transforms every dish into a masterpiece of innovation and finess",
      socialMediaLinks: {
        twitter: "https://twitter.com/",
        linkedin:
          "https://www.linkedin.com/in/h-ng-sook-wern-7395281ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        youtube: "https://www.youtube.com/user/",
        facebook: "https://www.facebook.com/",
      },
    },
    {
      image: kspic,
      title: "Tan Kit Seng Assistant Chef ",
      text: "Kit Seng, our culinary virtuoso, assists Chef Sook Wern in perfecting each dish. His attention to detail ensures that every plate meets the highest standards of taste and presentation.",
      socialMediaLinks: {
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/",
        youtube: "https://www.youtube.com/user/",
        facebook: "https://www.facebook.com/",
      },
    },
    {
      image: ycpic,
      title: "Lee Ying Ci Restaurant Manager",
      text: "Ying Ci ensures a seamless dining experience. Her warm hospitality and organizational skills create an inviting atmosphere for our guests. She is a very responsilble manager in our restaurant.",
      socialMediaLinks: {
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/",
        youtube: "https://www.youtube.com/user/",
        facebook: "https://www.facebook.com/",
      },
    },
    {
      image: xqpic,
      title: "Ong Xiu Qin Beverage Specialist",
      text: "Xiu Qin curates a beverage experience that complements our Western fare. From wine pairings to crafted cocktails, she adds an extra layer of delight to your dining journey!",
      socialMediaLinks: {
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/xiuqin-ong-69871726b/",
        youtube: "https://www.youtube.com/user/",
        facebook: "https://www.facebook.com/",
      },
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading1 ">Team Member</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <div className="social-icons">
              <a
                href={data.socialMediaLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter />
              </a>
              <a
                href={data.socialMediaLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin />
              </a>
              <a
                href={data.socialMediaLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsYoutube />
              </a>
              <a
                href={data.socialMediaLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ptwo;
