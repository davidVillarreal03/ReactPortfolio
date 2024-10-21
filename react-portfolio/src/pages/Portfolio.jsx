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
    project1:{
        position: 'absolute',
        top: '100px',
        fontSize: '20px',
        left: '50px',
        backgroundColor: '#AF795D',
        color: '#EEEFEF',
        padding: '10px',
        borderRadius: '20px',
    },
    project2:{
        position: 'absolute',
        top: '100px',
        fontSize: '20px',
        left: '500px',
        backgroundColor: '#AF795D',
        color: '#EEEFEF',
        padding: '10px',
        borderRadius: '20px',
    },
    project3:{
        position: 'absolute',
        top: '100px',
        fontSize: '20px',
        left: '1000px',
        backgroundColor: '#AF795D',
        color: '#EEEFEF',
        padding: '10px',
        borderRadius: '20px',
    },
    project4:{
        position: 'absolute',
        top: '200px',
        fontSize: '20px',
        left: '50px',
        backgroundColor: '#AF795D',
        color: '#EEEFEF',
        padding: '10px',
        borderRadius: '20px',
    },
    project5:{
        position: 'absolute',
        top: '200px',
        fontSize: '20px',
        left: '500px',
        backgroundColor: '#AF795D',
        color: '#EEEFEF',
        padding: '10px',
        borderRadius: '20px',
    },
    project6:{
        position: 'absolute',
        top: '200px',
        fontSize: '20px',
        left: '1000px',
        backgroundColor: '#AF795D',
        color: '#EEEFEF',
        padding: '10px',
        borderRadius: '20px',
    },
}

export default function Portfolio() {
    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>Portfolio</h1>
            <a href="https://github.com/davidVillarreal03/Employee-Tracker">

            <p style={styles.project1}>Employee Tracker</p>

            </a>

            <a href="https://github.com/davidVillarreal03/E-commerce-Back-End">

            <p style={styles.project2}>E-commerce Back-end</p>

            </a>

            <a href="https://github.com/davidVillarreal03/Personal-Blog">

            <p style={styles.project3}>Personal-Blog</p>

            </a>

            <a href="https://github.com/demichele-c/ItinerAi">

            <p style={styles.project4}>ItinerAi</p>

            </a>

            <a href="https://github.com/davidVillarreal03/NoteTaker-Express">

            <p style={styles.project5}>Note Taker</p>

            </a>

            <a href="https://github.com/davidVillarreal03/Weather-DashBoard">

            <p style={styles.project6}>Weather Dashboard</p>

            </a>

        </div>
    )
}