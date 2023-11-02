import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact';
import Login from './routes/Login'
import Register from './routes/Register'
import Footer from './components/Footer'
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