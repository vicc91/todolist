import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Utils 
import { auth } from '../utils/firebase';

const MainMenu = ({ activeMenu, toggleMenu }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUser(user);
        });
    }, [user]);

    return (
        <div className={`MainMenu ${activeMenu ? 'MainMenu-open' : ''}`}>
            <div className="MainMenu-content">
                <nav className="MainMenu-navigation">
                    <ul>
                        <li>
                            <Link 
                                className="MainMenu-link"
                                to="/tasks"
                                onClick={toggleMenu}
                            >
                                <i className="fas fa-tasks"></i>    
                                Tareas
                            </Link>
                        </li>
                        <li>
                            {user ? 
                                <Link 
                                    className="MainMenu-link"
                                    to="/profile"
                                    onClick={toggleMenu}
                                >
                                    <i className="fas fa-user-alt" />
                                    Mi cuenta
                                </Link> :
                            <Link 
                                className="MainMenu-link"
                                to="/login"
                                onClick={toggleMenu}
                            >
                                <i className="fas fa-sign-in-alt" />
                                Iniciar sesión
                            </Link>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MainMenu;