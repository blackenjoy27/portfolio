import "./aboutpage.css"
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const squareAnimation = {
    initial: {
        rotate: 0
    },
    animation: {
        rotate: 50
    },
    bsquareAnimation: {
        rotate: -100
    },
    redanimation: {
        rotate: -70
    }
}

const Aboutpage = () => {
    return (
        <motion.div exit={{ transition: "easeInOut" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="about-section">
            <div className="top">
                <motion.header
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="Header"
                >
                    <nav className="about-nav">
                        <Link to="/"><h4>Home</h4></Link>
                        <Link to="/projects"><h4>Projects</h4></Link>
                    </nav>
                </motion.header>
            </div>

            <div className="bio-div">

                <motion.div
                    initial="initial"
                    variants={squareAnimation}
                    animate="redanimation"
                    transition={{ duration: 4 }} className="red square z-index red-squareAbout" />

                <p className="bio">
                    <h1>A little about me</h1>
                    I have been learning how to write code
                    <br></br>for more than two years, struggling with varies problems
                    <br></br>during the adventure. I found out that I want to become a <strong>full stack web developer</strong>.<br></br>

                    <br></br>

                    As an <strong>full stack web developer</strong>, I like to design the the website <br></br>
                    in a way that the user could have a smooth experience, and I like to take greate care <br></br>
                    of the data in the most efficient way.  <br></br>
                </p>
                <motion.div
                    initial="initial"
                    variants={squareAnimation}
                    animate="animation"
                    transition={{ duration: 5 }}
                    className="green square z-index" />
                <motion.div
                    initial="initial"
                    variants={squareAnimation}
                    animate="bsquareAnimation"
                    transition={{ duration: 6 }}
                    className="blue square z-index blue-squareAbout" />
            </div>

        </motion.div>
    )
}

export default Aboutpage;