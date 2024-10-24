import note from './Images/note.jpg';
import challenge from './Images/challenge-4.jpg';
import weather from './Images/weather.jpg';
import ItinerAi from './Images/itinerai.jpg';



const styles = {
    container: {
        position: 'fixed',
        right: 0,
        top: 150,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '14px solid #AF795D',
        padding: '100px',
        backgroundColor: 'rgba(253 198 163)',
        width: '100%',
        height: '75%',
        borderRadius: '5px',
        filter: 'drop-shadow(0 0 2em #AF795D)',

    },
    h1: {
        position: 'absolute',
        top: '0px',
        fontSize: '30px',
        left: '50px',
        backgroundColor: '#AF795D',
        color: '#EEEFEF',
        borderBottomRightRadius: '20px',
        borderBottomLeftRadius: '20px',
        padding: '10px',
    },
    projectImg: {
      position: 'absolute',
      border: '10px solid #AF795D',  
    },
    projectTag: {
        fontSize: '20px',
        backgroundColor: '#AF795D',
        color: '#EEEFEF',
        padding: '10px',
        width: '210px',
        height: '50px',
        borderTopRightRadius: '102px',
    }, 
    sizeImg: {
        width: '200px',
        height: '200px',
    },

    project1:{
        position: 'absolute',
        top: '270px',
        left: '50px',
    },
    project1img:{
        position: 'absolute',
        top: '100px',
        left: '50px',
    },

    project2:{
        position: 'absolute',
        top: '270px',
        left: '400px',
    },
    project2img:{
        position: 'absolute',
        top: '100px',
        left: '400px',
    },

    project3:{
        position: 'absolute',
        top: '270px',
        left: '750px',
    },
    project3img:{
        position: 'absolute',
        top: '100px',
        left: '750px',
    },

    project4:{
        position: 'absolute',
        top: '520px',
        left: '50px',
    },
    project4img:{
        position: 'absolute',
        top: '350px',
        left: '50px',
    },

    project5:{
        position: 'absolute',
        top: '520px',
        left: '400px',
    },
    project5img:{
        position: 'absolute',
        top: '350px',
        left: '400px',
    },
    
    project6:{
        position: 'absolute',
        top: '520px',
        left: '750px',
    },
    project6img:{
        position: 'absolute',
        top: '350px',
        left: '750px',
    },
}

export default function Portfolio() {
    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>Portfolio</h1>

{/* Use this as reference for the other project templates. */}
            <a href="https://github.com/davidVillarreal03/Employee-Tracker">
            
            <div style={styles.project1img}>
                <div style={styles.projectImg}>
                <img style={styles.sizeImg}src="https://www.scnsoft.com/blog-pictures/software-development-outsourcing/employee-monitoring-software.png" alt="Image of an employee with a laptop and a magnifying glass"/>
                </div>
            </div>

            <div style={styles.project1}>
                <p style={styles.projectTag}>Employee Tracker</p>
            </div>

            </a>
{/* Use this as reference for the other project templates. */}

            <a href="https://github.com/davidVillarreal03/E-commerce-Back-End">
            
            <div style={styles.project2img}>
                
                <div style={styles.projectImg}>
                <img style={styles.sizeImg} src="https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg"/>
                </div>
            
            </div>

            <div style={styles.project2}>
                <p style={styles.projectTag}>E-commerce</p>
            </div>

            </a>
{/* break */}
            <a href="https://github.com/davidVillarreal03/Personal-Blog">

            <div style={styles.project3img}>
                <div style={styles.projectImg}>
                    <img style={styles.sizeImg} src={challenge} />
                </div>
            </div>

            <div style={styles.project3}>
                <p style={styles.projectTag}>Personal-Blog</p>
            </div>

            </a>
{/* break? */}
            <a href="https://github.com/demichele-c/ItinerAi">
            
            <div style={styles.project4img}>
                <div style={styles.projectImg}>
                    <img style={styles.sizeImg} src={ItinerAi}/>
                </div>
            </div>

            <div style={styles.project4}>
                <p style={styles.projectTag}>ItinerAi</p>
            </div>

            </a>
{/* break */}
            <a href="https://github.com/davidVillarreal03/NoteTaker-Express">

            <div style={styles.project5img}>
                <div style={styles.projectImg}>
                    <img style={styles.sizeImg} src={note}/>
                </div>
            </div>

            <div style={styles.project5}>
                <p style={styles.projectTag}>Note Taker</p>
            </div>

            </a>
{/* break */}

            <a href="https://github.com/davidVillarreal03/Weather-DashBoard">

            <div style={styles.project6img}>
                <div style={styles.projectImg}>
                    <img style={styles.sizeImg} src={weather}/>
                </div>
            </div>

            <div style={styles.project6}>
                <p style={styles.projectTag}>Weather Dashboard</p>
            </div>

            </a>
{/* break */}
        </div>
    )
}