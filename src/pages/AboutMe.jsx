import me from './Images/david.jpg';

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
    p: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontsize: '20px', 
        color: '#000000',
        fontSize: '30px',
        padding: '50px',
        // backgroundColor: '#AF795D',
    },

    me: {
        position: 'absolute',
        top: '60px',
        left: '10px'
    }, 
    description: {
        position: 'absolute',
        top: '90px',
        left: '400px'
    }
}


export default function AboutMe () {
    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>About Me</h1>
            {/* <img src="../assets/Images/david.png" alt='Image of developer for the portfolio'/>  */}
            <div style={styles.p}> 
            <img style={styles.me}src={me}/>
            <div style={styles.description}>

            <p>Hello my name is David Villarreal and I am a Full Stack Web Developer and I love to build websites.</p>
            <p>I am currently enrolled in the UTSA Full Stack Web Development Bootcamp and I am excited to learn more as I go out in to the field of coding.</p>
            <p>Coding has been something that interested me since my earlier years in college and decided to pursue it as a career. Once the bootcamp is finished I plan to move on to a full time job. </p>
            <p>Thank you for stopping by and please take a look into my portfolio via the navigation bar at the top.</p>
            <p>Below will contain ways to contact me or to learn more about me.</p>
            </div>

            </div>

        </div>
    )
}