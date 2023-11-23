import React from 'react'
import { useState } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';



function LoggedOut() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    return (
        <>
            <ul className={`login-register`}>
                <li className="login">
                    <Link to={'/login'}>
                        <button>Iniciar Sesión</button>
                    </Link>
                </li>
                <li className="register">
                    <Link to={'/register'}>
                        <button>Registrarse</button>
                    </Link>
                </li>
            </ul>
        </>
    )
}






export default LoggedOut


