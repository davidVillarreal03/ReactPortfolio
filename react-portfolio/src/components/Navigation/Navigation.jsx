import { Link, useLocation } from 'react-router-dom';

const styles = {
    card: {
        display: 'flex',
        background: 'blue',
    },
    navitem: {
        justifyContent: 'space-evenly',
        fontSize: '20',
        textColor: 'green',
        listStyle: 'none'

    }
}

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul className = "nav nav-tabs" style = {styles.card}> 
            <li className = "nav-item" style = {styles.navitem}>
                <Link
                    to="/"
                    className={currentPage === "/" ? "nav-link active" : "nav-link"}
                >
                Home
            </Link>
        </li>   
            <li className = "nav-item" style = {styles.navitem}>
                <Link
                    to="/About"
                    className={currentPage === "/About" ? "nav-link active" : "nav-link"}
                >
                About Me
                </Link>
            </li>   
            <li className = "nav-item"  style = {styles.navitem}>
                <Link
                    to="/Portfolio"
                    className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}
                >
                Portfolio
                </Link>
            </li>   
            <li className = "nav-item" style = {styles.navitem}>
                <Link
                    to="/Contact"
                    className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
                >
                Contact
                </Link>
            </li>   
            <li className = "nav-item" style = {styles.navitem}>
                <Link
                    to="/Resume"
                    className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
                >
                Resume
                </Link>
            </li>   
        </ul>
    );
}

export default NavTabs; 