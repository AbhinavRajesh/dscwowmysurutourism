import { Link, withRouter } from "react-router-dom";
import SmallCard from "../smallCard";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

import "./index.css";
import { motion } from "framer-motion";

import Image1 from "../../assets/img/1.jpg";
import Image2 from "../../assets/img/2.jpg";
import mysoreCard from "../../assets/img/homeCard.png";
import mysoreMap from "../../assets/img/MysoreMap.png";

const Home = (props) => {
  const [presentImage, setPresentImage] = useState(
    "https://cdn.britannica.com/58/124658-050-28314DA4/Maharaja-Palace-Mysuru-Karnataka-India.jpg"
  );

  const [selectedImage, setSelected] = useState(1);

  var i = 0;

  const setImage = (image, imgNo) => {
    setPresentImage(image);
    setSelected(imgNo);
  };

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  const variants = {
    hidden: {
      opacity: 0,
      x: -100,
      transition: { duration: 10, delay: 5 },
    },

    initial: {
      opacity: 1,
      x: 0,
    },
  };

  const variants2 = {
    hidden: {
      opacity: 0,
      transition: { delay: 100, duration: 5 },
    },

    initial: {
      opacity: 1,
    },
  };

  return (
    <motion.div>
      <div className="homeMain">
        <div className="filterHome"></div>
        <Navbar />
        <div className="Other">
          <motion.div
            className="left-other"
            initial="hidden"
            animate="initial"
            variants={variants}
          >
            <h2>Travel</h2>
            <h2>Discover</h2>
            <p>
              If you're looking for an inspirational and authentic holiday
              experience that's tailored to your needs, you've come to the right
              place. We've been at the forefront of tourism to Iceland, Lapland
              and the Polar regions for 37 years and are proud to be one of the
              UK's leading independent specialist holiday companies.
            </p>
            {/* <Link to="/">
              Get Started <i className="fas fa-arrow-right"></i>
            </Link> */}
          </motion.div>
          <div className="right-other">
            <Link
              to={{
                pathname: "/123",
                state: {
                  img: presentImage,
                },
              }}
            >
              <motion.div
                className="ImageContainer"
                initial="hidden"
                animate="initial"
                variants={variants2}
                style={{ backgroundImage: `url(${presentImage})` }}
              >
                <motion.img
                  src={presentImage}
                  whileHover={{ scale: 1.1 }}
                  transition={transition}
                  alt="Mysuru"
                />
              </motion.div>
            </Link>
          </div>
        </div>
        <motion.div
          exit={{ opacity: 0 }}
          transition={transition}
          className="BottomImageBar"
        >
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
        </motion.div>
      </div>
      <div className="homeSecondary">
        <div className="homeLeftContainer">
          <div className="homeimgbackground"></div>
          <img src={mysoreCard} alt="" className="bg1" />
        </div>
        <div className="homeRightContainer">
          <h3>MYSORE</h3>
          <p>
            The word Mysore is derived from the word "mahishur" or
            "Mahishasurana Ooru", which means the town of Mahishasura in
            Kannada, the local language. This heritage city of Karnataka is
            famous for its splendid palaces, sandalwood and silk, but the Mysore
            Palace's beauty and splendour make it stand out.
          </p>
          <p>
            Mysuru is an important manufacturing and trading centre, and it has
            textile (cotton and silk), rice, and oil mills, sandalwood-oil and
            chemical factories, and tanneries.
          </p>
          <p>
            From 1399 until 1947 Mysore was ruled by the Wodeyar dynasty except
            for a brief period in the late 18th century when Hyder Ali and Tipu
            Sultan were in power.
          </p>
          <p>
            Today Mysuru is a modern city that has managed to retain its quaint
            old world charm.
          </p>
        </div>
      </div>
      <div className="homeSecondary">
        <div className="homeRightContainer">
          <h3>CULTURE</h3>
          <p>
            Kannada is a Dravidian language spoken by the majority of the
            population and is the official state language. Languages such as
            Tamil and Telugu are spoken along the borders of the state. Rice is
            the principal food crop of the state.
          </p>
          <p>
            Karnataka possesses a rich cultural heritage that has fos tered
            various religions and philosophies which have influ enced
            literature, architecture, folklore, music, painting, and other arts.
            The theatre culture is the of the most common traditions of the
            Kannadigas. Another common tradition among the Kannadigas during
            special occasions like Duss hera and Maha Shivratri, stories and
            devotions or vratha are sung or narrated by the devotees.
          </p>
          <p>
            Karnataka is the land of fiestas and festivals. Numerous art and
            cultural festivals are hosted throughout the year. The ritual dances
            of Karnataka are known as Kunitha. It is a pop ular dance form
            accompanied by singing and the beats of decorated drums. This dance
            is primarily performed by men from the shepherd community.
          </p>
          <p>
            Karnataka is the country's largest silk-producing state. It has
            played a pivotal role historically in the development of mul berry
            silk and subsequently silk sarees that are particular to both its
            geography and culture.
          </p>
        </div>
        <div className="homeLeftContainer">
          <img src={mysoreCard} alt="" className="bg2" />
          <div className="homeimgbackground"></div>
        </div>
      </div>
      <div className="homeSecondary">
        <div className="homeLeftContainer">
          <div className="homeimgbackground"></div>
          <img src={mysoreCard} alt="" className="bg1" />
        </div>
        <div className="homeRightContainer">
          <h3>LANGUAGE</h3>
          <p>
            The official language of the state of Karnataka is Kannada. However
            other languages like Urdu, Telugu, Tamil, Malayalam, Marathi, Tulu,
            Konkan and Hindi are also spoken. Most educated people use English
            and Hindi language too
          </p>
        </div>
      </div>
      <div className="homeSecondary">
        <div className="homeRightContainer">
          <h3>FESTIVALS</h3>
          <p>
            Karnataka is marked by some of the most colorful festivals. Mysore
            Dussehra is organized as Nada Habba and this is the main festival of
            Mysore.
          </p>
          <p>
            The second important festival of Kar nataka is Ugadi (Kannada New
            Year). Kambala is an epic buffalo race which is an annual two-day
            festival, kambala season generally starts in November and lasts
            until March.
          </p>
        </div>
        <div className="homeLeftContainer">
          <img src={mysoreCard} alt="" className="bg2" />
          <div className="homeimgbackground"></div>
        </div>
      </div>
      <div className="mysoreMap">
        <img src={mysoreMap} alt="Mysore Map" />
      </div>
    </motion.div>
  );
};

export default withRouter(Home);
