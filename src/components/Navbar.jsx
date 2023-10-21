import React, { useState } from 'react';
import '../styles/navbar.css'
import Logo from '../assets/logo.svg'
import { FiChevronDown } from "react-icons/fi";

function Navbar() {
    return (
        <>
            <section className='navbar-container'>
                <div className="icon">
                    <a href="/">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <div className="right-container-navbar">
                    <ul className='navbar-list'>
                        <div
                            className='first-button-navbar'>
                            <FirstNavItem title="Compre Ahora" dropdownItems={['Opción 1.1', 'Opción 1.2', 'Opción 1.3']} dropdownLinks={['https://wordwall.net/resource/36271235/english/first-conditional-what-will-happen-if', '/link2', '/link3']} />
                        </div>
                        <NavItem title="Muebles Para El Hogar" dropdownItems={['Opción 2.1', 'Opción 2.2', 'Opción 2.3']} dropdownLinks={['/link4', '/link5', '/link6']} />
                        <NavItem title="Sala De Estar" dropdownItems={['Opción 3.1', 'Opción 3.2', 'Opción 3.3']} dropdownLinks={['/link7', '/link8', '/link9']} />
                        <NavItem title="Sobre Nosotros" dropdownItems={['Opción 4.1', 'Opción 4.2', 'Opción 4.3']} dropdownLinks={['/link10', '/link11', '/link12']} />
                        <NavItem title="Contactanos" dropdownItems={['Opción 5.1', 'Opción 5.2', 'Opción 5.3']} dropdownLinks={['/link13', '/link14', '/link15']} />
                    </ul>
                    <ul className='login-register'>
                        <li className='login'><a href=""><button>Iniciar Sesión</button></a></li>
                        <li className='register'><a href=""><button>Registrarse</button></a></li>
                    </ul>
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
