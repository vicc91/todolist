import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import CategoriesList from './CategoriesList';
import CreateCategory from './CreateCategory';

// Utils 
import { auth } from '../utils/firebase';

const MainMenu = ({
    categories,
    addCategory,
    selectCategory,
    activeMenu,
}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUser(user);
        });
    }, [user]);

    return (
        <div className={`MainMenu ${activeMenu ? '' : 'MainMenu--close'}`}>
            <div className="MainMenu-content">
                <nav className="MainMenu-navigation">
                    <ul>
                        <li>
                            {user ? 
                                <Link 
                                    className="MainMenu-link"
                                    to="/profile"
                                >
                                    <i className="fas fa-user-alt" />
                                    Mi cuenta
                                </Link> :
                            <Link 
                                className="MainMenu-link"
                                to="/login">
                                <i className="fas fa-sign-in-alt" />
                                Iniciar sesión
                            </Link>}
                        </li>
                        <li>
                            <Link 
                                className="MainMenu-link"
                                to="/tasks">
                                <i className="fas fa-tasks"></i>    
                                Tareas
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="MainMenu-categories">
                    <h2>Categorias</h2>
                    <CreateCategory addCategory={addCategory} />
                    <CategoriesList categories={categories} selectCategory={selectCategory} />
                </div>
            </div>
        </div>
    );
}

export default MainMenu;