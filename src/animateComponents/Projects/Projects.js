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
        description: "Potluck Planner is an app that allows organizers and attendees to efficiently plan their potluck events.",
        bgClass: "potluck",
    },
    {
        color: "blueOne",
        projectName: "Family Promises",
        liveVersion: "https://a.familypromiseservicetracker.dev/login",
        description: "Family Promises is an app that helps homeless families going through their hardship and prevent them from becoming homeless again.",
        bgClass: "familyPromise",
    },
    {
        color: "greenOne",
        projectName: "Use My Tech",
        liveVersion: "https://use-my-tech-fe-blackenjoy27.vercel.app",
        description: "Use My Tech is an app that provides the most effient way to get the tech from other people for a short time usage. All users can choose to be a borrower or a renter",
        bgClass: "tech",

    },
]
const Projects = () => {
    const [projects] = useState(allProjects);
    const [wallPaper, setWallPaper] = useState("");

    return (
        <motion.div exit={{ transition: "easeInOut" }} className={`projects ${wallPaper}`}>
            <div className="top">
                <motion.header
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="projectHeader"
                >
                    <nav className="about-nav">
                        <Link to="/"><h4>Home</h4></Link>
                        <Link to="/about"><h4>About</h4></Link>
                    </nav>
                </motion.header>
            </div>
            <div>
                {projects && projects.map(project => {
                    return <Project project={project} changeBG={setWallPaper} />
                })}
            </div>
        </motion.div>
    )
}

export default Projects;