import "./Projects.css"
import React, { useState } from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const allProjects = [
    {
        color: "redOne",
        projectName: "Potluck Planner",
        liveVersion: "https://frontend-17dulzzug-blackenjoy27.vercel.app",
        description: "Potluck Planner is an app that allows organizers and attendees to efficiently plan their potluck events."
    },
    {
        color: "blueOne",
        projectName: "Family Promises",
        liveVersion: "https://a.familypromiseservicetracker.dev/login",
        description: "Family Promises is an app that helps homeless families going through their hardship and prevent them from becoming homeless again."
    },
]
const Projects = () => {
    const [projects, setProjects] = useState(allProjects);
    const [index, setIndex] = useState(0);
    return (
        <motion.div exit={{ transition: "easeInOut" }}>
            <div className="top">
                <motion.header
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="Header"
                >
                    <nav className="about-nav">
                        <Link to="/"><h4>Home</h4></Link>
                        <Link to="/about"><h4>About</h4></Link>
                    </nav>
                </motion.header>
            </div>
            <div>
                {projects && projects.map(project => {
                    return <Project project={project} />
                })}
            </div>
        </motion.div>
    )
}

export default Projects;