import './AboutMe.css';


export default function AboutMe () {
    return (
        <div className='home-page'>

                <section className='aboutme-section'>
                    <h2>About Me</h2>
                    <p>I am a junior web developer passionate about designing websites but mainly taking on the challenges that come with having to write logical applications. 
                    With 1 year of experience in full-stack development, I specialize in using Javascript language and React as the framework for my projects.</p>
                    <p>I am known for listening to my clients and meeting the expectations that are set for me in bringing an application that will meet their needs.
                    Making an application that is tailored to your personality is what drives me to design websites but I take pride in making an application that will
                    help you in your day-to-day.  
                    </p>
                    <p>I aim to master the field of coding by making all kinds of projects and stepping out of my comfort zone but my real passion in life is to make
                        an impact in the world of Quantam Computing whether that be big or small, only time will tell. For now I plan on making 
                        applications that will make the web a better place for all.
                    </p>
                    <p className='note'>
                        *Fun Fact: The color scheme for this portfolio was inspired by Silent Hill 2.*
                    </p>
                </section>
                {/* <section className='testimonials'>
                    <h2>Testimonials from past collaborators</h2>
                    <p>Have we worked together? Consider leaving a review on my performance!⭐</p>
                    <div>

                    </div>
                </section> */}
                <section className='clients'>
                    <h2>Clients I have done work for</h2>
                    <div className='client-logos'>  
                        <span className='client-logo'>
                            <a href='https://rushresponse.netlify.app/'>
                                <img id='rush' src='../../logos/altrush.svg'></img>
                            </a>
                        </span>
                        <span className='client-logo'>
                            <a href='https://itinerai.onrender.com/'>
                                <img id='ia'src='../../logos/i.a.svg'></img>
                            </a>
                        </span>
                    </div>
                </section>
                <section className='subscriptions'>
                    <h2>Monthly subscriptions of services i provide</h2>
                    <p>Not sure which one you need? Start with Silver and upgrade at anytime!</p>
                    <p>Hover over the bullet points to learn more!</p>
                    <div className='subscription-cards'>
                        <div className='subscription-card'>
                            <h2>Silver</h2>
                            <h3>$30<span>/month</span> <button>Free Trial</button></h3>
                            <ul>
                                <li className='tooltip' data-tooltip='A one-time audit of your current website with actionable recommendations.'>Basic Website Audit</li>
                                <li className='tooltip' data-tooltip='Pre-designed website templates.'>Access to Starter Templates</li>
                                <li className='tooltip' data-tooltip='Limited support with a 48-hour response time for basic queries.'>Email Support</li>
                                <li className='tooltip' data-tooltip='10% off custom web development projects.'>Discounts on Services</li>
                                <li>1-2 free consultations or introductory sessions per year.</li>
                            </ul>
                            <p>Perfect for start ups and small projects--get the essentials to build your online presence.</p>
                            <span><button>Subscribe Now</button></span>
                        </div>
                        <div className='subscription-card'>
                            <h2 id='gold'>Gold</h2>
                            <h3>$60<span>/month</span></h3>
                            <ul>
                                <li className='tooltip' data-tooltip='A one-time audit of your current website with actionable recommendations.'>Everything in the Silver tier</li>
                                <li className='tooltip' data-tooltip='Basic updates and maintenance of your website.'>Monthly Maintenance</li>
                                <li className='tooltip' data-tooltip='Live chat or 24-hour email response for urgent issues.'>Priority Support</li>
                                <li className='tooltip' data-tooltip='Monthly 30-minute strategy call to discuss website improvements.'>1:1 Consultation</li>
                                <li className='tooltip' data-tooltip='Premium plugins, themes, or development frameworks.'>Access to Advanced Tools</li>
                            </ul>
                            <p>Take your website to the next level with custom development and expert support.</p>
                            <span><button>Subscribe Now</button></span>
                        </div>
                        <div className='subscription-card'>
                            <h2 id='platinum'>Platinum</h2>
                            <h3>$100<span>/month</span></h3>
                            <ul>
                                <li className='tooltip' data-tooltip='A one-time audit of your current website with actionable recommendations.'>Everything in the Gold tier</li>
                                <li className='tooltip' data-tooltip='Unlimited pages with advanced functionality.(e.g. e-commerce, custom APIs'>Full Custom Website Development</li>
                                <li className='tooltip' data-tooltip='Weekly updates and backups of your site.'>Ongoing Maintenance & Support</li>
                                <li className='tooltip' data-tooltip='A single point of contact for all your website needs.'>Dedicated Account Manager</li>
                                <li className='tooltip' data-tooltip='60-minute strategy call to discuss website improvements.'>Monthly Strategy Calls</li>
                                <li className='tooltip' data-tooltip='Flexibility to make changes as their business evolves.'>Unlimited Revisions</li>
                            </ul>
                            <p>The ultimate package for businesses tha demand top-tier web development and ongoing support.</p>
                            <span><button>Subscribe Now</button></span>
                        </div>
                    </div>
                    <p className='note'>*Initial fee of $150 to start. Each subscription will be billed a month after the initial fee.
                    For more information on each subscription, please contact me.*</p>
                </section>
                <section className='fun-facts'>
                    <h2>Fun facts about myself</h2>
                    <h3>I love to play video games and have a few obsessions right now:</h3>
                    <ul>
                        <li>Smite 2 (Main: Hercules)</li>
                        <li>Rainbow Six Siege</li>
                        <li>Silent Hill 2</li>
                        <li>Mortal Kombat 1 (Main: Conan The Barbarian)</li>
                        <li>Marvel Rivals (Main: Hulk)</li>
                    </ul>
                    <h3>My coding environment and how I code:</h3>
                    <ul>
                        <li>Listening to music</li>
                        <p>This helps me stay focused and keep my mind on the task at hand. Music will usually include
                            songs that have a heavy focus on instruments such as TOOL. Their music tends to have a long
                            song duration and it helps when I know I am going to be coding for about 4 hours straight.
                        </p>
                        <li>I get inspired by other's work</li>
                        <p>The coding industry is full of talented individuals and I like to learn
                            from them all the time. Although I do get references from other sites I will always do my
                            best to understand how to code something from scratch. 
                        </p>
                        <li>Learning new things</li>
                        <p>As a developer I keep up with the latest developments in the industry.
                            I tend to follow many people who seem well established in the field
                            to keep up with the latest trends. Someone I like to reference for JavaScript
                            is a user named 'Ram Maheshwari' or @rammcodes_ on Instagram.
                            This user has a great deal of posts that I find very informative and will always 
                            add a post from them to a folder in my bookmarks and he tends to post a lot more than
                            just JavaScript.
                        </p>
                    </ul>
                        <h3>Things I like to do in my free time</h3>
                        <ul>
                        <li>One of my favorite things to do in my free time is
                            to explore the city of San Antonio with my wife. We are both introverts who like to 
                            stay inside the house as much as possible but recently we decided that we 
                            don't want to miss out on the city that we were both raised in. 
                        </li>
                        <li>I like to play games with my friends in my free time and as of right now we are all
                            very much hooked on Marvel Rivals.
                        </li>
                        <li>I also like to come up with website ideas for games I like to play.
                            As of right now I am working on a website for Twisted Metal: Black and 
                            Bioshock 2. These will be coming soon and will be posted on my portfolio!
                        </li>
                        <li>The lovecraftian world of horror is also something that I like to explore.
                            I have a book that has a collection of his works and I read it whenever I have free time
                            or when I need to take a break from coding. Although Cthulhu is my favorite character
                            I would have to say that the story "The Nameless City" is my favorite.
                        </li>

                        </ul>
                </section>

        </div>
    )
}