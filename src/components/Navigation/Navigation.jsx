import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <div className='header'>
            <h1>David Villarreal</h1>       
            <nav className = "navbar">
                <ul className = "nav nav-tabs">    
                    <li className = "nav-item">
                        {/* <i class="fa-solid fa-user"></i> */}
                        <Link
                            to="/"
                            className={currentPage === "/" ? "nav-link active" : "nav-link"}
                            >
                            About
                        </Link>
                    </li>   
                    <li className = "nav-item">
                        <Link
                            to="/Portfolio"
                            className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}
                        >
                        Portfolio
                        </Link>
                    </li>   
                    <li className = "nav-item">
                        <Link
                            to="/Contact"
                            className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
                        >
                        Contact
                        </Link>
                    </li>   
                    <li className = "nav-item">
                        <Link
                            to="/Resume"
                            className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
                        >
                        Resume
                        </Link>
                    </li>   
                </ul>
            </nav>
        </div>
    );
}

export default NavTabs; 