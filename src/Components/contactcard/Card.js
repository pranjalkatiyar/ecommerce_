import React from "react";
import "./styles.css";
const Card = () => {
  return (
    <div className="cardContainer">
      <div className="contact_card">
        <div className="container">
          <div className="contact_heading">
            <h3>reach at us</h3>
          </div>
          <div>
            <div>
              <h3>support@kicksup.com</h3>
              <p>for any technical support</p>
            </div>
            <div>
              <h3>support@kicksup.com</h3>
              <p>for any technical support</p>
            </div>
            <div>
              <h3>support@kicksup.com</h3>
              <p>for any technical support</p>
            </div>
            <div>
              <h3>support@kicksup.com</h3>
              <p>for any technical support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="socialMedia">
        <div>
          <p>stay in touch</p>
        </div>
        <div>
          <img src={require("../../assests/twitter.png")} alt="twitter" />
          <img src={require("../../assests/facebook.png")} alt="facebook" />
          <img src={require("../../assests/insta.png")} alt="insta" />
        </div>
      </div>
    </div>
  );
};

export default Card;
