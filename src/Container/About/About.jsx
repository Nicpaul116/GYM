import React from "react";
import "./about.css";
import image1 from "../../Assets/icons8-trainer-64.png";
import image2 from "../../Assets/icons8-arm-muscle-60.png";
import image3 from "../../Assets/icons8-gym-fitness-96.png";
import image4 from "../../Assets/icons8-treadmill-50.png";

const About = () => {
  return (
    <div id="About">
      <div className="container_about-wrap1">
        <div className="container_about-img1">
          <div className="Container_about-women">
            <h3>FOR WOMEN</h3>
            <p>
              There are many variations of passages of lorem ipsum available,
              but the major have suffered alteration
            </p>
            <button className="about-button">JOIN US</button>
          </div>
        </div>
        <div className="Container_about-men">
          <div className="container_about-img2">
            <h3>FOR MEN</h3>
            <p>
              There are many variations of passages of lorem ipsum available,
              but the major have suffered alteration
            </p>
            <button className="about-button">JOIN US</button>
          </div>
        </div>
      </div>
      <div className="container_about-all">
        <div className="container_about-info">
          <h3>OUR FEATURES</h3>
          <p>
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration
          </p>
        </div>
        <div className="container_about-wrap2">
          <div className="container_about-info1">
            <img src={image1} alt="#" className="about-image" />
            <h4>Lifting assistance</h4>
            <p>There are many variations of passages of lorem ipsum</p>
          </div>
          <div className="container_about-info1">
            <img src={image2} alt="#" className="about-image" />
            <h4>Flex your muscles</h4>
            <p>There are many variations of passages of lorem ipsum</p>
          </div>
          <div className="container_about-info1">
            <img src={image3} alt="#" className="about-image" />
            <h4>Weight specifics</h4>
            <p>There are many variations of passages of lorem ipsum</p>
          </div>
          <div className="container_about-info1">
            <img src={image4} alt="#" className="about-image" />
            <h4>Cardio exercise</h4>
            <p>There are many variations of passages of lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
