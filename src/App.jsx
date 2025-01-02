
import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import SideBar from './components/SideNavBar/SideNavBar';

function App() {

  return (
    <>  
      <SideBar />
      {/* <Nav />  */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
