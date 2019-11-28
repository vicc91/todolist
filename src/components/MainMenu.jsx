import React from 'react';
import { Link } from 'react-router-dom';

// Components
import CategoriesList from './CategoriesList';
import CreateCategory from './CreateCategory';

const MainMenu = ({
    categories,
    addCategory,
    selectCategory,
    activeMenu,
}) => (
    <div className={`MainMenu ${activeMenu ? '' : 'MainMenu--close'}`}>
        <div className="MainMenu-content">
            <nav className="MainMenu-navigation">
                <ul>
                    <li>
                        <Link 
                            className="MainMenu-link"
                            to="/login">
                            <i className="fas fa-sign-in-alt"></i>
                            Iniciar sesión
                        </Link>
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

export default MainMenu;