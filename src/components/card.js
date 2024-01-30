import React from "react";
import "./components.css";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className={data?.head !== "Quarter goal" ? "card" : "card card2"}>
      <p className="card-head">{data?.head}</p>
      {data?.icon1 !== undefined ? (
        <div className="number-container">
          <h1 className="number-on-card">{data?.numbers}</h1>
          <img
            src={data?.icon1[data?.name1]}
            alt={data?.name1}
            className={
              data?.head !== "Quarter goal"
                ? "image card-icon"
                : "image goal-image"
            }
          />
        </div>
      ) : (
        <h1 className="number-on-card">{data?.numbers}</h1>
      )}
      {data?.head !== "Quarter goal" ? (
        <p className="sub-head">{data?.subHead}</p>
      ) : ""}
      {(data && data?.link !== undefined) || data?.link !== null ? (
        <Link to="#">
          <p className="link-text">{data?.link}</p>
          <img
            src={data?.icon2[data?.name2]}
            alt={data?.name2}
            className=" image card-icon2"
          />
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
