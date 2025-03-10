import './AboutMe.css';
import AOS from 'aos';
// import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function AboutMe () {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className='home-page'>

                    <h2>About Me</h2>
                <section className='aboutme-section' data-aos="fade-up">
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
                <section className='clients' data-aos="fade-up">
                    <h2>Clients I have done work for</h2>
                    <div className='client-logos'>  
                        <span className='client-logo' data-aos="fade-right">
                            <a href='https://rushresponse.netlify.app/'>
                                <img id='rush' src='../../logos/altrush.svg'></img>
                            </a>
                        </span>
                        <span className='client-logo' data-aos="fade-left">
                            <a href='https://itinerai.onrender.com/'>
                                <img id='ia'src='../../logos/i.a.svg'></img>
                            </a>
                        </span>
                    </div>
                </section>
                <section className='subscriptions'>
                    <h2>Monthly subscriptions of services i provide</h2>
                    <p>Not sure which one you need? Start with Silver and upgrade at anytime!</p>
                    {/* <p>Hover over the bullet points to learn more!</p> */}
                    {/* <p>Start with Silver and upgrade at anytime!</p> */}
                    <div className='subscription-cards'>
                        <div className='subscription-card' data-aos='fade-up'>
                            <h2>Silver</h2>
                            <h3>$30<span>/month</span></h3>
                            {/* <button>Free Trial</button> */}
                            <ul>
                                <li className='tooltip' data-tooltip='A one-time audit of your current website with actionable recommendations.'>Basic Website Audit</li>
                                <li className='tooltip' data-tooltip='Pre-designed website templates.'>Access to Starter Templates</li>
                                <li className='tooltip' data-tooltip='Limited support with a 48-hour response time for basic queries.'>Email Support</li>
                                <li className='tooltip' data-tooltip='10% off custom web development projects.'>Discounts on Services</li>
                                <li>1-2 free consultations or introductory sessions per year.</li>
                            </ul>
                            <p>Perfect for start ups and small projects--get the essentials to build your online presence.</p>
                            {/* <span><button>Subscribe Now</button></span> */}
                        </div>
                        <div className='subscription-card' data-aos='fade-up'>
                            <h2 id='gold'>Gold</h2>
                            <h3>$60<span>/month</span></h3>
                            {/* <button>Free Trial</button> */}
                            <ul>
                                <li className='tooltip' data-tooltip='A one-time audit of your current website with actionable recommendations.'>Everything in the Silver tier</li>
                                <li className='tooltip' data-tooltip='Basic updates and maintenance of your website.'>Monthly Maintenance</li>
                                <li className='tooltip' data-tooltip='Live chat or 24-hour email response for urgent issues.'>Priority Support</li>
                                <li className='tooltip' data-tooltip='Monthly 30-minute strategy call to discuss website improvements.'>1:1 Consultation</li>
                                <li className='tooltip' data-tooltip='Premium plugins, themes, or development frameworks.'>Access to Advanced Tools</li>
                            </ul>
                            <p>Take your website to the next level with custom development and expert support.</p>
                            {/* <span><button>Subscribe Now</button></span> */}
                        </div>
                        <div className='subscription-card' data-aos='fade-up'>
                            <h2 id='platinum'>Platinum</h2>
                            <h3>$100<span>/month</span></h3>
                            {/* <button>Free Trial</button> */}
                            <ul>
                                <li className='tooltip' data-tooltip='A one-time audit of your current website with actionable recommendations.'>Everything in the Gold tier</li>
                                <li className='tooltip' data-tooltip='Unlimited pages with advanced functionality.(e.g. e-commerce, custom APIs'>Full Custom Website Development</li>
                                <li className='tooltip' data-tooltip='Weekly updates and backups of your site.'>Ongoing Maintenance & Support</li>
                                <li className='tooltip' data-tooltip='A single point of contact for all your website needs.'>Dedicated Account Manager</li>
                                <li className='tooltip' data-tooltip='60-minute strategy call to discuss website improvements.'>Monthly Strategy Calls</li>
                                <li className='tooltip' data-tooltip='Flexibility to make changes as their business evolves.'>Unlimited Revisions</li>
                            </ul>
                            <p>The ultimate package for businesses that demand top-tier web development and ongoing support.</p>
                            {/* <span><button>Subscribe Now</button></span> */}
                        </div>
                    </div>
                    <p>Decided on which one you want? Please contact me via email @ <a href='mailto:davidvillarr3al@gmail.com'>davidvillarr3al@gmail.com</a></p>
                    <p className='note'>*Initial fee of $150 to start. Each subscription will be billed a month after the initial fee.
                    For more information on each subscription, please contact me.*</p>
                </section>
                {/* <section className='fun-facts'>
                    <h2>Fun facts about myself</h2>
                </section> */}

        </div>
    )
}