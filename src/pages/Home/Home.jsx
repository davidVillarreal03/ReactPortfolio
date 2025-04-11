import './newHome.css'
import { useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './David_Villarreal.pdf'
export default function Home() {
    const { theme, toggleTheme } = useTheme();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        }
        );
    }, [])
    return (
        <div className={`home-page ${theme}`}>
            {/* <p>Currently in: {theme}</p> */}
            {/* <button onClick={toggleTheme}>{theme === 'light' ? 'Otherworld' : 'Fog World'}?</button> */}
            <h2>Home</h2>
            <section className='content-preview'>
                <div className={`aboutme ${theme}`}>
                    <div className={`content-card ${theme}`} data-aos="fade-right">
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
                    <div className={`mia ${theme}`} data-aos="fade-left">
                        <img src='/Images/ logoDark.png' className='image light'></img>
                        {/* <img src='/Images/logo.png' className='image dark'></img> */}
                    </div>
                </div>
            </section>
            
            <section className='content-preview'>
                
                <div className={`content-card ${theme}`} data-aos="fade-right">
                    <h1>Skills</h1>
                    <h3>What I Do</h3>
                    <div className='services'>
                        <div className={`service ${theme}`}>
                            <i class="fa-solid fa-desktop"><p>Web Design</p></i>
                        </div>
                        <div className={`service ${theme}`}>
                            <i class='fa-solid fa-computer'><p>Web Application Development</p></i>
                        </div>
                        <div className={`service ${theme}`}>
                            <i class='fa-solid fa-code'><p>Full-Stack Development</p></i>
                        </div>
                        {/* <div className={`service ${theme}`}>
                            <i class='fa-solid fa-palette'><p>UI/UX Design</p></i>
                        </div> */}
                        <div className={`service ${theme}`}>
                            <i class='fa-solid fa-cart-shopping'><p>E-commerce (Integrated with <a href='https://stripe.com/'>Stripe</a>)</p></i>
                        </div>
                        <div className={`service ${theme}`}>
                            <i class='fa-solid fa-database'><p>Databases</p></i>
                        </div>
                        </div>
                <h3>Proficiencies</h3>
                <div className='my-skills'>
                        <div className={`skill ${theme}`}>
                            <i class="fa-brands fa-html5"><p>HTML</p></i>
                        </div>
                        <div className={`skill ${theme}`}>
                            <i class="fa-brands fa-css3-alt"><p>CSS</p></i>
                        </div>
                        <div className={`skill ${theme}`}>
                            <i class="fa-brands fa-js"><p>JavaScript</p></i>
                        </div>
                        <div className={`skill ${theme}`}>
                            <i class="fa-brands fa-react"><p>React</p></i>
                        </div>
                        <div className={`skill ${theme}`}>
                            <i class="fa-brands fa-node-js"><p>Node.js</p></i>
                        </div>
                        <div className={`skill ${theme}`}>
                            <i class="fa-brands fa-git-alt"><p>Git</p></i>
                        </div>
                        <div className={`skill ${theme}`}>
                            <i class="fa-brands fa-github"><p>GitHub</p></i>
                        </div>
                        <div className={`skill ${theme}`}>
                            <i class="fa-brands fa-npm"><p>npm</p></i>
                        </div>
                        {/* <div className={`skill ${theme}`}>
                            <i class="fa-brands fa-bootstrap"><p>Bootstrap</p></i>
                        </div> */}
                        <div className={`skill ${theme}`}>
                            <i class='fa-solid fa-database'><p>MongoDB</p></i>
                        </div>
                        <div className={`skill ${theme}`}>
                            <i class='fa-solid fa-database'><p>SQL</p></i>
                        </div>
                        <div className={`skill ${theme}`}>
                            <i class='fa-solid fa-download'><p>PWAs</p></i>
                        </div>
                    </div>
                </div>

                <div className='contact' data-aos="fade-up">
                    <div className={`content-card ${theme}`} id='contact'>
                            <div className='contact-container'>
                            <div className={`contact-text ${theme}`}>
                                <h3>Lets Connect!</h3>
                                <h1>Contacts & Socials:</h1>
                                <ul>
                                    <a href='https://www.linkedin.com/in/david-villarreal-219214337/'>
                                        <button>
                                            <li><i class="fa-brands fa-linkedin"></i></li>
                                        </button>
                                    </a>
                                    <a href='https://github.com/davidVillarreal03'>
                                        <button>
                                            <li><i class="fa-brands fa-github"></i></li>
                                        </button>
                                    </a>
                                    <a href='https://stackoverflow.com/users/27916696/david-villarreal'>
                                        <button><li><i class="fa-brands fa-stack-overflow"></i></li></button>
                                    </a>
                                    <a href='mailto:davidvillarr3al@gmail.com'>
                                        <button><li><i class='fa-solid fa-envelope'></i></li></button>
                                    </a>
                                </ul>
                            </div>

                            <form action="https://formsubmit.co/davidvillarr3al@gmail.com" method="POST"className={`contact-form ${theme}`} data-aos="fade-down">
                                <input type="hidden" name="_subject" value="New Contact Form Submission"></input>
                                <input type="hidden" name="_next" value="https://davidvillarreal.netlify.app/thankyou"></input>
                                <input type="hidden" name="_template" value="table"></input>

                                <label for="name">Name:</label>
                                <input type='text' id='name' name="name" placeholder='Your full name' required></input>

                                <label for="email">Email:</label>
                                <input type='email' id='email' name="email" placeholder='Email' required></input>
                                
                                <label for="phone">Phone:</label>
                                <input type='tel' id='phone' name="phone" placeholder='(xxx) xxx-xxxx' required></input>

                                <label for="message">Message:</label>
                                <textarea type='text' id='message' name="message" rows='5' placeholder='Type your message here...' required></textarea>
                            
                                <button type='submit' value="Submit">Send Message:</button>
                            <p className='note'>This form will send a message straight to my email.</p>
                            </form>
                            </div>

                        </div>
                </div>
            </section>
            
            <section className='content-preview' data-aos='zoom-in'>
                <div className={`content-card ${theme}`}>
                    <h1>favorite Projects</h1>
                    <div className='polaroids'>
                        <div className='polaroid-container'>
                            <div className='polaroid'>
                                <div className='front'>
                                    <img src='../../Images/itinerai.png'></img>
                                    <h3>ItinerAI</h3>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                                <div className='back'>
                                    <a href='https://itinerai.onrender.com/'>
                                        <i class='fa-solid fa-globe'>
                                        </i>
                                    </a> 
                                    <p>ItinerAI makes planning a special day easy and quick.</p>
                                </div>
                            </div>
                        </div>
                        <div className='polaroid-container'>
                            <div className='polaroid'>
                                <div className='front'>
                                    <img src='../../Images/e-commerce.png'></img>
                                    <h3>E-commerce</h3>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                                <div className='back'>
                                    <div className='sources'>
                                        <a href='https://youtu.be/x8zlpm7RXys?si=s3pSe_tX8YT1aQYO'>
                                            <i class='fa-brands fa-youtube'></i></a>
                                        <a href='https://github.com/davidVillarreal03/E-commerce-Back-End.git'>
                                            <i class='fa-brands fa-github'></i></a> 
                                    </div>
                                    <p>Simulates the back-end of an e-commerce website.</p>
                                </div>
                            </div>
                        </div>
                        <div className='polaroid-container'>
                            <div className='polaroid'>
                                <div className='front'>
                                    <img src='../../Images/rush.png'></img>
                                    <h3>Rush Response</h3>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                                <div className='back'>
                                    <div className='sources'>
                                        <a href='https://rushresponse.netlify.app/'>
                                            <i class='fa-solid fa-globe'>
                                            </i>
                                        </a> 
                                        <a href='https://github.com/davidVillarreal03/rushResponse.git'>
                                            <i class='fa-brands fa-github'></i></a>
                                    </div>
                                    <p>Rush Response allows a client to schedule a tow service.</p>
                                </div>
                            </div>
                        </div>
                            {/* <div className='polaroid' data-aos='flip-left'>
                                <img src='../../Images/rush.png'></img>
                                <br></br>
                                <br></br>
                                <h3>Rush Response</h3>
                                <i class="fa-solid fa-arrow-right"></i>

                            </div>
                            <div className='polaroid' data-aos='flip-left'>
                                <img src='../../Images/e-commerce.png'></img>
                                <br></br>
                                <br></br>
                                <h3>E-Commerce Back-End</h3>
                                <i class="fa-solid fa-arrow-right"></i>

                            </div> */}
                        {/* </div> */}
                        <div className='back'>
                            
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}