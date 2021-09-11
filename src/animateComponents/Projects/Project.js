import React from "react";

const Project = ({ project, changeBG }) => {
    return (
        <div>
            <div className={`${project.color} projectDiv`}
                onMouseOver={() => changeBG(project.bgClass)}
                onMouseOut={() => changeBG("")}>
                <h1 className="projectLink">
                    <a href={project.liveVersion}>
                        {project.projectName}
                    </a>
                </h1>
                <p className="projectP">Description: {project.description}</p>
            </div>
        </div >

    )
}

export default Project;