import React from 'react'
import { useState } from 'react';
import '../styles/navbar.css';


    function LoggedOut() {
        const [isActive, setIsActive] = useState(false);
        const [menuActive, setMenuActive] = useState(false);
        const [showButtons, setShowButtons] = useState(false);

        const toggleMenu = () => {
            setMenuActive(!menuActive);
            setShowButtons(!showButtons);
            setIsActive(!isActive);


            return (
                <>
                    <ul className={`login-register ${showButtons ? "active" : ""}`}>
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
    }





export default LoggedOut