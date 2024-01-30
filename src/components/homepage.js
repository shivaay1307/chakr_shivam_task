import React from "react";
import Sidebar from "./sidebar";
import Card from "./card";
import { cardData } from "../data";
import CustomerCard from "./customerCard";
import TopMonth, {
  Chats,
  Newdeals,
  TopYear,
  Topbyuer,
  Topstates,
} from "./topMonth";
import Chart from "../chartData";

const HomePage = () => {
  
  return (
    <div className="home">
      <Sidebar />
      <div className="after-sidebar">
        {cardData?.map((i, n) => {
          return <Card data={i} key={n} />;
        })}
        <CustomerCard />
        <div
          style={{
            maxWidth: "560px",
            margin: 0,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div className="card card4">
            <Chart />
          </div>
          <TopMonth />
          <TopYear />
          <Topbyuer />
        </div>
        <Chats /> 
       <Topstates /> 
       <Newdeals />
      </div>
    </div>
  );
};

export default HomePage;
