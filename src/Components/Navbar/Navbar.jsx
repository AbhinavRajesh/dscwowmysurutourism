import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../../assets/logo.svg';

const Navbar = () => {
    const openNav = () => {
        document.getElementById("sidebar").style.width = "250px";
    }
    const closeNav = () => {
        document.getElementById("sidebar").style.width = "0";
    }

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Mysuru Tourism"/>
            </div>
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Destinations</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    <Link to="/"><li>About</li></Link>
                    <Link to="/gallery"><li>Gallery</li></Link>
                    <Link to="/"><li>Contact</li></Link>
                </ul>
            </nav>
            <p onClick={openNav} id="hamburger">☰</p>
            <div className="nav-mobile"  id="sidebar">
                <ul>
                    <Link  className="closebtn" onClick={closeNav}>×</Link>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Destinations</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    <Link to="/"><li>About</li></Link>
                    <Link to="/gallery"><li>Gallery</li></Link>
                    <Link to="/"><li>Contact</li></Link>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;