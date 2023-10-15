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
                        <NavItem title="Compre Ahora" dropdownItems={['Opción 1.1', 'Opción 1.2', 'Opción 1.3']} className='first-button-navbar' />
                        <NavItem title="Muebles Para El Hogar" dropdownItems={['Opción 2.1', 'Opción 2.2', 'Opción 2.3']} />
                        <NavItem title="Sala De Estar" dropdownItems={['Opción 3.1', 'Opción 3.2', 'Opción 3.3']} />
                        <NavItem title="Sobre Nosotros" dropdownItems={['Opción 4.1', 'Opción 4.2', 'Opción 4.3']} />
                        <NavItem title="Contactanos" dropdownItems={['Opción 5.1', 'Opción 5.2', 'Opción 5.3']} />
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

function NavItem({ title, dropdownItems }) {
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
                            <li key={index} className='bttn-open'><a href="">{item}</a></li>
                        ))}
                    </ul>
                    )}</div>

                <FiChevronDown className='arrow-down' />
            </button>
        </li>
    );
}

export default Navbar;