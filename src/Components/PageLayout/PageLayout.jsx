import './PageLayout.css';
import { Link, withRouter } from 'react-router-dom';
import { motion } from 'framer-motion';

import image from "../../assets/img/guide.jpg"
import { useEffect, useState } from 'react';

const transition = { duration: 1.2, ease: [0.43, .13, .23, .96]}

const PageLayout = (props) => {

    const [presentImage, setPresentImage] = useState();

    useEffect(() => {
        if(props.location.state){
            setPresentImage(props.location.state.img);
        }
    },[props.location.state])

    return (
        <motion.div 
            className="placeWrapper"
            initial='initial'
            animate='animate'
            exit='exit'
        >
            {presentImage && 
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
                    src={presentImage} alt="main"/>
            </div>
            }
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
                    }}>The second most famous attraction in India, first being the Taj Mahal, Mysore Palace is easily one of the most imposing architectural buildings in the country. It is amazing that the palace was only built in the 20th century and is the fourth structure to be constructed on the same location.</motion.p>
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

export default withRouter( PageLayout);