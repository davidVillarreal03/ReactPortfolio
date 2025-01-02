import './Home.css'
export default function Home() {
    return (
        <div className='home-page'>
            <section className='aboutme-preview'>
                <div className='intro-card'>
                    <img src='../../Images/head.jpg'></img>
                    <h3>Web Developer</h3>
                    <h1 id='desktop'>Hello World,
                         I am David Villarreal</h1>
                    <h1 id='mobile'>David Villarreal</h1>

                    <p id='desktop'>I am a junior web developer with 1 year of experience in full-stack development experience,
                        specializing in JavaScript and React. Passionate about designing functional and tailored applications,
                        I focus on meeting client needs while addressing complex challenges. My goal is to continously grow
                        by taking on diverse projects, with a long-term aspiration to contribute to the field of quantum computing.
                        For now, I'm committed to creating applications that enhance the web experience for everyone.
                    </p>
                    <p id='mobile'>
                    I am a junior web developer with 1 year of experience in full-stack development experience,
                        specializing in JavaScript and React. Passionate about designing functional and tailored applications,
                        I focus on meeting client needs while addressing complex challenges.
                    </p>
                    <div className='quick-contact'>    
                        <button id='desktop'>Download Resume</button>
                        <button id='desktop'>Contact Me</button>
                        <button id='mobile'>Resume</button>
                        <button id='mobile'>Contact</button>
                    </div>
                </div>
            </section>
            
            <section className='portfolio-preview'>
                <div className='project-container'>
                    <div className="project-cards">
                        <h1></h1>
                        <p></p>
                        <a href="" className="card-button">See Project</a>
                    </div>
                    <div className="project-cards">
                        <h1></h1>
                        <p></p>
                        <a href="" className="card-button">See Project</a>
                    </div>
                    <div className="project-cards">
                        <h1></h1>
                        <p></p>
                        <a href="" className="card-button">See Project</a>
                    </div>
                    <div className="project-cards">
                        <h1></h1>
                        <p></p>
                        <a href="" className="card-button">See Project</a>
                    </div>
                    <div className="project-cards">
                        <h1></h1>
                        <p></p>
                        <a href="" className="card-button">See Project</a>
                    </div>
                    <div className="project-cards">
                        <h1></h1>
                        <p></p>
                        <a href="" className="card-button">See Project</a>
                    </div>
                    <div className="project-cards">
                        <h1></h1>
                        <p></p>
                        <a href="" className="card-button">See Project</a>
                    </div>
                </div>
            </section>
            
            <section className='resume-preview'> 

            </section>
            
            <section className='contact-preview'>

            </section>
            
            <section className='pricing-preview'>

            </section>
            

            
            <h1>Home</h1>
            
            <p>This is the home page of my portfolio</p>
        </div>
    )
}