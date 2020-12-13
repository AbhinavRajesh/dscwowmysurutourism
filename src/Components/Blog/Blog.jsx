import Navbar from '../Navbar/Navbar';
import BlogCard from '../BlogCard/BlogCard';

import './Blog.css';

const Blog = () => {
var i = 0;
    return(
        <div className="blogWrapper">
            <Navbar />
            <div className="blogContainer">
                <div className="blog-left">
                <h2>Our Latest Blog</h2>
                    <BlogCard custom={i++}/>
                    <BlogCard custom={i++}/>
                    <BlogCard custom={i++}/>
                    <BlogCard custom={i++}/>
                    <BlogCard custom={i++}/>
                    <BlogCard custom={i++}/>
                    <BlogCard custom={i++}/>
                    <BlogCard custom={i++}/>
                    <BlogCard custom={i++}/>
                </div>
                <div className="blog-right">
                </div>
            </div>
        </div>
    )
}

export default Blog;