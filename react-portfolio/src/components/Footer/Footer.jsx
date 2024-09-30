const styles = {
    card: {
        display: 'flex',
        justifyContent: 'space-evenly',
        background: 'blue',   
    },
    item: {
        fontSize: '20',
        textColor: 'green'
    }
}

function Footer() {
    return (
        <footer style={styles.card}>
                <p style={styles.item}>David Villarreal</p>
                <p style={styles.item}>davidVillarreal03</p>
        </footer>
    );
}

export default Footer;