import './Gallery.css';

import testImage from '../../assets/img/guide.jpg'
import Navbar from '../Navbar/Navbar';


const Gallery = () => {
    return (
        <div className="galleryWrapper">
            <Navbar/>
            <div className="galleryContainer">
                <h2>Gallery</h2>
                <h3>A Selection of Photos from some of our tours</h3>
                <div className="gallery">
                    <img src={testImage} alt="Testing"/>
                    <img src={testImage} alt="Testing"/>
                    <img src={testImage} alt="Testing"/>
                    <img src={testImage} alt="Testing"/>
                    <img src={testImage} alt="Testing"/>
                    <img src={testImage} alt="Testing"/>
                    <img src={testImage} alt="Testing"/>
                    <img src={testImage} alt="Testing"/>
                    <img src={testImage} alt="Testing"/>
                </div>
            </div>
        </div>
    );
}

export default Gallery;