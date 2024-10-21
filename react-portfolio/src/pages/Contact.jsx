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

    h21: {
        position: 'absolute',
        top: '100px',
        fontSize: '20px',
        left: '50px',
    },
    h22: {
        position: 'absolute',
        top: '170px',
        fontSize: '20px',
        left: '50px',
    },
    h23: {
        position: 'absolute',
        top: '240px',
        fontSize: '20px',
        left: '50px',
    },
    p:{
        position: 'absolute',
        color: '#000000',
        top: '100px',
        fontSize: '25px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        left: '400px',
    }

}
export default function Contact() {
    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>Contact</h1>
            <form>
                <input type="text" placeholder="Name" style={{margin: '10px', padding: '10px', borderRadius: '5px', position:'absolute', top: '120px', left: '40px'}}/>
                <input type="text" placeholder="Email address" style={{margin: '10px', padding: '10px', borderRadius: '5px', position:'absolute', top: '190px', left: '40px'}}/>
                <input type="text" placeholder="Message" style={{margin: '10px', padding: '10px', borderRadius: '5px', position:'absolute', top: '260px', left: '40px'}}/>
                <input type="submit" value="Submit" style={{margin: '10px', padding: '10px', borderRadius: '5px', position:'absolute', top: '330px', left: '40px', backgroundColor: '#AF795D', color: '#EEEFEF'}}/>
            </form>
            <h2 style={styles.h21}>
                Name:    
            </h2>
            <h2 style={styles.h22}>
                Email address:
            </h2>
            <h2 style={styles.h23}>
                Message:
            </h2>
            <div style={styles.p}>

            <p>If you need to get a hold of me or if you would like to get into contact, you can call me at (210) 274-2785</p>
            <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
            </div>
        </div>
    )
}