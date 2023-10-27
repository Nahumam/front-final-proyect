import React from 'react';
import { CreateBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Login from './routes/Login'
import Register from './routes/Register'
import Footer from './components/Footer.jsx'
import './styles/App.css'



function App() {
  return (
    <>
      <div className="navbar-in">
        <Navbar />
      </div>
      <RouterProvider />
      <div className="footer-in">
        <Footer />
      </div>
    </>
  );
}

export default App;
