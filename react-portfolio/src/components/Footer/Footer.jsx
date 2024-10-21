const styles = {
    card: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-evenly',   
        paddingTop: '10px',
        paddingBottom: '50px',
        backgroundColor: 'rgba(253 198 163)',
    },
    link: {
        borderRadius: '50px',
        padding: '10px',
        // background: '#DCAFBB',
        fontSize: '20px',
        color: '#000000',
        backgroundColor: 'rgba(253 198 163)',
    },
    email: {
      textDecoration: 'bold'  
    }
}

function Footer() {
    return (
        <footer style={styles.card}>
                <p style={styles.email}>

                    <p style={styles.link} >davidVillarr3al@gmail.com</p>   
                </p>  

               <a href="https://github.com/davidVillarreal03">
                    <p style={styles.link}>GitHub: davidVillarreal03</p>
               </a> 
               <a href="https://stackoverflow.com/users/27916696/david-villarreal">
                    <p style={styles.link}>Stack Overflow: david-villarreal</p>
               </a> 
        
        </footer>

    );
}

export default Footer;