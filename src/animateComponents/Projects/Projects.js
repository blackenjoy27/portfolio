import "./Projects.css"
import React, {useState} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const allProjects = [
    {
        projectName:"Potluck Planner",
        liveVersion:"https://frontend-17dulzzug-blackenjoy27.vercel.app",
        description:[
            "Opening potluck events for client who wants to share their own made dishes",
            "Secure the data by having the authentication API to validate via JWT",
            "Interacting with back-end database"
        ]
    }
]
const Projects = () => {
    const [projects, setProjects] = useState(allProjects);
    const [index, setIndex] = useState(0);
    return(
        <motion.div exit={{transition:"easeInOut"}}>
            <div className="top">
                <motion.header
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1}}
                    className="about-header"
                >
                    <nav className="about-nav">
                        <Link to="/"><h4>Home</h4></Link>
                        <Link to="/about"><h4>About</h4></Link>
                    </nav>
                </motion.header>
            </div>
            <div className="projectDiv">
                <h1 className="projectLink">
                    <a href={projects[index].liveVersion}>
                        {projects[index].projectName}
                    </a>
                </h1>
                <ul>
                    <li><h2>{projects[index].description[0]}</h2></li>
                    <li><h2>{projects[index].description[1]}</h2></li>
                    <li><h2>{projects[index].description[2]}</h2></li>
                </ul>
            </div>
        </motion.div>
    )
}

export default Projects;