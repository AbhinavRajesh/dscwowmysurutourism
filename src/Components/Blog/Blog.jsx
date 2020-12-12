import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import './Blog.css';

const Blog = () => {
    return(
        <div className="blogWrapper">
            <div className="blogFilter"></div>
            <Navbar />
            <div className="blogContainer">
                <div className="blog-left">
                    <h2>Our Latest Blog</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam asperiores ad aperiam aut? Eaque debitis corrupti odio id, sed deserunt provident natus tenetur, eius alias fugiat ipsum, laudantium ratione! Voluptas?...</p>
                    <Link to="/">Read More</Link>
                </div>
                <div className="blog-right">
                </div>

            </div>
        </div>
    )
}

export default Blog;