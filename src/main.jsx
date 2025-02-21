import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
// import Contact from './pages/Contact/Contact';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, 
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            }, 
            {
                // index: true,
                path: '/About',
                element: <AboutMe />
            },
            {
                path: '/Portfolio',
                element: <Portfolio />
            },
            // {
            //     path: '/Contact',
            //     element: <Contact />
            // },
            {
                path: '/Resume',
                element: <Resume />
            },
        ]
    }
])




ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
