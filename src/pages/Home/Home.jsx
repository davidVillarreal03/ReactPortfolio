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
                        specializing in JavaScript and React. 
                    </p>
                        <p id='mobile'>
                            Passionate about designing functional and tailored applications,
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
                    <div className='backend'>
                        <h1>Backend Projects</h1>
                        <div className="project-cards">
                            <img src='../../Images/employee-monitoring.png'></img>
                            <h2>Employee Tracker</h2>
                            <p>A backend project that allows users to keep track of employees.</p>
                            <a href='https://github.com/davidVillarreal03/Employee-Tracker' className='card-button'><i class="fa-brands fa-github"></i></a>
                        
                        </div>
                        
                        <div className="project-cards">
                            <img src='../../Images/ecommerce.jpg'></img>
                            <h2>E-commerce Back-End</h2>
                            <p>A backend project that manages products and categories using Sequilize ORM and PostgreSQL.</p>
                            <a href='https://github.com/davidVillarreal03/E-commerce-Back-End' className='card-button'><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    
                    <div className='frontend'>
                        <h1>Frontend Projects</h1>
                        <div className="project-cards">
                            <img src='../../Images/challenge-4.jpg'></img>
                            <h2>Personal Blog</h2>
                            <p>This will allow users to create their own blog and share their thoughts with others.</p>
                            <a href="https://davidvillarreal03.github.io/Personal-Blog/" className="card-button"><i className='fas fa-cube'></i></a>
                            <a href="https://github.com/davidVillarreal03/Personal-Blog" className='card-button'><i class="fa-brands fa-github"></i></a>
                        </div>
                        
                        <div className="project-cards">
                            <img src='../../Images/note.jpg'></img>
                            <h2>Note Taker</h2>
                            <p>This application allows users to write, save, and delete notes.</p>
                            <a href="https://notetaker-express-2.onrender.com/" className="card-button"><i className='fas fa-cube'></i></a>
                            <a href="https://github.com/davidVillarreal03/NoteTaker-Express" className='card-button'><i class="fa-brands fa-github"></i></a>
                        </div>
                        
                        <div className="project-cards">
                            <img src='../../Images/weather.jpg'></img>
                            <h2>Weather Dashboard</h2>
                            <p>This application allows users to search for the weather in any city using a third-party API.</p>
                            <a href="https://davidvillarreal03.github.io/Weather-DashBoard/" className="card-button"><i className='fas fa-cube'></i></a>
                            <a href="https://github.com/davidVillarreal03/Weather-DashBoard" className='card-button'><i class="fa-brands fa-github"></i></a>
                        </div>
                        <div className="project-cards">
                            <img src='../../Images/rush.png'></img>
                            <h2>Rush Response Towing</h2>
                            <p>This is a frontend application that allows users to get information about Rush Response.</p>
                            <a href="https://rushresponse.netlify.app/" className="card-button"><i className='fas fa-cube'></i></a>
                            <a href="https://github.com/davidVillarreal03/rushResponse" className='card-button'><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    
                    <div className='fullstack'>
                        <h1>Fullstack Projects</h1>
                        <div className="project-cards">
                            <img src='../../Images/itinerai.jpg'></img>
                            <h2>ItinerAI</h2>
                            <p>This is a fullstack application that allows users to generate itineraries for a date.</p>
                            <a href="https://itinerai.onrender.com/" className="card-button"><i className='fas fa-cube'></i></a>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='resume-preview'> 

            </section>
            
            <section className='contact-preview'>

            </section>
            
            <section className='pricing-preview'>

            </section>
            

            
            {/* <h1>Home</h1>
            
            <p>This is the home page of my portfolio</p> */}
        </div>
    )
}