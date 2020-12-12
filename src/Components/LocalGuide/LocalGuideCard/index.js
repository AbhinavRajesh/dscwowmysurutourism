import "./index.css";
import Man from "../../../assets/img/man.jpg";

const GuideCard = (props) => {
  return (
    <div className="GuideCardMain">
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
    </div>
  );
};

export default GuideCard;
