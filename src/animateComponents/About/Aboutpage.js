import "./aboutpage.css"
import React from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";


const Aboutpage = ()=>{
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="about-section">
            <div>
                <motion.header
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1}}
                    className="about-header"
                >
                    <nav className="about-nav">
                        <Link to="/"><h4>Home</h4></Link>
                        <Link to="/contact"><h4>Contact</h4></Link>
                        <Link to="/projects"><h4>Projects</h4></Link>
                    </nav>
                </motion.header>
            </div>

            <div className="bio-div">
                <p className="bio">
                    I have been learning how to write code 
                    <br></br>for more than two years, struggling with varies problem 
                    <br></br>during the adventure. I found out that I want to become a <bold>full stack web developer</bold>.<br></br> 
                    
                    <br></br>

                    As an full stack web developer ,I like to design the the website <br></br> 
                    in a way that the user could have a smooth experience, and I like to take greate care <br></br> 
                    of the data in the most efficient way.  <br></br>

                    <br></br>

                </p>
            </div>
        </motion.div>
    )
}

export default Aboutpage;