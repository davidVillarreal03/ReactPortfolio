
import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import SideBar from './components/SideNavBar/SideNavBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
// import ThemeSwitcher from './components/ThemeSwitcher'

function App() {

  return (
    <>  
      <ThemeProvider>
        {/* <ThemeSwitcher /> */}
      <ScrollToTop />
      <SideBar />
      {/* <Nav />  */}
      <Outlet />
      {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
