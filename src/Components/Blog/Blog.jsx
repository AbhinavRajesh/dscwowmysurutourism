import Navbar from '../Navbar/Navbar';
import BlogCard from '../BlogCard/BlogCard';

import './Blog.css';

const Blog = () => {
    return(
        <div className="blogWrapper">
            {/* <div className="filterBlog"></div> */}
            <Navbar />
            <div className="blogContainer">
                <div className="blog-left">
                <h2>Our Latest Blog</h2>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
                <div className="blog-right">
                </div>
            </div>
        </div>
    )
}

export default Blog;