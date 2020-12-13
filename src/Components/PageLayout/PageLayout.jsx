import './PageLayout.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import image from "../../assets/img/guide.jpg"

const transition = { duration: 1.2, ease: [0.43, .13, .23, .96]}

const PageLayout = () => {
    return (
        <motion.div 
            className="placeWrapper"
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <div className="backgroundImage">
                <motion.img 
                    initial={{ width: "800px", height: "500px", y: "40%", x: "-10%"  }} 
                    animate={{
                        y: 0,
                        x: 0,
                        width: "100vw",
                        height: "100vh",
                        transition: {delay: .2, ...transition}
                    }}
                    src="https://cdn.britannica.com/58/124658-050-28314DA4/Maharaja-Palace-Mysuru-Karnataka-India.jpg" alt="main"/>
            </div>
            <div className="placeContainer">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    className="left-place"
                    animate={{ 
                        opacity: 1,
                        transition: {
                            delay: 1.4
                        }
                    }}
                >
                    <motion.h2 
                        initial={{ y: "30%"}}
                        animate={{
                            y: 0,
                        transition: {
                            delay: 1.4,
                            ...transition
                        }
                    }}>Mysore Palace</motion.h2>
                    <motion.p 
                        initial={{ y: "30%"}}
                        animate={{
                            y: 0,
                        transition: {
                            delay: 1.4,
                            ...transition
                        }
                    }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis nisi minus facilis eligendi modi, voluptates eveniet, nobis repellendus, autem mollitia cum. Sunt ab odio aliquam. Sapiente unde cumque culpa voluptate sunt ut quasi ab reiciendis est temporibus vero distinctio officia magnam necessitatibus, tempora dolores ducimus eos non? Natus, voluptatem.</motion.p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: "30%" }} 
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 1.4,
                            ...transition
                        }
                    }}
                    className="right-place"
                >
                    <img src={image} alt="test"/>
                </motion.div>
            </div>
            <div className="placedetails">
                <h3>Want to visit Mysore Palace?</h3>
                <Link to="/guide">GET GUIDE NOW</Link>
            </div>
        </motion.div>
    );
}

export default PageLayout;