import React from "react";

const Project = ({ project }) => {
    return (
        <div>
            <div className={`${project.color} projectDiv`}>
                <h1 className="projectLink">
                    <a href={project.liveVersion}>
                        {project.projectName}
                    </a>
                </h1>
                <p className="projectP">Description: {project.description}</p>
            </div>
        </div>

    )
}

export default Project;