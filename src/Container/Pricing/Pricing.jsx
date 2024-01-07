import React from "react";
import "./pricing.css";
import { pricedata } from "./prices";

const Pricing = () => {
  return (
    <div>
      <div className="container_pricing-section" id="Pricing">
        <div className="container_pricing-offer">
          <div className="container_pricing-info">
            <h3>A BIG OFFER FOR THIS SUMMER</h3>
            <h1>50% off</h1>
            <p>
              There are many variations of passages of lorem ipsum available,
              but the majority have suffered alteration
            </p>
            <button className="container_pricing-button">JOIN US</button>
          </div>
        </div>
      </div>
      <div className="container_pricing-all">
        <div className="container_pricing-heading">
          <h2>OUR PRICING</h2>
          <p>
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration
          </p>
        </div>
      </div>
      <div className="container_pricing-detail">
        {pricedata.map((price, index) => {
          return (
            <div key={index} className="container_price-wrap">
              <div className="price_header">
                <h2>{price.name}</h2>
                <h3>{price.price}</h3>
              </div>
              <div className="price_info">
                <p className="price_p1">{price.hours}</p>
                <p className="price_p2">{price.advice}</p>
                <div className="price_place">
                  <p className="price_p3">{price.place}</p>
                  <p className="price_p4">{price.trainer}</p>
                </div>
                <button className="price_button">{price.button}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
