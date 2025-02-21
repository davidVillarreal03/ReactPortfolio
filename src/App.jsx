
import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import SideBar from './components/SideNavBar/SideNavBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {

  return (
    <>  
      <ScrollToTop />
      <SideBar />
      {/* <Nav />  */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
