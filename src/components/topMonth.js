import React from "react";
import maggie from "../assets/images/second.png";
import { chats, newDealsData } from "../data";
import plus from "../assets/images/plus.svg";

const TopMonth = () => {
  return (
    <div className="card card5">
      <p className="top-month">Top month</p>
      <p className="november">
        {" "}
        November<span className="year">2019</span>
      </p>
    </div>
  );
};

export default TopMonth;

export const TopYear = () => {
  return (
    <div className="card card5">
      <p className="top-month">Top Year</p>
      <p className="november"> 2023</p>
      <p className="sold-small">96K sold so far</p>
    </div>
  );
};

export const Topbyuer = () => {
  return (
    <div className="card card5">
      <p className="top-month">Top buyer</p>
      <img alt="icon" className="image buyer-image" src={maggie} />
      <p className="maggie">Maggie Johnson</p>
      <p className="oasis">Oasis Organic Inc.</p>
    </div>
  );
};

export const Chats = () => {
  return (
    <div className="card card6">
      <p className="card-head">Chats</p>
      <p className="sub-head2">2 unread messages</p>
      <div style={{ display: "flex" }}>
        {chats?.map((i, n) => {
          return <img alt="icon" key={n} src={i?.icon} className="image chat-images" />;
        })}
      </div>
    </div>
  );
};

export const Topstates = () => {
  return (
    <div className="card card6">
      <p className="card-head">Top states</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="gradient-box">
          <span>NY</span>
          <span>120K</span>
        </div>
        <div className="gradient-box box1">
          <span>MA</span>
          <span>80K</span>
        </div>
        <div className="gradient-box box2">
          <span>NH</span>
          <span>70K</span>
        </div>
        <div className="gradient-box box3">
          <span>OR</span>
          <span>50K</span>
        </div>
      </div>
    </div>
  );
};

export const Newdeals = () => {
  return (
    <div className="card card7">
      <p className="card-head">New Deals</p>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {newDealsData?.map((i, n) => {
          return (
            <div className="new-deals-title" key={n}>
              <img src={plus} alt="plus" className="image plus-icon" />
              <p>{i?.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
