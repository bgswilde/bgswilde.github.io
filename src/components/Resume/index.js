import React from "react";
import skills from "../../skills.json";

function Resume() {
    return (
        <article id="resume" className="content-block">
            <div className='row'>
                <div className='col'>
                    <h2 className='text-center'>My Resume</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='text-center'>Listed below are the technologies I have been trained in and have done projects with. I have a decade+ of work experience and skills that are non-traditional to tech that would be an asset to a dev team and organization as well. For more details on my work history and skillset, view or download my resume at the link below.</p>
                    <div className='d-flex justify-content-center'>
                        <a href="https://drive.google.com/file/d/1P0TlklQSg5TOV0s2XQ7jQW4jlHgWntrS/view?usp=sharing" target='_blank' className='btn btn-primary resume-btn my-3'> <i class="fas fa-clipboard-list"></i> View/Download My Resume</a>
                    </div>
                </div>
            </div>
            <div className="card-resume my-3"> 
                <div className='row'>
                    <div className='col p-4'>
                        <h3>Tech Skills/Languages:</h3>
                        <ul>
                            {skills.map((skill) => (
                                <li className='tech-list h4 my-1'><span className='h2 pr-1 icon' dangerouslySetInnerHTML={{ __html: skill.icon }}></span>{`    `}{skill.name}</li>
                            ))}
                        </ul>
                    </div>            
                </div>
            </div>
        </article>
    )
}
export default Resume;