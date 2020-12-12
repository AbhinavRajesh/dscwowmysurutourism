import {Link} from 'react-router-dom'
import SmallCard from "../smallCard";
import Navbar from "../Navbar/Navbar";

import "./index.css";

const Home = (props) => {
  return (
    <div className="homeMain">
      <Navbar />
      <div className="Other">
        <div className="left-other">
          <h2>Travel</h2>
          <h2>Discover</h2>
          <p>If you're looking for an inspirational and authentic holiday experience that's tailored to your needs, you've come to the right place. We've been at the forefront of tourism to Iceland, Lapland and the Polar regions for 37 years and are proud to be one of the UK's leading independent specialist holiday companies.</p>
          <Link to='/'>Get Started <i className="fas fa-arrow-right"></i></Link>
        </div>
        <div className="right-other">
          <img src="https://cdn.britannica.com/58/124658-050-28314DA4/Maharaja-Palace-Mysuru-Karnataka-India.jpg" alt="Mysore"/>
        </div>
      </div>
      <div className="BottomImageBar">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  );
};

export default Home;
