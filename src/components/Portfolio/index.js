import React from "react";
import projects from "../../projects.json";
import ProjectCard from "../ProjectCard";


function Portfolio() {
    return (
        <section id='work' className='content-block'>
            <div className='row'>
                <div className='col'>
                    <h2 className='text-center'>My Portfolio</h2>
                </div>
            </div>
            {projects.map((project) => (
                <ProjectCard 
                    name={project.name}
                    description={project.description}
                    skills={project.skills}
                    image={project.image}
                    deployed={project.deployed}
                    github={project.github}
                ></ProjectCard>
            ))}
        </section>
    )
};

export default Portfolio; 