import './Resume.css'
export default function Resume() {
    return (
        <section className='page-layout'>
             <a href='/David_Villarreal.pdf' download='David_Villarreal.pdf' class='download-btn'>
                <h1>Resume</h1>
            </a>
            <h5>1 Year of Experience in Full-Stack Development</h5>
            <hr></hr>
        <div className='resume-page'>
            <div className='resume-container' id='desktop'>
                {/* <h1>Proficiencies</h1> */}
                <ul className='resume-list'>
                <h2>Education</h2>
                    <li className='resume-item'>
                        <h4 id='first'>2024</h4>
                        <h3>The University of Texas at San Antonio School of Data Science</h3> 
                        <h5>Coding Boot Camp</h5>
                        <p>Completed an intensive, hands-on boot camp focused on modern web development.
                            Gained expertise in front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, Express, and
                            databases lilke MongoDB and PostgresSQL. Developed and deployed full-stack applicatoins, 
                            honed problem-solving skills, and collaborated in agile team environments.
                        </p>
                        <br></br>
                        <hr></hr>
                    </li>
                    <li className='resume-item'>
                        <h4>2019</h4>
                        <h3>Palo Alto Community College</h3>
                        <h5>Associates of Arts in Liberal Arts</h5>
                        <p>Completed a well-rounded program emphasizing critical thinking, communication,
                            and analytical skills. Gained a broad foundation in humanities, social sciences, and natural sciences, 
                            fostering a versatile perspecitve applicable to various fields. Developed strong research and writing 
                            ablities while exploring diverse disciplines, preparing for continued learning and professional growth. 
                        </p>
                        <br></br>
                        <hr></hr>
                    </li>
                    <h2>Experience</h2>
                    <li className='resume-item'>
                        <h4 id='string' >2024 - Current</h4>
                        <h3>Front-End Developer at Rush Response Towing</h3>
                        <h5>San Antonio, Texas</h5>
                        <p>Developed and maintained responsive and user-friendly web applications using React, HTML, and CSS.
                            Collaborated with owners of the company to ensure a smooth user experience and a positive customer experience.
                            Implemented responsive design techniques, ensuring optimal user experience across various devices and screen sizes.
                        </p>
                        <br></br>
                        <hr></hr>
                    </li>
                    <li className='resume-item'>
                        <h4 id='string'>Sept - Oct, 2024</h4>
                        <h3>Backend Developer at ItinerAI</h3>
                        <p>Developed and maintained responsive and user-friendly web applications using React, HTML, and CSS.
                            Collaborated with cross-functional teams to ensure seamless integration of front-end and back-end components.
                            Implemented MongoDB and Express.js for efficient data storage and retrieval.
                        </p>
                        <br></br>
                        <hr></hr>
                    </li>
                </ul>
                <ul className='resume-list'>
                    <div className='proficiencies'>
                    <h2>Design Skills</h2>
                    <div className='coding-skills'>    
                        <li>Web Design</li>
                        <li>Logo Design</li>
                    </div>
                    <h2>Coding Skills</h2>
                    <div className='coding-skills'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                    </div>
                    <h2>Knowledges</h2>
                    <div className='knowledge'>
                        <li>Time Management</li>
                        <li>Problem Solving</li>
                        <li>Communication</li>
                        <li>Leadership</li>
                        <li>Teamwork</li>
                    </div>
                    </div>
                </ul>
            </div>
        </div>
        </section>
    )
}