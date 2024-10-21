import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
const styles = {
    header: {
        background: 'rgba(253 198 163)',
    },
    home: {
        font: 'Inter',
        borderRadius: '50px',
        padding: '20px',
        fontSize: '30px',
        color: '#EEEFEF',
        backgroundColor: '#000000',
    },
    navlink:{
        fontSize: '25px',
        color: '#000000',
        backgroundColor: 'rgba(253 198 163)',
    }
}

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <div className = "container" style = {styles.header}>
            <ul className = "nav nav-tabs"> 
                <li className = "nav-item" id = "david">
                    <Link style = {styles.home}
                        to="/"
                        className={currentPage === "/" ? "nav-link active" : "nav-link"}
                    >
                    David Villarreal
                </Link>
            </li>   
                <li className = "nav-item" style = {styles.navlink}>
                    <Link
                        to="/About"
                        className={currentPage === "/About" ? "nav-link active" : "nav-link"}
                    >
                    About Me
                    </Link>
                </li>   
                <li className = "nav-item" style = {styles.navlink}>
                    <Link
                        to="/Portfolio"
                        className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}
                    >
                    Portfolio
                    </Link>
                </li>   
                <li className = "nav-item" style = {styles.navlink}>
                    <Link
                        to="/Contact"
                        className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
                    >
                    Contact
                    </Link>
                </li>   
                <li className = "nav-item" style = {styles.navlink}>
                    <Link
                        to="/Resume"
                        className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
                    >
                    Resume
                    </Link>
                </li>   
            </ul>
        </div>
    );
}

export default NavTabs; 