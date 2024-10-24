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
    listOne: {
      position: 'absolute', 
      top: '100px',
      left: '50px', 
    },
    listTwo: {
      position: 'absolute', 
      top: '100px',
      left: '600px', 
    },
    ul1: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontsize: '20px', 
        color: '#000000',
        fontSize: '30px',
        padding: '50px',
        // backgroundColor: '#AF795D',
    }
}

export default function Resume() {
    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>Resume</h1>
            <div style={styles.listOne}>
            <h3 style={{fontSize: '30px'}}>Front-end Proficiencies</h3>
            <ul style={styles.ul1}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive design</li>
                <li>Bootstrap</li>
                <li>GitHub</li>
                <li>React</li>
            </ul>
            </div>

            <div style={styles.listTwo}>
            <h3 style={{fontSize: '30px'}}>Back-end Proficiencies</h3>
            <ul style={styles.ul1}>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
                <li>APIs</li>
            </ul>
            </div>

        </div>
    )
}