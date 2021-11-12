import React from "react";

function About() {
    return (
        <article id="about-me" className="content-block">
            <div className='row'>
                <div className='col'>
                    <h2 className='text-center'>About Me</h2>
                </div>
            </div>
            <div className="card"> 
                <div className="row">
                    <div className="col-md-4">
                        <img src="./assets/images/headshot.jpg" className="img-fluid rounded pt-4" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            {<h5 className="card-title"><em>Adding Value to Others</em></h5>}
                            <p className="card-text">I'm a People-Focused Full Stack Developer with a background in church 
                                ministry leadership and strategic/creative media development and a passion for technology. 
                                I'm a self-starter and learner, as demonstrated by developing skills and knowledge outside 
                                of my primary job description to add value to the organization. Leader of an impactful youth 
                                program and catalyst in church growth and mission initiatives, I've also overseen several 
                                complete overhauls of the organizational websites of Countryside Christian Church and Oasis 
                                Student Conference, and am now gaining structured education and practice in Full Stack 
                                development and a Certificate in the University of Kansas Full Stack Web Developer Bootcamp. 
                                I have a passion and personal mission to add value to the lives of others, a thirst for 
                                learning and drive to succeed in doing so through tech. Seasoned skills in communication, 
                                leadership, strategic thinking, problem solving, adaptability and empathy, combined with 
                                growing skills in JavaScript, HTML/CSS, React, node.js and Backend databases among other 
                                technology, puts me in a unique position to add value to others through a career in tech. 
                                <br />
                                <br /> 
                                <em>I am also fond of a good taco, Sporting Kansas City soccer, lighter roast black coffee, 
                                    podcasts and video games.</em>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row px-4 pt-1">
                    <div className="col">
                        <h5 className="card-title">Technology Skillset:</h5>
                        <h1 className="fs-1">
                            <i className="devicon-html5-plain"></i> <i className="devicon-css3-plain"></i> <i className="devicon-bootstrap-plain"></i> <i className="devicon-javascript-plain"></i> <i class="devicon-react-original"></i> <i className="devicon-nodejs-plain"></i> <i className="devicon-express-original-wordmark"></i> <i className="devicon-mysql-plain-wordmark"></i> <i className="devicon-sequelize-plain-wordmark"></i> <i className="devicon-mongodb-plain"></i> <i class="devicon-graphql-plain"></i> <i className="devicon-github-original"></i> <i className="devicon-wordpress-plain"></i> <i className="devicon-photoshop-plain"></i>
                        </h1>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default About;