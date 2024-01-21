import React from "react";
import "./Men.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { MdHorizontalRule } from "react-icons/md";
import men2 from "../../Assets/men2.jpg";
import trainer1 from "../../Assets/trainer1.jpg";
import trainer2 from "../../Assets/trainer2.jpg";
import trainer3 from "../../Assets/trainer3.jpg";

const Men = () => {
  return (
    <div>
      <div className="men_head">
        <div className="men_head-content">
          <h1>
            For <span>men</span>
          </h1>
          <h5>What we offer for Women</h5>
        </div>
      </div>
      <div className="men_info2">
        <div className="men_info2-content">
          <div className="info2_image">
            <img src={men2} alt="#" />
          </div>
          <div className="info2_content">
            <h6>For men</h6>
            <h2>
              SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!
            </h2>
            <p className="para1">
              Brook presents your services with flexible, convenient and cdpose
              layouts. You can select your favorite layouts & elements for cular
              ts with unlimited ustomization possibilities. Pixel-perfect
              replication of the designers is intended.
            </p>
            <p className="para2">
              Brook presents your services with flexible, convefnient and chient
              anipurpose layouts. You can select your favorite layouts.
            </p>
          </div>
        </div>
      </div>
      <div className="men_trainer-all">
        <div className="men_trainer-allhead">
          <h6>Our Team Members</h6>
          <h1>OUR MOST EXPRIENCED TRAINERS</h1>
        </div>
        <div className="men_trainer-content">
          <div
            className="men_icon"
            style={{
              background: `url(${trainer1})`,
              height: `500px`,
              width: `400px`,
              backgroundSize: `cover`,
              backgroundPositionX: `50%`,
            }}
          >
            <div className="men_trainer-wrap">
              <div className="men_trainer-header">
                <div className="trainer_header">
                  <MdHorizontalRule style={{ width: 30 }} />
                  <p>Trainer</p>
                </div>
                <h4>Tyler Adams</h4>
              </div>
              <div aria-hidden="true" className="men_trainer-icons">
                <a href="#1">
                  <BsFacebook />
                </a>
                <a href="#2">
                  <AiOutlineTwitter />
                </a>
                <a href="#3">
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </div>
          <div
            className="men_icon"
            style={{
              background: `url(${trainer2})`,
              height: `500px`,
              width: `400px`,
              backgroundSize: `cover`,
              backgroundPositionX: `50%`,
            }}
          >
            <div className="men_trainer-wrap">
              <div className="men_trainer-header">
                <div className="trainer_header">
                  <MdHorizontalRule style={{ width: 30 }} />
                  <p>Trainer</p>
                </div>
                <h4>Chris jackson</h4>
              </div>
              <div aria-hidden="true" className="men_trainer-icons">
                <a href="#1">
                  <BsFacebook />
                </a>
                <a href="#2">
                  <AiOutlineTwitter />
                </a>
                <a href="#3">
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </div>
          <div
            className="men_icon"
            style={{
              background: `url(${trainer3})`,
              height: `500px`,
              width: `400px`,
              backgroundSize: `cover`,
              backgroundPositionX: `center`,
            }}
          >
            <div className="men_trainer-wrap">
              <div className="men_trainer-header">
                <div className="trainer_header">
                  <MdHorizontalRule style={{ width: 30 }} />
                  <p>Trainer</p>
                </div>
                <h4>Tony Stark</h4>
              </div>
              <div aria-hidden="true" className="men_trainer-icons">
                <a href="#1">
                  <BsFacebook />
                </a>
                <a href="#2">
                  <AiOutlineTwitter />
                </a>
                <a href="#3">
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
