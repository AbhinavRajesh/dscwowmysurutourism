import { Link } from "react-router-dom";
import SmallCard from "../smallCard";
import Navbar from "../Navbar/Navbar";
import Image1 from "../../assets/img/1.jpg";
import Image2 from "../../assets/img/2.jpg";
import { useState } from "react";

import "./index.css";

const Home = (props) => {
  const [presentImage, setPresentImage] = useState(
    "https://cdn.britannica.com/58/124658-050-28314DA4/Maharaja-Palace-Mysuru-Karnataka-India.jpg"
  );

  const [selectedImage, setSelected] = useState(1);

  const setImage = (image, imgNo) => {
    setPresentImage(image);
    setSelected(imgNo);
  };

  return (
    <>
      <div className="homeMain">
        <div className="filterHome"></div>
        <Navbar />
        <div className="Other">
          <div className="left-other">
            <h2>Travel</h2>
            <h2>Discover</h2>
            <p>
              If you're looking for an inspirational and authentic holiday
              experience that's tailored to your needs, you've come to the right
              place. We've been at the forefront of tourism to Iceland, Lapland
              and the Polar regions for 37 years and are proud to be one of the
              UK's leading independent specialist holiday companies.
            </p>
            <Link to="/">
              Get Started <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="right-other">
            <div
              className="ImageContainer"
              style={{ backgroundImage: `url(${presentImage})` }}
            ></div>
          </div>
        </div>
        <div className="BottomImageBar">
          <SmallCard
            style={selectedImage === 1 ? true : null}
            onClick={() =>
              setImage(
                "https://cdn.britannica.com/58/124658-050-28314DA4/Maharaja-Palace-Mysuru-Karnataka-India.jpg",
                1
              )
            }
            img="https://cdn.britannica.com/58/124658-050-28314DA4/Maharaja-Palace-Mysuru-Karnataka-India.jpg"
          />
          <SmallCard
            onClick={() => setImage(Image2, 2)}
            img={Image2}
            style={selectedImage === 2 ? true : null}
          />
          <SmallCard
            onClick={() => setImage(Image1, 3)}
            img={Image1}
            style={selectedImage === 3 ? true : null}
          />
        </div>
      </div>
    </>
  );
};

export default Home;