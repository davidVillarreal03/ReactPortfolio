import { useState } from 'react';
import NavTabs from './Navigation';
import Home from '../../pages/Home'
import Portfolio from '../../pages/Portfolio'
import Contact from '../../pages/Contact'
import Resume from '../../pages/Resume'
import About from '../../pages/AboutMe'


export default function PortfolioContainer() {
    const [currentPage, handlePageChange] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }   
        if (currentPage === 'Contact') {    
            return <Contact />;
        }   
        if (currentPage === 'Resume') {    
            return <Resume />;        
        }   
        if (currentPage === 'About') {    
            return <About />;
        }   
    }

    return (
        <div>

            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>{renderPage()}</main>

        </div>
    );
}