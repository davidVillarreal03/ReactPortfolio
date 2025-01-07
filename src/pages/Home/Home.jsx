import './Home.css'
// import './David_Villarreal.pdf'
export default function Home() {
    return (
        <div className='home-page'>
            <section className='aboutme-preview'>
                <div className='intro-card'>
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
                        <a href='/David_Villarreal.pdf' download='David_Villarreal.pdf' class='download-btn'>
                            <button id='desktop'>
                                <i class='fas fa-download'></i> Download My Resume
                            </button>
                        </a>    
                        <a href='mailto:davidvillarr3al@gmail.com'>
                        <button id='desktop'>Contact Me</button>
                        </a>
                        <a href='/David_Villarreal.pdf' download='David_Villarreal.pdf' class='download-btn'>
                            <button id='mobile'>
                                <i class='fas fa-download'></i> Download My Resume
                            </button>
                        </a>    
                        <a href='mailto:davidvillarr3al@gmail.com'>
                        <button id='mobile'>Contact Me</button>
                        </a>
                    </div>
                </div>
                <aside className='mia'>
                    <img src='/Images/mia.png'></img>
                </aside>
            </section>
            
            <section className='portfolio-preview'>
                <div className='project-container'>
                    <div className='backend'>
                        <h1>Backend Projects</h1>
                        <p>need to get images for these projects</p>
                    </div>
                    
                        <h1>Frontend Projects</h1>
                    <div className='frontend'>
                        <div className="project-cards">
                            <div className='content front'>
                                <img src='../../Images/challenge-4.jpg'></img>
                                <h2>Personal Blog</h2>
                            </div>
                            <div className='content back'>
                                    <p>This will allow users to create their own blog and share their thoughts with others.</p>
                                <div className='source-btns'>
                                    <a href="https://davidvillarreal03.github.io/Personal-Blog/" className="card-button"><i className='fas fa-cube'></i></a>
                                    <a href="https://github.com/davidVillarreal03/Personal-Blog" className='card-button'><i class="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="project-cards">
                            <div className='content front'>
                                <img src='../../Images/note.jpg'></img>
                                <h2>Note Taker</h2>
                            </div>
                            <div className='content back'>
                                    <p>This application allows users to write, save, and delete notes.</p>
                                <div className='source-btns'>
                                    <a href="https://notetaker-express-2.onrender.com/" className="card-button"><i className='fas fa-cube'></i></a>
                                    <a href="https://github.com/davidVillarreal03/NoteTaker-Express" className='card-button'><i class="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="project-cards">
                            <div className='content front'>
                                <img src='../../Images/weather.jpg'></img>
                                <h2>Weather Dashboard</h2>
                            </div>
                            <div className='content back'>
                                    <p>This application allows users to search for the weather in any city using a third-party API.</p>
                                <div className='source-btns'>
                                    <a href="https://davidvillarreal03.github.io/Weather-DashBoard/" className="card-button"><i className='fas fa-cube'></i></a>
                                    <a href="https://github.com/davidVillarreal03/Weather-DashBoard" className='card-button'><i class="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="project-cards">
                            <div className='content front'>
                            <img src='../../Images/rush.png'></img>
                            <h2>Rush Response Towing</h2>
                            </div>
                            <div className='content back'>
                                    <p>This is a frontend application that allows users to get information about Rush Response.</p>
                                <div className='source-btns'>
                                    <a href="https://rushresponse.netlify.app/" className="card-button"><i className='fas fa-cube'></i></a>
                                    <a href="https://github.com/davidVillarreal03/rushResponse" className='card-button'><i class="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                        <h1>Fullstack Projects</h1>
                    <div className='fullstack'>
                        <div className="project-cards">
                            <div className='content front'>
                                <img src='../../Images/itinerai.jpg'></img>
                                <h2>ItinerAI</h2>
                            </div>
                            <div className='content back'>
                                <p>This is a fullstack application that allows users to generate itineraries for a date.</p>
                                <div className='source-btns'>
                                    <a href="https://itinerai.onrender.com/" className="card-button"><i className='fas fa-cube'></i></a>
                                    <a href="https://github.com/davidVillarreal03/ItinerAI" className='card-button'><i class="fa-brands fa-github"></i></a>
                                </div>
                            </div>
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