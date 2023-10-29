import React from 'react';
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
=======
import { CreateBrowserRouter, RouterProvider } from 'react-router-dom';
>>>>>>> 6457e4766c2ae7334a8a41231b558e5d434203c9
import Navbar from './components/Navbar';
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact';
import Login from './routes/Login'
import Register from './routes/Register'
<<<<<<< HEAD
import Footer from './components/Footer'
=======
import Footer from './components/Footer.jsx'
>>>>>>> 6457e4766c2ae7334a8a41231b558e5d434203c9
import './styles/App.css'



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },

    {
      path: "/about",
      element: <About />
    },

    {
      path: "/contact",
      element: <Contact />
    },

    {
      path: "/login",
      element: <Login />
    },

    {
      path: "/register",
      element: <Register />
    },

  ])

  return (
    <>
      <div className="navbar-in">
        <Navbar />
      </div>
      <RouterProvider router={router} />
      <div className="footer-in">
        <Footer />
      </div>
    </>
  );
}

export default App;
