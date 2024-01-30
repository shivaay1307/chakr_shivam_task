import React from "react";
import "./components.css";
import { Link } from "react-router-dom";

import message from "../assets/images/message.svg";
import star from "../assets/images/star.svg";
import pen from "../assets/images/pen.svg";
import dots from "../assets/images/dots.svg";
import { customerCardData } from "../data";

const CustomerCard = () => {
  return (
    <div className="card card3">
      {customerCardData?.map((i, n) => {
        return (
          <div className="" key={n}>
            <div className="filter-container">
              <p className="card-head" style={{ marginBottom: 0, marginLeft: "16px" }}>
                {i?.head}
              </p>
              <div className="filter-styles">
                <p className="filter-head">
                  {i?.filters}
                  <span style={{ fontWeight: 600, margin: "0px 5px" }}>
                    {i?.filtersType}
                  </span>
                </p>
                <img alt="icon" className="iamge down-image" src={i?.icon5} />
              </div>
            </div>
            <div>
              {i?.icons?.map((j, n) => {
                return (
                  <div className="profile-container" key={n} style={j?.selected && {backgroundColor: "#FFF7E8"} }>
                    <div className="profile-image-container">
                      <img alt="icon" className="image customer-image" src={j?.icon} />
                      <div className="customer-name-container">
                        <p className="customer-name">{j?.profileName}</p>
                        <p className="customer-designation">
                          {j?.profileDesignation}
                        </p>
                      </div>
                    </div>
                    {j?.selected && (
                    <div className="after-profile-images">
                      <img alt="icon" className="image person-icons" src={message} />
                      <img alt="icon" className="image person-icons" src={star} />
                      <img alt="icon" className="image person-icons person-icon2" src={pen} />
                      <img alt="icon" className="image person-icons person-icon3" src={dots} />
                    </div>
                    )}
                  </div>
                );
              })}
            </div>
            {(i && i?.link !== undefined) || i?.link !== null ? (
              <Link to="#" className="customer-link">
                <p className="link-text">{i?.link}</p>
                <img
                  src={i?.icon2}
                  alt="icon"
                  className=" image card-icon2"
                />
              </Link>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CustomerCard;
