import React from "react";
import "./index.css";

const SmallCard = (props) => {
  return (
    <div
      initial="visible"
      animate={"hidden"}
      className="smCardMain"
      onClick={props.onClick}
      style={
        props.style
          ? {
              transform: "translateY(-50px)",
            }
          : null
      }
    >
      <p>{props.title}</p>
      <img src={props.img} alt="place" />
    </div>
  );
};

export default SmallCard;
