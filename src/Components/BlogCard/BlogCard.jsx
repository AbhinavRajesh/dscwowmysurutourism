import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = () => {
    return (
        <div className="blogCard">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non.</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam asperiores ad aperiam aut? Eaque debitis corrupti odio id, sed deserunt provident natus tenetur, eius alias fugiat ipsum, laudantium ratione! Voluptas?...</p>
            <Link to="/">Read More</Link>
        </div>
    )
}

export default BlogCard;