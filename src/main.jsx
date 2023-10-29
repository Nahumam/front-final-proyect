import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
<<<<<<< HEAD
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact';
import Login from './routes/Login'
import Register from './routes/Register'
import Products from './routes/Products'
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
=======
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
>>>>>>> 6457e4766c2ae7334a8a41231b558e5d434203c9
    </React.StrictMode>
);

