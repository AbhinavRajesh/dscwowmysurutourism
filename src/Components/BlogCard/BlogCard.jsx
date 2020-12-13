import { Link } from 'react-router-dom';
import './BlogCard.css';
import {motion} from "framer-motion"

const BlogCard = (props) => {
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
        <motion.div className="blogCard" variants={variants} initial="visible" animate="hidden" custom={props.custom}>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, non.</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam asperiores ad aperiam aut? Eaque debitis corrupti odio id, sed deserunt provident natus tenetur, eius alias fugiat ipsum, laudantium ratione! Voluptas?...</p>
            <Link to="/">Read More</Link>
        </motion.div>
    )
}

export default BlogCard;