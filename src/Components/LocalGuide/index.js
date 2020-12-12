import GuideCard from "./LocalGuideCard";
import "./index.css";
import Navbar from "../Navbar/Navbar";

const LocalGuide = () => {
  return (
    <div className="LocalGuideMain">
      <Navbar />
      <div className="LocalGuideContainer">
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
      </div>
    </div>
  );
};

export default LocalGuide;
