
import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
// import Header from './components/Header';

function App() {

  return (
    <>  
      <Nav /> 
      <main className = "mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
