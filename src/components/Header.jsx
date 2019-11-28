import React from 'react';

const Header = ({ toggleMenu, activeMenu }) => (
    <header className="Header">
        <div className="Header-content">
            <div className="Header-menu">
                <button
                    className={`hamburger hamburger--spring ${activeMenu ? 'is-active' : ''}`}
                    type="button" 
                    onClick={toggleMenu}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div className="Header-logo">
                <i className="fas fa-pen-alt"></i>
                <h1>TODOLIST</h1>
            </div>
        </div>
    </header>
);

export default Header;