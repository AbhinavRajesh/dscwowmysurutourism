import './PageLayout.css';
import image from "../../assets/img/guide.jpg"

const PageLayout = () => {
    return (
        <div 
            className="placeWrapper"
            style={{ backgroundImage: `url(https://cdn.britannica.com/58/124658-050-28314DA4/Maharaja-Palace-Mysuru-Karnataka-India.jpg)` }}
        >
            {/* <div className="placeFilter"></div> */}
            <div className="placeContainer">
                <div className="left-place">
                    <h2>Mysore Palace</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis nisi minus facilis eligendi modi, voluptates eveniet, nobis repellendus, autem mollitia cum. Sunt ab odio aliquam. Sapiente unde cumque culpa voluptate sunt ut quasi ab reiciendis est temporibus vero distinctio officia magnam necessitatibus, tempora dolores ducimus eos non? Natus, voluptatem.</p>
                </div>
                <div className="right-place">
                    <img src={image} alt="test"/>
                </div>
            </div>
        </div>
    );
}

export default PageLayout;