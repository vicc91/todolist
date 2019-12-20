import React, { useState, useEffect } from 'react';
// Components
import TasksList from '../components/TasksList';
import CreateTask from '../components/CreateTask';
import CreateCategory from '../components/CreateCategory';
import CategoriesList from '../components/CategoriesList';
// Utils 
import { auth } from '../utils/firebase';
import LoginComponent from '../components/LoginComponent';

const Tasks = () => {
    const [user, setUser] = useState(null);

        useEffect(() => {
            auth().onAuthStateChanged(user => {
                setUser(user);
            });
        }, [user]);

    const [state, setState] = useState({
        selectedCategoryIndex: null,
        categories: []
    });
    
    const addCategory = ((categoryName) => {    
        const newCategory = {
            name: categoryName,
            tasks: []
        }
    
        setState({
            selectedCategoryIndex: state.selectedCategoryIndex === null ? 0 : state.categories.length,
            categories: [...state.categories, newCategory]    
        });

    });
    
    const selectCategory = index => {
        setState({
            selectedCategoryIndex: index,
            categories: [...state.categories]
        });
    }
    
    const addTask = (taskName) => {
        const task = {
            text: taskName,
            done: false
        }
        
        const categories = state.categories;
        const currentCategory = categories[state.selectedCategoryIndex];
        currentCategory.tasks = [...currentCategory.tasks, task];
        categories[state.selectedCategoryIndex] = currentCategory;

        setState({
            categories,
            selectedCategoryIndex: state.selectedCategoryIndex
        });
    }
    
    const toggleDoneTask = (taskIndex) => {
        const categories = state.categories;
        const currentCategory = categories[state.selectedCategoryIndex];
        const currentTask = currentCategory.tasks[taskIndex];

        currentTask.done = !currentTask.done;
        categories[state.selectedCategoryIndex].tasks[taskIndex] = currentTask;
        
        setState({
            categories: categories,
            selectedCategoryIndex: state.selectedCategoryIndex
        });
    }

    const { categories, selectedCategoryIndex } = state;

    return (
        <div className="Tasks">
            <div className="Tasks-container">
                <div className="Tasks-content">
                    <div className="tasks-categories">
                        <h2>Categorias</h2>
                        <CreateCategory addCategory={addCategory} />
                        <CategoriesList categories={categories} selectCategory={selectCategory} />
                    </div>
                </div>
                {user ? 
                    selectedCategoryIndex !== null ?
                        <div className="Tasks-data">
                            <h2 className="Tasks-title">{categories[selectedCategoryIndex].name}</h2>
                            <CreateTask addTask={addTask} />
                            <TasksList tasks={categories[selectedCategoryIndex].tasks} toggleDoneTask={toggleDoneTask}/>
                        </div> :
                        <div className="Task-not-content">
                            <p>Crea una categoria</p>
                        </div>
                    : 
                    <div className="Tasks-not-login">
                        <p>Inicia sesión para crear tareas o ver las tareas ya creadas.</p>
                        <LoginComponent />
                    </div>
                }
            </div>
        </div>
    );
}

export default Tasks;