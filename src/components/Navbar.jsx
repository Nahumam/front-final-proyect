import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import '../styles/navbar.css';
import { FaAngleDown } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import NavBarLoggedIn from './NavBarLoggedIn';
import LoggedOut from './NavbarLoggedOut';
import { getUserLoggedIn } from '../api/apis';



function Navbar() {

    // Dropdown

    const [showDropdown, setShowDropdown] = useState({
        inicio: false,
        acercaDe: false,
        contacto: false,
        mueblesHogar: false,
        salaEstar: false
    });

    const toggleDropdown = (button) => {
        setShowDropdown({
            inicio: button === 'inicio' ? !showDropdown.inicio : false,
            acercaDe: button === 'acercaDe' ? !showDropdown.acercaDe : false,
            contacto: button === 'contacto' ? !showDropdown.contacto : false,
            mueblesHogar: button === 'mueblesHogar' ? !showDropdown.mueblesHogar : false,
            salaEstar: button === 'salaEstar' ? !showDropdown.salaEstar : false,
        });
    };

    // Logica para el responsive design

    const [isActive, setIsActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [showButtons, setShowButtons] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
        setShowButtons(!showButtons);
        setIsActive(!isActive);

        const rightContainer = document.querySelector('.right-container-navbar');
        rightContainer.classList.toggle('active');
    };

    // Inicio o cierre de sesion

    const[isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Verifica si el usuario está autenticado al cargar el componente
        const checkLoggedInStatus = async () => {
            try {
                const response = await getUserLoggedIn();
                if (response.data) {
                    setIsLoggedIn(true);
                }
            } catch (error) {
                setIsLoggedIn(false);
            }
        };

        checkLoggedInStatus();
    }, []);



    return (
        <>
            <section className="navbar-container">
                <div className="icon">
                    <Link to={"/"}>
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className={`right-container-navbar ${showButtons ? "active" : ""}`}>
                    <ul className="navbar-list">
                        <li>
                            <div
                                onClick={() => toggleDropdown('inicio')}
                            >
                                <NavLink
                                    className={`bttn-first ${showDropdown.inicio ? 'active' : ''}`}
                                >
                                    Inicio <FaAngleDown />
                                </NavLink>
                                {showDropdown.inicio && (
                                    <ul className="dropdown">
                                        <li className="bttn-open">
                                            <Link to={'/'}>Regresar al Inicio</Link>
                                        </li>
                                        <li className="bttn-open">
                                            <Link to={'/premium'}>Nuestra colección premium</Link>
                                        </li>
                                        <li className="bttn-open">
                                            <Link to={'/ofertas'}>Ofertas</Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </li>

                        <li>
                            <div
                                onClick={() => toggleDropdown('mueblesHogar')}
                            >
                                <NavLink
                                    className={`bttn ${showDropdown.mueblesHogar ? 'active' : ''}`}
                                >
                                    Muebles Para El Hogar <FaAngleDown />
                                </NavLink>
                                {showDropdown.mueblesHogar && (
                                    <ul className="dropdown">
                                        <li className="bttn-open">
                                            <Link to={''}>Camas</Link>
                                        </li>
                                        <li className="bttn-open">
                                            <Link to={''}>Placards</Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </li>

                        <li>
                            <div
                                onClick={() => toggleDropdown('salaEstar')}
                            >
                                <NavLink
                                    className={`bttn ${showDropdown.salaEstar ? 'active' : ''}`}
                                >
                                    Sala De Estar <FaAngleDown />
                                </NavLink>
                                {showDropdown.salaEstar && (
                                    <ul className="dropdown">
                                        <li className="bttn-open">
                                            <Link to={''}>Sofas</Link>
                                        </li>
                                        <li className="bttn-open">
                                            <Link to={''}>Sillones</Link>
                                        </li>
                                        <li className="bttn-open">
                                            <Link to={''}>Sillas</Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </li>


                        <li>
                            <div
                                onClick={() => toggleDropdown('acercaDe')}
                            >
                                <NavLink
                                    className={`bttn ${showDropdown.acercaDe ? 'active' : ''}`}
                                >
                                    Acerca de <FaAngleDown />
                                </NavLink>
                                {showDropdown.acercaDe && (
                                    <ul className="dropdown">
                                        <li className="bttn-open">
                                            <Link to={'/about'}>Más acerca de nosotros</Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </li>
                        <li>
                            <div
                                onClick={() => toggleDropdown('contacto')}
                            >
                                <NavLink
                                    className={`bttn ${showDropdown.contacto ? 'active' : ''}`}
                                >
                                    Contacto <FaAngleDown />
                                </NavLink>
                                {showDropdown.contacto && (
                                    <ul className="dropdown">
                                        <li className="bttn-open">
                                            <Link to={'/contact'}>Contactanos!</Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </li>
                    </ul>
                    <div className="logged-">
                        {isLoggedIn ? (
                            <NavBarLoggedIn />
                        ) : (
                            <LoggedOut />
                        )}
                    </div>
                </div>

                <div
                    className={`menu-hamburger ${menuActive ? "active" : ""}`}
                    onClick={toggleMenu}
                >
                    <FiAlignJustify />
                </div>

            </section>
        </>
    );
}


function FirstNavItem({ title: firstTitle, dropdownItems: firstDropdown, dropdownLinks: firstDropdownLinks }) {
    const [showFirstDropdown, setShowFirstDropdown] = useState(false);

    const toggleFirstDropdown = () => {
        setShowFirstDropdown(!showFirstDropdown);
    };

    const toggleLeaveFirstDropdown = () => {
        setShowFirstDropdown(false)
    }

    return (
        <li>
            <button onClick={toggleFirstDropdown} onMouseLeave={toggleLeaveFirstDropdown} className='first-bttn'>
                <div>
                    {firstTitle}
                    {showFirstDropdown && (
                        <ul className="dropdown">
                            {firstDropdown.map((item, index) => (
                                <li key={index} className='first-bttn-open'><a href={firstDropdownLinks[index]}>{item}</a></li>
                            ))}
                        </ul>
                    )}</div>

                <FiChevronDown className='first-arrow-down' />
            </button>
        </li>
    );
}


function NavItem({ title, dropdownItems, dropdownLinks }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleLeaveDropdown = () => {
        setShowDropdown(false)
    }

    return (
        <li>
            <button onClick={toggleDropdown} onMouseLeave={toggleLeaveDropdown} className='bttn'>
                <div>
                    {title}
                    {showDropdown && (
                        <ul className="dropdown">
                            {dropdownItems.map((item, index) => (
                                <li key={index} className='bttn-open'><a href={dropdownLinks[index]}>{item}</a></li>
                            ))}
                        </ul>
                    )}</div>

                <FiChevronDown className='arrow-down' />
            </button>
        </li>
    );
}
export default Navbar
