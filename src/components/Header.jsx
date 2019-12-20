import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import MainMenu from './MainMenu';

const Header = () => {
    const [innerWidth, setInnerWith] = useState(window.innerWidth);
    const [activeMenu, setActiveMenu] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setInnerWith(window.innerWidth);
        });
    });

    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
    }

    return (
        <header className="Header">
            <div className="Header-content">
                <div className="Header-info">
                    <button
                        className={`
                            hamburger
                            hamburger--spring
                            ${innerWidth > 768 ? 'display-none' : ''}
                            ${activeMenu ? 'is-active' : ''}
                        `}
                        type="button" 
                        onClick={toggleMenu}
                    >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <Link
                        className="Header-link"
                        to="/"
                    >  
                        <i className="fas fa-pen-alt"></i>
                        <h1>TODOLIST</h1>
                    </Link>
                </div>
                <div className="Header-nav">
                    <MainMenu activeMenu={activeMenu} toggleMenu={toggleMenu} />
                </div>
            </div>
        </header>
    );
}

export default Header;