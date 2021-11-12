import React from "react";

function ProjectCard(props) {
    const {
        name,
        image,
        description,
        skills,
        deployed,
        github
    } = props;
    return (
        <div className='card my-3'> 
            <div className='row'>
                <div className='col-md-6 col-lg-5 p-4'>
                    <img src={`./assets/images/${image}`} className='img-fluid rounded' alt='...'/>
                    {github ? (
                        <div className='d-flex justify-content-center'>
                            <a href={github} target='_blank' className='btn btn-primary card-btn my-3'> <i className='devicon-github-original'></i> Check it out on GitHub</a>
                        </div>
                    ) : (
                        <div className='d-flex justify-content-center'>
                            <p className='my-3'><em>this application is not on github</em></p>
                        </div>
                    )}
                    {deployed ? (
                        <div className='d-flex justify-content-center'>
                            <a href={deployed} target='_blank' className='btn btn-primary card-btn'><i className='devicon-chrome-plain'></i> Visit Deployed App</a>
                        </div>
                    ) : (
                        <div className='d-flex justify-content-center'>
                            <p><em>there is no deployed front end for this app</em></p>
                        </div>
                    )}
                </div>
                <div className='col-md-6 col-lg-7'>
                    <div className='card-body'>
                        <h4 className='card-title'>{`${name}`}</h4>
                        <p className='card-text'>{`${description}`}</p>
                        <h5 className='card-title'>Technologies Used:</h5>
                        <h1 className='fs-1' dangerouslySetInnerHTML={{ __html: skills }}></h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;