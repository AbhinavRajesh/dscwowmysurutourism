import React from "react";
import SmallCard from "../smallCard";
import "./index.css";

const Home = (props) => {
  return (
    <div className="homeMain">
      <div className="Other"></div>
      <div className="BottomImageBar">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  );
};

export default Home;
