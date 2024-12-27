import note from './Images/note.jpg';
import challenge from './Images/challenge-4.jpg';
import weather from './Images/weather.jpg';
import ItinerAi from './Images/itinerai.jpg';



export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>

{/* Use this as reference for the other project templates. */}
            <a href="https://github.com/davidVillarreal03/Employee-Tracker">
            
            <div>
                <div>
                <img src="https://www.scnsoft.com/blog-pictures/software-development-outsourcing/employee-monitoring-software.png" alt="Image of an employee with a laptop and a magnifying glass"/>
                </div>
            </div>

            <div>
                <p>Employee Tracker</p>
            </div>

            </a>
{/* Use this as reference for the other project templates. */}

            <a href="https://github.com/davidVillarreal03/E-commerce-Back-End">
            
            <div>
                
                <div>
                <img src="https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg"/>
                </div>
            
            </div>

            <div>
                <p>E-commerce</p>
            </div>

            </a>
{/* break */}
            <a href="https://github.com/davidVillarreal03/Personal-Blog">

            <div>
                <div>
                    <img src={challenge} />
                </div>
            </div>

            <div>
                <p>Personal-Blog</p>
            </div>

            </a>
{/* break? */}
            <a href="https://github.com/demichele-c/ItinerAi">
            
            <div>
                <div>
                    <img src={ItinerAi}/>
                </div>
            </div>

            <div>
                <p>ItinerAi</p>
            </div>

            </a>
{/* break */}
            <a href="https://github.com/davidVillarreal03/NoteTaker-Express">

            <div>
                <div>
                    <img src={note}/>
                </div>
            </div>

            <div>
                <p>Note Taker</p>
            </div>

            </a>
{/* break */}

            <a href="https://github.com/davidVillarreal03/Weather-DashBoard">

            <div>
                <div>
                    <img src={weather}/>
                </div>
            </div>

            <div>
                <p>Weather Dashboard</p>
            </div>

            </a>
{/* break */}
        </div>
    )
}