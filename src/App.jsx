import React from 'react';
import { BrowserRouter as Router, Route, Routes, CreateBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import './styles/App.css'

const router = CreateBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },

  

])

function App() {
  return (
    <>
        <div className="navbar-in">
          <Navbar />
        </div>

    </>
  );
}

export default App;
