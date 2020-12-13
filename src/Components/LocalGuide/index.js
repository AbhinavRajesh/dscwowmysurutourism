import GuideCard from "./LocalGuideCard";
import "./index.css";
import Navbar from "../Navbar/Navbar";

const LocalGuide = () => {
  var i = 0;

  return (
    <div className="LocalGuideMain">
      <Navbar />
      <div className="LocalGuideContainer">
        <GuideCard custom={i++} />
        <GuideCard custom={i++} />
        <GuideCard custom={i++} />
        <GuideCard custom={i++} />
        <GuideCard custom={i++} />
        <GuideCard custom={i++} />
        <GuideCard custom={i++} />
      </div>
    </div>
  );
};

export default LocalGuide;
