import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Login from './routes/Login'
import Register from './routes/Register'
import Footer from './components/Footer.jsx'
import './styles/App.css'
import Products from './routes/Products'


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

    {
        path: '/products',
        element: <Products/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

