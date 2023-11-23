import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact';
import Login from './routes/Login'
import Register from './routes/Register'
import Products from './routes/Products'

import './styles/index.css';
import './styles/App.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <h1>Error</h1>
    },

    {
        path: "/about",
        element: <About />,
        errorElement: <h1>Error</h1>
    },

    {
        path: "/contact",
        element: <Contact />,
        errorElement: <h1>Error</h1>
    },

    {
        path: "/login",
        element: <Login />,
        errorElement: <h1>Error</h1>
    },

    {
        path: "/register",
        element: <Register />,
        errorElement: <h1>Error</h1>
    },

    {
        path: "/products",
        element: <Products />,
        errorElement: <h1>Error</h1>
    }

])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
