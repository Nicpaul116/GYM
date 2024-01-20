import React from "react";
import "./women.css";
import women2 from "../../Assets/women2.jpg";
import trainer1 from "../../Assets/womentrainer1.jpg";
import trainer2 from "../../Assets/womentrainer2.jpg";
import trainer3 from "../../Assets/womentrainer3.jpg";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { MdHorizontalRule } from "react-icons/md";

const Women = () => {
  return (
    <div>
      <div className="women_head">
        <div className="women_head-content">
          <h1>
            For <span>Women</span>
          </h1>
          <h5>What we offer for Women</h5>
        </div>
      </div>
      <div className="women_info2">
        <div className="women_info2-content">
          <div className="info2_image">
            <img src={women2} alt="#" style={{ width: 500, height: 600 }} />
          </div>
          <div className="info2_content">
            <h6>For Women</h6>
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
      <div className="women_trainer-all">
        <div className="women_trainer-allhead">
          <h6>Our Team Members</h6>
          <h1>OUR MOST EXPRIENCED TRAINERS</h1>
        </div>
        <div className="women_trainer-content">
          <div
            className="women_icon"
            style={{
              background: `url(${trainer1})`,
              height: `500px`,
              width: `400px`,
              backgroundSize: `cover`,
              backgroundPositionX: `80%`,
            }}
          >
            <div className="women_trainer-wrap">
              <div className="women_trainer-header">
                <div className="trainer_header">
                  <MdHorizontalRule style={{ width: 30 }} />
                  <p>Trainer</p>
                </div>
                <h4>Susan Smith</h4>
              </div>
              <div aria-hidden="true" className="women_trainer-icons">
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
            className="women_icon"
            style={{
              background: `url(${trainer2})`,
              height: `500px`,
              width: `400px`,
              backgroundSize: `cover`,
              backgroundPositionX: `30%`,
            }}
          >
            <div className="women_trainer-wrap">
              <div className="women_trainer-header">
                <div className="trainer_header">
                  <MdHorizontalRule style={{ width: 30 }} />
                  <p>Trainer</p>
                </div>
                <h4>Tyler Allan</h4>
              </div>
              <div aria-hidden="true" className="women_trainer-icons">
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
            className="women_icon"
            style={{
              background: `url(${trainer3})`,
              height: `500px`,
              width: `400px`,
              backgroundSize: `cover`,
              backgroundPositionX: `center`,
            }}
          >
            <div className="women_trainer-wrap">
              <div className="women_trainer-header">
                <div className="trainer_header">
                  <MdHorizontalRule style={{ width: 30 }} />
                  <p>Trainer</p>
                </div>
                <h4>Victoria Lenon</h4>
              </div>
              <div aria-hidden="true" className="women_trainer-icons">
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

export default Women;
