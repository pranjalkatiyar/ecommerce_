import React from "react";
import "./styles.css";
import journeyPagedata from "../model/journeyPageData";
const Journey = () => {
  return (
    <div className="journey_container">
      <div className="journey_card ">
        <div className="cardImage">
          <img src={require("../../assests/grasspic.jpg")} alt="" srcset="" />
        </div>
        <div className="journey_heading">
          <span>the journey</span>
        </div>
        <div className="cardContent">
          <div className="content">
            <ul>
              {journeyPagedata.map((data) => {
                return (
                  <div>
                    <li>
                      <div className="contentheading">
                        <h2>{data.heading}</h2>
                      </div>
                      <div className="contentParagraph">
                        <article>{data.para}</article>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  );
};

export default Journey;
