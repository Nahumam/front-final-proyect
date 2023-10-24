import React from 'react';
import { BrowserRouter as Router, Route, Routes, CreateBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Login from './routes/Login'
import Register from '/routes/Register'
import './styles/App.css'

const router = CreateBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },

  {
    path: "/about",
    element: <About/>
  },

  {
    path: "/contact",
    element: <Contact/>
  },

  {
    path: "/login",
    element: <Login/>
  },

  {
    path: "/register",
    element: <Register/>
  },

])

function App() {
  return (
    <>
        <div className="navbar-in">
          <Navbar />
        </div>
<RouterProvider/> 
    </>
  );
}

export default App;
