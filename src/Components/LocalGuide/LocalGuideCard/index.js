import "./index.css";
import Man from "../../../assets/img/man.jpg";
import { motion } from "framer-motion";

const GuideCard = (props) => {
  const variants = {
    hidden: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom * 0.2 },
    }),
    visible: {
      opacity: 0,
      y: 100,
    },
  };
  return (
    <motion.div
      initial="visible"
      animate={"hidden"}
      variants={variants}
      custom={props.custom}
      className="GuideCardMain"
    >
      <div className="avatarGuide">
        <img alt="avatar" src={Man} />
      </div>
      <div className="textGuide" style={{ margin: 10 }}>
        Ajal
      </div>
      <div className="textGuide" style={{ margin: 10 }}>
        +91 9188692836
      </div>
      <div className="textGuide" style={{ margin: 10 }}>
        ajal@ajal.tech
      </div>
    </motion.div>
  );
};

export default GuideCard;
