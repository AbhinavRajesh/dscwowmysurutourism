import GuideCard from "./LocalGuideCard";
import "./index.css";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

const LocalGuide = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 1,
    },
    in: {
      opacity: 1,
      x: "0px",
      scale: 1,
      //   transition: { delay: 0, duration: 1.5 },
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  const pageStyle = {
    position: "absolute",
  };

  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="LocalGuideMain"
    >
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
    </motion.div>
  );
};

export default LocalGuide;
