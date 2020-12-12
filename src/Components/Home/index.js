import React from "react";
import SmallCard from "../smallCard";
import Navbar from "../Navbar/Navbar";
import "./index.css";

const Home = (props) => {
  return (
    <div className="homeMain">
      <Navbar />
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
