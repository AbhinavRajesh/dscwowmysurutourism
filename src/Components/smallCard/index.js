import React from "react";
import "./index.css";

const SmallCard = (props) => {
  return (
    <div
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
      <img src={props.img} alt="place" />
    </div>
  );
};

export default SmallCard;
