import './newHome.css'
// import './David_Villarreal.pdf'
export default function Home() {
    return (
        <div className='home-page'>
            <section className='content-preview'>
                <div className='aboutme'>
                    <div className='content-card'>
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
            
            <section className='content-preview'>
                        {/* <section>
                            
                        </section> */}
                <div className='contact'>
                    <div className='content-card'>
                            <div className='contact-container'>
                            <div className='contact-text'>
                                <h3>Lets Connect!</h3>
                                <h4>Contacts & Socials:</h4>
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
                                {/* <p>I would love to hear from you! I am always open to new opportunities whether it be a job or a project, so don't hesitate to reach out even if it has to do with a question about my work. Helping others is what drives me and it would mean the world to me if I was someone who you can count on to help. Please fill out the form below and I will get back to you as soon as possible.</p> */}
                            </div>

                            <form action="https://formsubmit.co/davidvillarr3al@gmail.com" method="POST"className="contact-form" data-aos="fade-down">
                                {/* <h3>Contact Me Directly</h3> */}
                                <input type="hidden" name="_subject" value="New Contact Form Submission"></input>
                                <input type="hidden" name="_next" value="https://davidvillarreal.netlify.app/thankyou"></input>
                                
                                <label for="name">Name:</label>
                                <input type='text' id='name' name="name" placeholder='Your full name' required></input>

                                <label for="email">Email:</label>
                                <input type='email' id='email' name="email" placeholder='Email' required></input>
                                
                                <label for="phone">Phone:</label>
                                <input type='tel' id='phone' name="phone" placeholder='(xxx) xxx-xxxx' required></input>

                                <label for="message">Message:</label>
                                <textarea type='text' id='message' name="message" rows='5' placeholder='Type your message here...' required></textarea>
                            
                                <button type='submit' value="Submit">Send Message:</button>
                            </form>
                            </div>

                        </div>
                </div>
            </section>
            
            <section className='pricing-preview'>

            </section>
            
        </div>
    )
}