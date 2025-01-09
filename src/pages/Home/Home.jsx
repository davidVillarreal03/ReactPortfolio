import './newHome.css'
// import './David_Villarreal.pdf'
export default function Home() {
    return (
        <div className='home-page'>
            <section className='content-preview'>
                <div className='aboutme'>
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
                    <div className='mia'>
                        <img src='/Images/mia.png'></img>
                    </div>
                </div>
            </section>
            
            
            <section className='resume-preview'> 

            </section>
            
            <section className='contact-preview'>

            </section>
            
            <section className='pricing-preview'>

            </section>
            
        </div>
    )
}